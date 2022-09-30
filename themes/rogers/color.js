import ALPHA from '../base/alpha';

const COLOR_PALETTE = {
  red: {
    20: '#D40139',
    40: '#A1001E',
    90: '38060E'
  }
};

export default {
  materialBrand: [COLOR_PALETTE.red[90], ALPHA.primary],
  coreBrand: [COLOR_PALETTE.red[40], ALPHA.primary],
  coreBrandSecondary: [COLOR_PALETTE.red[40], ALPHA.secondary],
  coreBrandTertiary: [COLOR_PALETTE.red[40], ALPHA.tertiary],
  coreBrandDisabled: [COLOR_PALETTE.red[40], ALPHA.inactive],
  interactiveBrandFocus: [COLOR_PALETTE.red[20], ALPHA.primary],
  interactiveBrandFocusSoft: [COLOR_PALETTE.red[20], ALPHA.tertiary],
  red: [COLOR_PALETTE.red[40], ALPHA.primary]
};
