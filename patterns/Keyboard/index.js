import Key, { KEY_DIMENSIONS } from '../../elements/Key';
import Row from '../../layout/Row';
import Column from '../../layout/Column';
import { Base } from '../../elements';

export { default as KEYBOARD_FORMATS } from './keyboardFormats';

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

export default class Keyboard extends Base {
  static get properties() {
    return [
      'title',
      'columnCount',
      'rowCount',
      'formats',
      'defaultFormat',
      'centerAlign',
      'keyComponent',
      'rowWrap',
      'spacing',
      'keysConfig',
      'inline'
    ];
  }

  _update() {
    this._updateCurrentFormat();
  }

  _updateCurrentFormat() {
    // Ensure currentFormat is set after formats and defaultFormat
    this._currentFormat = this.defaultFormat;
    this._whenEnabled.then(() => {
      const format =
        this._currentFormat.charAt(0).toLowerCase() +
        this._currentFormat.slice(1);
      this._createFormat(format);
      this._refocus();
    });
  }

  get announce() {
    return this._announce || 'Keyboard' + (this.title ? `, ${this.title}` : '');
  }

  set announce(val) {
    this._announce = val;
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

  _setFormats(formats) {
    return formats || {};
  }

  _getDefaultFormat(defaultFormat) {
    const format = defaultFormat || Object.keys(this.formats)[0];
    return capitalize(format);
  }

  _getColumnCount(columnCount) {
    if (columnCount) return columnCount;
    if (this.rowCount)
      return (
        this.formats[this.defaultFormat.toLowerCase()].length / this.rowCount
      );
    if (this.inline)
      return this.formats[this.defaultFormat.toLowerCase()].length;
    else return 11;
  }

  _getSpacing(spacing) {
    return spacing || 8;
  }

  _createFormat(key) {
    const format = this.formats[key];
    const keyboardData = this._formatKeyboardData(format);
    this._createKeyboard(key, this._createRows(keyboardData));
  }

  _createKeyboard(key, rows = []) {
    key = capitalize(key);
    if (rows.length === 1) {
      this.patch({ [key]: { ...rows[0], w: this.w } });
    } else {
      this.patch({
        [key]: {
          type: Column,
          plinko: true,
          itemSpacing: this.spacing,
          items: rows,
          centerInParent: this.centerAlign,
          w: this.w
        }
      });
    }
  }

  _createRows(rows = []) {
    return rows.map(keys => {
      const h = (this.keysConfig && this.keysConfig.h) || KEY_DIMENSIONS.h;
      return {
        type: Row,
        h,
        centerInParent: this.centerAlign,
        w: this.w,
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
    const type = keyboard.constructor.name;
    if (type === 'Row') {
      keyboard.selectedIndex = column;
    } else {
      keyboard.selectedIndex = row;
      keyboard.Items.children[row].selectedIndex = column;
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
}
