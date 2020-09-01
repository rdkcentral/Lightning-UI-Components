/**
 * Focus Ring Component
 *
 * Blurred Ring to focus items and images
 *
 */
import lng from 'wpe-lightning';
import withStyles from '../../mixins/withStyles';
import { COLORS_NEUTRAL, getHexColor } from '../Styles/Styles';

export const styles = {
  background: { color: getHexColor(COLORS_NEUTRAL.light2, 8) },
  animation: { color: COLORS_NEUTRAL.light2 },
  transition: {
    duration: 0.3,
    timingFunction: 'cubic-bezier(0.20, 1.00, 0.52, 1.00)'
  }
};

class FocusRing extends lng.Component {
  _init() {
    let size = this.size;
    let positioning = {
      w: this.w + size,
      h: this.h + size,
      x: this.x - size / 2,
      y: this.y - size / 2
    };

    let Image = {
      w: this.w,
      h: this.h
    };
    if (this.imageTexture) {
      Image.texture = this.imageTexture;
    } else if (this.imageSrc) {
      Image.src = this.imageSrc;
    }

    let DropShadow = {};
    if (this.shadow) {
      DropShadow = {
        type: lng.components.FastBlurComponent,
        w: this.w,
        h: this.h,
        amount: this.shadow.blur || 3,
        padding: this.shadow.padding || 36,
        alpha: this.shadow.alpha || 0.6,
        content: { Image }
      };
    }

    this.patch({
      zIndex: 0,
      scale: 0.8,
      alpha: 0,
      FocusRing: {
        type: lng.components.FastBlurComponent,
        rtt: true,
        ...positioning,
        amount: this.blur || 0,
        content: {
          Image,
          Background: {
            rect: true,
            w: this.w,
            h: this.h,
            color: this.styles.background.color
          }
        }
      },
      DropShadow
    });

    const color = this.styles.animation.color;
    this._focusRingAnimation = this._Background.animation({
      duration: 0.6,
      actions: [
        {
          p: 'colorUl',
          v: { 0: getHexColor(color, 72), 1: getHexColor(color, 56) }
        },
        {
          p: 'colorUr',
          v: { 0: getHexColor(color, 24), 1: getHexColor(color, 16) }
        },
        { p: 'colorBr', v: { 0: 0x00, 1: getHexColor(color, 0) } },
        {
          p: 'colorBl',
          v: { 0: getHexColor(color, 24), 1: getHexColor(color, 16) }
        }
      ]
    });
    this._focusRingAnimation.start();
    this.smooth = { scale: [1, this.styles.transition], alpha: 0.9 };
  }

  hide() {
    this.smooth = { scale: [0.8, this.styles.transition], alpha: 0 };
  }

  get _FocusRing() {
    return this.tag('FocusRing');
  }
  get _Background() {
    return this._FocusRing.content.tag('Background');
  }
}

export default withStyles(FocusRing, styles);
