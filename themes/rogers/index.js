import alphas from '../xfinity/alphas';
import colors from './colors';
import { layout, getFocusScale } from '../xfinity/layout';
import radius from './radius';
import animations from '../xfinity/animations';
import typography from '../xfinity/typography';

export default {
  name: 'Rogers',
  alphas,
  colors,
  layout,
  getFocusScale,
  radius,
  animations,
  typography,
  componentStyles: {
    Tag: {
      titleColor: 'theme.colors.black',
      backgroundColor: 'theme.colors.yellow'
    }
  },
  componentVariants: {
    ProgressBar: 'brand',
    FocusRing: 'brand'
  }
};
