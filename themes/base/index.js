import alphas from './alphas';
import colors from './colors';
import { layout, getFocusScale, getUnfocusScale } from './layout';
import radius from './radius';
import spacer from './spacer';
import stroke from './stroke';
import typography from './typography';
import animations from './animations';
import fonts from './fonts';

export default {
  name: 'Base',
  alphas,
  animations,
  colors,
  componentStyles: {},
  componentVariants: {},
  fonts,
  layout,
  radius,
  spacer,
  stroke,
  typography,

  // TODO: After modes refactor, Emily to move these to Base component and
  // return `this._componentStyles.layout.focusScale`
  // so users can easily extend and overwrite scaling methods
  getFocusScale,
  getUnfocusScale
};
