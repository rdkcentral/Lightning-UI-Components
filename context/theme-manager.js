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
const isSubTheme = themeName => 'subTheme' === themeName.slice(0, 8);
export class ThemeManager {
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
    this._clearCache();
    const theme = this._processTheme.call(this, [value], value.extensions);
    this._cache.set('theme', theme);
    await cleanupFonts(theme.fonts);
    if (theme.fonts && theme.fonts.length) {
      await this._loadFonts(theme.fonts);
    }
    this._refreshSubThemes();
    events.emit('themeExtensionsUpdate');
    events.emit('themeUpdate'); // Notify components that an update cycle is required
  }

  getSubTheme(subThemeName) {
    if (this._cache.has(`subTheme${subThemeName}`)) {
      return this._cache.get(`subTheme${subThemeName}`).result;
    }
    return;
  }

  setSubTheme(subThemeName, value, triggerUpdate = true) {
    if (!subThemeName) {
      logger.warn('Sub theme name not specified');
      return;
    }
    if ('string' !== typeof subThemeName) {
      logger.warn(
        `Sub theme name must be a string. Received an ${typeof subThemeName}`
      );
      return;
    }
    if ('object' !== typeof value || !Object.keys(value).length) {
      logger.warn(
        `Could not set subTheme ${subThemeName}, value should be an object with properties. Received an ${typeof value}`
      );
      return;
    }
    const globalTheme = this.getTheme();

    this._cache.set(`subTheme${subThemeName}`, {
      original: value,
      result: this._processTheme.call(this, [globalTheme, value])
    });
    if (triggerUpdate) events.emit(`updateTheme${subThemeName}`);
  }

  _refreshSubThemes() {
    // Triggered when global theme is updated
    [...this._cache.keys()].forEach(key => {
      if ('string' === typeof key && isSubTheme(key)) {
        const cache = this._cache.get(key);
        if (cache.original)
          this.updateSubTheme(key.replace(/^subTheme/, ''), cache.original);
      }
    });
  }

  async _loadFonts(fontArray) {
    try {
      await fontLoader(fontArray);
      events.emit('fontsLoaded');
    } catch (err) {
      logger.error(`Unable to load font: ${err}`);
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
    this._clearCache();
    const theme = this._processTheme.call(
      this,
      [currentTheme, value],
      value.extensions || currentTheme.extensions
    );
    this._cache.set('theme', theme);
    if (theme.fonts && theme.fonts.length) {
      await this._loadFonts(theme.fonts);
    }
    this._refreshSubThemes();
    if (value.extensions) events.emit('themeExtensionsUpdate');
    events.emit('themeUpdate'); // Notify components that an update cycle is required
  }

  _clearCache() {
    this._cache.forEach((value, key) => {
      if ('string' !== typeof key || !isSubTheme(key)) {
        this._cache.delete(key);
      }
    });
    // Regenerate sub themes
    this._cache.forEach((value, key) => {
      if ('string' === typeof key && isSubTheme(key)) {
        this.setSubTheme(key.replace('subTheme', ''), value.original, false); // Dont trigger the update...the parent theme will trigger
      }
    });
  }

  updateSubTheme(subThemeName, value, triggerUpdate = true) {
    if (!subThemeName) {
      logger.warn('Sub theme name not specified');
      return;
    }
    if ('object' !== typeof value || !Object.keys(value).length) {
      logger.warn(
        `Could not update subTheme ${subThemeName} due to invalid value`
      );
      return;
    }

    const globalTheme = this.getTheme();
    let currentTheme = {};

    if (this._cache.has(`subTheme${subThemeName}`)) {
      currentTheme = this._cache.get(`subTheme${subThemeName}`).original;
    }

    this._cache.set(`subTheme${subThemeName}`, {
      original: clone(currentTheme, value),
      result: this._processTheme.call(this, [globalTheme, currentTheme, value])
    });

    if (triggerUpdate) events.emit(`updateTheme${subThemeName}`);
  }

  removeSubTheme(subThemeName) {
    if (this._cache.has(`subTheme${subThemeName}`)) {
      this._cache.delete(`subTheme${subThemeName}`);
    }
    events.emit(`updateTheme${subThemeName}`);
  }

  _getComponentUUID(id) {
    return `componentStyle${id}`;
  }

  _processTheme(themeArray = [], extensions) {
    if (!Array.isArray(themeArray)) {
      throw new Error(
        `context processTheme expected an array. Received ${typeof themeArray}`
      );
    }

    const theme = merge.all([baseTheme, ...themeArray]);

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

    return { ...JSON.parse(themeString), ...themeFunctions, extensions };
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

export default new ThemeManager();
