import lng from '@lightningjs/core';
import withStyles from '../../mixins/withStyles';
import Base from '../Base';
import styles from './Checkbox.styles';
export default class Checkbox extends withStyles(Base, styles) {
  static _template() {
    return {
      w: this.styles.w,
      h: this.styles.h,
      Check: {
        w: this.styles.check.w,
        h: this.styles.check.h,
        mount: 0.5,
        x: w => w / 2,
        y: h => h / 2,
        alpha: 0,
        src: this.styles.check.src
      }
    };
  }

  static get tags() {
    return ['Check'];
  }

  _init() {
    this._update();
  }

  toggle() {
    this.checked = !this.checked;
    this._update();
    return this;
  }

  _handleEnter() {
    this.toggle();
  }

  _update() {
    this._updateCheck();
    this._updateColor();
  }

  _updateCheck() {
    if (
      this.w &&
      this.w !== this.styles.w &&
      this.h &&
      this.h !== this.styles.h
    ) {
      this._Check.patch({
        w: this.styles.check.w * (this.w / this.styles.w),
        h: this.styles.check.h * (this.h / this.styles.h)
      });
    }
    this._Check.smooth = { alpha: this.checked ? 1 : 0 };
  }

  _updateColor() {
    const fillColor = this.checked
      ? this.styles.background.color
      : this.styles.unchecked.background;
    this.patch({
      texture: lng.Tools.getRoundRect(
        this.w,
        this.h,
        this.w / 2,
        this.styles.stroke.width,
        this.styles.stroke.color,
        true,
        fillColor
      )
    });
  }
}
