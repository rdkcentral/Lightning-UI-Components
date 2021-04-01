import lng from '@lightningjs/core';
import Key, { KEY_DIMENSIONS } from '../../elements/Key';
import Row from '../../layout/Row';
import Column from '../../layout/Column';

export default class Keyboard extends lng.Component {
  _construct() {
    this._whenEnabled = new Promise(resolve => (this._firstEnable = resolve));
  }

  get announce() {
    return 'Keyboard' + (this.title ? `, ${this.title}` : '');
  }

  get announceContext() {
    return [
      'PAUSE-2',
      'Use arrow keys to choose characters, press center to select'
    ];
  }

  set formats(formats = {}) {
    this._formats = formats;
    this._currentFormat = this._defaultFormat;
    // Ensure formats prop is set last
    this._whenEnabled.then(() => {
      let format =
        this._currentFormat.charAt(0).toLowerCase() +
        this._currentFormat.slice(1);
      this._createFormat(format);
      this._refocus();
    });
  }

  _createFormat(key) {
    let format = this._formats[key];
    let keyboardData = this._formatKeyboardData(format);
    this._createKeyboard(key, this._createRows(keyboardData));
  }

  _createKeyboard(key, rows = []) {
    key = key.charAt(0).toUpperCase() + key.slice(1);
    if (rows.length === 1) {
      this.patch({ [key]: { ...rows[0] } });
    } else {
      this.patch({
        [key]: {
          type: Column,
          plinko: true,
          itemSpacing: this._spacing,
          items: rows
        }
      });
    }
  }

  _createRows(rows = []) {
    return rows.map(keys => {
      let h = (this.keysConfig && this.keysConfig.h) || KEY_DIMENSIONS.h;
      return {
        type: Row,
        h,
        wrapSelected: this.rowWrap === undefined ? true : this.rowWrap,
        itemSpacing: this._spacing,
        items: this._createKeys(keys)
      };
    });
  }

  _createKeys(keys = []) {
    return keys.map(keyProps => {
      const key = {
        type: this.keyComponent || Key,
        config: this.keysConfig
      };
      if (!keyProps) {
        return { ...KEY_DIMENSIONS, skipFocus: true };
      } else if (typeof keyProps === 'object') {
        return { ...key, ...keyProps };
      }
      return { ...key, label: keyProps };
    });
  }

  _formatKeyboardData(data = []) {
    if (Array.isArray(data) && data.length) {
      if (!Array.isArray(data[0]) && !this.inline) {
        let keyRows = [],
          idx,
          counter;
        for (idx = 0, counter = -1; idx < data.length; idx++) {
          if (idx % this.columnCount === 0) {
            counter++;
            keyRows[counter] = [];
          }
          keyRows[counter].push(data[idx]);
        }
        return keyRows;
      } else if (this.inline) {
        return [data];
      }
      return data;
    }
  }

  $toggleKeyboard(to) {
    let toKeyboard = to.charAt(0).toUpperCase() + to.slice(1);
    if (toKeyboard !== this._currentFormat) {
      let toKeyboardTag = this.tag(toKeyboard);
      if (!toKeyboardTag) {
        this._createFormat(to);
        toKeyboardTag = this.tag(toKeyboard);
      }
      this.selectKeyOn(toKeyboardTag);
      this.tag(this._currentFormat).alpha = 0;
      toKeyboardTag.alpha = 1;
      this._currentFormat = toKeyboard;
    }
  }

  selectKeyOn(keyboard, { row, column } = this.getSelectedKey()) {
    let type = keyboard.constructor.name;
    if (type === 'Row') {
      keyboard.selectedIndex = column;
    } else {
      keyboard.selectedIndex = row;
      keyboard.Items.children[row].selectedIndex = column;
    }
  }

  getSelectedKey() {
    let row, column;
    let keyboard = this.tag(this._currentFormat);
    let type = keyboard.constructor.name;
    if (type === 'Row') {
      row = 0;
      column = keyboard.selectedIndex;
    } else {
      row = keyboard.selectedIndex;
      column = keyboard.Items.children[row].selectedIndex;
    }
    return { row, column };
  }

  _getFocused() {
    return this.tag(this._currentFormat) || this;
  }

  _focus() {
    this.fireAncestors('$keyboardFocused', true);
  }

  _unfocus() {
    this.fireAncestors('$keyboardFocused', false);
  }

  set columnCount(columnCount) {
    this._columnCount = columnCount;
  }

  set rowCount(rowCount) {
    this._rowCount = rowCount;
  }

  get columnCount() {
    if (this._columnCount) return this._columnCount;
    if (this._rowCount)
      return (
        this._formats[this._defaultFormat.toLowerCase()].length / this._rowCount
      );
    if (this.inline)
      return this._formats[this._defaultFormat.toLowerCase()].length;
    else return 11;
  }

  get _spacing() {
    return this.spacing || 8;
  }

  get _defaultFormat() {
    let defaultFormat = this.defaultFormat || Object.keys(this._formats)[0];
    return defaultFormat.charAt(0).toUpperCase() + defaultFormat.slice(1);
  }
}

export const KEYBOARD_FORMATS = {
  fullscreen: {
    letters: [
      [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        {
          label: '#@!',
          size: 'large',
          toggle: 'symbols',
          announce: 'symbol mode, button'
        },
        { label: 'Space', size: 'large' },
        { label: 'Delete', size: 'large' },
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
      ],
      [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z'
      ]
    ],
    symbols: [
      [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        {
          label: 'ABC',
          size: 'large',
          toggle: 'letters',
          announce: 'caps on, button'
        },
        { label: 'Space', size: 'large' },
        { label: 'Delete', size: 'large' },
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
      ],
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
        { label: '!', announce: 'exclamation, button' },
        '@',
        '#',
        '$',
        '%',
        { label: '^', announce: 'caret circumflex, button' },
        '&',
        '*',
        { label: '(', announce: 'open parenthesis, button' },
        { label: ')', announce: 'close parenthesis, button' },
        { label: '`', announce: 'grave accent, button' },
        '~',
        '_',
        '.',
        '-',
        '+'
      ]
    ]
  },
  qwerty: {
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
        { label: 'Delete', size: 'medium' }
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
          label: '#@!',
          size: 'medium',
          toggle: 'symbols',
          announce: 'symbol mode, button'
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
          label: 'áöû',
          size: 'medium',
          toggle: 'accents',
          announce: 'accents, button'
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
        { label: '_', announce: 'underscore, button' },
        { label: '.', announce: 'period, button' },
        { label: '-', announce: 'dash, button' },
        {
          label: 'shift',
          size: 'medium',
          toggle: 'lowercase',
          announce: 'shift off, button'
        }
      ],
      [
        { label: 'Clear', size: 'large' },
        { label: 'Space', size: 'xlarge' },
        { label: 'Done', size: 'large' }
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
        { label: 'Delete', size: 'medium' }
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
          label: '#@!',
          size: 'medium',
          toggle: 'symbols',
          announce: 'symbol mode, button'
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
          label: 'áöû',
          size: 'medium',
          toggle: 'accents',
          announce: 'accents, button'
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
        { label: '_', announce: 'underscore, button' },
        { label: '.', announce: 'period, button' },
        { label: '-', announce: 'dash, button' },
        {
          label: 'shift',
          size: 'medium',
          toggle: 'uppercase',
          announce: 'shift on, button'
        }
      ],
      [
        { label: 'Clear', size: 'large' },
        { label: 'Space', size: 'xlarge' },
        { label: 'Done', size: 'large' }
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
        { label: 'Delete', size: 'medium' }
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
          label: '#@!',
          size: 'medium',
          toggle: 'symbols',
          announce: 'symbol mode, button'
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
          label: 'abc',
          size: 'medium',
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
          label: 'shift',
          size: 'medium',
          toggle: 'accentsUpper',
          announce: 'shift off, button'
        }
      ],
      [
        { label: 'Clear', size: 'large' },
        { label: 'Space', size: 'xlarge' },
        { label: 'Done', size: 'large' }
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
        { label: 'Delete', size: 'medium' }
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
          label: '#@!',
          size: 'medium',
          toggle: 'symbols',
          announce: 'symbol mode, button'
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
          label: 'abc',
          size: 'medium',
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
          label: 'shift',
          size: 'medium',
          toggle: 'accents',
          announce: 'shift off, button'
        }
      ],
      [
        { label: 'Clear', size: 'large' },
        { label: 'Space', size: 'xlarge' },
        { label: 'Done', size: 'large' }
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
        { label: 'Delete', size: 'medium' }
      ],
      [
        { label: '!', announce: 'exclamation, button' },
        '@',
        '#',
        '$',
        '%',
        { label: '^', announce: 'caret circumflex, button' },
        '&',
        '*',
        { label: '(', announce: 'open parenthesis, button' },
        { label: ')', announce: 'close parenthesis, button' },
        {
          label: 'abc',
          size: 'medium',
          toggle: 'lowercase',
          announce: 'alpha mode, button'
        }
      ],
      [
        { label: '{', announce: 'open brace, button' },
        { label: '}', announce: 'close brace, button' },
        { label: '[', announce: 'open bracket, button' },
        { label: ']', announce: 'close bracket, button' },
        { label: ';', announce: 'semicolon, button' },
        { label: '"', announce: 'doublequote, button' },
        { label: "'", announce: 'singlequote, button' },
        { label: '|', announce: 'vertical bar, button' },
        { label: '\\', announce: 'backslash, button' },
        { label: '/', announce: 'forwardslash, button' },
        {
          label: 'áöû',
          size: 'medium',
          toggle: 'accents',
          announce: 'accents, button'
        }
      ],
      [
        { label: '<', announce: 'less than, button' },
        { label: '>', announce: 'greater than, button' },
        { label: '?', announce: 'question mark, button' },
        { label: '±', announce: 'plus minus sign, button' },
        { label: '`', announce: 'grave accent, button' },
        { label: '~', announce: 'tilde, button' },
        { label: '_', announce: 'underscore, button' },
        { label: '.', announce: 'period, button' },
        { label: '-', announce: 'dash, button' },
        { label: '+', announce: 'plus sign, button' }
      ],
      [
        { label: 'Clear', size: 'large' },
        { label: 'Space', size: 'xlarge' },
        { label: 'Done', size: 'large' }
      ]
    ]
  },
  numbers: {
    numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    dialpad: [
      ['1', '2', '3'],
      ['4', '5', '6'],
      ['7', '8', '9'],
      ['', '0', '']
    ],
    dialpadExtended: [
      ['1', '2', '3'],
      ['4', '5', '6'],
      ['7', '8', '9'],
      ['', '0', ''],
      [{ label: 'Delete', size: 'large' }]
    ]
  }
};
