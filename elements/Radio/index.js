import Base from '../Base';
import lng from '@lightningjs/core';
import styles from './Radio.styles.js';
import withStyles from '../../mixins/withStyles';
class Radio extends Base {
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
      Knob: {
        w: this.styles.knob.w,
        h: this.styles.knob.h,
        mount: 0.5,
        x: w => w / 2,
        y: h => h / 2,
        alpha: 0,
        texture: lng.Tools.getRoundRect(
          this.styles.knob.w,
          this.styles.knob.h,
          this.styles.knob.w / 2,
          false,
          false,
          true,
          this.styles.knob.color
        )
      }
    };
  }

  static get tags() {
    return ['Knob'];
  }

  _handleEnter() {
    this.toggle();
  }

  _update() {
    const { checked } = this;
    this._Knob.smooth = { alpha: checked ? 1 : 0 };
  }

  toggle() {
    this.checked = !this.checked;
    this._update();
    return this;
  }
}

export default withStyles(Radio, styles);
