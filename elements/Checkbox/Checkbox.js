import lng from '@lightningjs/core';
import { withExtensions } from '../../mixins';
import withStyles from '../../mixins/withThemeStyles';
import Icon from '../Icon';
import Base from '../../Base';
import styles from './Checkbox.styles';

class Checkbox extends Base {
  static get __componentName() {
    return 'Checkbox';
  }

  static _template() {
    return {
      Check: {
        type: Icon,
        mount: 0.5,
        x: w => w / 2,
        y: h => h / 2,
        alpha: 0
      }
    };
  }

  static get tags() {
    return ['Check'];
  }

  static get properties() {
    return ['checked', 'disabled'];
  }

  _init() {
    this._update();
  }

  _update() {
    this._updateCheck();
    this._updateColor();
  }

  _updateCheck() {
    this._Check.patch({
      w: this._componentStyles.checkW,
      h: this._componentStyles.checkH,
      icon: this._componentStyles.checkSrc,
      color: this._componentStyles.checkColor
    });
    this._Check.smooth = {
      alpha: this.checked ? 1 : 0
    };
  }

  _updateColor() {
    let fillColor, strokeColor;
    if (this.disabled) {
      fillColor = this._componentStyles.disabledBackgroundColor;
      strokeColor = this._componentStyles.disabledStrokeColor;
    } else {
      fillColor = this.checked
        ? this._componentStyles.checkedBackgroundColor
        : this._componentStyles.uncheckedBackgroundColor;
      strokeColor = this._componentStyles.strokeColor;
    }
    this.patch({
      texture: lng.Tools.getRoundRect(
        this._componentStyles.w,
        this._componentStyles.h,
        this._componentStyles.radius,
        this._componentStyles.strokeWidth,
        strokeColor,
        true,
        fillColor
      )
    });
  }

  toggle() {
    this.checked = !this.checked;
    this._update();
    return this;
  }

  _handleEnter() {
    if (!this.disabled) {
      this.toggle();
    }
  }
}

export default withExtensions(withStyles(Checkbox, styles));
