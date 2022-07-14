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
    const offset =
      this._componentStyles.spacing * 2 + this._componentStyles.borderWidth;
    const focusRingPadding =
      this._componentStyles.spacing + this._componentStyles.borderWidth / 2;
    let radius = [];
    if (Array.isArray(this._componentStyles.radius)) {
      radius = new Array(4)
        .fill()
        .map(
          (_, index) =>
            (this._componentStyles.radius[index] || 0) + focusRingPadding
        );
    } else {
      radius = this._componentStyles.radius
        ? this._componentStyles.radius + focusRingPadding
        : 0;
      radius = Math.max(0, radius); // Ensure number is always positive
    }
    this.patch({
      Ring: {
        mount: 0.5,
        x: this.w / 2,
        y: this.h / 2,
        alpha: this.w && this.h ? 1 : 0.001,
        texture: lng.Tools.getRoundRect(
          this.w + offset,
          this.h + offset,
          radius,
          this._componentStyles.borderWidth,
          false,
          false,
          false
        ),
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
    if (this.stage.animations.active.has(this._focusRingAnimation)) {
      // Delete the animation so it can recieve the new update
      this.stage.animations.active.delete(this._focusRingAnimation); // TODO: Ask metrological about this approach, there should be something added to core to allow this
      this._focusRingAnimation = undefined;
    }
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
    if (this._isAnimating) this._focusRingAnimation.start();
  }

  startAnimation() {
    if (!this._Ring || !this._focusRingAnimation) {
      // Ring is not setup yet, store the flag to start animation once it is
      this._isAnimating = true;
      return;
    }

    if (!this._componentStyles.shouldAnimate) {
      this.stopAnimation();
      return;
    }

    this._isAnimating = true;
    this._focusRingAnimation.start();
  }

  stopAnimation() {
    if (!this._Ring || !this._focusRingAnimation) {
      // Ring is not setup yet, store the flag to make sure animation does not start when created
      this._isAnimating = false;
      return;
    }

    this._isAnimating = false;
    this._focusRingAnimation.stop();
  }
}

export default withExtensions(withStyles(FocusRing, styles));
