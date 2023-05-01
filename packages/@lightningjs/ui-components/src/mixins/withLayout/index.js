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

import { context } from '../../globals';
import { stringifyCompare, getDimensions } from '../../utils';

export default function withLayout(Base) {
  return class extends Base {
    _construct() {
      super._construct && super._construct();
      this._previousDimensionData = null; // Store the previous dimension data to compare next time _updateItemLayout is called
    }

    get itemLayout() {
      return this._itemLayout;
    }

    set itemLayout(v) {
      const componentName =
        this.constructor._componentName || this.constructor.name;
      let itemLayout;
      if (v) {
        itemLayout = JSON.parse(
          JSON.stringify(v, (k, v) => {
            if (k !== 'circle' && v < 0) {
              context.error(
                `itemLayout for ${componentName} received an invalid value of ${v} for ${k}`
              );
              return;
            } else if (k === 'circle') {
              return Boolean(v);
            }
            return v;
          })
        );
      }

      if (!stringifyCompare(this._itemLayout, itemLayout)) {
        if (itemLayout && !itemLayout.upCount) {
          this._originalW = this.w;
          this._originalH = this.h;
          this._itemLayout = {
            w: this._originalW,
            h: this._originalH,
            ...itemLayout
          };
        } else {
          this._itemLayout = itemLayout;
        }

        this._updateItemLayout();
      }
    }

    _allowUpdate() {
      const {
        w = '',
        h = '',
        circle = '',
        ratioX = '',
        ratioY = '',
        upCount = ''
      } = this._itemLayout || {};
      if (!this.style) {
        return false;
      }
      // Store a string representation of all values from previous update to compare and decide if layout should change
      const layoutString =
        Object.values(context.theme.layout).join('') +
        `${w}${h}${circle ? 1 : 0}${ratioX}${ratioY}${upCount}`;
      if (layoutString !== this._previousDimensionData) {
        this._previousDimensionData = layoutString;
        return true;
      }
      return false;
    }

    _updateItemLayout() {
      if (!this._allowUpdate()) return;
      const { w, h } = getDimensions(this.theme, this._itemLayout);
      if (h || w) {
        // If there is not enough information passed in args to calculate item size
        const width = context.theme.layout.screenW;
        const height = context.theme.layout.screenH;
        const calculatedWidth = w || h * (width / height);
        const calculatedHeight = h || w * (height / width);
        this.w =
          this._itemLayout && this._itemLayout.circle
            ? calculatedHeight
            : calculatedWidth; // Width must be set first in order for Cards to be displayed properly
        this.h = calculatedHeight;
        if (this._itemLayout && this._itemLayout.circle && this.style) {
          if (-1 < this._componentStyleSourceProps.indexOf('radius')) {
            this._circleSet = true;
            this._originalRadius = this.style.radius;
            this.style = {
              ...this.style,
              radius: calculatedHeight / 2
            };
          }
        } else if (this._circleSet) {
          // Restore to it's original state
          this.style = {
            ...this.style,
            radius: this._originalRadius
          };
          this._originalRadius = undefined;
          this._circleSet = false;
        }
        this.queueRequestUpdate && this.queueRequestUpdate();
        this.fireAncestors('$itemChanged');
      }
    }
  };
}
