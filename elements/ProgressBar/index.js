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

import lng from '@lightningjs/core';
import { withStyles } from '../../mixins';
import { getValidColor } from '../../Styles';
import Base from '../Base';
import styles from './ProgressBar.styles';

export default class ProgressBar extends withStyles(Base, styles) {
  static _template() {
    return {
      Bar: { zIndex: 1 },
      Progress: { alpha: 0, zIndex: 2 }
    };
  }

  static get properties() {
    return [
      'animationDuration',
      'barColor',
      'progress',
      'progressColor',
      'radius'
    ];
  }

  static get tags() {
    return ['Bar', 'Progress'];
  }

  _construct() {
    super._construct();
    this._w = this.styles.w;
    this.h = this.styles.h;
    this._progress = 0;
    this._radius = this.styles.radius;
    this._progressColor = this.styles.progressColor;
    this._barColor = this.styles.barColor;
    this._animationDuration = 0;
  }

  _init() {
    this._update();
  }

  set w(w) {
    if (this._w !== w) {
      this._w = w;
      this._update();
    }
  }

  get w() {
    return this._w;
  }

  _update() {
    const p = this.w * this.progress;
    const w = p <= 0 ? 0 : Math.min(p, this._w);

    this._Bar.texture = lng.Tools.getRoundRect(
      // getRoundRect adds 2 to the width
      this.w - 2,
      this.h,
      this.radius,
      0,
      0,
      true,
      this.barColor
    );

    this._Progress.texture = lng.Tools.getRoundRect(
      w + 1,
      this.h,
      this.radius,
      0,
      0,
      true,
      this.progressColor
    );

    this._Progress.smooth = {
      w: [w, { duration: this._animationDuration }],
      alpha: Number(w > 0)
    };
  }

  _setBarColor(barColor) {
    return getValidColor(barColor);
  }

  _setProgressColor(progressColor) {
    return getValidColor(progressColor);
  }
}
