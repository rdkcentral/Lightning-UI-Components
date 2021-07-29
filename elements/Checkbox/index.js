import lng from '@lightningjs/core';
import withStyles from '../../mixins/withStyles';
import Base from '../Base';
import styles from './Checkbox.styles';

export default class Checkbox extends withStyles(Base, styles) {
  static _template() {
    return {
      w: this.styles.w,
      h: this.styles.h,
      texture: lng.Tools.getRoundRect(
        this.styles.w,
        this.styles.h,
        this.styles.radius,
        this.styles.stroke.width,
        this.styles.stroke.color,
        true,
        this.styles.background.color
      ),
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
    const { checked } = this;
    this._Check.smooth = { alpha: checked ? 1 : 0 };
  }
}
