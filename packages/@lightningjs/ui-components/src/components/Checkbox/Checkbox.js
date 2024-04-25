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
import Icon from '../Icon';
import Base from '../Base';
import * as styles from './Checkbox.styles';
import { getMaxRoundRadius } from '../../utils';

export default class Checkbox extends Base {
  static get __componentName() {
    return 'Checkbox';
  }

  static get __themeStyle() {
    return styles;
  }

  static _template() {
    const center = { mount: 0.5, x: w => w / 2, y: h => h / 2 };
    return {
      Body: {
        rtt: true, // ensures the background color doesn't bleed into the checkbox icon when disabled
        ...center,
        Check: {
          type: Icon,
          ...center,
          alpha: 0
        }
      },
      Stroke: center
    };
  }

  static get tags() {
    return ['Check', 'Body', 'Stroke'];
  }

  static get properties() {
    return ['checked'];
  }

  static get aliasStyles() {
    return [
      { prev: 'checkSrc', curr: 'icon' },
      { prev: 'checkH', curr: 'iconHeight' },
      { prev: 'checkW', curr: 'iconWidth' },
      { prev: 'checkHeight', curr: 'iconHeight' },
      { prev: 'checkWidth', curr: 'iconWidth' }
    ];
  }

  _update() {
    this._updateBody();
    this._updateStroke();
    this._updateCheck();
    if (this._checkedChanged) {
      this.fireAncestors('$announce', this.announce);
      this._checkedChanged = false;
    }
    this._updateOpacity();
  }

  _updateCheck() {
    this._Check.patch({
      w: this.style.iconWidth,
      h: this.style.iconHeight,
      icon: this.style.icon,
      style: { color: this.style.checkColor }
    });

    const alphaPatch = {
      alpha: this.checked ? 1 : 0
    };

    this.applySmooth(this._Check, alphaPatch);
  }

  _updateBody() {
    const bodyColor = this.checked
      ? this.style.backgroundColorChecked
      : this.style.backgroundColor;

    const width = this.w - this.style.strokeWidth * 2 - 2;
    const height = this.h - this.style.strokeWidth * 2 - 2;

    this._Body.patch({
      texture: lng.Tools.getRoundRect(
        // Compensating for the extra 2 pixels getRoundRect adds
        width,
        height,
        getMaxRoundRadius(
          this.style.radius,
          width,
          height,
          this.style.strokeWidth * 2 - 2
        ),
        0,
        null,
        true,
        bodyColor
      )
    });
  }

  _updateStroke() {
    this._Stroke.patch({
      texture: lng.Tools.getRoundRect(
        // Compensating for the extra 2 pixels getRoundRect adds
        this.w - 2,
        this.h - 2,
        getMaxRoundRadius(this.style.radius, this.w, this.h, 0),
        this.style.strokeWidth,
        this.style.strokeColor,
        false
      )
    });
  }

  _updateOpacity() {
    this.applySmooth(this, { alpha: this.style.alpha });
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
