import Base from '../../Base';
import lng from '@lightningjs/core';
import styles from './Radio.styles.js';
import withStyles from '../../mixins/withThemeStyles';
import { withExtensions } from '../../mixins';
class Radio extends Base {
  static get __componentName() {
    return 'Radio';
  }

  static get tags() {
    return ['Knob'];
  }
  static get properties() {
    return ['checked', 'isInactive'];
  }

  _handleEnter() {
    this.toggle();
    return true;
  }

  _update() {
    this._updateLayout();
    this._Knob.smooth = { alpha: this.checked && !this.isInactive ? 1 : 0 };
  }

  _updateLayout() {
    const strokeColor = this.isInactive
      ? this._componentStyles.strokeColorInactive
      : this._componentStyles.strokeColor;
    let backgroundColor = this._componentStyles.backgroundColorOff;
    if (this.isInactive) {
      backgroundColor = this._componentStyles.backgroundColorInactive;
    } else if (this.checked) {
      backgroundColor = this._componentStyles.backgroundColor;
    }
    this.patch({
      w: this._componentStyles.w,
      h: this._componentStyles.h,
      texture: lng.Tools.getRoundRect(
        this._componentStyles.w,
        this._componentStyles.h,
        this._componentStyles.radius,
        this._componentStyles.strokeWidth,
        strokeColor,
        true,
        backgroundColor
      ),
      Knob: {
        w: this._componentStyles.knobWidth,
        h: this._componentStyles.knobHeight,
        mount: 0.5,
        x: this._componentStyles.w / 2,
        y: this._componentStyles.h / 2,
        alpha: 0,
        texture: lng.Tools.getRoundRect(
          this._componentStyles.knobWidth,
          this._componentStyles.knobHeight,
          this._componentStyles.knobWidth / 2,
          false,
          false,
          true,
          this._componentStyles.knobColor
        )
      }
    });
  }

  toggle() {
    this.checked = !this.checked;
    this._update();
    return this;
  }
}

export default withExtensions(withStyles(Radio, styles));
