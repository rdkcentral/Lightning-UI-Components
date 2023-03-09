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

import Button from '../Button';
import * as styles from './Key.styles.js';
import Icon from '../Icon';

const isUpperCase = string => /^[A-Z]$/.test(string);
const isAlphaChar = string => /^[A-Za-z]$/.test(string);

// TODO: Post theming when we address language/locale issues this could be a configurable object
const alphaNato = {
  a: 'alpha',
  b: 'bravo',
  c: 'charlie',
  d: 'delta',
  e: 'echo',
  f: 'foxtrot',
  g: 'golf',
  h: 'hotel',
  i: 'india',
  j: 'juliett',
  k: 'kilo',
  l: 'lima',
  m: 'mike',
  n: 'november',
  o: 'oscar',
  p: 'papa',
  q: 'quebec',
  r: 'romeo',
  s: 'sierra',
  t: 'tango',
  u: 'uniform',
  v: 'victor',
  w: 'whiskey',
  x: 'x-ray',
  y: 'yankee',
  z: 'zulu'
};

function getNato(title) {
  if (isAlphaChar(title)) {
    return `${title}, ${alphaNato[title.toLowerCase()]}`;
  }

  return title;
}

export default class Key extends Button {
  static get __componentName() {
    return 'Key';
  }

  static get __themeStyle() {
    return styles;
  }

  static get properties() {
    return [...super.properties, 'icon', 'size', 'toggle'];
  }

  _construct() {
    super._construct();
    this._size = 'sm';
    this._fixed = true;
  }

  _update() {
    this.w = this.style.sizes[this.size] || this.style.sizes.sm;
    this._updatePrefixStyle();
    super._update();
  }

  _updatePrefixStyle() {
    if (this._prefix && this.icon) {
      this._updatePrefixObj(this.icon, { style: this.style.iconStyle });
    }
  }

  _updatePrefixObj(icon, props = {}) {
    this._prefix = {
      type: Icon,
      icon,
      w: this.style.iconW,
      h: this.style.iconH,
      ...props
    };
  }

  _setIcon(icon) {
    if (icon) {
      this._updatePrefixObj(icon, { style: this.style.iconStyle });
    } else {
      this._prefix = icon;
    }

    return icon;
  }

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    if (this._announce) {
      return this._announce;
    }

    if (isUpperCase(this.title)) {
      return `Capital ${getNato(this.title)}, button`;
    }

    return getNato(this.title) + ', button';
  }

  _handleEnter() {
    if (typeof this.onEnter === 'function') {
      return this.onEnter(this);
    } else {
      if (this.toggle) {
        this.fireAncestors('$toggleKeyboard', this.toggle);
      }
      this.fireAncestors('$onSoftKey', {
        key: this.keyId || this.title,
        toggle: this.toggle
      });
    }

    return false;
  }
}
