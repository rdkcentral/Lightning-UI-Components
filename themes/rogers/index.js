import alphas from '../xfinity/alphas';
import colors from './colors';
import { layout, getFocusScale } from '../xfinity/layout';
import radius from './radius';
import animations from '../xfinity/animations';
import typography from '../xfinity/typography';
import extensions from '../xfinity/extensions';
import fonts from '../xfinity/fonts';

export default {
  name: 'Rogers',
  alphas,
  animations,
  colors,
  fonts,
  getFocusScale,
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
