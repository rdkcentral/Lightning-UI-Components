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
 * distributed under the License is distributed on an
 BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import lng from '@lightningjs/core';
import Base from '../Base';
import withStyles from '../../mixins/withStyles';

const styles = {
  w: 64,
  h: 32,
  radius: 16,
  stroke: {
    weight: 4,
    color: 0xffffffff
  },
  knob: {
    size: 16
  },
  checked: {
    background: {
      color: 0xff0ac284
    },
    knob: {
      color: 0xffffffff,
      x: 38
    }
  },
  unchecked: {
    background: {
      color: 0xff1f1f1f
    },
    knob: {
      color: 0xffffffff,
      x: 8
    }
  }
};

export default class Toggle extends withStyles(Base, styles) {
  static _template() {
    return {
      checked: false,
      Container: {
        w: this.styles.w,
        h: this.styles.h,
        texture: lng.Tools.getRoundRect(
          this.styles.w - 8,
          this.styles.h - 4,
          this.styles.radius,
          this.styles.stroke.weight,
          0,
          true,
          0xffffffff
        ),
        Stroke: {
          w: this.styles.w,
          h: this.styles.h,
          texture: lng.Tools.getRoundRect(
            this.styles.w,
            this.styles.h,
            this.styles.radius,
            this.styles.stroke.weight,
            this.styles.stroke.color,
            false,
            false
          )
        },
        Knob: {
          zIndex: 2,
          x: 12,
          y: 7,
          texture: lng.Tools.getRoundRect(
            this.styles.knob.size,
            this.styles.knob.size,
            this.styles.knob.size / 2,
            0,
            0,
            true,
            0xffffffff
          )
        }
      }
    };
  }

  static get tags() {
    return [
      'Container',
      {
        name: 'Knob',
        path: 'Container.Knob'
      }
    ];
  }

  _construct() {
    super._construct();
    this._checkedStyles = this.styles.checked;
    this._uncheckedStyles = this.styles.unchecked;
  }

  _init() {
    this._update();
  }

  toggle() {
    this.checked = !this.checked;
    this._update();
    return this;
  }

  _handleEnter() {
    if (typeof this.onEnter === 'function') {
      return this.onEnter(this);
    } else {
      this.toggle();
    }
    return false;
  }

  _update() {
    const { checked } = this;
    const style = checked ? this._checkedStyles : this._uncheckedStyles;
    this._Knob.smooth = {
      x: style.knob.x,
      color: style.knob.color
    };
    this._Container.smooth = {
      color: style.background.color
    };
  }
}
