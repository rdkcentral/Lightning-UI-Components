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
  generateStyle,
  replaceAliasValues
} from './utils.js';
import { context } from '../../globals/index.js';
import { debounce } from '../../utils/index.js';
import cache from './cache.js'
import lng from '@lightningjs/core';

export default class StyleManager extends lng.EventEmitter {
  /**
   * Create a Style Manager instance.
   * @param {Object} options - The options object.
   * @param {Object} options.component - The LightningJS component instance.
   */
  constructor({ component = {} } = {}) {
    super(...arguments);
    // Bind the _onThemeUpdate method to the current instance of the StyleManager class.
    this._boundThemeUpdate = this._onThemeUpdate.bind(this);
    context.on('themeUpdate', this._boundThemeUpdate);

    this.component = component;
    this._style = {}; // This will be the source of truth for the style manager
    // Initial update is not debounced
    this._update();

    if (typeof process === 'object' && process?.env?.NODE_ENV === 'test') {
      this.update = this._update; // Avoid race conditions in tests
    } else {
      // Debounce the update method so that it's called only once during rapid style changes.
      this.update = debounce(() => {
        this._update();
      }, 0);
    }
  }

  /**
   * Destroy the Style Manager instance and remove the themeUpdate event listener.
   */
  destroy() {
    this._cleanupCache();
    // Remove event listeners and subscriptions
    context.off('themeUpdate', this._boundThemeUpdate);

    // Set references to null
    this._styleCache = null;
    this._boundThemeUpdate = null;
    this.component = null;
  }

  /**
   * Handler for the themeUpdate event. Clears the cache and updates the component's style.
   * @private
   */
  _onThemeUpdate() {
    // Why does this run so much
    cache.clear();
    this.update();
  }

  /**
   * Clears the source cache.
   */
  clearSourceCache() {
    if (!this.component) return;
    const sourceKey = this._generateCacheKey('styleSource');
    this._removeCache(sourceKey);
  }

  /**
   * Clears the style cache.
   */
  clearStyleCache() {
    if (!this.component) return;
    const { tone, mode } = this.component;
    const styleKey = this._generateCacheKey(`style_${mode}_${tone}`);
    cache.delete(styleKey);
  }

  /**
   * Generates a cache key.
   * @param {string} name - The name of the cache.
   * @returns {string} - The generated cache key.
   */
  _generateCacheKey(name) {
    const cacheKey = [
      name,
      this.component.constructor.__componentName,
      this._hasComponentStyle ? this.component.__id : null
    ]
      .filter(Boolean)
      .join('_');
    return cacheKey;
  }

  /**
   * Adds a cache.
   * @param {string} name - The name of the cache.
   * @param {object} payload - The payload of the cache.
   */
  _addCache(name, payload) {
    const key = this._generateCacheKey(name);
    const existing = cache.get(key);
    cache.set(key, {
      ids: [...new Set([...(existing?.ids || []), this.component.__id])], // Add current id and remove duplicates
      payload
    });
  }

  /**
   * Called when component is destroyed
   */
  _cleanupCache() {
    if (!this.component) return;
    cache.forEach(({ ids, payload }, name) => {
      const removeIndex = ids && ids.length && ids.indexOf(this.component.__id);
      if (removeIndex > -1 && ids.length > 1) {
        cache.set(name, {
          ids: ids.slice(0, removeIndex).concat(ids.slice(removeIndex + 1)),
          payload
        });
      } else if (removeIndex > -1) {
        cache.delete(name);
      }
    });
  }

  /**
   * Removes a cache.
   * @param {string} name - The name of the cache.
   */
  _removeCache(name) {
    cache.delete(name);
  }

  /**
   * Gets a cache.
   * @param {string} name - The name of the cache.
   * @returns {object|boolean} - The cache or false if the component has inline styles.
   */
  _getCache(name) {
    const key = this._generateCacheKey(name);
    return cache.get(key);
  }

  /**
   * Updates the component's style based on changes in tone, mode, theme, and `_componentLevelStyle`.
   * Clears the style cache if tone or mode have changed, and clears the source cache if `_componentLevelStyle` has changed.
   * Generates the component's style source and style objects, saves them to the cache, and emits a `styleUpdate` event with the updated style.
   * @returns {Promise<void>}
   */
  async _update() {
    if (!this.component) return;

    const { mode, tone } = this.component;

    try {
      // Attempt to fetch style source from cache
      let styleSource = this._getCache('styleSource')?.payload;
      if (!styleSource) {
        // Style source does not exist so it will need to be generated. We attempt to run this function only when necessary for optimal performance
        styleSource = generateComponentStyleSource(this.component);
        this._addCache('styleSource', styleSource);
      }

      // Attempt to fetch style from cache
      let style = this._getCache(`style_${mode}_${tone}`)?.payload;

      if (!style) {
        // Style does not exist so will also need to be generated
        const finalStyle = generateStyle(this.component, styleSource);
        const formatters = new Set();

        // Adding a key-value pair to the 'formatters' Set.
        // This pattern is used so more formatters can be easily added if required at a later time
        formatters.add([
          replaceAliasValues,
          [this.component.constructor.aliasStyles]
        ]);

        // Generating an array from the 'formatters' Set
        const formattersArray = Array.from(formatters);

        // Using reduce to apply functions from 'formattersArray' to 'finalStyle'
        // Each function takes 'obj' (initially 'finalStyle') as input and applies transformations
        // The result of the previous function is passed as input to the next function
        // The final transformed style is assigned to 'this._style'
        const processedStyle = formattersArray.reduce(
          (obj, [func, args]) => func(obj, ...args),
          finalStyle
        );

        style = processedStyle;

        this._addCache(`style_${mode}_${tone}`, finalStyle);
      }

      this._style = style;
      this.emit('styleUpdate', this.style);
    } catch (error) {
      context.error('styleManager: ', error.message);
    }
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

  /**
   * Simple check to see if this component can leverage caching. Components using .style cannot use the cache at this time
   */
  get _hasComponentStyle() {
    return (
      Boolean(
        Object.keys(this.component.constructor.__mixinStyle || {}).length
      ) ||
      Boolean(Object.keys(this.component._componentLevelStyle || {}).length)
    );
  }
}