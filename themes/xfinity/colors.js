import ALPHAS from './alphas';

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
    5: '#D9E1F2',
    10: '#8BAFF9',
    20: '#4784FF',
    30: '#3376FF',
    40: '#2970FF',
    50: '#1F69FF',
    60: '#0051D0',
    70: '#0040A3',
    80: '#003485',
    90: '#131E34'
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
    90: '#1C1538'
  }
};

export default {
  material: [COLOR_PALETTE.grey[90], ALPHAS.primary],
  materialBrand: [COLOR_PALETTE.purple[90], ALPHAS.primary],
  coreNeutral: [COLOR_PALETTE.grey[5], ALPHAS.primary],
  coreNeutralSecondary: [COLOR_PALETTE.grey[5], ALPHAS.secondary],
  coreNeutralTertiary: [COLOR_PALETTE.grey[5], ALPHAS.tertiary],
  coreNeutralDisabled: [COLOR_PALETTE.grey[5], ALPHAS.inactive],
  coreInverse: [COLOR_PALETTE.grey[90], ALPHAS.primary],
  coreInverseSecondary: [COLOR_PALETTE.grey[90], ALPHAS.secondary],
  coreInverseTertiary: [COLOR_PALETTE.grey[90], ALPHAS.tertiary],
  coreInverseDisabled: [COLOR_PALETTE.grey[90], ALPHAS.inactive],
  coreBrand: [COLOR_PALETTE.purple[40], ALPHAS.primary],
  coreBrandSecondary: [COLOR_PALETTE.purple[40], ALPHAS.secondary],
  coreBrandTertiary: [COLOR_PALETTE.purple[40], ALPHAS.tertiary],
  coreBrandDisabled: [COLOR_PALETTE.purple[40], ALPHAS.inactive],
  coreOverlay: [COLOR_PALETTE.grey[90], ALPHAS.secondary],
  interactiveNeutralFocus: [COLOR_PALETTE.constants.white, ALPHAS.primary],
  interactiveNeutralFocusSoft: [COLOR_PALETTE.constants.white, ALPHAS.tertiary],
  interactiveInverseFocus: [COLOR_PALETTE.grey[70], ALPHAS.primary],
  interactiveInverseFocusSoft: [COLOR_PALETTE.grey[70], ALPHAS.tertiary],
  interactiveBrandFocus: [COLOR_PALETTE.purple[20], ALPHAS.primary],
  interactiveBrandFocusSoft: [COLOR_PALETTE.purple[20], ALPHAS.tertiary],
  grey: [COLOR_PALETTE.grey[40], ALPHAS.primary],
  red: [COLOR_PALETTE.red[40], ALPHAS.primary],
  orange: [COLOR_PALETTE.orange[40], ALPHAS.primary],
  yellow: [COLOR_PALETTE.yellow[40], ALPHAS.primary],
  green: [COLOR_PALETTE.green[40], ALPHAS.primary],
  blue: [COLOR_PALETTE.blue[40], ALPHAS.primary],
  purple: [COLOR_PALETTE.purple[40], ALPHAS.primary]
};
