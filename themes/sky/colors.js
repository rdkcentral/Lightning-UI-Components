import ALPHAS from './alphas';

const COLOR_PALETTE = {
  constants: {
    white: '#FFFFFF',
    black: '#000000'
  },
  grey: {
    5: '#f1f1f1',
    10: '#d8d8d8',
    20: '#c0c0c0',
    30: '#a7a7a7',
    40: '#8f8f8f',
    50: '#767676',
    60: '#5e5e5e',
    70: '#454545',
    80: '#2d2d2d',
    90: '#141414'
  },
  red: {
    5: '#F2D9E1',
    10: '#FF99BA',
    20: '#FF6194',
    30: '#FF3878',
    40: '#F0004D',
    50: '#E6004A',
    60: '#B7023C',
    70: '#8F002F',
    80: '#660021',
    90: '#31111B'
  },
  orange: {
    5: '#F2E1D9',
    10: '#FFB68F',
    20: '#FF8D52',
    30: '#FF6F24',
    40: '#F95600',
    50: '#E64F00',
    60: '#B33D00',
    70: '#A33800',
    80: '#8F3100',
    90: '#392014'
  },
  yellow: {
    5: '#F2EAD9',
    10: '#FFD88A',
    20: '#FFC95C',
    30: '#FFB829',
    40: '#FFAA00',
    50: '#B87700',
    60: '#8F5D00',
    70: '#7A5000',
    80: '#664200',
    90: '#352913'
  },
  green: {
    5: '#D9F2EA',
    10: '#78E3BF',
    20: '#0AC284',
    30: '#009965',
    40: '#008F5E',
    50: '#008558',
    60: '#006851',
    70: '#005240',
    80: '#003328',
    90: '#0E2A21'
  },
  blue: {
    5: '#dbefff',
    10: '#b3d6ff',
    20: '#8cb6ff',
    30: '#6a94ff',
    40: '#4e75ff',
    50: '#395bfb',
    60: '#2846ee',
    70: '#1a32c9',
    80: '#0d1d7f',
    90: '#030324'
  },
  blue2: {
    5: '#e0fffd',
    10: '#9ff4f8',
    20: '#63dcf1',
    30: '#2ebfea',
    40: '#1e9bcd',
    50: '#157db0',
    60: '#116494',
    70: '#0f4f77',
    80: '#0d3c5a',
    90: '#0b293d'
  }
};

export default {
  material: [COLOR_PALETTE.blue[90], ALPHAS.primary],
  materialBrand: [COLOR_PALETTE.blue[80], ALPHAS.primary],
  coreNeutral: [COLOR_PALETTE.grey[5], ALPHAS.primary],
  coreNeutralSecondary: [COLOR_PALETTE.grey[5], ALPHAS.secondary],
  coreNeutralTertiary: [COLOR_PALETTE.grey[5], ALPHAS.tertiary],
  coreNeutralDisabled: [COLOR_PALETTE.grey[5], ALPHAS.inactive],
  coreInverse: [COLOR_PALETTE.grey[90], ALPHAS.primary],
  coreInverseSecondary: [COLOR_PALETTE.grey[90], ALPHAS.secondary],
  coreInverseTertiary: [COLOR_PALETTE.grey[90], ALPHAS.tertiary],
  coreInverseDisabled: [COLOR_PALETTE.grey[90], ALPHAS.inactive],
  coreBrand: [COLOR_PALETTE.blue2[30], ALPHAS.primary],
  coreBrandSecondary: [COLOR_PALETTE.blue2[30], ALPHAS.secondary],
  coreBrandTertiary: [COLOR_PALETTE.blue2[30], ALPHAS.tertiary],
  coreBrandDisabled: [COLOR_PALETTE.blue2[30], ALPHAS.inactive],
  coreOverlay: [COLOR_PALETTE.constants.black, ALPHAS.secondary],
  interactiveNeutralFocus: [COLOR_PALETTE.grey[5], ALPHAS.secondary],
  interactiveNeutralFocusSoft: [COLOR_PALETTE.grey[5], ALPHAS.tertiary],
  interactiveInverseFocus: [COLOR_PALETTE.grey[70], ALPHAS.primary],
  interactiveInverseFocusSoft: [COLOR_PALETTE.grey[70], ALPHAS.tertiary],
  interactiveBrandFocus: [COLOR_PALETTE.grey[5], ALPHAS.secondary],
  interactiveBrandFocusSoft: [COLOR_PALETTE.grey[5], ALPHAS.tertiary],
  gray: [COLOR_PALETTE.grey[40], ALPHAS.primary],
  red: [COLOR_PALETTE.red[40], ALPHAS.primary],
  orange: [COLOR_PALETTE.orange[40], ALPHAS.primary],
  yellow: [COLOR_PALETTE.yellow[40], ALPHAS.primary],
  green: [COLOR_PALETTE.green[40], ALPHAS.primary],
  blue: [COLOR_PALETTE.blue[40], ALPHAS.primary],
  purple: [COLOR_PALETTE.blue2[40], ALPHAS.primary]
};
