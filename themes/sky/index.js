import alphas from './alphas';
import colors from './colors';
import layout from './layout';
import radius from './radius';
import spacer from './spacer';
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
  layout,
  radius,
  spacer,
  stroke,
  typography,
  componentStyles: {
    ProgressBar: {
      h: stroke.md,
      radius: stroke.md / 2
    },
    Tile: {
      paddingX: 20,
      paddingY: 14,
      metadataLocation: 'inset',
      radius: radius.xs
    }
  },
  componentVariants: {
    ProgressBar: 'brand'
  }
};
