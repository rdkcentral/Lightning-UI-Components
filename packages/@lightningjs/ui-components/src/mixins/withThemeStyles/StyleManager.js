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

    this._previousTone = null;
    this._previousMode = null;
    this._previousComponentLevelStyle = null;

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
    context.off('themeUpdate', this._boundThemeUpdate);
  }

  /**
   * Handler for the themeUpdate event. Clears the cache and updates the component's style.
   * @private
   */
  _onThemeUpdate() {
    this.clearSourceCache();
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
    this._removeCache('style');
  }

  /**
   * Generates a cache key.
   * @param {string} name - The name of the cache.
   * @returns {string} - The generated cache key.
   */
  _generateCacheKey(name) {
    const { tone, mode } = this.component;
    const cacheKey = [
      name,
      this.component.constructor.__componentName,
      tone,
      mode
    ].join('_');
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
    if (Object.keys(this.component._componentLevelStyleSource || {}).length) {
      // Components with inline styles cannot maintain a style cache
      return false;
    }

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

    if (
      this._previousComponentLevelStyle === undefined ||
      this._previousComponentLevelStyle !== style
    ) {
      this.clearSourceCache();
    }

    if (this._previousMode !== mode || this._previousTone !== tone) {
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
        this._getCache('style')?.payload ||
        (await generateStyle(this.component, styleSource));
      this._addCache('style', style);

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
}
