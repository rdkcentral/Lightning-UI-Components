import logger from './logger';

let customFontFaces = [];

export const fontLoader = async fonts => {
  const promises = [];
  for (let i = 0; i < fonts.length; i++) {
    const { family, url, urls, descriptors } = fonts[i];
    const src = urls
      ? urls.map(url => {
          return 'url(' + url + ')';
        })
      : 'url(' + url + ')';
    const fontFace = new FontFace(family, src, descriptors || {});
    logger.info('Loading font', family);
    document.fonts.add(fontFace);
    promises.push(
      new Promise(resolve => {
        fontFace
          .load()
          .then(() => {
            customFontFaces.push(fontFace);
            resolve(family);
          })
          .catch(err => {
            resolve(new Error(`${family}: ${err.message}`));
          });
      })
    );
  }
  return Promise.all(promises).then(fontsLoaded => {
    logger.log(
      `Fonts loaded: ${fontsLoaded
        .filter(font => !(font instanceof Error))
        .join(', ')}`
    );
    logger.error(
      `Unable to load fonts: ${fontsLoaded
        .filter(font => font instanceof Error)
        .map(item => item.message)
        .join(', ')}`
    );
  });
};

export const cleanupFonts = async fonts => {
  if (document.fonts && 'delete' in document.fonts) {
    if (!customFontFaces.length) return;
    customFontFaces = customFontFaces.filter(fontFace => {
      if (!fonts.find(font => font.family === fontFace.family)) {
        logger.info('Removing font', fontFace.family);
        document.fonts.delete(fontFace);
      } else {
        return fontFace;
      }
    });
  } else {
    logger.info('Unable to remove manually-added fonts');
  }
};
