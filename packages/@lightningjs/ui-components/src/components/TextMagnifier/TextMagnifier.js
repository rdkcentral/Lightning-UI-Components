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

  static _template() {
    return {
      ...super._template(),
      ScrollWrapper: {
        type: ScrollWrapper
      }
    };
  }

  _construct() {
    this._location = 'top';
    super._construct();
  }

  set mode(value) {
    // Mode is always unfocused
  }

  get mode() {
    return 'unfocused';
  }

  static get properties() {
    return ['location'];
  }

  get content() {
    return this._content;
  }

  set content(value) {
    this._createScrollWrapper();
    this.tag('ScrollWrapper').content = value;
    this._content = value;
  }

  _update() {
    if (this.location === 'top') {
      this.y = -this.style.radius;
    } else {
      this.patch({
        y: this.stage.h / this.stage.getRenderPrecision() + this.style.radius,
        mountY: 1
      });
    }
    //this.application.focusPath[this.application.focusPath.length - 1].core.renderContext

    this._createScrollWrapper();
    super._update();
  }

  _createScrollWrapper() {
    this.tag('ScrollWrapper').patch({
      type: ScrollWrapper,
      w: this.style.w - this.style.gutterX * 2,
      h: this.style.h - this.style.gutterY * 2,
      y: this.style.gutterY,
      style: { textStyle: this.style.textStyle }
    });
  }
}
