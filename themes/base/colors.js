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
  surface: [COLOR_PALETTE.grey[80], ALPHAS.primary],
  surfaceSecondary: [COLOR_PALETTE.grey[80], ALPHAS.secondary],
  surfaceTertiary: [COLOR_PALETTE.grey[80], ALPHAS.tertiary],
  surfaceDisabled: [COLOR_PALETTE.grey[80], ALPHAS.inactive],
  surfaceGhost: [COLOR_PALETTE.grey[80], ALPHAS.none],
  fillNeutral1: [COLOR_PALETTE.grey[5], ALPHAS.primary],
  fillNeutral1Secondary: [COLOR_PALETTE.grey[5], ALPHAS.secondary],
  fillNeutral1Tertiary: [COLOR_PALETTE.grey[5], ALPHAS.tertiary],
  fillNeutral1Disabled: [COLOR_PALETTE.grey[5], ALPHAS.inactive],
  fillNeutral1Ghost: [COLOR_PALETTE.grey[5], ALPHAS.none],
  fillNeutral2: [COLOR_PALETTE.grey[40], ALPHAS.primary],
  fillInverse1: [COLOR_PALETTE.grey[90], ALPHAS.primary],
  fillInverse1Secondary: [COLOR_PALETTE.grey[90], ALPHAS.secondary],
  fillInverse1Tertiary: [COLOR_PALETTE.grey[90], ALPHAS.tertiary],
  fillInverse1Disabled: [COLOR_PALETTE.grey[90], ALPHAS.inactive],
  fillInverse1Ghost: [COLOR_PALETTE.grey[90], ALPHAS.none],
  fillInverse2: [COLOR_PALETTE.grey[50], ALPHAS.primary],
  fillBrand: [COLOR_PALETTE.blue[40], ALPHAS.primary],
  fillBrandSecondary: [COLOR_PALETTE.blue[40], ALPHAS.secondary],
  fillBrandTertiary: [COLOR_PALETTE.blue[40], ALPHAS.tertiary],
  fillBrandDisabled: [COLOR_PALETTE.blue[40], ALPHAS.inactive],
  fillBrandGhost: [COLOR_PALETTE.blue[40], ALPHAS.none],
  overlay: [COLOR_PALETTE.grey[90], ALPHAS.secondary],
  surfaceFocus: [COLOR_PALETTE.constants.white, ALPHAS.primary],
  surfaceFocusSoft: [COLOR_PALETTE.constants.white, ALPHAS.tertiary],
  fillNeutralFocus: [COLOR_PALETTE.constants.white, ALPHAS.primary],
  fillNeutralFocusSoft: [COLOR_PALETTE.constants.white, ALPHAS.tertiary],
  fillInverseFocus: [COLOR_PALETTE.grey[70], ALPHAS.primary],
  fillInverseFocusSoft: [COLOR_PALETTE.grey[70], ALPHAS.tertiary],
  fillBrandFocus: [COLOR_PALETTE.blue[20], ALPHAS.primary],
  fillBrandFocusSoft: [COLOR_PALETTE.blue[20], ALPHAS.tertiary],
  gray: [COLOR_PALETTE.grey[40], ALPHAS.primary],
  red: ['#E74C3C', ALPHAS.primary],
  orange: ['#DC7633', ALPHAS.primary],
  yellow: ['#F7DC6F', ALPHAS.primary],
  green: ['#2ECC71', ALPHAS.primary],
  blue: ['#93a9fd', ALPHAS.primary],
  purple: ['#663399', ALPHAS.primary]
};
