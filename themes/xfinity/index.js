import alphas from './alphas';
import colors from './colors';
import extensions from './extensions';
import { layout, getFocusScale } from './layout';
import radius from './radius';
import stroke from './stroke';
import typography from './typography';
import animations from './animations';
import fonts from './fonts';

export default {
  name: 'Xfinity',
  alphas,
  colors,
  extensions,
  layout,
  fonts,
  getFocusScale,
  radius,
  stroke,
  typography,
  animations,
  componentStyles: {
    Surface: {
      focusRing: true
    }
  }
};
