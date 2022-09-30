import ALPHA from './alpha';
import { convertHexToAlphaArray } from '../utils';

const GREY = {
  'grey-05': '#f1f1f1',
  'grey-10': '#d8d8d8',
  'grey-20': '#c0c0c0',
  'grey-30': '#a7a7a7',
  'grey-40': '#8f8f8f',
  'grey-50': '#767676',
  'grey-60': '#5e5e5e',
  'grey-70': '#454545',
  'grey-80': '#2d2d2d',
  'grey-90': '#141414'
};

const RED = {
  'red-05': '#F2D9E1',
  'red-10': '#FF99BA',
  'red-20': '#FF6194',
  'red-30': '#FF3878',
  'red-40': '#F0004D',
  'red-50': '#E6004A',
  'red-60': '#B7023C',
  'red-70': '#8F002F',
  'red-80': '#660021',
  'red-90': '#31111B'
};

const ORANGE = {
  'orange-05': '#F2E1D9',
  'orange-10': '#FFB68F',
  'orange-20': '#FF8D52',
  'orange-30': '#FF6F24',
  'orange-40': '#F95600',
  'orange-50': '#E64F00',
  'orange-60': '#B33D00',
  'orange-70': '#A33800',
  'orange-80': '#8F3100',
  'orange-90': '#392014'
};

const YELLOW = {
  'yellow-05': '#F2EAD9',
  'yellow-10': '#FFD88A',
  'yellow-20': '#FFC95C',
  'yellow-30': '#FFB829',
  'yellow-40': '#FFAA00',
  'yellow-50': '#B87700',
  'yellow-60': '#8F5D00',
  'yellow-70': '#7A5000',
  'yellow-80': '#664200',
  'yellow-90': '#352913'
};
const GREEN = {
  'green-05': '#D9F2EA',
  'green-10': '#78E3BF',
  'green-20': '#0AC284',
  'green-30': '#009965',
  'green-40': '#008F5E',
  'green-50': '#008558',
  'green-60': '#006851',
  'green-70': '#005240',
  'green-80': '#003328',
  'green-90': '#0E2A21'
};

const BLUE = {
  'blue-05': '#dbefff',
  'blue-10': '#b3d6ff',
  'blue-20': '#8cb6ff',
  'blue-30': '#6a94ff',
  'blue-40': '#4e75ff',
  'blue-50': '#395bfb',
  'blue-60': '#2846ee',
  'blue-70': '#1a32c9',
  'blue-80': '#0d1d7f',
  'blue-90': '#030324'
};
const PURPLE = {
  'purple-05': '#e0fffd',
  'purple-10': '#9ff4f8',
  'purple-20': '#63dcf1',
  'purple-30': '#2ebfea',
  'purple-40': '#1e9bcd',
  'purple-50': '#157db0',
  'purple-60': '#116494',
  'purple-70': '#0f4f77',
  'purple-80': '#0d3c5a',
  'purple-90': '#0b293d'
};

const COLORS = {
  white: '#ffffff',
  black: '#000000',
  grey: GREY['grey-40'],
  red: RED['red-40'],
  orange: ORANGE['orange-40'],
  yellow: YELLOW['yellow-40'],
  green: GREEN['green-40'],
  blue: BLUE['blue-40'],
  purple: PURPLE['purple-40']
};

export default {
  // GENERIC COLORS
  white: [COLORS.white, ALPHA.primary],
  grey: [GREY['grey-40'], ALPHA.primary],
  black: [COLORS.black, ALPHA.primary],
  red: [RED['red-40'], ALPHA.primary],
  orange: [ORANGE['orange-40'], ALPHA.primary],
  yellow: [YELLOW['yellow-40'], ALPHA.primary],
  green: [GREEN['green-40'], ALPHA.primary],
  blue: [BLUE['blue-40'], ALPHA.primary],
  purple: [PURPLE['purple-40'], ALPHA.primary],
  ...convertHexToAlphaArray(GREY, ALPHA.primary),
  ...convertHexToAlphaArray(RED, ALPHA.primary),
  ...convertHexToAlphaArray(ORANGE, ALPHA.primary),
  ...convertHexToAlphaArray(YELLOW, ALPHA.primary),
  ...convertHexToAlphaArray(GREEN, ALPHA.primary),
  ...convertHexToAlphaArray(BLUE, ALPHA.primary),
  ...convertHexToAlphaArray(PURPLE, ALPHA.primary),
  // MATERIAL
  material: [GREY['grey-90'], ALPHA.primary],
  materialBrand: [BLUE['blue-80'], ALPHA.primary],
  overlay: [COLORS.black, ALPHA.secondary],
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
  fillBrand: [PURPLE['purple-30'], ALPHA.primary],
  fillBrandSecondary: [PURPLE['purple-30'], ALPHA.secondary],
  fillBrandTertiary: [PURPLE['purple-30'], ALPHA.tertiary],
  fillBrandDisabled: [PURPLE['purple-30'], ALPHA.inactive],
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
  strokeBrand: [PURPLE['purple-30'], ALPHA.primary],
  strokeBrandSecondary: [PURPLE['purple-30'], ALPHA.secondary],
  strokeBrandTertiary: [PURPLE['purple-30'], ALPHA.tertiary],
  strokeBrandDisabled: [PURPLE['purple-30'], ALPHA.inactive],
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
