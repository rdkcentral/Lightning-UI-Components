import alphas from '../xfinity/alphas';
import colors from './colors';
import { layout } from '../xfinity/layout';
import radius from './radius';
import animations from '../xfinity/animations';
import typography from './typography';
import fonts from './fonts';
import extensions from '../xfinity/extensions';

export default {
  name: 'Rogers',
  alphas,
  animations,
  colors,
  fonts,
  layout,
  radius,
  typography,
  componentStyles: {
    TextBox: {
      offsetY: 2 // Hopefully this can be fixed in a future release. For now we can center align for badge, tag with this adjustment font doesnt seam to fill the whole area in textbox texture
    }
  },
  componentVariants: {
    ProgressBar: 'brand',
    FocusRing: 'brand'
  },
  extensions
};
