import lng from 'wpe-lightning';
import Button from '../Button';
import Row from '../Row';
import Column from '../Column';

const KEY_DIMENSIONS = { h: 50, w: 50, padding: 5, fixed: true };
export default class Keyboard extends lng.Component {
  _construct() {
    this._whenEnabled = new Promise(resolve => (this._firstEnable = resolve));
  }

  set formats(formats = {}) {
    this._formats = formats;
    this._currentFormat = this._defaultFormat;
    // Ensure formats prop is set last
    this._whenEnabled.then(() => {
      Object.entries(formats).forEach(([key, value]) => {
        let keyboardData = this._formatKeyboardData(value);
        this._createKeyboard(key, this._createRows(keyboardData));
      });
      this.tag(this._currentFormat).alpha = 1;
      this._refocus();
    });
  }

  _createKeyboard(key, rows = []) {
    key = key.charAt(0).toUpperCase() + key.slice(1);
    if (rows.length === 1) {
      this.patch({ [key]: { ...rows[0], alpha: 0 } });
    } else {
      this.patch({
        [key]: {
          type: Column,
          alpha: 0,
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
        type: Key,
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

  $toggleKeyboard(keyboardFormat) {
    keyboardFormat =
      keyboardFormat.charAt(0).toUpperCase() + keyboardFormat.slice(1);
    if (keyboardFormat !== this._currentFormat) {
      this.selectKeyOn(this.tag(keyboardFormat));
      this.tag(this._currentFormat).alpha = 0;
      this.tag(keyboardFormat).alpha = 1;
      this._currentFormat = keyboardFormat;
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
    return this.spacing || 10;
  }

  get _defaultFormat() {
    let defaultFormat = this.defaultFormat || Object.keys(this._formats)[0];
    return defaultFormat.charAt(0).toUpperCase() + defaultFormat.slice(1);
  }
}

export class Key extends Button {
  static _template() {
    return {
      ...super._template(),
      ...KEY_DIMENSIONS
    };
  }

  set config(config) {
    if (config) {
      this.sizes = config.sizes;
    }
  }

  set icon(src) {
    if (src) {
      this._Icon.patch({
        color: 0xffffffff,
        size: 32,
        spacing: 16,
        src
      });
    }
  }

  set size(size) {
    this.w = this._sizes[size] || this.h;
  }

  set char(char) {
    this.title = char;
  }

  set label(label) {
    this.title = label;
  }

  get _sizes() {
    return { small: 50, medium: 110, large: 170, xlarge: 350, ...this.sizes };
  }

  _handleEnter() {
    if (this.toggle) {
      this.fireAncestors('$toggleKeyboard', this.toggle);
    }
    this.fireAncestors('$onSoftKey', { key: this.title });
  }
}

export const KEYBOARD_FORMATS = {
  fullscreen: {
    letters: [
      [
        { label: '&123', size: 'large', toggle: 'symbols' },
        { label: 'Space', size: 'large' },
        { label: 'Delete', size: 'large' }
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
        { label: 'ABC', size: 'large', toggle: 'letters' },
        { label: 'Space', size: 'large' },
        { label: 'Delete', size: 'large' }
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
        '!',
        '@',
        '#',
        '$',
        '%',
        '^',
        '&',
        '*',
        '(',
        ')',
        '`',
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
        { label: '&123', size: 'medium', toggle: 'symbols' }
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
        { label: 'shift', size: 'medium', toggle: 'lowercase' }
      ],
      [
        'Z',
        'X',
        'C',
        'V',
        'B',
        'N',
        'M',
        '_',
        '.',
        '-',
        { label: '.com', size: 'medium' }
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
        { label: '&123', size: 'medium', toggle: 'symbols' }
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
        { label: 'shift', size: 'medium', toggle: 'uppercase' }
      ],
      [
        'z',
        'x',
        'c',
        'v',
        'b',
        'n',
        'm',
        '_',
        '.',
        '-',
        { label: '.com', size: 'medium' }
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
        '!',
        '@',
        '#',
        '$',
        '%',
        '^',
        '&',
        '*',
        '(',
        ')',
        { label: 'abc', size: 'medium', toggle: 'lowercase' }
      ],
      [
        '{',
        '}',
        '[',
        ']',
        ';',
        '"',
        "'",
        '|',
        '\\',
        '/',
        { label: 'shift', size: 'medium', toggle: 'lowercase' }
      ],
      [
        '<',
        '>',
        '?',
        '±',
        '`',
        '~',
        '_',
        '.',
        '-',
        '+',
        { label: '.com', size: 'medium' }
      ],
      [
        { label: 'Clear', size: 'large' },
        { label: 'Space', size: 'xlarge' },
        { label: 'Done', size: 'large' }
      ]
    ]
  },
  numbers: {
    numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  }
};
