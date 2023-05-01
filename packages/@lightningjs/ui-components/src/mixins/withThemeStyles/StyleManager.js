import { generateComponentStyleSource, generateStyle } from './utils.js';
import lng from '@lightningjs/core';
import { debounce } from '../../utils/index.js';

export default class StyleManager extends lng.EventEmitter {
  constructor({ component }) {
    super(...arguments);
    /**
     * Things that make a component unique for styles
     * 1. The style chain
     * 2. Component Inline Style
     */
    // Create a global cache for styles
    if (!window.LUI_STYLE_CACHE) {
      window.LUI_STYLE_CACHE = new Map();
    }

    this.component = component;
    this._style = {};

    this.update = debounce(this._update, 0);
    this._update();
  }

  /**
   *
   * CACHE MANAGEMENT
   *
   */

  clearSourceCache() {
    this._removeCache('styleSource');
  }

  clearStyleCache() {
    this._removeCache('style');
  }

  _generateCacheKey(name) {
    const { tone, mode } = this.component;

    const cacheKey = [
      name,
      this.component.constructor.__componentName,
      tone,
      mode
    ].join('_'); // TODO: Add all other things that could make a component different and not share styles from other instances
    return cacheKey;
  }

  _addCache(name, payload) {
    // This makes the assumption that componentConfig has not been set on the component itself. Will need to accommodate this edge case
    const key = this._generateCacheKey(name);
    const existing = window.LUI_STYLE_CACHE.get(key);
    window.LUI_STYLE_CACHE.set(key, {
      ids: [...new Set([...(existing?.ids || []), this.component.__id])], // Add current id and remove duplicates
      payload
    });
  }

  _removeCache(name) {
    const key = this._generateCacheKey(name);
    window.LUI_STYLE_CACHE.delete(key);
  }

  _getCache(name) {
    if (Object.keys(this.component._componentLevelStyleSource || {}).length) {
      // Components with inline styles cannot maintain a style cache
      return false;
    }
    const key = this._generateCacheKey(name);
    return window.LUI_STYLE_CACHE.get(key);
  }

  clearSource() {
    delete this._componentStyleSource;
  }

  async _update() {
    try {
      let styleSource = this._getCache('styleSource')?.payload;

      if (!styleSource) {
        // Usually this should only be generated once
        styleSource = await generateComponentStyleSource(this.component);
        this._addCache('styleSource', styleSource);
        this._removeCache('style');
      }
      let style = this._getCache('style')?.payload;
      if (!style) {
        style = await generateStyle(this.component, styleSource);
        this._addCache('style', style); // Save result to the cache
      }
      this._style = style;
      this.emit('styleUpdate', this.style);
    } catch (error) {
      //console.log('STYLE MANAGER ERROR', error);
    }
  }

  set style(v) {
    //console.log('cannot update style externally');
  }

  get style() {
    return this._style;
  }
}
