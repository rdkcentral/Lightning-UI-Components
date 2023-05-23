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

import TextBox from '../TextBox';
import Row from '../Row';

import * as styles from './TitleRow.styles.js';

export default class TitleRow extends Row {
  static get __componentName() {
    return 'TitleRow';
  }

  static get __themeStyle() {
    return styles;
  }

  static _template() {
    return {
      Title: {
        type: TextBox,
        signals: {
          textBoxChanged: '_titleLoaded'
        }
      },
      ...super._template(),
      autoResizeHeight: false
    };
  }

  static get properties() {
    return [...super.properties, 'title'];
  }

  static get tags() {
    return [...super.tags, 'Title'];
  }

  _titleLoaded() {
    this._updateRow();
  }

  _update() {
    // debugger
    super._update();
    this._updateTitle();
    this._updateRow();
  }

  _updateTitle() {
    if (this.title) {
      this._Title.patch({
        x: this.style.titleMarginLeft,
        content: this.title,
        style: { textStyle: this.style.titleTextStyle }
      });
    } else if (this._Title) {
      this._Title.patch({
        h: 0,
        content: ''
      });
    }
  }

  _updateRow() {
    this.Items.patch({
      y: this._Title.finalH + this.style.rowMarginTop
    });
    this.patch({
      w: this.w || this.style.w,
      h: this.Items.y + this.Items.h
    });
  }

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    return this._announce || (this._Title && this._Title.announce);
  }
}
