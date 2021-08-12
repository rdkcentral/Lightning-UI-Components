import lng from '@lightningjs/core';
import Base from '../Base';
import withStyles from '../../mixins/withStyles';
import { getValidColor } from '../../Styles/Colors';
import styles from './ProgressBar.styles';
export default class ProgressBar extends withStyles(Base, styles) {
  static _template() {
    return {
      Bar: { zIndex: 1 },
      Progress: { alpha: 0, zIndex: 2 }
    };
  }

  static get properties() {
    return [
      'animationDuration',
      'barColor',
      'progress',
      'progressColor',
      'radius'
    ];
  }

  static get tags() {
    return ['Bar', 'Progress'];
  }

  _construct() {
    super._construct();
    this._w = this.styles.w;
    this.h = this.styles.h;
    this._progress = 0;
    this._radius = this.styles.radius;
    this._progressColor = this.styles.progressColor;
    this._barColor = this.styles.barColor;
    this._animationDuration = 0;
  }

  _init() {
    this._update();
  }

  set w(w) {
    if (this._w !== w) {
      this._w = w;
      this._update();
    }
  }

  get w() {
    return this._w;
  }

  _update() {
    const p = this.w * this.progress;
    const w = p <= 0 ? 0 : Math.min(p, this._w);

    this._Bar.texture = lng.Tools.getRoundRect(
      // getRoundRect adds 2 to the width
      this.w - 2,
      this.h,
      this.radius,
      0,
      0,
      true,
      this.barColor
    );

    this._Progress.texture = lng.Tools.getRoundRect(
      w + 1,
      this.h,
      this.radius,
      0,
      0,
      true,
      this.progressColor
    );

    this._Progress.smooth = {
      w: [w, { duration: this._animationDuration }],
      alpha: Number(w > 0)
    };
  }

  _setBarColor(barColor) {
    return getValidColor(barColor);
  }

  _setProgressColor(progressColor) {
    return getValidColor(progressColor);
  }
}
