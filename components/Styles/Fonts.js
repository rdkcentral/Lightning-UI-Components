/**
 * Fonts
 *
 * Contains global font style information to easily maintain consistency throughout components.
 */
import tokens from 'xfinity-ds-tokens/dist/lightning-ui-tokens/lightning/lightning-ui';
import { flatten } from '../../utils';

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
      'https://static.cimcontent.net/common-web-assets/fonts/xfinity-brown-optimized',
    weights: {
      regular: {
        family: 'Regular',
        url: 'xfinitybrown-regular.woff'
      },
      bold: {
        family: 'Bold',
        url: 'xfinitybrown-bold.woff'
      }
    }
  }
};

export const createFonts = (...fonts) =>
  flatten(
    fonts.map(font =>
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
  );

/**
 * Xfinity-branded typography definitions for Lightning
 * https://share.goabstract.com/06d0601d-b7d2-48f3-93a2-17cc78bedb5e?mode=build&sha=6d9d06ec3e924eb83ff133826956e1e9a4fc7e36
 */
// eventually going to add this at the token level,
// but there is still dicussion around where `vertialAlign`
// middle should live
let typeTokens = Object.assign(tokens.typography, {});
Object.keys(typeTokens).forEach(key => {
  typeTokens[key].verticalAlign = 'middle';
});
export const TYPOGRAPHY = typeTokens;
