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

import Keyboard from './Keyboard';
import * as styles from './Keyboard.styles';

export default class KeyboardSearch extends Keyboard {
  static get __componentName() {
    return 'KeyboardSearch';
  }

  static get __themeStyle() {
    return styles;
  }

  _construct() {
    super._construct();
    this.formats = this.searchFormat;
  }

  get searchFormat() {
    return {
      uppercase: [
        ['A', 'B', 'C', 'D', 'E', 'F'],
        ['G', 'H', 'I', 'J', 'K', 'L'],
        ['M', 'N', 'O', 'P', 'Q', 'R'],
        ['S', 'T', 'U', 'V', 'W', 'X'],
        [
          'Y',
          'Z',
          { title: '1', keyId: 'number' },
          { title: '2', keyId: 'number' },
          { title: '3', keyId: 'number' },
          { title: '4', keyId: 'number' }
        ],
        [
          { title: '5', keyId: 'number' },
          { title: '6', keyId: 'number' },
          { title: '7', keyId: 'number' },
          { title: '8', keyId: 'number' },
          { title: '9', keyId: 'number' },
          { title: '0', keyId: 'number' }
        ],
        [
          {
            title: 'Space',
            size: 'xl',
            keyId: 'space',
            announce: 'space, button'
          },
          {
            title: 'Delete',
            size: 'md',
            keyId: 'delete',
            announce: 'delete, button'
          }
        ]
      ]
    };
  }
}
