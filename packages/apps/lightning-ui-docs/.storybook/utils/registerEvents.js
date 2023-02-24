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

import { context } from '@lightningjs/ui-components';

// creates an array of extensions
// added to the theme by setTheme in themeSelect
// const extensions = [];

export const themeSelectFromMessageEvent = event => {
  themeSelect(event.data.theme);
};

// called in ThemePicker
export const themeSelect = theme => {
  if (!theme) return;
  let targetTheme;
  switch (theme) {
    // Insert other themes to swap to here
    // Can also utilize the "extensions" array above to add to the theme
    default:
      targetTheme = {};
      break;
  }
  return context.setTheme(targetTheme);
};

// registers all window events needed on load
// called in preview.js file
export const registerEventListeners = () => {
  // logger and stores themes
  context.debug = true;
  context.on('themeUpdate', () => {
    window.parent.postMessage('themeSet', '*');
  });

  // Prevent scrolling when navigating with arrows on canvas
  window.addEventListener(
    'keydown',
    function (e) {
      if (
        ['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].indexOf(
          e.code
        ) > -1
      ) {
        e.preventDefault();
      }
    },
    false
  );
  context.storybookCustomTheme = JSON.parse(JSON.stringify(context.theme));
};
