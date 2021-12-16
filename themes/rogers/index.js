import colors from './colors';
import { layout, getFocusScale } from '../xfinity/layout';
import radius from './radius';
import typography from '../xfinity/typography';

export default {
  name: 'Rogers',
  colors,
  layout,
  getFocusScale,
  radius,
  typography,
  componentVariants: {
    ProgressBar: 'brand',
    FocusRing: 'brand'
  }
};
