import lng from '@lightningjs/core';
import styles from './Wave.styles';
import Base from '../Base';
import { withStyles } from '../../mixins';

export default class Wave extends withStyles(Base, styles) {
  static _template() {
    return {
      Left1: {},
      Left2: {},
      Middle: {},
      Right1: {},
      Right2: {}
    };
  }

  static get properties() {
    return ['color', 'basicOptions', 'w', 'h', 'padding'];
  }

  static get tags() {
    return ['Left1', 'Left2', 'Middle', 'Right1', 'Right2'];
  }

  _construct() {
    super._construct();
    this._w = this.styles.width;
    this._h = this.styles.height;
    this._padding = this.styles.padding;
    this._color = this.styles.color;
    this._basicOptions = {
      repeat: this.styles.repeat,
      duration: this.styles.duration
    };
  }

  _update() {
    const currentlyPlaying = this._isAnimation() && this._isAnimationPlaying();
    this.stopAnimation();
    this._updateRectangleSize();
    this._updateLeft1();
    this._updateLeft2();
    this._updateMiddle();
    this._updateRight1();
    this._updateRight2();
    this._updateAnimations();
    if (currentlyPlaying) {
      this.startAnimation();
    }
  }

  _updateAnimations() {
    this._updateLeft1Animation();
    this._updateLeft2Animation();
    this._updateMiddleAnimation();
    this._updateRight1Animation();
    this._updateRight2Animation();
  }

  startAnimation() {
    if (this._isAnimation()) {
      this._Left1Animation.play();
      this._Left2Animation.play();
      this._MiddleAnimation.play();
      this._Right1Animation.play();
      this._Right2Animation.play();
    }
  }

  stopAnimation() {
    if (this._isAnimation() && this._isAnimationPlaying()) {
      this._Left1Animation.pause();
      this._Left2Animation.pause();
      this._MiddleAnimation.pause();
      this._Right1Animation.pause();
      this._Right2Animation.pause();
    }
  }

  _updateRectangleSize() {
    this._h = this.w * this.styles.lockedRatio;
    this._padding = this.w * this.styles.lockedPaddingRatio;
    this.Left2Height = this.Right1Height = this.h * 2;
    this.MiddleHeight = this.h * 3;
  }

  _updateLeft1Animation() {
    this._Left1Animation = this._Left1.animation({
      ...this.basicOptions,
      actions: [
        {
          p: 'h',
          v: {
            0: { v: this._h, sm: 0, sme: 0.3 },
            0.17: { v: this._h * 2.5, sm: 0, sme: 0.3 },
            0.58: { v: this._h / 2, sm: 0, sme: 0.3 },
            1: { v: this._h, sm: 0, sme: 0.3 }
          }
        }
      ]
    });
  }

  _updateLeft1() {
    this._Left1.patch({
      x: 0,
      y: this.h,
      mountY: 0.5,
      texture: lng.Tools.getRoundRect(
        this.w,
        this.h,
        this.styles.radius,
        this.strokeWidth,
        this.color,
        true,
        this.color
      )
    });
  }

  _updateLeft2Animation() {
    this._Left2Animation = this._Left2.animation({
      ...this.basicOptions,
      actions: [
        {
          p: 'h',
          v: {
            0: { v: this.Left2Height, sm: 0 },
            0.17: { v: this.Left2Height / 8, sm: 0 },
            0.58: { v: this.Left2Height * 1.5, sm: 0 },
            1: { v: this.Left2Height, sm: 0 }
          }
        }
      ]
    });
  }

  _updateLeft2() {
    this._Left2.patch({
      x: this.padding + this._Left1.x + this.w,
      y: this.h,
      mountY: 0.5,
      texture: lng.Tools.getRoundRect(
        this.w,
        this.Left2Height,
        this.styles.radius,
        this.styles.strokeWidth,
        this.color,
        true,
        this.color
      )
    });
  }

  _updateMiddleAnimation() {
    this._MiddleAnimation = this._Middle.animation({
      ...this.basicOptions,
      actions: [
        {
          p: 'h',
          v: {
            0: { v: this.MiddleHeight, sm: 0 },
            0.17: { v: this.MiddleHeight / 2, sm: 0, sme: 0.5 },
            0.58: { v: this.MiddleHeight / 3, sm: 0, sme: 0.5 },
            1: { v: this.MiddleHeight, sm: 0 }
          }
        }
      ]
    });
  }

  _updateMiddle() {
    this._Middle.patch({
      x: this._Left2.x + this.padding + this.w,
      y: this.h,
      mountY: 0.5,
      texture: lng.Tools.getRoundRect(
        this.w,
        this.MiddleHeight,
        this.styles.radius,
        this.styles.strokeWidth,
        this.color,
        true,
        this.color
      )
    });
  }

  _updateRight1Animation() {
    this._Right1Animation = this._Right1.animation({
      ...this.basicOptions,
      actions: [
        {
          p: 'h',
          v: {
            0: { v: this.Right1Height, sm: 0 },
            0.17: { v: this.Right1Height / 2, sm: 0, sme: 0.5 },
            0.58: { v: this.Right1Height * 1.25, sm: 0, sme: 0.5 },
            1: { v: this.Right1Height, sm: 0 }
          }
        }
      ]
    });
  }

  _updateRight1() {
    this._Right1.patch({
      x: this._Middle.x + this.padding + this.w,
      y: this.h,
      mountY: 0.5,
      texture: lng.Tools.getRoundRect(
        this.w,
        this.Right1Height,
        this.styles.radius,
        this.styles.strokeWidth,
        this.color,
        true,
        this.color
      )
    });
  }

  _updateRight2Animation() {
    this._Right2Animation = this._Right2.animation({
      ...this.basicOptions,
      actions: [
        {
          p: 'h',
          v: {
            0: { v: this.h, sm: 0, sme: 0.3 },
            0.17: { v: this.h * 3, sm: 0, sme: 0.3 },
            0.58: { v: this.h * 1.5, sm: 0, sme: 0.3 },
            1: { v: this.h, sm: 0, sme: 0.3 }
          }
        }
      ]
    });
  }

  _updateRight2() {
    this._Right2.patch({
      x: this._Right1.x + this.padding + this.w,
      y: this.h,
      mountY: 0.5,
      texture: lng.Tools.getRoundRect(
        this.w,
        this.h,
        this.styles.radius,
        this.styles.strokeWidth,
        this.color,
        true,
        this.color
      )
    });
  }

  _isAnimation() {
    return (
      this._Left1Animation &&
      this._Left2Animation &&
      this._MiddleAnimation &&
      this._Right1Animation &&
      this._Right2Animation
    );
  }

  _isAnimationPlaying() {
    return (
      this._Left1Animation.isPlaying() &&
      this._Left2Animation.isPlaying() &&
      this._MiddleAnimation.isPlaying() &&
      this._Right1Animation.isPlaying() &&
      this._Right2Animation.isPlaying()
    );
  }
}
