/**
 * Focus Ring Component
 *
 * Blurred Ring to focus items and images
 *
 */
import lng from '@lightningjs/core';
import withStyles from '../../mixins/withStyles';
import { getHexColor, getValidColor } from '../../Styles/Styles';

export const styles = theme => ({
  color: theme.palette.focusRing.primary,
  secondaryColor: theme.palette.focusRing.secondary,
  radius: theme.border.radius.medium,
  spacing: theme.spacing(1.5)
});

class FocusRing extends lng.Component {
  _construct() {
    this._whenEnabled = new Promise(resolve => (this._firstEnable = resolve));
    this._color = getValidColor(this.styles.color);
    this._middleColor = getHexColor(getValidColor(this.styles.color), 54);
    this._secondaryColor = this.styles.secondaryColor;
    this._radius = this.styles.radius;
    this._spacing = this.styles.spacing;
  }

  _init() {
    this._update();
  }

  _inactive() {
    this.stopAnimation();
  }

  _update() {
    const { transition, primary, secondary } = this.getColors();

    this.patch({
      Ring: {
        mount: 0.5,
        x: this.w / 2,
        y: this.h / 2,
        smooth: { alpha: 1 },
        texture: lng.Tools.getRoundRect(
          this.w + this.spacing,
          this.h + this.spacing,
          this._radius,
          4,
          false,
          false
        )
      },
      color: primary,
      colorUl: primary,
      colorBl: transition,
      colorUr: transition,
      colorBr: secondary
    });

    this.setAnimation();
  }

  getColors() {
    return {
      primary: this._color,
      transition: this._middleColor,
      secondary: this._secondaryColor
    };
  }

  setAnimation() {
    const isPlaying = !!(
      this._focusRingAnimation && this._focusRingAnimation.isPlaying()
    );
    const { transition, primary, secondary } = this.getColors();

    if (isPlaying) {
      this.stopAnimation();
    }

    this._focusRingAnimation = this._Ring.animation({
      repeat: -1,
      duration: 5,
      actions: [
        {
          p: 'colorUl',
          v: {
            0: primary,
            0.25: transition,
            0.5: secondary,
            0.75: transition,
            1: primary
          }
        },
        {
          p: 'colorUr',
          v: {
            0: transition,
            0.25: primary,
            0.5: transition,
            0.75: secondary,
            1: transition
          }
        },
        {
          p: 'colorBl',
          v: {
            0: transition,
            0.25: secondary,
            0.5: transition,
            0.75: primary,
            1: transition
          }
        },
        {
          p: 'colorBr',
          v: {
            0: secondary,
            0.25: transition,
            0.5: primary,
            0.75: transition,
            1: secondary
          }
        }
      ]
    });

    if (isPlaying) {
      this.startAnimation();
    }
  }

  startAnimation() {
    if (this._focusRingAnimation && !this._focusRingAnimation.isPlaying()) {
      this._focusRingAnimation.start();
    }
  }

  stopAnimation() {
    if (this._focusRingAnimation && this._focusRingAnimation.isPlaying()) {
      this._focusRingAnimation.stop();
    }
  }

  get color() {
    return this._color;
  }

  set color(color) {
    if (this._color !== color) {
      this._color = getValidColor(color);
      this._middleColor = getHexColor(getValidColor(color), 54);
      this._update();
    }
  }

  get secondaryColor() {
    return this._secondaryColor;
  }

  set secondaryColor(color) {
    if (this._secondaryColor !== color) {
      this._secondaryColor = getValidColor(color);
      this._update();
    }
  }

  get radius() {
    return this._radius;
  }

  set radius(radius) {
    if (radius !== this._radius) {
      this._radius = radius;
      this._update();
    }
  }

  set spacing(spacing) {
    if (spacing !== this._spacing) {
      this._spacing = spacing;
      this._update();
    }
  }

  get spacing() {
    return this._spacing;
  }

  get _Ring() {
    return this.tag('Ring');
  }
}

export default withStyles(FocusRing, styles);
