import {
  clone,
  getValFromObjPath,
  getHexColor,
  getValidColor
} from '../../utils/index.js';
import baseTheme from '@lightningjs/ui-base-theme';
import logger from './logger.js';
import events from './events.js';
import { fontLoader, cleanupFonts } from './fonts.js';
import { THEME_KEY_REPLACER } from './constants';

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
class ThemeManager {
  constructor() {
    this._cache = new Map();
    if (typeof window === 'undefined') return;
    if (!window.LUI) {
      window.LUI = {};
    }
    if (!window.LUI.themeManagerInstances) {
      window.LUI.themeManagerInstances = [{ themeManager: this, events }];
    } else {
      window.LUI.themeManagerInstances.push({ themeManager: this, events });
    }
  }

  // Handle separate instances of context accross the application and keep them in sync
  _setCache(key, payload) {
    if (typeof window === 'undefined') return;
    window.LUI.themeManagerInstances.forEach(({ themeManager }) => {
      if (themeManager) themeManager._cache.set(key, payload);
    });
  }

  _deleteCache(key) {
    if (typeof window === 'undefined') return;
    window.LUI.themeManagerInstances.forEach(({ themeManager }) => {
      if (themeManager) themeManager._cache.delete(key);
    });
  }

  _emit(key, payload) {
    if (typeof window === 'undefined') return;
    window.LUI.themeManagerInstances.forEach(({ events }) => {
      events.emit(key, payload);
    });
  }

  getTheme() {
    if (this._cache.has('theme')) {
      return this._cache.get('theme');
    }

    const theme = this._processTheme.call(this);
    this._setCache('theme', theme);
    return theme;
  }

  async setTheme(themeConfig) {
    let value;
    if (Array.isArray(themeConfig)) {
      value = merge.all(themeConfig);
    } else {
      value = themeConfig;
    }

    if ('object' !== typeof value || null === value) {
      logger.warn(`context theme expected an object. Received ${typeof value}`);
      return;
    }

    this._clearCache();
    const theme = this._processTheme.call(this, [value], value.extensions);
    this._setCache('theme', theme);
    await cleanupFonts(theme.font);
    if (theme.font && theme.font.length) {
      await this._loadFonts(theme.font);
    }
    this._refreshSubThemes();
    this._emit('themeExtensionsUpdate');
    this._emit('themeUpdate'); // Notify components that an update cycle is required
    return theme;
  }

  getSubTheme(subThemeName) {
    if (this._cache.has(`subTheme${subThemeName}`)) {
      return this._cache.get(`subTheme${subThemeName}`).result;
    }
    return;
  }

  async setSubTheme(subThemeName, value, triggerUpdate = true) {
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
    const subTheme = this._processTheme.call(this, [globalTheme, value]);
    if (subTheme.font && subTheme.font.length) {
      await this._loadFonts(subTheme.font);
    }
    this._setCache(`subTheme${subThemeName}`, {
      original: value,
      result: subTheme
    });

    if (triggerUpdate) this._emit(`themeUpdate${subThemeName}`);
    return subTheme;
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
    } catch (err) {
      logger.error(`Unable to load font: ${err}`);
    }
  }

  /**
   * Merge values with current theme
   */
  async updateTheme(themeConfig) {
    let value;
    if (Array.isArray(themeConfig)) {
      value = merge.all(themeConfig);
    } else {
      value = themeConfig;
    }

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
    this._setCache('theme', theme);
    if (theme.font && theme.font.length) {
      await this._loadFonts(theme.font);
    }
    this._refreshSubThemes();
    if (value.extensions) this._emit('themeExtensionsUpdate');
    this._emit('themeUpdate'); // Notify components that an update cycle is required
    return theme;
  }

  _clearCache() {
    this._cache.forEach((value, key) => {
      if ('string' !== typeof key || !isSubTheme(key)) {
        this._deleteCache(key);
      }
    });
    // Regenerate sub themes
    this._cache.forEach((value, key) => {
      if ('string' === typeof key && isSubTheme(key)) {
        this.setSubTheme(key.replace('subTheme', ''), value.original, false); // Dont trigger the update...the parent theme will trigger
      }
    });
  }

  async updateSubTheme(subThemeName, value, triggerUpdate = true) {
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

    const subTheme = this._processTheme.call(this, [
      globalTheme,
      currentTheme,
      value
    ]);

    if (subTheme.font && subTheme.font.length) {
      await this._loadFonts(subTheme.font);
    }

    this._setCache(`subTheme${subThemeName}`, {
      original: clone(currentTheme, value),
      result: subTheme
    });

    if (triggerUpdate) this._emit(`themeUpdate${subThemeName}`);

    return subTheme;
  }

  removeSubTheme(subThemeName) {
    if (this._cache.has(`subTheme${subThemeName}`)) {
      this._deleteCache(`subTheme${subThemeName}`);
    }
    this._emit(`themeUpdate${subThemeName}`);
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
    const themeString = JSON.stringify(theme, (key, originalValue) => {
      let value = originalValue;
      // Replacer
      if (value && typeof value === 'object') {
        const replacement = originalValue;
        for (var k in value) {
          if (Object.hasOwnProperty.call(value, k) && THEME_KEY_REPLACER[k]) {
            replacement[k && THEME_KEY_REPLACER[k]] = value[k];
            delete replacement[k]; // Removes the original key that was replaced. example: fontFamily is replaced by fontFace so fontFamily is removed from the theme
          }
        }

        value = replacement;
      }
      if (
        Array.isArray(value) &&
        2 === value.length &&
        !value[0].targetComponent &&
        value[0].length &&
        value[0].substr(0, 1) === '#'
      ) {
        // Better check to filter out extensions?
        return getHexColor(value[0], value[1]);
      } else if (
        'extensions' === key ||
        'function' === typeof value ||
        ('object' === typeof value &&
          value !== null &&
          'Object' !== value.constructor.name &&
          !Array.isArray(value))
      ) {
        // Functions will not stringify, they will be merged after
        themeFunctions[key] = value;
        return;
      } else if ('string' === typeof value && value.includes('theme.')) {
        const themeValue = getValFromObjPath({ theme }, value);
        if (themeValue) {
          return themeValue;
        } else {
          return value;
        }
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
}

const themeManagerInstance = new ThemeManager();

export { themeManagerInstance as default, ThemeManager };
