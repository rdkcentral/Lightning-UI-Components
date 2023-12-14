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

import * as styles from './Input.styles.js';
import Button from '../Button';
import TextBox from '../TextBox';

export default class Input extends Button {
  static get __componentName() {
    return 'Input';
  }
  static get __themeStyle() {
    return styles;
  }
  static _template() {
    return {
      ...super._template(),
      Eyebrow: { type: TextBox },
      HelpText: { type: TextBox }
    };
  }

  static get properties() {
    return [
      ...super.properties,
      'actualTitle',
      'cursor',
      'eyebrow',
      'helpText',
      'listening',
      'mask',
      'password',
      'position'
      // TODO: should maybe remove "fixed" as an editable prop to make sure this is never dynamic
    ];
  }

  static get tags() {
    return [
      ...super.tags,
      'Eyebrow',
      'HelpText',
      { name: 'Cursor', path: 'Content.Cursor' },
      { name: 'HiddenContent', path: 'Content.HiddenContent' }
    ];
  }

  _construct() {
    super._construct();
    this._title = '';
    this.actualTitle = '';
    this.position = this.title ? this.title.length : 0;
    this._justify = 'left';
    this._fixed = true;
    this.w = this.style.minWidth;
  }

  $itemChanged() {
    super.$itemChanged();
    this._updateTextWrapper();
    this._updateHiddenContent();
    this._updateCursorPosition();
    this._updateTitleScrollPosition();
  }

  _onTitleTextBoxChanged() {
    this._updateHiddenContent();
  }

  _onHiddenTextBoxChanged() {
    this._updateCursorPosition();
  }

  _update() {
    this._updatePassword(); // need to update title masking before rendering the new title
    super._update();

    this._updateEyebrow();
    this._updateHelpText();

    this._updateTextWrapper();
    this._updateHiddenContent();

    this._updateCursor();
    this._updateCursorListening();
    this._updateCursorBlink();
    this._updateCursorPosition();

    this._updateTitleScrollPosition();
  }

  _updatePassword() {
    this.title = this.password
      ? this.mask.repeat(this.actualTitle.length)
      : this.actualTitle;
  }

  _updateTruncation() {
    // do not add word wrap
    if (this._Title) {
      this._Title.patch({
        style: { textStyle: { ...this.style.textStyle, wordWrap: false } }
      });
    }
  }

  _updateEyebrow() {
    this._Eyebrow.patch({
      content: this.eyebrow,
      style: { textStyle: this.style.eyebrowTextStyle },
      mountY: 1,
      x: this.style.paddingX,
      y: this.y - this.style.paddingY
    });
  }

  _updateHelpText() {
    this._HelpText.patch({
      content: this.helpText,
      style: { textStyle: this.style.helpTextStyle },
      x: this.style.paddingX,
      y: this.y + this.innerH + this.style.paddingY
    });
  }

  _updateTextWrapper() {
    this._TextWrapper.clipping = true;
    this._TextWrapper.w = this._visibleContentWidth;
    if (this._Title) {
      this._TextWrapper.h = this._Title.h;
    }
  }

  _updateHiddenContent() {
    /**
     * Hidden value is used for measuring where the cursor should
     * be positioned when a user changes the cursor position. Since
     * the text is one texture we don't know the exact position of each
     * individual character, so we render a substring version of the text
     * to determine the render width and position the cursor based on that number
     */
    if (!this._HiddenContent) {
      this._Content.patch({
        HiddenContent: {
          type: TextBox,
          mountY: 0.5,
          y: h => h / 2,
          signals: {
            textBoxChanged: '_onHiddenTextBoxChanged'
          }
        }
      });
    }

    const { title: value = '', position, password, mask } = this;

    const textBeforeCursor = password
      ? mask.repeat(value.length).substring(0, position)
      : value.substring(0, position);

    this._HiddenContent.patch({
      style: { textStyle: this.style.textStyle },
      content: textBeforeCursor
    });

    this._HiddenContent._Text &&
      this._HiddenContent._Text.patch({ alpha: 0.001 });
  }

  _updateCursor() {
    if (this.style.cursorStyle && this.style.cursorStyle.blink) {
      if (!this._Cursor) {
        this._Content.patch({
          Cursor: {
            rect: true,
            mountY: 0.5
          }
        });
        this.cursorBlink = this._Cursor.animation({
          duration: 1.5,
          repeat: -1,
          actions: [{ p: 'alpha', v: { 0: 0, 0.5: 1, 1: 0 } }]
        });
      }
      this._Cursor.patch(this.style.cursorStyle);
    }
  }

  _updateCursorListening() {
    if (!this._isDisabledMode) {
      if (this.cursorBlink && !this.cursorBlink.isPlaying()) {
        this.cursorBlink.start();
      }
    } else {
      if (this.cursorBlink)
        this.isCursorActive
          ? this.cursorBlink.start()
          : this.cursorBlink.stop();
    }
    this._Cursor.smooth = {
      color: this.style.cursorStyle.color
    };
  }

  _updateCursorBlink() {
    if (this.cursorBlink) {
      if (this.isCursorActive) {
        this.cursorBlink.start();
      } else {
        this.cursorBlink.stop();
        this._Cursor.patch({ alpha: 0.001 });
      }
    }
  }

  _updateCursorPosition() {
    this._Cursor.x =
      this._titleX +
      (this._isOverflow ? this._TextWrapper.w : this._HiddenContent.w);
  }

  _updateTitleScrollPosition() {
    if (this._Title) {
      this._Title.x = this._isOverflow
        ? this._visibleContentWidth - this._HiddenContent.w
        : 0;
      if (this._HiddenContent && this._TextWrapper) {
        this._HiddenContent.x = this._TextWrapper.x + this._Title.x;
      }
    }
  }

  get _suffixX() {
    const suffixX = this._hasPrefix
      ? this.w - this._paddingLeft - this._paddingRight - this._prefixW
      : this.w - this._paddingLeft - this._paddingRight - this.style.paddingX;
    return suffixX > 0 ? suffixX : 0;
  }

  get isCursorActive() {
    return this.listening && (this._isFocusedMode || this._isUnfocusedMode);
  }

  get _isOverflow() {
    return this._HiddenContent.w > this._visibleContentWidth;
  }

  get _visibleContentWidth() {
    return this._fixedWordWrapWidth;
  }

  set value(value) {
    this.title = this.actualTitle = value;
    this.position = 0;
    this._updatePassword();
  }

  get value() {
    return this.actualTitle;
  }

  clear() {
    if (this.isCursorActive) {
      this.title = this.actualTitle = '';
      this.position = 0;
    }
  }

  insert(content) {
    if (this.isCursorActive) {
      this.actualTitle =
        this.actualTitle.slice(0, this.position) +
        content +
        this.actualTitle.slice(this.position);
      this._updatePassword();
      this.position += content.length;
    }
  }

  backspace() {
    if (this.isCursorActive && this.position > 0) {
      this.actualTitle =
        this.actualTitle.slice(0, this.position - 1) +
        this.actualTitle.slice(this.position);
      this._updatePassword();
      this.position--;
    }
  }

  _handleLeft() {
    if (this._isDisabledMode) {
      return false;
    }
    this.moveLeft();
    if (typeof this.onLeft === 'function') {
      return this.onLeft(this);
    }
    return true;
  }

  _handleRight() {
    if (this._isDisabledMode) {
      return false;
    }
    this.moveRight();
    if (typeof this.onRight === 'function') {
      return this.onRight(this);
    }
    return true;
  }

  moveLeft() {
    const { position } = this;
    if (position >= 0) {
      this.position--;
      return true;
    }
    return false;
  }

  moveRight() {
    const { position, title } = this;
    if (position < title.length) {
      this.position++;
      return true;
    }
    return false;
  }

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    if (this._announce) {
      return this._announce;
    }

    // TODO - Localization?
    // Do we need a locale file with
    // component translations?
    // need to check with Accessibility on what order this should read out in
    if (this.password) {
      return [this.eyebrow, this.helpText];
    } else {
      return [this.eyebrow, 'Input: ' + this.title, this.helpText];
    }
  }
}
