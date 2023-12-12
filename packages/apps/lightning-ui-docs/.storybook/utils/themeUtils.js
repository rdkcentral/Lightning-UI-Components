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

import baseTheme from '@lightningjs/ui-components-theme-base';
import { utils } from '@lightningjs/ui-components/src';
import debounce from 'debounce';

/**
 * @returns
 * used in Component Styles Panel
 */
export const globalApp = () =>
  document &&
  document.querySelector('iframe') &&
  document.querySelector('iframe').contentWindow &&
  document.querySelector('iframe').contentWindow.APP;

/**
 * @returns the context
 * used in Component Styles Panel and Theme Picker
 */
export const globalContext = () =>
  document &&
  document.querySelector('iframe') &&
  document.querySelector('iframe').contentWindow &&
  document.querySelector('iframe').contentWindow.CONTEXT;

/**
 * used in Component Styles Panel, Theme Panel, Theme Picker
 * @returns the global theme
 */
export const globalTheme = () => {
  const context = globalContext();
  return context && context.theme;
};

/**
 * @returns the current theme being used in panel
 * used in Theme Panel
 */
export const getPanelsTheme = () => globalTheme() || baseTheme;

/**
 * sets global theme to the theme passed in
 * used in Theme Picker
 */
export function setGlobalTheme(theme, updateGlobals) {
  document &&
    document.querySelector('iframe') &&
    document.querySelector('iframe').contentWindow &&
    document.querySelector('iframe').contentWindow.postMessage({ theme });
  if (updateGlobals) updateGlobals({ LUITheme: theme });
}

/**
 * updates globalTheme with values past in, creates a custom theme, updates global LUITheme to custom, used in Component Styles and Theme Panels
 */

export const updateGlobalTheme = (
  updates,
  updateGlobals,
  customTheme = true
) => {
  let context = globalContext();
  if (context) {
    context.updateTheme(updates);
    if (customTheme) {
      const theme = globalTheme();
      const functions = Object.keys(theme).reduce((acc, key) => {
        if (typeof theme[key] === 'function') {
          acc[key] = theme[key];
        }
        return acc;
      }, {});
      globalContext().storybookCustomTheme = {
        ...JSON.parse(JSON.stringify(globalTheme())),
        ...functions
      };
      updateGlobals({ LUITheme: 'custom' });
    }
  }
};

/**
 * delays update to color value
 * @returns a color value in proper format
 */

const debouncedColorUpdate = debounce((name, value, updateGlobals) => {
  updateGlobalTheme(
    { color: { [name]: utils.getValidColor(value) } },
    updateGlobals
  );
}, 500);

/**
 *  used in Theme Panel
 */
export function colorUpdate() {
  debouncedColorUpdate(...arguments);
}
