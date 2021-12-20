import { clone } from '../utils';
import baseTheme from '../themes/base';
import { getHexColor, getValidColor } from '../Styles/Colors';
import logger from './logger';
import events from './events';
import { fontLoader, cleanupFonts } from './fonts';
const merge = {
  all: objArray => {
    let result = {};
    for (let i = 0; i < objArray.length; i++) {
      result = clone(result, objArray[i]);
    }
    return result;
  }
};
export class Theme {
  constructor() {
    this._cache = new Map();
  }

  getTheme() {
    if (this._cache.has('theme')) {
      return this._cache.get('theme');
    }

    const theme = this._processTheme.call(this);
    this._cache.set('theme', theme);
    return theme;
  }

  async setTheme(value) {
    if ('object' !== typeof value || null === value) {
      logger.warn(`context theme expected an object. Received ${typeof value}`);
      return;
    }
    this._cache.clear();
    const theme = this._processTheme.call(this, [value]);
    this._cache.set('theme', theme);
    await cleanupFonts(theme.fonts);
    if (theme.fonts && theme.fonts.length) {
      await this._loadFonts(theme.fonts);
    }
    events.emit('themeUpdate'); // Notify components that an update cycle is required
  }

  async _loadFonts(fontArray) {
    try {
      await fontLoader(fontArray);
      events.emit('fontsLoaded');
    } catch (err) {
      logger.error('Unable to load font');
    }
  }

  /**
   * Merge values with current theme
   */
  async updateTheme(value) {
    let currentTheme = {};
    if (this._cache.has('theme')) {
      currentTheme = this._cache.get('theme');
    }
    this._cache.clear();
    const theme = this._processTheme.call(this, [currentTheme, value]);
    this._cache.set('theme', theme);
    if (theme.fonts && theme.fonts.length) {
      await this._loadFonts(theme.fonts);
    }
    events.emit('themeUpdate'); // Notify components that an update cycle is required
  }

  _setThemeCb(theme) {
    if ('object' === typeof theme && Object.keys(theme).length > 0) {
      this.setTheme(theme);
    } else {
      logger.warn(
        'Unable to update theme, expected an object with at least one property.'
      );
    }
    return this.getTheme();
  }

  _getComponentUUID(id) {
    return `componentStyle${id}`;
  }

  _processTheme(themeArray = []) {
    if (!Array.isArray(themeArray)) {
      throw new Error(
        `context processTheme expected an array. Received ${typeof themeArray}`
      );
    }
    const theme = merge.all([baseTheme, ...themeArray], {
      arrayMerge: this._overwriteMerge
    });

    // Clear all component styles if set to undefined
    if (
      theme.componentStyles &&
      themeArray[1] &&
      undefined === themeArray[1].componentStyles
    ) {
      theme.componentStyles = {};
    }
    // Parse all colors in theme
    const themeFunctions = {};
    const themeString = JSON.stringify(theme, (key, value) => {
      if (Array.isArray(value) && 2 === value.length) {
        return getHexColor(value[0], value[1]);
      } else if (
        'extensions' === key ||
        'function' === typeof value ||
        ('object' === typeof value && 'Object' !== value.constructor.name)
      ) {
        // Functions will not stringify. They will be merged after. Functions are only supported at the root theme level. ex. theme.spacing(). Also supports custom objects with getters and setters
        themeFunctions[key] = value;
        return;
      } else {
        const validColor = getValidColor(value);
        if (validColor) {
          return validColor;
        }
        return value;
      }
    });
    return { ...JSON.parse(themeString), ...themeFunctions };
  }

  setComponentInstantiationStyles(constructor, payload) {
    this._cache.set(constructor, payload);
  }

  getComponentInstantiationStyles(constructor) {
    if (this._cache.has(constructor)) {
      return this._cache.get(constructor);
    }
    return undefined;
  }

  resetComponentInstantiationStyles(constructor) {
    this._cache.delete(constructor);
  }

  setComponentLevelStyles(id, payload) {
    const uuid = this._getComponentUUID(id);
    this._cache.set(uuid, payload);
  }

  getComponentLevelStyles(id) {
    const uuid = this._getComponentUUID(id);
    if (this._cache.has(uuid)) {
      return this._cache.get(uuid);
    }
    return undefined;
  }

  resetComponentLevelStyles(id) {
    const uuid = this._getComponentUUID(id);
    this._cache.delete(uuid);
  }
}

export default new Theme();
