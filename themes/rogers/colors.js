const COLOR_PALETTE = {
  red: {
    20: '#DC2A1D',
    40: '#AD2F07'
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
  fillBrand: [COLOR_PALETTE.red[40], ALPHAS.primary],
  fillBrandSecondary: [COLOR_PALETTE.red[40], ALPHAS.secondary],
  fillBrandTertiary: [COLOR_PALETTE.red[40], ALPHAS.tertiary],
  fillBrandDisabled: [COLOR_PALETTE.red[40], ALPHAS.inactive],
  fillBrandGhost: [COLOR_PALETTE.red[40], ALPHAS.none],
  fillBrandFocus: [COLOR_PALETTE.red[20], ALPHAS.primary],
  fillBrandFocusSoft: [COLOR_PALETTE.red[20], ALPHAS.tertiary]
};
