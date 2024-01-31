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

import {
  generateComponentStyleSource,
  getStyleChainMemoized,
  clearStyleChainCache,
  generateStyle,
  getHash
} from './utils.js';
import { context } from '../../globals/index.js';
import { clone } from '../../utils/index.js';
import cache from './cache.js';
import lng from '@lightningjs/core';

export default class StyleManager extends lng.EventEmitter {
  constructor({ component = {} } = {}) {
    super(...arguments);
    this.init(component);
  }

  init(component) {
    this.component = component;
    this._style = {}; // This will be the source of truth for the style manager
    // Initial update is not debounced
    this.update();
  }

  update() {
    if (!this.component) return;
    const { mode, tone } = this.component; // Move to getter
    let styleSource = cache.get(this.component.constructor);
    console.log('asdfasdf', this.component._componentLevelStyle)
    if (!styleSource) {
      styleSource = generateComponentStyleSource({
        alias: this.component.constructor.aliasStyles,
        componentConfig: this.component._componentConfig,
        inlineStyle: this.component._componentLevelStyle,
        styleChain: getStyleChainMemoized(this.component),
        theme: this.component.theme
      });
      cache.set(this.component.constructor, styleSource);
    } else {
      // Return from cache
      console.log('return from cache');
    }

    const style = generateStyle(this.component, styleSource);
    this._style = style;

    this.emit('styleUpdate', this.style);
  }

  /**
   * Accessors
   */
  set style(v) {
    context.warn('styleManager: Cannot mutate style directly');
  }

  get style() {
    return this._style;
  }
}
