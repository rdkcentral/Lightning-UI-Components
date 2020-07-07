/**
 * Fonts
 *
 * Contains global font style information to easily maintain consistency throughout components.
 */

const BASE_URL =
  'https://static.cimcontent.net/common-web-assets/fonts/xfinity-standard-optimized';
/**
 * Establishes the Xfinity Standard Font Family
 */
const XFINITY_STANDARD = {
  regular: {
    family: 'XfinityStandardRegular',
    url: `${BASE_URL}/xfinitystandard-regular.woff`,
    // url: './assets/fonts/XFINITYStandard-Regular.ttf',
    descriptors: {}
  },
  medium: {
    family: 'XfinityStandardMedium',
    url: `${BASE_URL}/xfinitystandard-medium.woff`,
    // url: './assets/fonts/XFINITYStandard-Medium.ttf',
    descriptors: {}
  },
  bold: {
    family: 'XfinityStandardBold',
    url: `${BASE_URL}/xfinitystandard-bold.woff`,
    // url: './assets/fonts/XFINITYStandard-Bold.ttf',
    descriptors: {}
  }
};

/**
 * Used to pair font style names with proper weights.
 */
export const FONTS = [
  XFINITY_STANDARD.regular,
  XFINITY_STANDARD.medium,
  XFINITY_STANDARD.bold
];

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
    fontFace: XFINITY_STANDARD.bold.family,
    fontSize: 56,
    lineHeight: 72
  },
  headline: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.bold.family,
    fontSize: 48,
    lineHeight: 64
  },
  title: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.bold.family,
    fontSize: 40,
    lineHeight: 52
  },
  subtitle: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.bold.family,
    fontSize: 36,
    lineHeight: 48
  },
  body: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.medium.family,
    fontSize: 32,
    lineHeight: 40
  },
  caption: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.bold.family,
    fontSize: 28,
    lineHeight: 36
  },
  footnote: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.bold.family,
    fontSize: 24,
    lineHeight: 32
  },
  label: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.bold.family,
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 4
  },
  tag: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.bold.family,
    fontSize: 20,
    lineHeight: 24
  }
};
