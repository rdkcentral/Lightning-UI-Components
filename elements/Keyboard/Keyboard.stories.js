/**
 * Copyright 2021 Comcast Cable Communications Management, LLC
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
import Keyboard, { KEYBOARD_FORMATS } from '.';
import Key from './Key';
import Row from '../Row';

import mdx from './Keyboard.mdx';

export default {
  title: 'Elements / Keyboard',
  component: Keyboard,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Keyboard: {
          type: Keyboard,
          defaultFormat: 'lowercase',
          formats: KEYBOARD_FORMATS.qwerty
        }
      };
    }
    _getFocused() {
      return this.tag('Keyboard');
    }
  };

export const Inline = () =>
  class Inline extends lng.Component {
    static _template() {
      return {
        Keyboard: {
          type: Keyboard,
          inline: true,
          defaultFormat: 'numbers',
          formats: KEYBOARD_FORMATS.numbers
        }
      };
    }
    _getFocused() {
      return this.tag('Keyboard');
    }
  };

export const Keys = () =>
  class Keys extends lng.Component {
    static _template() {
      return {
        Keys: {
          type: Row,
          itemSpacing: 20,
          items: [
            {
              type: Key,
              title: 'a'
            },
            {
              type: Key,
              size: 'medium',
              title: 'Shift'
            },
            {
              type: Key,
              size: 'large',
              title: 'Done'
            },
            {
              type: Key,
              size: 'xlarge',
              title: 'Space'
            }
          ]
        }
      };
    }
    _getFocused() {
      return this.tag('Keys');
    }
  };
