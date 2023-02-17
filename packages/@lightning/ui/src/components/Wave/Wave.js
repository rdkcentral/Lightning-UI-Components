import lng from '@lightningjs/core';
import { Base } from '@lightning/ui-core';
import * as styles from './Wave.styles';

export default class Wave extends Base {
  static get __componentName() {
    return 'Wave';
  }

  static get __themeStyle() {
    return styles;
  }

  static _template() {
    const mountY = 0.5;
    return {
      Left1: { mountY },
      Left2: { mountY },
      Middle: { mountY },
      Right1: { mountY },
      Right2: { mountY }
    };
  }

  static get tags() {
    return ['Left1', 'Left2', 'Middle', 'Right1', 'Right2'];
  }

  _update() {
    const currentlyPlaying =
      this._hasAnimations() && this._isAnimationPlaying();
    this._basicOptions = {
      repeat: this.style.repeat,
      duration: this.style.duration
    };

    this.stopAnimation();

    this._updateRectangleSize();
    this._updateLines();
    this._updateAnimations();

    if (currentlyPlaying) {
      this.startAnimation();
    }
  }

  _updateRectangleSize() {
    this.h = this.w * this.style.lockedRatio;
    this._padding = this.w * this.style.lockedPaddingRatio;
    this._left2H = this._right1H = this.h * 2;
    this._middleH = this.h * 3;
  }

  _updateLines() {
    this._updateLeft1();
    this._updateLeft2();
    this._updateMiddle();
    this._updateRight1();
    this._updateRight2();
  }

  _updateLeft1() {
    this._Left1.patch(this._generateLine(0, this.h));
  }

  _updateLeft2() {
    this._Left2.patch(
      this._generateLine(this._Left1.x + this._offset, this._left2H)
    );
  }

  _updateMiddle() {
    this._Middle.patch(
      this._generateLine(this._Left2.x + this._offset, this._middleH)
    );
  }

  _updateRight1() {
    this._Right1.patch(
      this._generateLine(this._Middle.x + this._offset, this._right1H)
    );
  }

  _updateRight2() {
    this._Right2.patch(
      this._generateLine(this._Right1.x + this._offset, this.h)
    );
  }

  _updateAnimations() {
    this._updateLeft1Animation();
    this._updateLeft2Animation();
    this._updateMiddleAnimation();
    this._updateRight1Animation();
    this._updateRight2Animation();
  }

  startAnimation() {
    if (this._hasAnimations()) {
      this._left1Animation.play();
      this._left2Animation.play();
      this._middleAnimation.play();
      this._right1Animation.play();
      this._right2Animation.play();
    }
  }

  stopAnimation() {
    if (this._hasAnimations() && this._isAnimationPlaying()) {
      this._left1Animation.pause();
      this._left2Animation.pause();
      this._middleAnimation.pause();
      this._right1Animation.pause();
      this._right2Animation.pause();
    }
  }

  _generateLine(xOffset, lineHeight) {
    return {
      x: xOffset,
      y: this.h,
      texture: lng.Tools.getRoundRect(
        this.w,
        lineHeight,
        this.style.radius,
        0,
        this.style.color,
        true,
        this.style.color
      )
    };
  }

  _generateAnimation(heights) {
    return {
      ...this._basicOptions,
      actions: [
        {
          p: 'h',
          v: this.style.keyframes.reduce((acc, curr, index) => {
            acc[curr] = {
              sm: 0,
              v: Array.isArray(heights[index])
                ? heights[index][0]
                : heights[index]
            };
            if (Array.isArray(heights[index]) && heights[index][1]) {
              acc[curr].sme = heights[index][1];
            }
            return acc;
          }, {})
        }
      ]
    };
  }

  _updateLeft1Animation() {
    const sme = 0.3;
    const heights = [
      [this._h, sme],
      [this._h * 2.5, sme],
      [this._h / 2, sme],
      [this._h, sme]
    ];
    this._left1Animation = this._Left1.animation(
      this._generateAnimation(heights)
    );
  }

  _updateLeft2Animation() {
    const heights = [
      this._left2H,
      this._left2H / 8,
      this._left2H * 1.5,
      this._left2H
    ];
    this._left2Animation = this._Left2.animation(
      this._generateAnimation(heights)
    );
  }

  _updateMiddleAnimation() {
    const sme = 0.5;
    const heights = [
      this._middleH,
      [this._middleH / 2, sme],
      [this._middleH / 3, sme],
      this._middleH
    ];
    this._middleAnimation = this._Middle.animation(
      this._generateAnimation(heights)
    );
  }

  _updateRight1Animation() {
    const sme = 0.5;
    const heights = [
      this._right1H,
      [this._right1H / 2, sme],
      [this._right1H * 1.25, sme],
      this._right1H
    ];
    this._right1Animation = this._Right1.animation(
      this._generateAnimation(heights)
    );
  }

  _updateRight2Animation() {
    const sme = 0.3;
    const heights = [
      [this.h, sme],
      [this.h * 3, sme],
      [this.h * 1.5, sme],
      [this.h, sme]
    ];
    this._right2Animation = this._Right2.animation(
      this._generateAnimation(heights)
    );
  }

  _hasAnimations() {
    return (
      this._left1Animation &&
      this._left2Animation &&
      this._middleAnimation &&
      this._right1Animation &&
      this._right2Animation
    );
  }

  _isAnimationPlaying() {
    return (
      this._left1Animation.isPlaying() &&
      this._left2Animation.isPlaying() &&
      this._middleAnimation.isPlaying() &&
      this._right1Animation.isPlaying() &&
      this._right2Animation.isPlaying()
    );
  }

  get _offset() {
    return this._padding + this.w;
  }
}
