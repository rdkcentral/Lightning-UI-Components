﻿/**
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

import context from '../../globals/context/index';
import Base from '../Base';
import Key from '../Key';
import Row from '../Row';
import Column from '../Column';
import * as styles from './Keyboard.styles';

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

export default class Keyboard extends Base {
  static get __componentName() {
    return 'Keyboard';
  }

  static get __themeStyle() {
    return styles;
  }

  static get properties() {
    return [
      'formats',
      'centerKeyboard',
      'rowWrap',
      'centerKeys',
      'keyComponent'
    ];
  }

  _init() {
    this._setShouldUpdateThemeBound = this._setShouldUpdateTheme.bind(this);
    context.on('themeUpdate', this._setShouldUpdateThemeBound);
    super._init();
  }

  _setShouldUpdateTheme() {
    this.shouldUpdateTheme = true;
  }

  _detach() {
    super._detach();
    context.off('themeUpdate', this._setShouldUpdateThemeBound);
  }

  _focus() {
    super._focus();
    this.fireAncestors('$keyboardFocused', true);
  }

  _getFocused() {
    return this._currentKeyboard || this;
  }

  _update() {
    if (!this._currentFormat || this._shouldUpdateKeyboards) {
      this._currentFormat = this.defaultFormat;
    }
    if (this.centerKeyboard) {
      this.x = this.centeredXPos;
    } else if (this.x === this.centeredXPos && !this.centerKeyboard) {
      // if the keyboard was centered before but now should not be
      this.x = 0;
    } else {
      this.x == null && (this.x = 0); // if x is undefined or null set it to 0, otherwise do not overwrite x pos
    }
    this._shouldUpdateKeyboards && this._createKeyboardsFromFormats();
    this._formatKeys();
  }

  _createKeyboardsFromFormats() {
    this.childList.clear(); // if new formats patched in, remove keyboards created from the previous formats
    Object.keys(this.formats).forEach(key => {
      const format = this.formats[key];
      if (format) {
        const keyboardData = this._formatKeyboardData(format);
        this._createKeyboard(key, this._createRows(keyboardData, key));
      }
    });
    this._formatsChanged = false;
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
            itemSpacing: this.style.keySpacing
          },
          autoResizeWidth: true,
          autoResizeHeight: true,
          neverScroll: true,
          alpha: key === capitalize(this._currentFormat) ? 1 : 0.001
        }
      });
    }
  }

  _createRows(rows = [], keyboard) {
    return rows.map(keys => {
      return {
        type: Row,
        autoResizeHeight: true,
        autoResizeWidth: true,
        centerInParent: this.centerKeys,
        neverScroll: true,
        wrapSelected: this.rowWrap !== undefined ? this.rowWrap : true,
        style: {
          itemSpacing: this.style.keySpacing
        },
        items: this._createKeys(keys, keyboard),
        selectedIndex: this._currentKeyboard?.selected?.selectedIndex || 0
      };
    });
  }

  _createKeys(keys = [], keyboard) {
    return keys.map(keyProps => {
      if (!keyProps) {
        return {
          type: this.keyComponent || Key, // allows use of a custom Key component if specified
          keySpacing: this.style.keySpacing,
          skipFocus: true,
          alpha: 0.01
        };
      }

      const key = {
        type: this.keyComponent || Key, // allows use of a custom Key component if specified
        keySpacing: this.style.keySpacing
      };

      if (typeof keyProps === 'object') {
        // keyId is used to account for style overrides on individual keys,
        // icon updates, and localization
        const keyName = keyProps.keyId || keyProps.title;
        const keyOverrides =
          this.style.keyProps?.[keyboard]?.[keyName] ||
          this.style.keyProps?.[keyName] ||
          {};
        const keyPatch = { ...key, ...keyProps, ...keyOverrides };

        if (keyOverrides?.icon) {
          keyPatch.style = {
            ...keyOverrides.style,
            iconStyle: {
              ...keyOverrides.iconStyle
            }
          };
        }
        return keyPatch;
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

  _formatKeys() {
    Object.keys(this.formats).forEach(format => {
      const element = this.tag(capitalize(format));
      if (element) {
        element.patch({
          alpha: format === this._currentFormat ? 1 : 0.001,
          style: {
            itemSpacing: this.style.keySpacing
          }
        });
        element.items.forEach(row => {
          row.patch({
            style: {
              itemSpacing: this.style.keySpacing
            },
            centerInParent: this.centerKeys,
            wrapSelected: this.rowWrap !== undefined ? this.rowWrap : true
          });
        });
        // force Column to recalculate rows from the centerKeyboard toggle
        element.queueRequestUpdate();
      }
    });
  }

  $toggleKeyboard(next) {
    const nextKeyboard = capitalize(next);
    if (next !== this._currentFormat) {
      const nextKeyboardTag = this.tag(nextKeyboard);

      this.selectKeyOn(nextKeyboardTag);
      this._currentKeyboard.alpha = 0.001;
      nextKeyboardTag.alpha = 1;
      this._currentFormat = next;
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

  get centeredXPos() {
    return (this.style.screenW - this.w) / 2 - this.style.marginX;
  }

  get _shouldUpdateKeyboards() {
    return this.shouldUpdateTheme || this._formatsChanged;
  }

  set defaultFormat(format) {
    this._defaultFormat = format;
  }

  get defaultFormat() {
    return this._defaultFormat || Object.keys(this.formats)[0];
  }

  get _currentKeyboard() {
    return this._currentFormat
      ? this.tag(capitalize(this._currentFormat))
      : null;
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
