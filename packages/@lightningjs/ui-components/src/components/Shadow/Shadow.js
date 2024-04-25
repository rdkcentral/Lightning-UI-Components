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
import * as styles from './Shadow.styles';
import { getMaxRoundRadius } from '../../utils';

export default class Shadow extends Base {
  static get __componentName() {
    return 'Shadow';
  }

  static get __themeStyle() {
    return styles;
  }
  static get properties() {
    return ['maskShadow'];
  }
  static get tags() {
    return ['Frame', { name: 'Shadow', path: 'Frame.Shadow' }];
  }

  _updateFocusStyle() {
    if (!this._Shadow) return;
    // TODO: think about how does the user know which styles are handled in the focus transition.
    this.applySmooth(
      this._Shadow,
      { alpha: this.style.alpha, y: this.style.offsetY, x: this.style.offsetX },
      {
        alpha: [this.style.alpha, this.style.animation],
        y: [this.style.offsetY, this.style.animation],
        x: [this.style.offsetX, this.style.animation]
      }
    );
  }

  _update() {
    // To behave like Figma's shadow settings, blur value is added to width and height to expand shadow size
    const shadowSize = this.style.spread + this.style.blur * 2; // size increase based on shadow params
    const holepunchError = 4; // extra value to tighten holepunch area so you don't see sliver of extra space

    // TODO: Need to know which mode style has the largest offset values, could refactor
    const extraBoundsY = this.style.maxOffsetY;
    const extraBoundsX = this.style.maxOffsetX;
    const radius = getMaxRoundRadius(this.style.radius, this.w, this.h);

    this.patch({
      Frame: {
        w: this.w + shadowSize * 2 + extraBoundsX,
        h: this.h + shadowSize * 2 + extraBoundsY,
        x: (this.w + extraBoundsX) / 2,
        y: (this.h + extraBoundsY) / 2,
        mount: 0.5,

        // maskShadow prop enables a holepunch shader to mask out the parent component shape
        rtt: this.maskShadow,
        shader: this.maskShadow
          ? {
              type: lng.shaders.Hole,
              w: this.w - holepunchError,
              h: this.h - holepunchError,
              x: shadowSize + holepunchError / 2,
              y: shadowSize + holepunchError / 2,
              radius
            }
          : undefined,
        Shadow: {
          color: this.style.color,
          texture: lng.Tools.getShadowRect(
            // Underlying getShadowRect function adds blur to the canvas size, so we don't need to add it like above
            this.w + this.style.spread * 2,
            this.h + this.style.spread * 2,
            radius,
            this.style.blur
          )
        }
      }
    });

    // Set to should smooth after initial shadow patch has been created
    if (this.shouldSmooth === undefined) {
      this.shouldSmooth = true;
    }

    this._updateFocusStyle();
  }
}
