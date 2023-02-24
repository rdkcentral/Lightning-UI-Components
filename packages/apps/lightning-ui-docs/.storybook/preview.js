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

// these two lines need to be in this order
// to wait until the inspector is enabled before attaching it
import theme from './theme';
import { withLightning } from './addons/decorators/withLightning';
import { registerEventListeners } from './utils/registerEvents';
import { storySortOrder } from './utils/constants';

// loads window event listeners
registerEventListeners();

/**
 * custom global props that can be accessed in decorators and add-ons
 * globalTypes can only be set in preview.js
 * @see https://storybook.js.org/docs/react/essentials/toolbars-and-globals#globals
 */

export const globalTypes = {
  LUITheme: {
    name: 'Theme',
    description: 'Theme select',
    defaultValue: 'xfinity'
  },
  'GridOverlay-alpha': {
    defaultValue: '0'
  },
  'GridOverlay-toggle-showColumns': {
    defaultValue: 'true'
  },
  'GridOverlay-toggle-showMargins': {
    defaultValue: 'false'
  },
  'GridOverlay-toggle-showSafe': {
    defaultValue: 'false'
  },
  'GridOverlay-toggle-showGutters': {
    defaultValue: 'false'
  },
  'GridOverlay-toggle-showText': {
    defaultValue: 'false'
  }
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    disable: true
  },
  controls: {
    hideNoControlsWarning: true,
    expanded: true,
    sort: 'requiredFirst'
  },
  docs: {
    inlineStories: false, // sets docs to use iframes
    theme, // Storybook global theme object
    iframeHeight: 300 // sets height for examples in docs
  },
  options: {
    /** Sort method that accepts a function or configuration object
     * @see https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy#sorting-stories
     */
    storySort: {
      method: 'alphabetical',
      order: storySortOrder
    }
  }
};

// adding Lightning decorator globally
export const decorators = [withLightning];
