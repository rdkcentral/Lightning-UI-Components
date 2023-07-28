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

import lng from '@lightningjs/core';
import Base from '../Base';
import * as styles from './Icon.styles.js';
import { context } from '../../globals';
import { getValidColor } from '../../utils';
import CustomImageTexture from '../../textures/CustomImageTexture';

export default class Icon extends Base {
  static get __componentName() {
    return 'Icon';
  }

  static get __themeStyle() {
    return styles;
  }

  static get properties() {
    return ['icon', 'fixed', 'color'];
  }

  _init() {
    this.on('txLoaded', () => {
      if (!this.fixed) {
        this._notify.bind(this)();
      }
    });
    this.on('txError', this._handleTxtError.bind(this));
  }

  _getColor() {
    return this._color || this.style.color;
  }

  _notify() {
    this.w = this.finalW;
    this.h = this.finalH;
    this.signal('itemChanged', this);
    this.fireAncestors('$itemChanged');
  }

  // eslint-disable-next-line no-unused-vars
  _handleTxtError(error) {
    context.error(`Unable to load icon ${this._icon}`);
    this._icon = null;
    this.texture = null;
  }

  _update() {
    if (!this._icon) {
      this.texture = null;
      return;
    }
    this.patch(this._iconPatch);
  }

  get _iconPatch() {
    const [isSvgTag, isSvgURI] = [/^<svg.*<\/svg>$/, /\.svg$/].map(regex =>
      RegExp.prototype.test.bind(regex)
    );
    let texture;
    if (isSvgTag(this.icon)) {
      texture = lng.Tools.getSvgTexture(
        `data:image/svg+xml,${encodeURIComponent(this.icon)}`,
        this.w,
        this.h
      );
    } else if (isSvgURI(this.icon)) {
      texture = lng.Tools.getSvgTexture(this.icon, this.w, this.h);
    } else {
      texture = {
        type: CustomImageTexture,
        w: this.w,
        h: this.h,
        src: this.icon
      };
    }
    const color = getValidColor(this.color || this.style.color);
    const shader =
      this.radius || this.style.radius
        ? {
            radius: this.radius || this.style.radius,
            type: lng.shaders.RoundedRectangle
          }
        : undefined;
    return {
      texture,
      shader,
      w: this.w,
      h: this.h,
      colorUl: color,
      colorUr: color,
      colorBl: color,
      colorBr: color
    };
  }
}
