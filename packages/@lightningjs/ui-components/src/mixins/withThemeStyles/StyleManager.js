import { generateComponentStyleSource, generateStyle } from './utils.js';
import lng from '@lightningjs/core';
import { debounce } from '../../utils/index.js';
import { context } from '../../globals';

export default class StyleManager extends lng.EventEmitter {
  /**
   * Create a Style Manager instance.
   * @param {Object} options - The options object.
   * @param {Object} options.component - The LightningJS component instance.
   */
  constructor({ component }) {
    super(...arguments);

    this._previousTone;
    this._previousMode;
    this._previousComponentLevelStyle;

    // Bind the _onThemeUpdate method to the current instance of the StyleManager class.
    this._boundThemeUpdate = this._onThemeUpdate.bind(this);
    context.on('themeUpdate', this._boundThemeUpdate);

    // Create a global cache for styles.
    if (!window.LUI_STYLE_CACHE) {
      window.LUI_STYLE_CACHE = new Map();
    }

    this.component = component;
    this._style = {};

    // Debounce the update method so that it's called only once during rapid style changes.
    this.update = debounce(() => {
      this._update();
    }, 0);
    this._update();
  }

  /**
   * Destroy the Style Manager instance and remove the themeUpdate event listener.
   */
  destroy() {
    this._cleanupCache();
    context.off('themeUpdate', this._boundThemeUpdate);
  }

  /**
   * Handler for the themeUpdate event. Clears the cache and updates the component's style.
   * @private
   */
  _onThemeUpdate() {
    window.LUI_STYLE_CACHE && window.LUI_STYLE_CACHE.clear();
    this.update();
  }

  /**
   * Clears the source cache.
   */
  clearSourceCache() {
    this._removeCache('styleSource');
  }

  /**
   * Clears the style cache.
   */
  clearStyleCache() {
    const { mode, tone } = this.component;
    this._removeCache(`style_${mode}_${tone}`);
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
    const existing = window.LUI_STYLE_CACHE.get(key);

    window.LUI_STYLE_CACHE.set(key, {
      ids: [...new Set([...(existing?.ids || []), this.component.__id])], // Add current id and remove duplicates
      payload
    });
  }

  /**
   * Called when component is destroyed
   */
  _cleanupCache() {
    window.LUI_STYLE_CACHE.forEach(({ ids, payload }, name) => {
      const removeIndex = ids && ids.length && ids.indexOf(this.component.__id);
      if (removeIndex > -1 && ids.length > 1) {
        window.LUI_STYLE_CACHE.set(name, {
          ids: ids.slice(0, removeIndex).concat(ids.slice(removeIndex + 1)),
          payload
        });
      } else if (removeIndex > -1) {
        window.LUI_STYLE_CACHE.delete(name);
      }
    });
  }

  /**
   * Removes a cache.
   * @param {string} name - The name of the cache.
   */
  _removeCache(name) {
    const key = this._generateCacheKey(name);
    window.LUI_STYLE_CACHE.delete(key);
  }

  /**
   * Gets a cache.
   * @param {string} name - The name of the cache.
   * @returns {object|boolean} - The cache or false if the component has inline styles.
   */
  _getCache(name) {
    const key = this._generateCacheKey(name);
    return window.LUI_STYLE_CACHE.get(key);
  }

  /**
   * Updates the component's style based on changes in tone, mode, theme, and `_componentLevelStyle`.
   * Clears the style cache if tone or mode have changed, and clears the source cache if `_componentLevelStyle` has changed.
   * Generates the component's style source and style objects, saves them to the cache, and emits a `styleUpdate` event with the updated style.
   * @returns {Promise<void>}
   */
  async _update() {
    const { mode, tone, _componentLevelStyle: style } = this.component;

    if (this._previousComponentLevelStyle === undefined) {
      this.clearSourceCache();
    }

    if (this._previousMode !== mode || this._previousTone !== tone) {
      this.clearStyleCache();
    }

    if (
      JSON.stringify(this._previousComponentLevelStyle) !==
      JSON.stringify(style)
    ) {
      this.clearStyleCache();
    }

    this._previousTone = tone;
    this._previousMode = mode;
    this._previousComponentLevelStyle = style;

    try {
      const styleSource =
        this._getCache('styleSource')?.payload ||
        (await generateComponentStyleSource(this.component));
      this._addCache('styleSource', styleSource);

      const style =
        this._getCache(`style_${mode}_${tone}`)?.payload ||
        (await generateStyle(this.component, styleSource));
      this._addCache(`style_${mode}_${tone}`, style);

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
    context.log('styleManager: Cannot mutate style directly');
  }

  get style() {
    return this._style;
  }

  /**
   * Simple check to see if this component can leverage caching. Components using .style cannot use the cache at this time
   */
  get _hasComponentStyle() {
    return Object.keys(this.component._componentLevelStyle || {}).length;
  }
}
