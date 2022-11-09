import Base from '../Base/index.js';
import Key from '../Key/index.js';
import Row from '../Row/index.js';
import Column from '../Column/index.js';
import { withExtensions } from '../../mixins/index.js';

export { default as KEYBOARD_FORMATS } from './keyboardFormats.js';
import * as styles from './Keyboard.styles.js';

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

class Keyboard extends Base {
  static get __componentName() {
    return 'Keyboard';
  }

  static get __themeStyle() {
    return styles;
  }

  static get properties() {
    return ['formats', 'centerAlign', 'rowWrap'];
  }

  _focus() {
    super._focus();
    this.fireAncestors('$keyboardFocused', true);
  }

  _getFocused() {
    return this._currentKeyboard || this;
  }

  _update() {
    if (!this._currentFormat) {
      this._currentFormat = this.defaultFormat;
    }
    if (this._formatsChanged) {
      this._createFormat(this._currentFormat);
      this._refocus();
      this._formatsChanged = false;
    } else {
      Object.keys(this.formats).forEach(key => {
        const element = this.tag(capitalize(key));
        if (element) {
          element.patch({
            style: {
              itemSpacing: this.style.spacing
            }
          });
          element.items.forEach(row => {
            row.patch({
              itemSpacing: this.style.spacing,
              centerInParent: this.centerAlign,
              wrapSelected: this.rowWrap !== undefined ? this.rowWrap : true
            });
          });
          // force Column to recalculate rows from the centerAlign toggle
          element.queueRequestUpdate();
        }
      });
    }
  }

  _createFormat(keyboard) {
    const format = this.formats[keyboard];
    if (format) {
      const keyboardData = this._formatKeyboardData(format);
      this._createKeyboard(keyboard, this._createRows(keyboardData));
    }
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
          style: {
            itemSpacing: this.style.spacing
          },
          autoResizeWidth: true,
          autoResizeHeight: true,
          neverScroll: true
        }
      });
    }
  }

  _createRows(rows = []) {
    return rows.map(keys => {
      return {
        type: Row,
        autoResizeHeight: true,
        autoResizeWidth: true,
        centerInParent: this.centerAlign,
        neverScroll: true,
        wrapSelected: this.rowWrap !== undefined ? this.rowWrap : true,
        itemSpacing: this.style.spacing,
        items: this._createKeys(keys)
      };
    });
  }

  _createKeys(keys = []) {
    return keys.map(keyProps => {
      if (!keyProps) {
        return { skipFocus: true };
      }
      const key = {
        type: this.keyComponent || Key // TODO: Maybe remove this?
      };
      if (typeof keyProps === 'object') {
        return { ...key, ...keyProps };
      }
      return { ...key, title: keyProps };
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
        return keyRows; // TODO: Swap to a reduce
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
      this._currentKeyboard.alpha = 0;
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
    const keyboard = this._currentKeyboard;
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

  $itemChanged() {
    this.w = this._currentKeyboard.w;
    this.fireAncestors('$itemChanged');
    this.signal('keyboardWidthChanged');
  }

  _setFormats(formats = {}) {
    this._formatsChanged = true;
    return formats;
  }

  set defaultFormat(format) {
    this._defaultFormat = format;
  }

  get defaultFormat() {
    return this._defaultFormat || Object.keys(this.formats)[0];
  }

  get _currentKeyboard() {
    return this.tag(capitalize(this._currentFormat));
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
    else return 11; // TODO: Remove this hard-coded number?
  }

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    if (this._announce) {
      return this._announce;
    }
    return 'Keyboard' + (this.title ? `, ${this.title}` : '');
  }

  set announceContext(announceContext) {
    super.announceContext = announceContext;
  }

  get announceContext() {
    return (
      this._announceContext || [
        'PAUSE-2',
        'Use arrow keys to choose characters, press center to select'
      ]
    );
  }
}

export default withExtensions(Keyboard);
