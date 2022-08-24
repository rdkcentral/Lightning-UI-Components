import Key from '../../elements/Key'; // removed key dimensions
import Row from '../../layout/Row';
import Column from '../../layout/Column';
import { Base } from '../../elements';

export { default as KEYBOARD_FORMATS } from './keyboardFormats';

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

export default class Keyboard extends Base {
  static get properties() {
    return ['centerAlign', 'spacing', 'rowWrap'];
  }

  _construct() {
    super._construct();
    this._spacing = 8;
  }

  _update() {
    Object.keys(this.formats).forEach(key => {
      const element = this.tag(capitalize(key));
      if (element) {
        element.patch({
          itemSpacing: this.spacing,
          centerInParent: this.centerAlign,
          w: this.w
        });
        element.items.forEach(row => {
          row.patch({
            itemSpacing: this.spacing,
            centerInParent: this.centerAlign,
            wrapSelected: this.rowWrap === undefined ? true : this.rowWrap
          });
        });
      }
    });
  }

  _getFocused() {
    return this.tag(this._currentFormat) || this;
  }

  _focus() {
    super._focus();
    this.fireAncestors('$keyboardFocused', true);
  }

  _unfocus() {
    super._unfocus();
    this.fireAncestors('$keyboardFocused', false);
  }

  get announce() {
    if (this._announce) {
      return this._announce;
    }
    return 'Keyboard' + (this.title ? `, ${this.title}` : '');
  }

  set announce(announce) {
    super.announce = announce;
  }

  get announceContext() {
    return (
      this._announceContext || [
        'PAUSE-2',
        'Use arrow keys to choose characters, press center to select'
      ]
    );
  }

  set announceContext(val) {
    this._announceContext = val;
  }

  _createFormat(key) {
    const format = this.formats[key];
    const keyboardData = this._formatKeyboardData(format);
    this._createKeyboard(key, this._createRows(keyboardData));
  }

  _createKeyboard(key, rows = []) {
    key = capitalize(key);
    if (rows.length === 1) {
      this.patch({ [key]: rows[0] });
    } else {
      this.patch({
        [key]: {
          type: Column,
          plinko: true,
          items: rows,
          itemSpacing: this.spacing,
          centerInParent: this.centerAlign,
          w: this.w
        }
      });
    }
  }

  _createRows(rows = []) {
    return rows.map(keys => {
      const h = (this.keysConfig && this.keysConfig.h) || 60; // removed key dimensions reference
      return {
        type: Row,
        h,
        centerInParent: this.centerAlign,
        neverScroll: true,
        wrapSelected: this.rowWrap === undefined ? true : this.rowWrap,
        itemSpacing: this.spacing,
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
        return { skipFocus: true };
      } else if (typeof keyProps === 'object') {
        return { ...key, ...keyProps };
      }
      return { ...key, label: keyProps };
    });
  }

  _formatKeyboardData(data = []) {
    if (Array.isArray(data) && data.length) {
      if (!Array.isArray(data[0]) && !this.inline) {
        const keyRows = [];
        let idx, counter;
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
    const toKeyboard = capitalize(to);
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
    if (keyboard && keyboard.constructor) {
      const type = keyboard.constructor.name;
      if (type === 'Row') {
        keyboard.selectedIndex = column;
      } else {
        keyboard.selectedIndex = row;
        keyboard.selected.selectedIndex = column;
      }
    }
  }

  getSelectedKey() {
    let row, column;
    const keyboard = this.tag(this._currentFormat);
    const type = keyboard.constructor.name;
    if (type === 'Row') {
      row = 0;
      column = keyboard.selectedIndex;
    } else {
      row = keyboard.selectedIndex;
      column = keyboard.selected.selectedIndex;
    }
    return { row, column };
  }

  set formats(formats = {}) {
    this._formats = formats;
    this._currentFormat = this.defaultFormat;
    // Ensure formats prop is set last
    this._whenEnabled.then(() => {
      const format =
        this._currentFormat.charAt(0).toLowerCase() +
        this._currentFormat.slice(1);
      this._createFormat(format);
      this._refocus();
    });
  }

  get formats() {
    return this._formats;
  }

  set columnCount(columnCount) {
    this._columnCount = columnCount;
  }

  get columnCount() {
    if (this._columnCount) return this._columnCount;
    if (this.rowCount)
      return (
        this.formats[this.defaultFormat.toLowerCase()].length / this.rowCount
      );
    if (this.inline)
      return this.formats[this.defaultFormat.toLowerCase()].length;
    else return 11;
  }

  set defaultFormat(format) {
    this._defaultFormat = format;
  }

  get defaultFormat() {
    const defaultFormat = this._defaultFormat || Object.keys(this.formats)[0];
    return defaultFormat.charAt(0).toUpperCase() + defaultFormat.slice(1);
  }
}
