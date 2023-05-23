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
  clone,
  getValFromObjPath,
  getHexColor,
  getValidColor
} from '../../utils/index.js'; // Keep index.js so it can be used by node
import baseTheme from '@lightningjs/ui-components-theme-base';
import logger from './logger.js';
import events from './events.js';
import { fontLoader, cleanupFonts } from './fonts.js';
import { THEME_KEY_REPLACER } from './constants.js'; // Add js so it can be used

const merge = {
  all: objArray => {
    let result = {};
    for (let i = 0; i < objArray.length; i++) {
      result = clone(result, objArray[i]);
    }
    return result;
  }
};

let base64Cache = [];

const isSubTheme = themeName => 'subTheme' === themeName.slice(0, 8);

/**
 * Extracts the MIME type from a Data URI.
 *
 * @param {string} dataUri - The Data URI string.
 * @returns {string|null} The extracted MIME type, or null if not found.
 */
function getMimeTypeFromDataUri(dataUri) {
  const matches = dataUri.match(/^data:(.*?);base64,/);
  if (matches && matches.length === 2) {
    return matches[1];
  }
  return null;
}

/**
 * Checks if a string represents a Base64-encoded image and extracts the MIME type.
 *
 * @param {string} str - The string to check.
 * @returns {{ isImage: boolean, mimeType: string|null }} An object indicating whether the string is an image and the extracted MIME type.
 */
function checkBase64EncodedImage(str) {
  const regex = /^data:image\/(jpeg|jpg|png|gif);base64,/;
  const isImage = regex.test(str);
  const mimeType = isImage ? getMimeTypeFromDataUri(str.match(regex)[0]) : null;

  return {
    isImage,
    mimeType
  };
}

/**
 * Converts a Base64-encoded image to a Blob URL.
 * Note: Make sure to handle potential memory leaks caused by the browser's image caching.
 *
 * @param {string} base64String - The Base64-encoded image string.
 * @param {string} mimeType - The MIME type of the image.
 * @returns {string|null} The Blob URL representing the converted image, or null if conversion fails.
 */
function base64ToBlobURL(base64String, mimeType) {
  const byteCharacters = atob(
    base64String.substring(base64String.indexOf(',') + 1)
  );
  const byteArrays = [];

  try {
    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);
      const byteNumbers = new Array(slice.length);

      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: mimeType });
    const blobURL = URL.createObjectURL(blob);

    return blobURL;
  } catch (error) {
    logger.info('Unable to convert base64 image to URL');
    return null;
  }
}

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

  // Handle separate instances of context across the application and keep them in sync
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
    // Clean up any base64 image that were converted to blobs using createObjectURL
    base64Cache.filter(image => {
      URL.revokeObjectURL(image);
      return false;
    });

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
      // Base64 encoded values can cause memory leaks convert to an image
      const { isImage, mimeType } = checkBase64EncodedImage(value);
      if (isImage) {
        // base64Cache
        try {
          const blobURL = base64ToBlobURL(value, mimeType);
          base64Cache.push(blobURL);
          return blobURL;
        } catch (error) {
          return value;
        }
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
