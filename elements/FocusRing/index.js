import lng from '@lightningjs/core';
import Base from '../../Base';
import { withExtensions } from '../../mixins';
import withStyles from '../../mixins/withThemeStyles';
import styles from './FocusRing.styles';
import { getHexColor, getValidColor } from '../../Styles/Styles';

class FocusRing extends Base {
  static get __componentName() {
    return 'FocusRing';
  }

  static get tags() {
    return ['Ring'];
  }

  _inactive() {
    this.stopAnimation();
  }

  _update() {
    this._updateRing();
    this._updateAnimation();
  }

  get _ringColors() {
    return {
      primary: this._componentStyles.color,
      transition:
        this._componentStyles.transitionColor ||
        getHexColor(
          getValidColor(this._componentStyles.color),
          this._componentStyles.colorTransitionAlpha
        ),
      secondary: this._componentStyles.secondaryColor
    };
  }

  _updateRing() {
    const { transition, primary, secondary } = this._ringColors;

    this.patch({
      Ring: {
        mount: 0.5,
        x: this.w / 2,
        y: this.h / 2,
        alpha: this.w && this.h ? 1 : 0.001,
        texture: lng.Tools.getRoundRect(
          this.w + this._componentStyles.spacing,
          this.h + this._componentStyles.spacing,
          this._componentStyles.radius,
          this._componentStyles.borderWidth,
          false,
          false
        ),
        color: primary,
        colorUl: primary,
        colorBl: transition,
        colorUr: transition,
        colorBr: secondary
      }
    });
  }

  _updateAnimation() {
    if (!this._componentStyles.shouldAnimate) {
      this._focusRingAnimation = null;
      return;
    }

    const { transition, primary, secondary } = this._ringColors;

    this.stopAnimation();
    this._focusRingAnimation = this._Ring.animation({
      repeat: -1,
      duration: this._componentStyles.animationDuration,
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

    this.hasFocus() ? this.startAnimation() : this.stopAnimation();
  }

  startAnimation() {
    if (!this._componentStyles.shouldAnimate) {
      this.stopAnimation();
      return;
    }

    if (!this._focusRingAnimation) {
      this._updateAnimation();
    }
    if (!this._focusRingAnimation.isPlaying()) {
      this._focusRingAnimation.start();
    }
  }

  stopAnimation() {
    this._focusRingAnimation && this._focusRingAnimation.stop();
  }
}

export default withExtensions(withStyles(FocusRing, styles));
