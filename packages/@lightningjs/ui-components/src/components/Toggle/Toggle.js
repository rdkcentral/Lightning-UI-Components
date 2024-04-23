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
import * as styles from './Toggle.styles';
import { getMaxRoundRadius } from '../../utils';

export default class Toggle extends Base {
  static get __componentName() {
    return 'Toggle';
  }

  static get __themeStyle() {
    return styles;
  }

  static _template() {
    return {
      Container: {
        Stroke: {},
        Knob: {}
      }
    };
  }

  static get tags() {
    return [
      'Container',
      {
        name: 'Knob',
        path: 'Container.Knob'
      },
      {
        name: 'Stroke',
        path: 'Container.Stroke'
      }
    ];
  }

  static get properties() {
    return ['checked'];
  }

  static get aliasStyles() {
    return [{ prev: 'strokeWeight', curr: 'strokeWidth' }];
  }

  _construct() {
    super._construct && super._construct();
    this._checked = false;
  }

  _update() {
    this._updateKnobPosition();
    this._updateColors();
    this._updateContainer();
    this._updateStroke();
    this._updateKnob();
    if (this._checkedChanged) {
      this.fireAncestors('$announce', this.announce);
      this._checkedChanged = false;
    }
  }

  _updateKnobPosition() {
    const { knobPadding, knobWidth, strokeWidth } = this.style;

    this.applySmooth(this._Knob, {
      x: this.checked
        ? this.w - strokeWidth - knobPadding - knobWidth
        : strokeWidth + knobPadding
    });
  }

  _updateColors() {
    const {
      backgroundColor,
      backgroundColorChecked,
      knobColor,
      knobColorChecked
    } = this.style;

    const currentKnobColor = this.checked ? knobColorChecked : knobColor;
    const containerColor = this.checked
      ? backgroundColorChecked
      : backgroundColor;

    this.applySmooth(this._Knob, { color: currentKnobColor });
    this.applySmooth(this._Container, { color: containerColor });
  }

  _updateContainer() {
    const { knobRadius, knobPadding, strokeRadius, strokeWidth } = this.style;

    const radius =
      strokeRadius !== undefined
        ? strokeRadius === 0
          ? strokeRadius
          : Math.max(0, strokeRadius - strokeWidth)
        : Math.max(0, knobRadius + knobPadding + strokeWidth);

    this._Container.patch({
      w: this.w,
      h: this.h,
      texture: lng.Tools.getRoundRect(
        // Compensating for the extra 2 pixels getRoundRect adds
        this.w - strokeWidth * 2 - 2,
        this.h - strokeWidth * 2 - 2,
        getMaxRoundRadius(radius, this.w, this.h, 0),
        strokeWidth,
        0,
        true,
        false
      )
    });
  }

  _updateStroke() {
    const { knobRadius, knobPadding, strokeColor, strokeRadius, strokeWidth } =
      this.style;

    this._Stroke.patch({
      w: this.w,
      h: this.h,
      texture: lng.Tools.getRoundRect(
        // Compensating for the extra 2 pixels getRoundRect adds
        this.w - 2,
        this.h - 2,
        strokeRadius !== undefined
          ? getMaxRoundRadius(strokeRadius, this.w, this.h, 0)
          : getMaxRoundRadius(
              knobRadius,
              this.w - knobPadding * 2 - 2,
              this.h - knobPadding * 2 - 2,
              0
            ) +
              knobPadding +
              strokeWidth,
        strokeWidth,
        strokeColor,
        false,
        false
      )
    });
  }

  _updateKnob() {
    const { knobHeight, knobWidth, knobRadius } = this.style;

    this._Knob.patch({
      zIndex: 2,
      y: (this.h - knobHeight) / 2,
      texture: lng.Tools.getRoundRect(
        // Compensating for the extra 2 pixels getRoundRect adds
        knobWidth - 2,
        knobHeight - 2,
        getMaxRoundRadius(knobRadius, knobWidth, knobHeight, 0),
        0,
        0,
        true,
        false
      )
    });
  }

  _setChecked(checked) {
    this._checkedChanged = checked !== this._checked;
    return checked;
  }

  toggle() {
    if (!this._isDisabledMode) {
      this.checked = !this.checked;
    }
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

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    return this._announce || (this.checked ? 'Checked' : 'Unchecked');
  }
}
