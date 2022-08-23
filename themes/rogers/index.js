import xfinity from '../xfinity';
import colors from './colors';
import radius from './radius';
import typography from './typography';
import fonts from './fonts';

export default {
  ...xfinity,
  name: 'Rogers',
  colors,
  fonts,
  radius,
  typography,
  componentPalette: {
    ProgressBar: 'brand',
    FocusRing: 'brand',
    Distractor: 'brand',
    Wave: 'brand'
  }
};
