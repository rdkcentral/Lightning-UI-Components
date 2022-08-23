import ALPHAS from '../base/alphas';

const COLOR_PALETTE = {
  red: {
    20: '#D40139',
    40: '#A1001E',
    90: '38060E'
  }
};

export default {
  materialBrand: [COLOR_PALETTE.red[90], ALPHAS.primary],
  coreBrand: [COLOR_PALETTE.red[40], ALPHAS.primary],
  coreBrandSecondary: [COLOR_PALETTE.red[40], ALPHAS.secondary],
  coreBrandTertiary: [COLOR_PALETTE.red[40], ALPHAS.tertiary],
  coreBrandDisabled: [COLOR_PALETTE.red[40], ALPHAS.inactive],
  interactiveBrandFocus: [COLOR_PALETTE.red[20], ALPHAS.primary],
  interactiveBrandFocusSoft: [COLOR_PALETTE.red[20], ALPHAS.tertiary],
  red: [COLOR_PALETTE.red[40], ALPHAS.primary]
};
