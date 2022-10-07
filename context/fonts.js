import logger from './logger';

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
    const { family, url, urls, descriptors } = fonts[i];
    // If url(s) are specified format them according to the spec https://developer.mozilla.org/en-US/docs/Web/API/FontFace
    const src =
      urls && Array.isArray(urls) && urls.length
        ? urls
            .map(url => {
              return url.substr(0, 5) === 'local' ? url : `url(${url})`; // Local system fonts are supported by passing a string starting with local. ex local(Impact)
            })
            .join(',')
        : 'url(' + url + ')';
    const fontFace = new FontFace(family, src, descriptors || {});
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
