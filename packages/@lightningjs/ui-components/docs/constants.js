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

export const CATEGORIES = {
  0: 'Accessibility',
  2: 'Controls',
  4: 'Foundations',
  8: 'Keyboard',
  16: 'Layout',
  32: 'Metadata',
  64: 'Navigation',
  128: 'Tiles & Cards',
  256: 'Text',
  512: 'Utilities',
  1024: 'Docs',
  2048: 'Collections'
};

/** Storybook config constants should go in this file */

export const storySortOrder = [
  CATEGORIES[1024],
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
    ]
  ],
  CATEGORIES[2048],
  CATEGORIES[0],
  CATEGORIES[4],
  CATEGORIES[512],
  CATEGORIES[64],
  CATEGORIES[16],
  CATEGORIES[2],
  CATEGORIES[8],
  CATEGORIES[256],
  CATEGORIES[32],
  CATEGORIES[128]
];

export const controlDescriptions = {
  collapseToMetadata:
    'When in unfocused or disabled mode, if shouldCollapse property is true it will collapse the image to metadata (when focused, it will always be expanded)',
  shouldCollapse:
    'When in unfocused or disabled mode, if this flag is true metadata will collapse (when focused, it will always be expanded)',
  fixed:
    'Stops the width from being calculated dynamically based on content and will instead use the`w` property'
};
