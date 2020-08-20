/**
 * Fonts
 *
 * Contains global font style information to easily maintain consistency throughout components.
 */
export const XfinityFonts = {
  default: {
    fontName: 'XfinityStandard',
    baseUrl:
      'https://static.cimcontent.net/common-web-assets/fonts/xfinity-standard-optimized',
    weights: {
      regular: {
        family: 'Regular',
        url: 'xfinitystandard-regular.woff'
      },
      medium: {
        family: 'Medium',
        url: 'xfinitystandard-medium.woff'
      },
      bold: {
        family: 'Bold',
        url: 'xfinitystandard-bold.woff'
      }
    }
  },
  brand: {
    fontName: 'XfinityBrown',
    baseUrl:
      'https://staging-static.cimcontent.net/common-web-assets/fonts/xfinity-brown-optimized',
    weights: {}
  }
};

export const createFonts = (...fonts) =>
  fonts
    .map(font =>
      Object.values(font).reduce(
        (acc, { fontName, baseUrl, weights }) => [
          ...acc,
          ...Object.values(weights).reduce(
            (acc, { family, url }) => [
              ...acc,
              {
                family: fontName + family,
                url: `${baseUrl}/${url}`,
                descriptors: {}
              }
            ],
            []
          )
        ],
        []
      )
    )
    .flat();

// FLUP: OTTX-1248
// need to determine UX for truncating text and if text should scroll
const TEXT_OVERFLOW_ATTRIBUTES = {
  textOverflow: 'ellipsis',
  maxLinesSuffix: '...'
};

/**
 * Used to pair a font styles with the appropriate size to be used inside specific components.
 */
export const TYPESCALE = {
  display: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: 'XfinityStandardBold',
    fontSize: 56,
    lineHeight: 72
  },
  headline: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: 'XfinityStandardBold',
    fontSize: 48,
    lineHeight: 64
  },
  title: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: 'XfinityStandardBold',
    fontSize: 40,
    lineHeight: 52
  },
  subtitle: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: 'XfinityStandardBold',
    fontSize: 36,
    lineHeight: 48
  },
  body: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: 'XfinityStandardMedium',
    fontSize: 32,
    lineHeight: 40
  },
  caption: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: 'XfinityStandardBold',
    fontSize: 28,
    lineHeight: 36
  },
  footnote: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: 'XfinityStandardBold',
    fontSize: 24,
    lineHeight: 32
  },
  label: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: 'XfinityStandardBold',
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 4
  },
  tag: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: 'XfinityStandardBold',
    fontSize: 20,
    lineHeight: 24
  }
};
