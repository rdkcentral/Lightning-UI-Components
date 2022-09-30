import alpha from './alpha';
import color from './color';
import layout from './layout';
import radius from './radius';
import spacer from './spacer';
import stroke from './stroke';
import typography from './typography';
import animation from './animation';
import font from './font';

export default {
  name: 'Sky',
  alpha,
  animation,
  color,
  font,
  layout,
  radius,
  spacer,
  stroke,
  typography,
  componentStyle: {
    ProgressBar: {
      h: stroke.md,
      radius: stroke.md / 2
    },
    Tile: {
      paddingX: 20,
      paddingY: 14,
      metadataLocation: 'inset',
      radius: radius.xs,
      mode: {
        focused: {
          radius: radius.lg
        }
      }
    }
  },
  componentPalette: {
    ProgressBar: 'brand'
  }
};
