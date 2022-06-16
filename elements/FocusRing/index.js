/**
 * Focus Ring Component
 *
 * Blurred Ring to focus items and images
 *
 */
import lng from '@lightningjs/core';
import Base from '../Base';
import withStyles from '../../mixins/withStyles';
import { getHexColor, getValidColor } from '../../Styles/Styles';
import styles from './FocusRing.styles';

export default class FocusRing extends withStyles(Base, styles) {
  static get properties() {
    return [
      'color',
      'secondaryColor',
      'radius',
      'spacing',
      'shouldAnimate',
      'borderWidth'
    ];
  }

  static get tags() {
    return ['Ring'];
  }

  _construct() {
    super._construct();
    this._color = getValidColor(this.styles.color);
    this._middleColor = getHexColor(getValidColor(this.styles.color), 54);
    this._secondaryColor = this.styles.secondaryColor;
    this._radius = this.styles.radius;
    this._spacing = this.styles.spacing;
    this._borderWidth = this.styles.borderWidth;
  }

  _inactive() {
    this.stopAnimation();
  }

  _update() {
    this._updateRing();
    this.setAnimation();
  }

  _updateRing() {
    const { transition, primary, secondary } = this.getColors();
    const offset = this.spacing * 2 + this.borderWidth;
    const radius = this.radius
      ? this.radius + this.spacing + this.borderWidth / 2
      : 0;

    this.patch({
      Ring: {
        mount: 0.5,
        x: this.w / 2,
        y: this.h / 2,
        alpha: this.w && this.h ? 1 : 0.001,
        texture: lng.Tools.getRoundRect(
          this.w + offset,
          this.h + offset,
          Math.max(0, radius), // Ensure number is always positive
          this.borderWidth,
          false,
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

  getColors() {
    return {
      primary: this.color,
      transition: this._middleColor,
      secondary: this.secondaryColor
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

    if (isPlaying || this.shouldAnimate) {
      this.startAnimation();
    }
  }

  startAnimation() {
    if (this.shouldAnimate !== undefined) {
      if (
        this._focusRingAnimation &&
        !this._focusRingAnimation.isPlaying() &&
        this.shouldAnimate
      ) {
        this._focusRingAnimation.start();
      }
    } else {
      if (this._focusRingAnimation && !this._focusRingAnimation.isPlaying()) {
        this._focusRingAnimation.start();
      }
    }
  }

  stopAnimation() {
    if (this.shouldAnimate !== undefined) {
      if (
        this._focusRingAnimation &&
        this._focusRingAnimation.isPlaying() &&
        !this._shouldAnimate
      ) {
        this._focusRingAnimation.stop();
      }
    } else {
      if (this._focusRingAnimation && this._focusRingAnimation.isPlaying()) {
        this._focusRingAnimation.stop();
      }
    }
  }

  _setColor(color) {
    if (this._color !== color) {
      const validColor = getValidColor(color);
      if (validColor) {
        this._middleColor = getHexColor(getValidColor(validColor), 54);
        return validColor;
      }
    }
    return this._color;
  }

  _setSecondaryColor(color) {
    if (this._secondaryColor !== color) {
      const validColor = getValidColor(color);
      return validColor;
    }
    return this._secondaryColor;
  }
}
