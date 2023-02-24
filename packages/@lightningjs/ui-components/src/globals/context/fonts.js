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

import logger from './logger.js';

let customFontFaces = [];

/**
 * Function to get a list of all custom fonts that have been loaded using the FontFace Web API from the theme
 * @return {Array}
 */
export function getCustomFontFaces() {
  return customFontFaces;
}

/**
 * Function to load all the fonts from the theme
 */
export const fontLoader = fonts => {
  const promises = [];
  // Loop through all fonts in the array and attempt to load them using the FontFace Web API
  for (let i = 0; i < fonts.length; i++) {
    const { family, src, descriptors } = fonts[i];
    // If url(s) are specified format them according to the spec https://developer.mozilla.org/en-US/docs/Web/API/FontFace
    const fontSrc =
      src && Array.isArray(src) && src.length
        ? // loop through each string and format it in a way that's readable for the FontFace API
          src
            .map(url => {
              // if the url is a local font then the src is just the string provided in the array
              // otherwise, format the url string like url(<urlString>)
              return url.substr(0, 5) === 'local' ? url : `url(${url})`; // Local system fonts are supported by passing a string starting with local. ex local(Impact)
            })
            .join(',')
        : 'url(' + src + ')';
    const fontFace = new FontFace(family, fontSrc, descriptors || {});
    logger.info('Loading font', family);
    document.fonts.add(fontFace);
    // Push all pending promises into an array, theme manager will wait on everything to resolve before triggering another update cycle
    promises.push(
      new Promise(resolve => {
        fontFace
          .load()
          .then(() => {
            customFontFaces.push(fontFace);
            resolve(family);
          })
          .catch(err => {
            resolve(new Error(`${family}: ${err.message}`)); // Even if a font fails to load resolve it with an error so the theme doesn't fail to update all other values
          });
      })
    );
  }
  return Promise.all(promises).then(fontsLoaded => {
    // After the promise has resolved log the appropriate success and error messages
    const loaded = fontsLoaded
      .filter(font => !(font instanceof Error))
      .join(', ');

    if (loaded) {
      logger.log(`Fonts loaded: ${loaded}`);
    }

    const failed = fontsLoaded
      .filter(font => font instanceof Error)
      .map(item => item.message)
      .join(', ');

    if (failed) {
      logger.error(`Unable to load fonts: ${failed}`);
    }
  });
};

/**
 * Async function to remove all the fonts loaded by the theme. Useful if a theme is switched at runtime
 */
export const cleanupFonts = async fonts => {
  if (document.fonts && 'delete' in document.fonts) {
    if (!customFontFaces.length) return;
    customFontFaces = customFontFaces.filter(fontFace => {
      if (!fonts.find(font => font.family === fontFace.family)) {
        logger.info('Removing font', fontFace.family);
        document.fonts.delete(fontFace);
        return false;
      } else {
        return fontFace;
      }
    });
  } else {
    logger.info('Unable to remove manually-added fonts');
  }
};
