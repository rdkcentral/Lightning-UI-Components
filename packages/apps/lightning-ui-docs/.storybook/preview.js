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
import { withLightning } from './addons/decorators/withLightning';
import { registerEventListeners, themeSelect } from './utils/registerEvents';
import { themes } from '@storybook/theming';

// loads window event listeners
registerEventListeners();
/**
 * custom global props that can be accessed in decorators and add-ons
 * globalTypes can only be set in preview.js
 * @see https://storybook.js.org/docs/react/essentials/toolbars-and-globals#globals
 */
const preview = {
  parameters: {
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
      theme: themes.dark,
      argTypes: {
        sort: 'alpha',
        exclude: ['mode']
      }
    },
    options: {
      /** NOTE:  v7 storySort must be self-contained function & no reference to outside variables
     https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#v7-style-story-sort
      */
      storySort: {
        method: 'alphabetical',
        order: [
          'Docs',
          [
            'Introduction',
            'Read Me',
            'Base',
            'Contributing',
            'Lightning Resources',
            'Theming',
            [
              'Overview',
              'Component Config',
              'Tones',
              'Modes',
              'Extensions',
              'Subtheming',
              'Use in Storybook',
              'Theme Properties',
              '*'
            ],
            'Unit Testing',
            [
              'Overview',
              'Test Renderer',
              'Test Utils',
              ['makeCreateComponent', '*']
            ]
          ],
          'Collections',
          'Utilities',
          'Components',
          'Patterns',
          'Templates'
        ]
      }
    }
  },
  globalTypes: {
    LUITheme: {
      name: 'Theme',
      description: 'Theme select',
      defaultValue: 'base'
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
    },
    announce: {
      defaultValue: false
    },
    stageColor: {
      defaultValue: false
    }
  },
  decorators: [withLightning],
  loaders: [
    async ({ globals }) => {
      await themeSelect(globals.LUITheme);
      return;
    }
  ]
};
export default preview;
