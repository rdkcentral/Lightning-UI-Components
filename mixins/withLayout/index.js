/**
 * Copyright 2022 Comcast Cable Communications Management, LLC
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

import { getDimensions, SCREEN } from '../../Styles/Layout';
import { stringifyCompare } from '../../utils';

export default function withLayout(Base) {
  return class extends Base {
    get itemLayout() {
      return this._itemLayout;
    }

    set itemLayout(itemLayout) {
      if (!stringifyCompare(this._itemLayout, itemLayout)) {
        this._itemLayout = itemLayout;
        const { w, h } = getDimensions(itemLayout);
        // If there is not enough information passed in args to calculate item size
        // Do not try to set h/w this will cause issues sizing the focus ring
        if (h || w) {
          const { w: width, h: height } = SCREEN;
          this.h = h || w * (height / width);
          this.w = w || h * (width / height);
          super._update && super._update();
        }
      }
    }
  };
}
