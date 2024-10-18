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

import Surface from '../Surface/Surface';
import ScrollWrapper from '../ScrollWrapper/ScrollWrapper.js';
import * as styles from './TextMagnifier.styles.js';

export default class TextMagnifier extends Surface {
  static get __componentName() {
    return 'TextMagnifier';
  }

  static get __themeStyle() {
    return styles;
  }

  static get properties() {
    return ['location'];
  }

  get mode() {
    return 'unfocused';
  }

  set mode(_) {
    // Mode is disabled, no action needed
  }

  get content() {
    return this._content;
  }

  set content(value) {
    if (this._content !== value) {
      this._content = value;
      this._updateScrollWrapper();
    }
  }

  get _totalHeight() {
    const baseHeight =
      this.style.textStyle.lineHeight + Math.max(...this._radius) * 2; // Accommodate for all configurations of radii
    return Math.max(baseHeight, this.style.textStyle.lineHeight * 2); // Ensure the fade clears
  }

  get _radius() {
    return this.location === 'top'
      ? [0, 0, this.style.radius, this.style.radius]
      : [this.style.radius, this.style.radius, 0, 0];
  }

  _construct() {
    super._construct();
    this._location = 'top';
    this._content = null;
  }

  static _template() {
    return {
      ...super._template(),
      ScrollWrapper: {
        type: ScrollWrapper,
        autoScroll: true
      }
    };
  }

  _update() {
    const renderPrecision = this.stage.getRenderPrecision();
    const stageWidth = this.stage.w / renderPrecision;

    this.patch({
      w: stageWidth - this.style.gutterX * 2,
      h: this._totalHeight,
      x: this.style.gutterX,
      mountY: this.location === 'top' ? 0 : 1,
      y: this.location === 'top' ? 0 : this.stage.h / renderPrecision,
      zIndex: this.style.zIndex
    });

    this._updateScrollWrapper();
    super._update();
  }

  _updateScrollWrapper() {
    const yCenter = this._totalHeight / 2;
    const yOffset = yCenter - this.style.textStyle.fontSize / 2;
    const adjustedHeight = this._totalHeight - yOffset;
    const radius = Math.max(...this._radius);
    const gutterX = this.style.gutterX;
    const patchWidth = this.w - Math.max(radius, gutterX) * 2;
    const patchX = Math.max(radius, gutterX);

    this.tag('ScrollWrapper').patch({
      alpha: this._content && this._content.length ? 1 : 0,
      content: this._content,
      h: adjustedHeight,
      w: patchWidth,
      x: patchX,
      y: yOffset,
      style: {
        textStyle: this.style.textStyle,
        fadeHeight: this.style.textStyle.lineHeight,
        contentMarginTop: 0,
        contentMarginLeft: 0
      }
    });
  }
}
