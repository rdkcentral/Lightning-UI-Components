import alphas from './alphas';
import colors from './colors';
// import extensions from './extensions';
import { layout, getFocusScale } from './layout';
import radius from './radius';
import stroke from './stroke';
import typography from './typography';
import animations from './animations';
import fonts from './fonts';

export default {
  name: 'Sky',
  alphas,
  animations,
  colors,
  fonts,
  getFocusScale,
  layout,
  radius,
  stroke,
  typography,
  componentStyles: {
    ProgressBar: {
      h: stroke.medium,
      radius: stroke.medium / 2
    },
    Tile: {
      paddingX: 20,
      paddingY: 14,
      metadataLocation: 'inset',
      radius: radius.xsmall
    }
  },
  componentVariants: {
    ProgressBar: 'brand'
  }
  // extensions
};
