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
import { createModeControl } from '../../../docs/utils';
import { CATEGORIES } from '../../../docs/constants';
import { context } from '../../globals';
import mdx from './Keyboard.mdx';
import utils from '../../utils';
import { default as KeyboardComponent } from './Keyboard';

export default {
  title: `${CATEGORIES[8]}/Keyboard`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Keyboard = () =>
  class Keyboard extends lng.Component {
    static _template() {
      return {
        Keyboard: {
          type: KeyboardComponent,
          formats: {
            lowercase: [
              [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '0',
                {
                  title: 'Delete',
                  size: 'md',
                  keyId: 'delete',
                  announce: 'delete, button'
                }
              ],
              ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
              ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
              ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
              [
                {
                  title: 'Clear',
                  size: 'lg',
                  keyId: 'clear',
                  announce: 'clear, button'
                },
                {
                  title: 'Space',
                  size: 'xl',
                  keyId: 'space',
                  announce: 'space, button'
                },
                {
                  title: 'Done',
                  size: 'lg',
                  keyId: 'done',
                  announce: 'done, button'
                }
              ]
            ]
          }
        },
        w: utils.getWidthByUpCount(context.theme, 1)
      };
    }
  };

Keyboard.args = {
  centerKeys: true,
  centerKeyboard: false,
  mode: 'focused'
};

Keyboard.sharedArgTypes = {
  ...createModeControl({ summaryValue: 'focused' }),
  centerKeyboard: {
    description: "Center the keyboard within it's set width",
    control: 'boolean',
    table: {
      defaultValue: { summary: false }
    }
  },
  centerKeys: {
    description: "Center the keys within it's set width of keyboard",
    control: 'boolean',
    table: {
      defaultValue: { summary: false }
    }
  }
};

Keyboard.argTypes = Keyboard.sharedArgTypes;
Keyboard.parameters = {};
