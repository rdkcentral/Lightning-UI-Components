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

import lng from '@lightningjs/core';
import Base from '../Base';
import * as styles from './Icon.styles.js';
import { context } from '../../globals';
import { stringifyCompare, getValidColor } from '../../utils';
import CustomImageTexture from '../../textures/CustomImageTexture';

export default class Icon extends Base {
  static get __componentName() {
    return 'Icon';
  }

  static get __themeStyle() {
    return styles;
  }

  static get properties() {
    return ['icon', 'fixed'];
  }

  _init() {
    this.on('txLoaded', () => {
      if (!this.fixed) {
        this._notify.bind(this)();
      }
    });
    this.on('txError', this._handleTxtError.bind(this));
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
    const { icon, w, h } = this;
    if (
      !this.prevTemplateParams ||
      !stringifyCompare({ icon, w, h }, this.prevTemplateParams)
    ) {
      this.prevTemplateParams = { icon, w, h };
      const template = getIconTemplate(icon, w, h);
      this.patch(template);
      // only update color if color style is defined in theme
      if (!template.texture && this.style.color) {
        this.smooth = {
          color: getValidColor(this.style.color)
        };
      }
    } else if (this.style.color) {
      this.color = getValidColor(this.style.color);
    }

    // setting the radius on the Icon component
    if (this.radius || this.style.radius) {
      this.shader = {
        radius: this.radius || this.style.radius,
        type: lng.shaders.RoundedRectangle
      };
    } else {
      this.shader = undefined;
    }
  }
}

function getIconTemplate(icon, w, h) {
  const template = { w, h };
  template.texture = {
    type: CustomImageTexture,
    w,
    h,
    src: icon
  };
  return template;
}
