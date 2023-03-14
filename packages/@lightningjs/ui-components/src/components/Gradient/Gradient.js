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
import * as styles from './Gradient.styles.js';

export default class Gradient extends Base {
  static get __componentName() {
    return 'Gradient';
  }

  static get __themeStyle() {
    return styles;
  }

  _update() {
    this.patch({
      rect: true,
      rtt: true,
      colorTop: this.style.gradientTop,
      colorBottom: this.style.gradientColor,
      texture: lng.Tools.getRoundRect(this.w, this.h, this.style.radius)
    });
  }
}
