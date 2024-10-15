/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import Speech from './Speech';
import { translateAbbrev } from './abbreviations';
import { debounce } from '../../utils';
import TextMagnifier from '../../components/TextMagnifier/TextMagnifier';

export { generateAbbrevConfig, defaultAbbrevConfig } from './abbreviations';

const fiveMinutes = 300 * 1000;

function elmName(elm) {
  return elm.ref || elm.constructor.name;
}

const defaultOptions = {
  voiceOutDelay: 500,
  abbreviationsConfig: {}
};

export default function withAnnouncer(Base, speak = Speech, options = {}) {
  const announcerOptions = { ...defaultOptions, ...options };

  return class extends Base {
    _construct() {
      this._announceEndedTimeout;
      this._currentlySpeaking = '';
      super._construct && super._construct();
    }

    _voiceOut(toAnnounce) {
      if (this._voiceOutDisabled) {
        return;
      }
      let toSpeak = toAnnounce;
      if (announcerOptions.abbreviationsConfig.abbreviationsPattern) {
        toSpeak = Array.isArray(toAnnounce)
          ? toAnnounce.map(phrase =>
            translateAbbrev(phrase, announcerOptions.abbreviationsConfig)
          )
          : translateAbbrev(toAnnounce, announcerOptions.abbreviationsConfig);
      }
      const speech = speak(toSpeak, options.language);
      // event using speech synthesis api promise
      if (speech && speech.series) {
        speech.series.then(() => {
          this.stage.emit('announceEnded');
        });
      }

      // event in case speech synthesis api is flakey,
      // assume the ammount of time it takes to read each word
      const toAnnounceStr = Array.isArray(toSpeak)
        ? toSpeak.concat().join(' ')
        : toSpeak;
      const toAnnounceWords = toAnnounceStr.split(' ');
      const timeoutDelay =
        toAnnounceWords.length * announcerOptions.voiceOutDelay;
      clearTimeout(this._announceEndedTimeout);
      this._announceEndedTimeout = setTimeout(() => {
        this.stage.emit('announceTimeoutEnded');
      }, timeoutDelay);

      return speech;
    }

    _build() {
      super._build && super._build();

      this._debounceAnnounceFocusChanges = debounce(
        this._announceFocusChanges.bind(this),
        Number.isInteger(this.announcerFocusDebounce)
          ? this.announcerFocusDebounce
          : 400
      );

      this.announcerTimeout = Number.isInteger(this.announcerTimeout)
        ? this.announcerTimeout
        : fiveMinutes;

      this._resetFocusTimer = debounce(() => {
        // Reset focus path for full announce
        this._lastFocusPath = undefined;
      }, this.announcerTimeout);
    }

    _firstEnable() {
      super._firstEnable && super._firstEnable();

      // Lightning only calls Focus Change on second focus
      this._focusChange();
    }

    _disable() {
      clearTimeout(this._announceEndedTimeout);
      this.stage.emit('announceEnded');
      this.stage.emit('announceTimeoutEnded');
    }

    set announcerEnabled(val) {
      this._announcerEnabled = val;
      this._focusChange();
    }

    get announcerEnabled() {
      return this._announcerEnabled;
    }

    set textMagnifierEnabled(val) {
      this._textMagnifierEnabled = val;
      this._focusChange();
    }

    get textMagnifierEnabled() {
      return true
      return this._textMagnifierEnabled;
    }

    _focusChange() {
      if (!this._resetFocusTimer) {
        return;
      }

      this._resetFocusTimer();
      this.$announcerCancel();
      this._debounceAnnounceFocusChanges();
    }

    _announceFocusChanges() {
      const focusPath = this.application.focusPath || [];
      const lastFocusPath = this._lastFocusPath || [];
      const loaded = focusPath.every(elm => !elm.loading);
      const focusDiff = focusPath.filter(elm => !lastFocusPath.includes(elm));

      if (!loaded) {
        this._debounceAnnounceFocusChanges();
        return;
      }

      this._lastFocusPath = focusPath.slice(0);
      // Provide hook for focus diff for things like TextBanner
      this.focusDiffHook = focusDiff;
      if (this.textMagnifierEnabled) {
        const focusedElement = this.focusDiffHook[this.focusDiffHook.length - 1];

        // Check if focusedElement exists and has the properties you need.
        if (!focusedElement) return;

        const { title, description, announce, core } = focusedElement;
        const focusText = title || description || announce || '';  // Simplified focusText selection

        const { py: focusedY } = core.renderContext;
        const { h: screenHeight } = this.stage;

        const stickToTop = focusedY > screenHeight / 2;

        // Initialize patch only once to avoid re-creating it in conditionals.
        const patch = {
          TextMagnifier: {
            type: this.tag('TextMagnifier') ? undefined : TextMagnifier,  // Add type if TextMagnifier is not already tagged
            location: stickToTop ? 'top' : 'bottom',
            content: Array.isArray(focusText)
              ? focusText.filter(Boolean).join('. ').replace(/\.$/, "")
              : focusText.replace(/\.$/, "")
          }
        };

        this.patch(patch);
      }


      if (!this.announcerEnabled) {
        return;
      }

      let toAnnounce = focusDiff.reduce((acc, elm) => {
        if (elm.announce) {
          acc.push([elmName(elm), 'Announce', elm.announce]);
        } else if (elm.title) {
          acc.push([elmName(elm), 'Title', elm.title || '']);
        }
        return acc;
      }, []);

      focusDiff.reverse().reduce((acc, elm) => {
        if (elm.announceContext) {
          acc.push([elmName(elm), 'Context', elm.announceContext]);
        } else {
          acc.push([elmName(elm), 'No Context', '']);
        }
        return acc;
      }, toAnnounce);

      if (this.debug) {
        console.table(toAnnounce);
      }

      toAnnounce = toAnnounce.reduce((acc, a) => {
        const txt = a[2];
        txt && acc.push(txt);
        return acc;
      }, []);

      if (toAnnounce.length) {
        this.$announcerCancel();
        if (this.announcerEnabled) {
          this._currentlySpeaking = this._voiceOut(
            toAnnounce.reduce((acc, val) => acc.concat(val), [])
          );
        }
      }
    }

    $announce(toAnnounce, { append = false, notification = false } = {}) {
      if (!toAnnounce || !toAnnounce.trim().length) {
        return;
      }
      if (this.announcerEnabled) {
        this._debounceAnnounceFocusChanges.flush();
        if (
          append &&
          this._currentlySpeaking &&
          this._currentlySpeaking.active
        ) {
          this._currentlySpeaking.append(toAnnounce);
        } else {
          this.$announcerCancel();
          this._currentlySpeaking = this._voiceOut(toAnnounce);
        }

        if (notification) {
          this._voiceOutDisabled = true;
          this._currentlySpeaking.series.finally(() => {
            this._voiceOutDisabled = false;
            this.$announcerRefresh();
          });
        }
      }
    }

    $announcerCancel() {
      this._currentlySpeaking && this._currentlySpeaking.cancel();
    }

    $announcerRefresh(depth) {
      if (depth) {
        this._lastFocusPath = this._lastFocusPath.slice(0, depth);
      } else {
        this._lastFocusPath = undefined;
      }
      this._resetFocusTimer();
      this._focusChange();
    }
  };
}
