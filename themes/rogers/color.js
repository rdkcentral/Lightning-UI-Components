import ALPHA from '../base/alpha';
import { convertHexToAlphaArray } from '../utils';

const RED = {
  'red-20': '#D40139',
  'red-40': '#A1001E',
  'red-90': '38060E'
};

export default {
  red: [RED['red-40'], ALPHA.primary],
  ...convertHexToAlphaArray(RED, ALPHA.primary),
  materialBrand: [RED['red-90'], ALPHA.primary],
  fillBrand: [RED['red-40'], ALPHA.primary],
  fillBrandSecondary: [RED['red-40'], ALPHA.secondary],
  fillBrandTertiary: [RED['red-40'], ALPHA.tertiary],
  fillBrandDisabled: [RED['red-40'], ALPHA.inactive],
  strokeBrand: [RED['red-40'], ALPHA.primary],
  strokeBrandSecondary: [RED['red-40'], ALPHA.secondary],
  strokeBrandTertiary: [RED['red-40'], ALPHA.tertiary],
  strokeBrandDisabled: [RED['red-40'], ALPHA.inactive],
  interactiveBrandFocus: [RED['red-20'], ALPHA.primary],
  interactiveBrandFocusSoft: [RED['red-20'], ALPHA.tertiary]
};
