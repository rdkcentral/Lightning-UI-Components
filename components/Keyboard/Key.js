/**
 * Copyright 2021 Comcast Cable Communications Management, LLC
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

import Button from '../Button';

export const KEY_DIMENSIONS = { h: 60, w: 60, padding: 0, fixed: true };
const isUpperCase = string => /^[A-Z]$/.test(string);
export default class Key extends Button {
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

  set announce(value) {
    this._announce = value;
  }

  get announce() {
    if (this._announce) {
      return this._announce;
    }

    if (isUpperCase(this.title)) {
      return `Capital ${this.title}, button`;
    }

    return this.title + ', button';
  }

  set label(label) {
    this.title = label;
  }

  get _sizes() {
    return this.styles.sizes
      ? { ...this.styles.sizes, ...this.sizes }
      : { small: 50, medium: 110, large: 212, xlarge: 350, ...this.sizes };
  }

  _handleEnter() {
    if (this.toggle) {
      this.fireAncestors('$toggleKeyboard', this.toggle);
    }
    this.fireAncestors('$onSoftKey', { key: this.title });
  }
}
