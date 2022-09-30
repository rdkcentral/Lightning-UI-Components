describe('context fonts', () => {
  let logger, fonts;
  beforeAll(() => {
    logger = require('./logger').default;
    fonts = require('./fonts');
    logger.log = jest.fn();
    logger.error = jest.fn();

    global.FontFace = jest
      .fn()
      .mockImplementation(function (family, src, descriptors) {
        const api = {
          family,
          src,
          descriptors
        };

        Object.defineProperty(api, 'load', {
          get: () => {
            return () => {
              return new Promise((resolve, reject) => {
                setTimeout(() => {
                  if ('invalid' === family) {
                    const test = new Error('unable to load font');
                    reject(test);
                    return;
                  }
                  document.fonts._fontList.push({
                    family,
                    src,
                    descriptors
                  });
                  resolve(family);
                }, 500);
              });
            };
          }
        });
        return api;
      });

    // Ensure this is reset each test
    global.document.fonts = {
      _fontList: [],
      add: () => {},
      delete: () => {},
      values() {
        return this._fontList;
      }
    };
  });
  beforeEach(() => {
    logger.log.mockClear();
    logger.error.mockClear();
  });

  it('should load fonts', async done => {
    const fontArray = require('../themes/xfinity/font').default;
    const fontLoader = fonts.fontLoader;
    await fontLoader([
      ...fontArray,
      { family: 'fontArray', urls: ['url1', 'url2'] },
      { family: 'invalid', url: 'invalid' }
    ]);

    expect(document.fonts.values().map(({ family }) => family)).toEqual([
      'XfinityBrownBold',
      'DMSansRegular',
      'DMSansBold',
      'XfinityStandardBold',
      'XfinityStandardMedium',
      'fontArray'
    ]);

    expect(logger.log.mock.calls).toContainEqual([
      'Fonts loaded: XfinityBrownBold, DMSansRegular, DMSansBold, XfinityStandardBold, XfinityStandardMedium, fontArray'
    ]);
    expect(logger.error.mock.calls).toContainEqual([
      'Unable to load fonts: invalid: unable to load font'
    ]);
    done();
  });
  it('should remove fonts that are no longer required', async done => {
    fonts.cleanupFonts([document.fonts.values()[0]]);
    expect(fonts.getCustomFontFaces().length).toBe(1);
    fonts.cleanupFonts([]);
    expect(fonts.getCustomFontFaces().length).toBe(0);
    fonts.cleanupFonts([]); // Hit last case. Will hit return
    done();
  });
});
