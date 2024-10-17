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

  set mode(value) {
    // Disable Mode
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

  _construct() {
    super._construct();
    this._location = 'top';
    this._content = null;
  }

  static _template() {
    return {
      ...super._template(),
      ScrollWrapper: {
        type: ScrollWrapper
      }
    };
  }

  _focusChange() {
    debugger;
  }

  _update() {
    const stageWidth = this.stage.w / this.stage.getRenderPrecision();
    this.patch({
      w: stageWidth - this.style.marginX * 2,
      h: this.style.h,
      x: this.style.marginX,
      mountY: this.location === 'top' ? 0 : 1,
      y:
        this.location === 'top'
          ? -this.style.radius
          : this.stage.h / this.stage.getRenderPrecision() + this.style.radius
    });

    this._updateScrollWrapper();
    super._update();
  }

  _updateScrollWrapper() {
    this.tag('ScrollWrapper').patch({
      w: this.w - this.style.gutterX * 2,
      h: this.style.h - this.style.gutterY * 2,
      y: this.style.gutterY,
      style: { textStyle: this.style.textStyle },
      content: this._content,
      alpha: this.content && this.content.length ? 1 : 0
    });
  }
}
