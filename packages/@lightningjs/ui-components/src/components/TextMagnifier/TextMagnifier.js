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
// import ScrollWrapper from '../ScrollWrapper/ScrollWrapper.js';
import * as styles from './TextMagnifier.styles.js';

export default class TextMagnifier extends Surface {
  static get __componentName() {
    return 'TextMagnifier';
  }

  static get __themeStyle() {
    return styles;
  }

  _construct() {
    this._tone = 'inverse';
    super._construct();
  }

  set mode(v) { }

  get mode() {
    return 'unfocused';
  }

  _update() {
    this.patch({
      y: this.stage.h / this.stage.getRenderPrecision() + this.style.radius,
      mountY: 1
    });

    super._update();
  }

  // set content(text) {
  //   let trimmedText = text.trim();
  //   if (trimmedText.charAt(trimmedText.length - 1) === '0') {
  //     trimmedText = trimmedText.slice(0, -1);
  //   }
  //   this.tag('Text').content = trimmedText.split(',').filter(Boolean).join(',');
  // }
}
