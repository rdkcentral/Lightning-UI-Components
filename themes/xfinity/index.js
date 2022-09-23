import alphas from './alphas';
import colors from './colors';
import layout from './layout';
import radius from './radius';
import spacer from './spacer';
import stroke from './stroke';
import typography from './typography';
import animations from './animations';
import fonts from './fonts';
import iconLeftArrow from './assets/ic_sort_left_fill_inverse_64';
import iconRightArrow from './assets/ic_sort_right_fill_inverse_64';
import extensions from './extensions';

export default {
  name: 'Xfinity',
  alphas,
  animations,
  colors,
  fonts,
  layout,
  radius,
  spacer,
  stroke,
  typography,
  componentStyle: {
    Slider: {
      iconLeftSrc: iconLeftArrow,
      iconRightSrc: iconRightArrow,
      arrowWidth: spacer.xxl,
      arrowHeight: spacer.xxl
    },
    TextBox: {
      offsetY: 2 // Hopefully this can be fixed in a future release. For now we can center align for badge, tag with this adjustment font doesnt seam to fill the whole area in textbox texture
    },
    Tile: {
      artworkStyles: {
        imageScale: 1.2,
        animationGradientEntrance: {
          duration: 'theme.animations.durations.xfast'
        },
        animationGradientExit: {
          duration: 'theme.animations.durations.xfast'
        },
        animationImageScaleEntrance: {
          duration: 'theme.animations.durations.fast'
        },
        animationImageScaleExit: {
          duration: 'theme.animations.durations.xfast'
        }
      }
    },
    Artwork: {
      fallbackSrc: './images/default_background.png'
    }
  },
  extensions
};
