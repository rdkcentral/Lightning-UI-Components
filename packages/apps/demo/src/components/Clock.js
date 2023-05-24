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

import { TextBox } from '@lightningjs/ui-components';

export default class Clock extends TextBox {
  _construct() {
    super._construct();
    this._startTime();
  }

  _update() {
    this.style.textStyle = this.theme.typography.headline1;
    super._update();
  }

  _startTime() {
    const today = new Date();
    const h = today.getHours();
    let m = today.getMinutes();
    m = this._checkTime(m);
    this.content = h + ':' + m;
    setTimeout(this._startTime.bind(this), 1000);
  }

  _checkTime(i) {
    if (i < 10) {
      i = '0' + i;
    } // add zero in front of numbers < 10
    return i;
  }
}
