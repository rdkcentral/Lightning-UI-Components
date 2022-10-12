import ALPHA from './alpha';
import { convertHexToAlphaArray } from '../utils';

const GREY = {
  'grey-05': '#f8f7fa',
  'grey-40': '#929096',
  'grey-70': '#48474b',
  'grey-90': '#181819'
};

const BLUE = {
  'blue-20': '#becffe',
  'blue-40': '#93a9fd',
  'blue-90': '#000033'
};

const COLORS = {
  white: '#ffffff',
  black: '#000000',
  grey: GREY['grey-40'],
  red: '#e74c3c',
  orange: '#dc7633',
  yellow: '#f7dc6f',
  green: '#2Ecc71',
  blue: BLUE['blue-40'],
  purple: '#663399'
};

export default {
  // GENERIC COLORS
  white: [COLORS.white, ALPHA.primary],
  grey: [GREY['grey-40'], ALPHA.primary],
  black: [COLORS.black, ALPHA.primary],
  red: [COLORS.red, ALPHA.primary],
  orange: [COLORS.orange, ALPHA.primary],
  yellow: [COLORS.yellow, ALPHA.primary],
  green: [COLORS.green, ALPHA.primary],
  blue: [COLORS.blue, ALPHA.primary],
  purple: [COLORS.purple, ALPHA.primary],
  ...convertHexToAlphaArray(GREY, ALPHA.primary),
  ...convertHexToAlphaArray(BLUE, ALPHA.primary),
  // MATERIAL
  material: [GREY['grey-90'], ALPHA.primary],
  materialBrand: [BLUE['blue-90'], ALPHA.primary],
  overlay: [GREY['grey-90'], ALPHA.secondary],
  // TEXT - neutral
  textNeutral: [GREY['grey-05'], ALPHA.primary],
  textNeutralSecondary: [GREY['grey-05'], ALPHA.secondary],
  textNeutralTertiary: [GREY['grey-05'], ALPHA.tertiary],
  textNeutralDisabled: [GREY['grey-05'], ALPHA.inactive],
  // TEXT - inverse
  textInverse: [GREY['grey-90'], ALPHA.primary],
  textInverseSecondary: [GREY['grey-90'], ALPHA.secondary],
  textInverseTertiary: [GREY['grey-90'], ALPHA.tertiary],
  textInverseDisabled: [GREY['grey-90'], ALPHA.inactive],
  // FILL
  fillTransparent: [COLORS.white, ALPHA.none],
  // FILL - neutral
  fillNeutral: [GREY['grey-05'], ALPHA.primary],
  fillNeutralSecondary: [GREY['grey-05'], ALPHA.secondary],
  fillNeutralTertiary: [GREY['grey-05'], ALPHA.tertiary],
  fillNeutralDisabled: [GREY['grey-05'], ALPHA.inactive],
  // FILL - inverse
  fillInverse: [GREY['grey-90'], ALPHA.primary],
  fillInverseSecondary: [GREY['grey-90'], ALPHA.secondary],
  fillInverseTertiary: [GREY['grey-90'], ALPHA.tertiary],
  fillInverseDisabled: [GREY['grey-90'], ALPHA.inactive],
  // FILL - brand
  fillBrand: [BLUE['blue-40'], ALPHA.primary],
  fillBrandSecondary: [BLUE['blue-40'], ALPHA.secondary],
  fillBrandTertiary: [BLUE['blue-40'], ALPHA.tertiary],
  fillBrandDisabled: [BLUE['blue-40'], ALPHA.inactive],
  // STROKE - neutral
  strokeNeutral: [GREY['grey-05'], ALPHA.primary],
  strokeNeutralSecondary: [GREY['grey-05'], ALPHA.secondary],
  strokeNeutralTertiary: [GREY['grey-05'], ALPHA.tertiary],
  strokeNeutralDisabled: [GREY['grey-05'], ALPHA.inactive],
  // STROKE - inverse
  strokeInverse: [GREY['grey-90'], ALPHA.primary],
  strokeInverseSecondary: [GREY['grey-90'], ALPHA.secondary],
  strokeInverseTertiary: [GREY['grey-90'], ALPHA.tertiary],
  strokeInverseDisabled: [GREY['grey-90'], ALPHA.inactive],
  // STROKE - brand
  strokeBrand: [BLUE['blue-40'], ALPHA.primary],
  strokeBrandSecondary: [BLUE['blue-40'], ALPHA.secondary],
  strokeBrandTertiary: [BLUE['blue-40'], ALPHA.tertiary],
  strokeBrandDisabled: [BLUE['blue-40'], ALPHA.inactive],
  // INTERACTIVE - neutral
  interactiveNeutralFocus: [COLORS.white, ALPHA.primary],
  interactiveNeutralFocusSoft: [COLORS.white, ALPHA.tertiary],
  // INTERACTIVE - inverse
  interactiveInverseFocus: [GREY['grey-70'], ALPHA.primary],
  interactiveInverseFocusSoft: [GREY['grey-70'], ALPHA.tertiary],
  // INTERACTIVE - brand
  interactiveBrandFocus: [BLUE['blue-20'], ALPHA.primary],
  interactiveBrandFocusSoft: [BLUE['blue-20'], ALPHA.tertiary],
  // SHADOW - neutral
  shadowNeutralFocus: [COLORS.black, ALPHA.secondary],
  shadowNeutralFocusSoft: [COLORS.black, ALPHA.secondary],
  // SHADOW - inverse
  shadowInverseFocus: [COLORS.black, ALPHA.secondary],
  shadowInverseFocusSoft: [COLORS.black, ALPHA.secondary],
  // SHADOW - brand
  shadowBrandFocus: [COLORS.black, ALPHA.secondary],
  shadowBrandFocusSoft: [COLORS.black, ALPHA.secondary]
};
