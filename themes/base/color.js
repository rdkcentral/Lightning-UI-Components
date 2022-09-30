import ALPHA from './alpha';

const COLOR_PALETTE = {
  constants: {
    white: '#FFFFFF',
    black: '#000000'
  },
  grey: {
    5: '#f8f7fa',
    10: '#dedde1',
    20: '#c4c3c8',
    30: '#aba9af',
    40: '#929096',
    50: '#75737d',
    60: '#616064',
    70: '#48474b',
    80: '#303032',
    90: '#181819'
  },
  blue: {
    5: '#ebf1ff',
    10: '#d4e1ff',
    20: '#becffe',
    30: '#a8bdfd',
    40: '#93a9fd',
    50: '#4c5ff7',
    60: '#202ae9',
    70: '#1117d7',
    80: '#02026b',
    90: '#000033'
  }
};

export default {
  material: [COLOR_PALETTE.grey[90], ALPHA.primary],
  materialBrand: [COLOR_PALETTE.blue[90], ALPHA.primary],
  coreNeutral: [COLOR_PALETTE.grey[5], ALPHA.primary],
  coreNeutralSecondary: [COLOR_PALETTE.grey[5], ALPHA.secondary],
  coreNeutralTertiary: [COLOR_PALETTE.grey[5], ALPHA.tertiary],
  coreNeutralDisabled: [COLOR_PALETTE.grey[5], ALPHA.inactive],
  coreInverse: [COLOR_PALETTE.grey[90], ALPHA.primary],
  coreInverseSecondary: [COLOR_PALETTE.grey[90], ALPHA.secondary],
  coreInverseTertiary: [COLOR_PALETTE.grey[90], ALPHA.tertiary],
  coreInverseDisabled: [COLOR_PALETTE.grey[90], ALPHA.inactive],
  coreBrand: [COLOR_PALETTE.blue[40], ALPHA.primary],
  coreBrandSecondary: [COLOR_PALETTE.blue[40], ALPHA.secondary],
  coreBrandTertiary: [COLOR_PALETTE.blue[40], ALPHA.tertiary],
  coreBrandDisabled: [COLOR_PALETTE.blue[40], ALPHA.inactive],
  coreOverlay: [COLOR_PALETTE.grey[90], ALPHA.secondary],
  interactiveNeutralFocus: [COLOR_PALETTE.constants.white, ALPHA.primary],
  interactiveNeutralFocusSoft: [COLOR_PALETTE.constants.white, ALPHA.tertiary],
  interactiveInverseFocus: [COLOR_PALETTE.grey[70], ALPHA.primary],
  interactiveInverseFocusSoft: [COLOR_PALETTE.grey[70], ALPHA.tertiary],
  interactiveBrandFocus: [COLOR_PALETTE.blue[20], ALPHA.primary],
  interactiveBrandFocusSoft: [COLOR_PALETTE.blue[20], ALPHA.tertiary],
  transparent: [COLOR_PALETTE.constants.white, ALPHA.none],
  black: [COLOR_PALETTE.constants.black, ALPHA.primary],
  white: [COLOR_PALETTE.constants.white, ALPHA.primary],
  grey: [COLOR_PALETTE.grey[40], ALPHA.primary],
  red: ['#E74C3C', ALPHA.primary],
  orange: ['#DC7633', ALPHA.primary],
  yellow: ['#F7DC6F', ALPHA.primary],
  green: ['#2ECC71', ALPHA.primary],
  blue: ['#93a9fd', ALPHA.primary],
  purple: ['#663399', ALPHA.primary]
};
