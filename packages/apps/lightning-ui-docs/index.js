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

import lng from '@lightningjs/core';
import inspectInit from '@lightning-inspect';
import {
  withAnnouncer,
  Speech,
  pool,
  context
} from '@lightningjs/ui-components';
import {
  themeSelect,
  themeSelectFromMessageEvent
} from './.storybook/utils/registerEvents';

// create Lightning App
export const createApp = parameters => {
  // Make sure app is only created once if path=/story
  if (window.top.location.search.indexOf('path=/docs/') <= -1) {
    if (window.APP) return window.APP;
  }

  pool.clear();

  const announcerOptions = {
    language: 'en-US',
    ...parameters.announcerOptions
  };

  const appParams = {
    stage: {
      w: 1280,
      h: 720,
      precision: 2 / 3,
      canvas2d: false,
      useImageWorker: false,
      inspector: false,
      defaultFontFace: 'XfinityStandardMedium',
      fontSharp: {
        precision: 2 / 3,
        fontSize: 12
      }
    },
    debug: true
  };

  window.CONTEXT = context; // Used by addons

  window.APP = new (class LightningUIApp extends withAnnouncer(
    lng.Application,
    Speech,
    announcerOptions
  ) {
    _construct() {
      this.announcerTimeout = 15 * 1000;
    }

    _attach() {
      setTimeout(() => {
        if (parameters.theme) {
          themeSelect(parameters.theme).then(() => {
            window.addEventListener(
              'message',
              themeSelectFromMessageEvent,
              false
            );
          });
        } else {
          window.addEventListener(
            'message',
            themeSelectFromMessageEvent,
            false
          );
        }
      });
    }

    $storyChanged() {
      this.emit('storyChanged');
    }

    _getFocused() {
      return ((this.childList.first || {}).childList || {}).first || this;
    }
  })(appParams);
  document.body.appendChild(window.APP.stage.getCanvas());
  return window.APP;
};
inspectInit();
export const clearInspector = () => {
  // Clear any lightning inspector info
  if (document.querySelectorAll('[type=StoryApp]').length > 1) {
    const div = document.querySelector('[type=StoryApp]');
    div && div.parentNode.remove();
  }

  // Move lightning inspector out of the foreground
  if (window.top.location.search.indexOf('path=/docs/') > -1) {
    document.body.classList.remove('canvas');
    const div = document.querySelector('[type=StoryApp]');
    div && (div.parentNode.style.zIndex = -1);
  } else {
    document.body.classList.add('canvas');
  }
};
