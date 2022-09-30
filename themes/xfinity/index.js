import alpha from './alpha';
import color from './color';
import layout from './layout';
import radius from './radius';
import spacer from './spacer';
import stroke from './stroke';
import typography from './typography';
import animation from './animation';
import font from './font';
import iconLeftArrow from './assets/ic_sort_left_fill_inverse_64';
import iconRightArrow from './assets/ic_sort_right_fill_inverse_64';
import extensions from './extension';

export default {
  name: 'Xfinity',
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
          duration: 'theme.animation.duration.xfast'
        },
        animationGradientExit: {
          duration: 'theme.animation.duration.xfast'
        },
        animationImageScaleEntrance: {
          duration: 'theme.animation.duration.fast'
        },
        animationImageScaleExit: {
          duration: 'theme.animation.duration.xfast'
        }
      }
    },
    Artwork: {
      fallbackSrc: './images/default_background.png'
    }
  },
  componentPalette: {
    Label: 'brand'
  },
  extensions
};
