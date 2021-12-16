const COLOR_PALETTE = {
  constants: {
    white: '#FFFFFF',
    black: '#000000'
  },
  grey: {
    5: '#F6F6F9',
    10: '#ECECF2',
    20: '#CECEDA',
    30: '#B1B1BD',
    40: '#8B8B97',
    50: '#62626C',
    60: '#484851',
    70: '#35353B',
    80: '#232328',
    90: '#141417'
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
    90: '#2A120E'
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
    90: '#2A170E'
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
    90: '#1F180A'
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
    90: '#0A1F18'
  },
  blue: {
    5: '#D9E1F2',
    10: '#8BAFF9',
    20: '#4784FF',
    30: '#3376FF',
    40: '#2970FF',
    50: '#1F69FF',
    60: '#0051D0',
    70: '#0040A3',
    80: '#003485',
    90: '#111A32'
  },
  purple: {
    5: '#E3E0F4',
    10: '#BAA8FA',
    20: '#9378F8',
    30: '#805FF6',
    40: '#704BF7',
    50: '#6138F5',
    60: '#4D00BD',
    70: '#3A0092',
    80: '#28006A',
    90: '#1E1236'
  }
};

const ALPHAS = {
  primary: 100,
  secondary: 60,
  inactive: 30,
  tertiary: 15,
  none: 0
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
  fillBrand: [COLOR_PALETTE.purple[40], ALPHAS.primary],
  fillBrandSecondary: [COLOR_PALETTE.purple[40], ALPHAS.secondary],
  fillBrandTertiary: [COLOR_PALETTE.purple[40], ALPHAS.tertiary],
  fillBrandDisabled: [COLOR_PALETTE.purple[40], ALPHAS.inactive],
  fillBrandGhost: [COLOR_PALETTE.purple[40], ALPHAS.none],
  overlay: [COLOR_PALETTE.grey[90], ALPHAS.secondary],
  surfaceFocus: [COLOR_PALETTE.constants.white, ALPHAS.primary],
  surfaceFocusSoft: [COLOR_PALETTE.constants.white, ALPHAS.tertiary],
  fillNeutralFocus: [COLOR_PALETTE.constants.white, ALPHAS.primary],
  fillNeutralFocusSoft: [COLOR_PALETTE.constants.white, ALPHAS.tertiary],
  fillInverseFocus: [COLOR_PALETTE.grey[70], ALPHAS.primary],
  fillInverseFocusSoft: [COLOR_PALETTE.grey[70], ALPHAS.tertiary],
  fillBrandFocus: [COLOR_PALETTE.purple[20], ALPHAS.primary],
  fillBrandFocusSoft: [COLOR_PALETTE.purple[20], ALPHAS.tertiary]
};
