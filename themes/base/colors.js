import ALPHAS from './alphas';

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
  material: [COLOR_PALETTE.grey[90], ALPHAS.primary],
  materialBrand: [COLOR_PALETTE.blue[90], ALPHAS.primary],
  coreNeutral: [COLOR_PALETTE.grey[5], ALPHAS.primary],
  coreNeutralSecondary: [COLOR_PALETTE.grey[5], ALPHAS.secondary],
  coreNeutralTertiary: [COLOR_PALETTE.grey[5], ALPHAS.tertiary],
  coreNeutralDisabled: [COLOR_PALETTE.grey[5], ALPHAS.inactive],
  coreInverse: [COLOR_PALETTE.grey[90], ALPHAS.primary],
  coreInverseSecondary: [COLOR_PALETTE.grey[90], ALPHAS.secondary],
  coreInverseTertiary: [COLOR_PALETTE.grey[90], ALPHAS.tertiary],
  coreInverseDisabled: [COLOR_PALETTE.grey[90], ALPHAS.inactive],
  coreBrand: [COLOR_PALETTE.blue[40], ALPHAS.primary],
  coreBrandSecondary: [COLOR_PALETTE.blue[40], ALPHAS.secondary],
  coreBrandTertiary: [COLOR_PALETTE.blue[40], ALPHAS.tertiary],
  coreBrandDisabled: [COLOR_PALETTE.blue[40], ALPHAS.inactive],
  coreOverlay: [COLOR_PALETTE.grey[90], ALPHAS.secondary],
  interactiveNeutralFocus: [COLOR_PALETTE.constants.white, ALPHAS.primary],
  interactiveNeutralFocusSoft: [COLOR_PALETTE.constants.white, ALPHAS.tertiary],
  interactiveInverseFocus: [COLOR_PALETTE.grey[70], ALPHAS.primary],
  interactiveInverseFocusSoft: [COLOR_PALETTE.grey[70], ALPHAS.tertiary],
  interactiveBrandFocus: [COLOR_PALETTE.blue[20], ALPHAS.primary],
  interactiveBrandFocusSoft: [COLOR_PALETTE.blue[20], ALPHAS.tertiary],
  transparent: [COLOR_PALETTE.constants.white, ALPHAS.none],
  black: [COLOR_PALETTE.constants.black, ALPHAS.primary],
  white: [COLOR_PALETTE.constants.white, ALPHAS.primary],
  gray: [COLOR_PALETTE.grey[40], ALPHAS.primary],
  red: ['#E74C3C', ALPHAS.primary],
  orange: ['#DC7633', ALPHAS.primary],
  yellow: ['#F7DC6F', ALPHAS.primary],
  green: ['#2ECC71', ALPHAS.primary],
  blue: ['#93a9fd', ALPHAS.primary],
  purple: ['#663399', ALPHAS.primary]
};
