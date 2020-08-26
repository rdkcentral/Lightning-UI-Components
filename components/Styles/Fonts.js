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

/**
 * Xfinity-branded typography definitions for Lightning
 * https://share.goabstract.com/06d0601d-b7d2-48f3-93a2-17cc78bedb5e?mode=build&sha=6d9d06ec3e924eb83ff133826956e1e9a4fc7e36
 */
export const TYPOGRAPHY = {
  display1: {
    fontFace: 'XfinityBrownBold',
    fontSize: 56,
    lineHeight: 72,
    fontWeight: 'bold',
    letterSpacing: -0.4,
    verticalAlign: 'middle'
  },
  display2: {
    fontFace: 'XfinityBrownBold',
    fontSize: 48,
    lineHeight: 64,
    fontWeight: 'bold',
    letterSpacing: -0.4,
    verticalAlign: 'middle'
  },
  headline1: {
    fontFace: 'XfinityBrownBold',
    fontSize: 36,
    lineHeight: 48,
    fontWeight: 'bold',
    letterSpacing: -0.2,
    verticalAlign: 'middle'
  },
  headline2: {
    fontFace: 'XfinityBrownBold',
    fontSize: 28,
    lineHeight: 40,
    fontWeight: 'bold',
    letterSpacing: -0.2,
    verticalAlign: 'middle'
  },
  body1: {
    fontFace: 'XfinityStandardMedium',
    fontSize: 28,
    h: 40,
    lineHeight: 40,
    fontWeight: 500,
    letterSpacing: 0,
    verticalAlign: 'middle'
  },
  body2: {
    fontFace: 'XfinityStandardMedium',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 500,
    letterSpacing: 0,
    verticalAlign: 'middle'
  },
  button1: {
    fontFace: 'XfinityBrownBold',
    fontSize: 28,
    lineHeight: 36,
    fontWeight: 'bold',
    letterSpacing: -0.2,
    verticalAlign: 'middle'
  },
  button2: {
    fontFace: 'XfinityBrownBold',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    letterSpacing: -0.2,
    verticalAlign: 'middle'
  },
  callout1: {
    fontFace: 'XfinityBrownBold',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    letterSpacing: 2,
    textTransform: 'uppercase',
    verticalAlign: 'middle'
  },
  caption1: {
    fontFace: 'XfinityStandardBold',
    fontSize: 20,
    lineHeight: 24,
    fontWeight: 'bold',
    letterSpacing: 0,
    verticalAlign: 'middle'
  }
};

/**
 *
 *
 * TODO: DEPRECATED typescale shape
 *
 *
 *
 */
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
