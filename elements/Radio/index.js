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
import Base from '../Base';
import { withStyles } from '../../mixins';

const styles = {
  w: 32,
  h: 32,
  radius: 16,
  background: { color: 0xff1f1f1f },
  stroke: { color: 0xffffffff, width: 4 },
  knob: { color: 0xffffffff, h: 16, w: 16 }
};

export default class Radio extends withStyles(Base, styles) {
  static _template() {
    return {
      w: this.styles.w,
      h: this.styles.h,
      texture: lng.Tools.getRoundRect(
        this.styles.w,
        this.styles.h,
        this.styles.radius,
        this.styles.stroke.width,
        this.styles.stroke.color,
        true,
        this.styles.background.color
      ),
      Knob: {
        w: this.styles.knob.w,
        h: this.styles.knob.h,
        mount: 0.5,
        x: w => w / 2,
        y: h => h / 2,
        alpha: 0,
        texture: lng.Tools.getRoundRect(
          this.styles.knob.w,
          this.styles.knob.h,
          this.styles.knob.w / 2,
          false,
          false,
          true,
          this.styles.knob.color
        )
      }
    };
  }

  static get tags() {
    return ['Knob'];
  }

  _handleEnter() {
    this.toggle();
  }

  _update() {
    const { checked } = this;
    this._Knob.smooth = { alpha: checked ? 1 : 0 };
  }

  toggle() {
    this.checked = !this.checked;
    this._update();
    return this;
  }
}
