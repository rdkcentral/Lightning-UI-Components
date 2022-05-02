import ALPHAS from '../base/alphas';

const COLOR_PALETTE = {
  red: {
    20: '#DC2A1D',
    40: '#AD2F07'
  }
};

export default {
  coreBrand: [COLOR_PALETTE.red[40], ALPHAS.primary],
  coreBrandSecondary: [COLOR_PALETTE.red[40], ALPHAS.secondary],
  coreBrandTertiary: [COLOR_PALETTE.red[40], ALPHAS.tertiary],
  coreBrandDisabled: [COLOR_PALETTE.red[40], ALPHAS.inactive],
  coreBrandGhost: [COLOR_PALETTE.red[40], ALPHAS.none],
  coreBrandFocus: [COLOR_PALETTE.red[20], ALPHAS.primary],
  coreBrandFocusSoft: [COLOR_PALETTE.red[20], ALPHAS.tertiary],
  red: [COLOR_PALETTE.red[40], ALPHAS.primary]
};
