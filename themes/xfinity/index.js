import alphas from './alphas';
import colors from './colors';
import extensions from './extensions';
import { layout, getFocusScale } from './layout';
import radius from './radius';
import stroke from './stroke';
import typography from './typography';
import animations from './animations';
import fonts from './fonts';
import iconLeftArrow from './assets/ic_sort_left_fill_inverse_64';
import iconRightArrow from './assets/ic_sort_right_fill_inverse_64';

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
    },
    Knob: {
      focusRing: true
    },
    Slider: {
      iconLeftSrc: iconLeftArrow,
      iconRightSrc: iconRightArrow,
      arrowWidth: layout.spacingBase * 4,
      arrowHeight: layout.spacingBase * 4
    }
  }
};
