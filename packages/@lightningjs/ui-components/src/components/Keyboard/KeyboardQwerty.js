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
import * as styles from './Keyboard.styles.js';

export default class KeyboardQwerty extends Keyboard {
  static get __componentName() {
    return 'KeyboardQwerty';
  }

  static get __themeStyle() {
    return styles;
  }

  _construct() {
    super._construct();
    this.formats = this.qwertyFormat;
  }

  get qwertyFormat() {
    return {
      uppercase: [
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
        [
          'Q',
          'W',
          'E',
          'R',
          'T',
          'Y',
          'U',
          'I',
          'O',
          'P',
          {
            title: '#@!',
            size: 'md',
            toggle: 'symbols',
            announce: 'symbol mode, button',
            keyId: 'symbols'
          }
        ],
        [
          'A',
          'S',
          'D',
          'F',
          'G',
          'H',
          'J',
          'K',
          'L',
          '@',
          {
            title: 'áöû',
            size: 'md',
            toggle: 'accents',
            announce: 'accents, button',
            keyId: 'accents'
          }
        ],
        [
          'Z',
          'X',
          'C',
          'V',
          'B',
          'N',
          'M',
          { title: '_', announce: 'underscore, button' },
          { title: '.', announce: 'period, button' },
          { title: '-', announce: 'dash, button' },
          {
            title: 'shift',
            size: 'md',
            toggle: 'lowercase',
            announce: 'shift off, button',
            keyId: 'shift'
          }
        ],
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
      ],
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
        [
          'q',
          'w',
          'e',
          'r',
          't',
          'y',
          'u',
          'i',
          'o',
          'p',
          {
            title: '#@!',
            size: 'md',
            toggle: 'symbols',
            announce: 'symbol mode, button',
            keyId: 'symbols'
          }
        ],
        [
          'a',
          's',
          'd',
          'f',
          'g',
          'h',
          'j',
          'k',
          'l',
          '@',
          {
            title: 'áöû',
            size: 'md',
            toggle: 'accents',
            announce: 'accents, button',
            keyId: 'accents'
          }
        ],
        [
          'z',
          'x',
          'c',
          'v',
          'b',
          'n',
          'm',
          { title: '_', announce: 'underscore, button' },
          { title: '.', announce: 'period, button' },
          { title: '-', announce: 'dash, button' },
          {
            title: 'shift',
            size: 'md',
            toggle: 'uppercase',
            announce: 'shift on, button',
            keyId: 'shift'
          }
        ],
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
      ],
      accents: [
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
        [
          'ä',
          'ë',
          'ï',
          'ö',
          'ü',
          'ÿ',
          'à',
          'è',
          'ì',
          'ò',
          {
            title: '#@!',
            size: 'md',
            toggle: 'symbols',
            announce: 'symbol mode, button',
            keyId: 'symbols'
          }
        ],
        [
          'ù',
          'á',
          'é',
          'í',
          'ó',
          'ú',
          'ý',
          'â',
          'ê',
          '@',
          {
            title: 'abc',
            size: 'md',
            toggle: 'lowercase',
            announce: 'alpha mode, button'
          }
        ],
        [
          'î',
          'ô',
          'û',
          'ã',
          'ñ',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          { title: '_', announce: 'underscore, button' },
          { title: '.', announce: 'period, button' },
          { title: '-', announce: 'dash, button' },
          {
            title: 'shift',
            size: 'md',
            toggle: 'accentsUpper',
            announce: 'shift off, button',
            keyId: 'shift'
          }
        ],
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
      ],
      accentsUpper: [
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
        [
          'Ä',
          'Ë',
          'Ï',
          'Ö',
          'Ü',
          'Ÿ',
          'À',
          'È',
          'Ì',
          'Ò',
          {
            title: '#@!',
            size: 'md',
            toggle: 'symbols',
            announce: 'symbol mode, button',
            keyId: 'symbols'
          }
        ],
        [
          'Ù',
          'Á',
          'É',
          'Í',
          'Ó',
          'Ú',
          'Ý',
          'Â',
          'Ê',
          '@',
          {
            title: 'abc',
            size: 'md',
            toggle: 'lowercase',
            announce: 'alpha mode, button'
          }
        ],
        [
          'Î',
          'Ô',
          'Û',
          'Ã',
          'Ñ',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          { title: '.', announce: 'period, button' },
          { title: '-', announce: 'dash, button' },
          { title: '_', announce: 'underscore, button' },
          {
            title: 'shift',
            size: 'md',
            toggle: 'accents',
            announce: 'shift off, button',
            keyId: 'shift'
          }
        ],
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
      ],
      symbols: [
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
        [
          { title: '!', announce: 'exclamation, button' },
          '@',
          '#',
          '$',
          '%',
          { title: '^', announce: 'caret circumflex, button' },
          '&',
          '*',
          { title: '(', announce: 'open parenthesis, button' },
          { title: ')', announce: 'close parenthesis, button' },
          {
            title: 'abc',
            size: 'md',
            toggle: 'lowercase',
            announce: 'alpha mode, button'
          }
        ],
        [
          { title: '{', announce: 'open brace, button' },
          { title: '}', announce: 'close brace, button' },
          { title: '[', announce: 'open bracket, button' },
          { title: ']', announce: 'close bracket, button' },
          { title: ';', announce: 'semicolon, button' },
          { title: '"', announce: 'doublequote, button' },
          { title: ',', announce: 'comma, button' },
          { title: '|', announce: 'vertical bar, button' },
          { title: '\\', announce: 'backslash, button' },
          { title: '/', announce: 'forwardslash, button' },
          {
            title: 'áöû',
            size: 'md',
            toggle: 'accents',
            announce: 'accents, button',
            keyId: 'accents'
          }
        ],
        [
          { title: '<', announce: 'less than, button' },
          { title: '>', announce: 'greater than, button' },
          { title: '?', announce: 'question mark, button' },
          { title: '=', announce: 'equal sign, button' },
          { title: '`', announce: 'grave accent, button' },
          { title: '~', announce: 'tilde, button' },
          { title: '_', announce: 'underscore, button' },
          { title: ':', announce: 'colon, button' },
          { title: '-', announce: 'dash, button' },
          { title: '+', announce: 'plus sign, button' }
        ],
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
    };
  }
}
