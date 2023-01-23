import Keyboard from './Keyboard';
import { withExtensions } from '../../mixins/index.js';
import * as styles from './Keyboard.styles.js';

class KeyboardEmail extends Keyboard {
  static get __componentName() {
    return 'KeyboardEmail';
  }

  static get __themeStyle() {
    return styles;
  }

  _construct() {
    super._construct();
    this.formats = this.emailFormat;
  }

  get emailFormat() {
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
          { title: '.', announce: 'period, button' },
          { title: '-', announce: 'dash, button' },
          { title: '_', announce: 'underscore, button' },
          {
            title: 'shift',
            size: 'md',
            toggle: 'lowercase',
            announce: 'shift off, button',
            keyId: 'shift'
          }
        ],
        [
          { title: '.com', announce: 'dot, com', size: 'md' },
          { title: '.net', announce: 'dot, net', size: 'md' },
          { title: '.edu', announce: 'dot, edu', size: 'md' },
          { title: '.org', announce: 'dot, org', size: 'md' },
          { title: '.co', announce: 'dot, co', size: 'md' },
          { title: '.uk', announce: 'dot, uk', size: 'md' }
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
          { title: '.com', announce: 'dot, com', size: 'md' },
          { title: '.net', announce: 'dot, net', size: 'md' },
          { title: '.edu', announce: 'dot, edu', size: 'md' },
          { title: '.org', announce: 'dot, org', size: 'md' },
          { title: '.co', announce: 'dot, co', size: 'md' },
          { title: '.uk', announce: 'dot, uk', size: 'md' }
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
          'î',
          {
            title: 'abc',
            size: 'md',
            toggle: 'lowercase',
            announce: 'alpha mode, button'
          }
        ],
        [
          '',
          '',
          '',
          'ô',
          'û',
          'ã',
          'ñ',
          '',
          '',
          '',
          {
            title: 'shift',
            size: 'md',
            toggle: 'accentsUpper',
            announce: 'shift off, button',
            keyId: 'shift'
          }
        ],
        [
          { title: '.com', announce: 'dot, com', size: 'md' },
          { title: '.net', announce: 'dot, net', size: 'md' },
          { title: '.edu', announce: 'dot, edu', size: 'md' },
          { title: '.org', announce: 'dot, org', size: 'md' },
          { title: '.co', announce: 'dot, co', size: 'md' },
          { title: '.uk', announce: 'dot, uk', size: 'md' }
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
          'Î',
          {
            title: 'abc',
            size: 'md',
            toggle: 'lowercase',
            announce: 'alpha mode, button'
          }
        ],
        [
          '',
          '',
          '',
          'Ô',
          'Û',
          'Ã',
          'Ñ',
          '',
          '',
          '',
          {
            title: 'shift',
            size: 'md',
            toggle: 'accents',
            announce: 'shift off, button',
            keyId: 'shift'
          }
        ],
        [
          { title: '.com', announce: 'dot, com', size: 'md' },
          { title: '.net', announce: 'dot, net', size: 'md' },
          { title: '.edu', announce: 'dot, edu', size: 'md' },
          { title: '.org', announce: 'dot, org', size: 'md' },
          { title: '.co', announce: 'dot, co', size: 'md' },
          { title: '.uk', announce: 'dot, uk', size: 'md' }
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
          { title: '.com', announce: 'dot, com', size: 'md' },
          { title: '.net', announce: 'dot, net', size: 'md' },
          { title: '.edu', announce: 'dot, edu', size: 'md' },
          { title: '.org', announce: 'dot, org', size: 'md' },
          { title: '.co', announce: 'dot, co', size: 'md' },
          { title: '.uk', announce: 'dot, uk', size: 'md' }
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

export default withExtensions(KeyboardEmail);
