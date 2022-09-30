import ALPHA from './alpha';
import { convertHexToAlphaArray } from '../utils';

const GREY = {
  'grey-05': '#F6F6F9',
  'grey-10': '#ECECF2',
  'grey-20': '#CECEDA',
  'grey-30': '#B1B1BD',
  'grey-40': '#8B8B97',
  'grey-50': '#62626C',
  'grey-60': '#484851',
  'grey-70': '#35353B',
  'grey-80': '#232328',
  'grey-90': '#141417'
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
  'blue-05': '#D9E1F2',
  'blue-10': '#8BAFF9',
  'blue-20': '#4784FF',
  'blue-30': '#3376FF',
  'blue-40': '#2970FF',
  'blue-50': '#1F69FF',
  'blue-60': '#0051D0',
  'blue-70': '#0040A3',
  'blue-80': '#003485',
  'blue-90': '#131E34'
};
const PURPLE = {
  'purple-05': '#E3E0F4',
  'purple-10': '#BAA8FA',
  'purple-20': '#9378F8',
  'purple-30': '#805FF6',
  'purple-40': '#704BF7',
  'purple-50': '#6138F5',
  'purple-60': '#4D00BD',
  'purple-70': '#3A0092',
  'purple-80': '#28006A',
  'purple-90': '#1C1538'
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
  materialBrand: [PURPLE['purple-90'], ALPHA.primary],
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
  fillBrand: [PURPLE['purple-40'], ALPHA.primary],
  fillBrandSecondary: [PURPLE['purple-40'], ALPHA.secondary],
  fillBrandTertiary: [PURPLE['purple-40'], ALPHA.tertiary],
  fillBrandDisabled: [PURPLE['purple-40'], ALPHA.inactive],
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
  strokeBrand: [PURPLE['purple-40'], ALPHA.primary],
  strokeBrandSecondary: [PURPLE['purple-40'], ALPHA.secondary],
  strokeBrandTertiary: [PURPLE['purple-40'], ALPHA.tertiary],
  strokeBrandDisabled: [PURPLE['purple-40'], ALPHA.inactive],
  // INTERACTIVE - neutral
  interactiveNeutralFocus: [COLORS.white, ALPHA.primary],
  interactiveNeutralFocusSoft: [COLORS.white, ALPHA.tertiary],
  // INTERACTIVE - inverse
  interactiveInverseFocus: [GREY['grey-70'], ALPHA.primary],
  interactiveInverseFocusSoft: [GREY['grey-70'], ALPHA.tertiary],
  // INTERACTIVE - brand
  interactiveBrandFocus: [PURPLE['purple-20'], ALPHA.primary],
  interactiveBrandFocusSoft: [PURPLE['purple-20'], ALPHA.tertiary],
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
