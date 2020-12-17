import Speech from './Speech';
import { debounce } from 'debounce';
const fiveMinutes = 300 * 1000;
let currentlySpeaking;

function elmName(elm) {
  return elm.ref || elm.constructor.name;
}

/* istanbul ignore next */
export default (base, speak = Speech) =>
  class Announcer extends base {
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

    set announcerEnabled(val) {
      this._announcerEnabled = val;
      this._focusChange();
    }

    get announcerEnabled() {
      return this._announcerEnabled;
    }

    _focusChange() {
      if (!this._resetFocusTimer) {
        return;
      }

      this._resetFocusTimer();
      currentlySpeaking && currentlySpeaking.cancel();
      this._debounceAnnounceFocusChanges();
    }

    _announceFocusChanges() {
      let focusPath = this.application.focusPath || [];
      let lastFocusPath = this._lastFocusPath || [];
      let loaded = focusPath.every(elm => !elm.loading);
      let focusDiff = focusPath.filter(elm => !lastFocusPath.includes(elm));

      if (!loaded) {
        this._debounceAnnounceFocusChanges();
        return;
      }

      this._lastFocusPath = focusPath.slice(0);
      // Provide hook for focus diff for things like TextBanner
      this.focusDiffHook = focusDiff;

      if (!this.announcerEnabled) {
        return;
      }

      let toAnnounce = focusDiff.reduce((acc, elm) => {
        if (elm.announce) {
          acc.push([elmName(elm), 'Announce', elm.announce]);
        } else if (elm.title) {
          acc.push([elmName(elm), 'Title', elm.title || '']);
        } else {
          acc.push([elmName(elm), 'Label', elm.label || '']);
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
        let txt = a[2];
        txt && acc.push(txt);
        return acc;
      }, []);

      if (toAnnounce.length) {
        currentlySpeaking = speak(
          toAnnounce.reduce((acc, val) => acc.concat(val), [])
        );
      }
    }

    $announce(toAnnounce) {
      if (this.announcerEnabled) {
        currentlySpeaking = speak(toAnnounce);
      }
    }

    $announcerRefresh() {
      this._lastFocusPath = undefined;
      this._resetFocusTimer();
      this._focusChange();
    }
  };
