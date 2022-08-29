import lng from '@lightningjs/core';
import { withExtensions } from '../../mixins';
import Icon from '../Icon';
import Base from '../../Base';
import * as styles from './Checkbox.styles';

class Checkbox extends Base {
  static get __componentName() {
    return 'Checkbox';
  }

  static get __themeStyles() {
    return styles;
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
    return ['checked'];
  }

  _update() {
    this._updateCheck();
    this._updateColor();
  }

  _updateCheck() {
    this._Check.patch({
      w: this.style.checkW,
      h: this.style.checkH,
      icon: this.style.checkSrc,
      style: { color: this.style.checkColor }
    });

    const alphaPatch = {
      alpha: this.checked ? 1 : 0
    };

    if (this._smooth) {
      this._Check.smooth = alphaPatch;
    } else {
      this._Check.patch(alphaPatch);
    }
  }

  _updateColor() {
    this.patch({
      texture: lng.Tools.getRoundRect(
        this.style.w,
        this.style.h,
        this.style.radius,
        this.style.strokeWidth,
        this.style.strokeColor,
        true,
        this.style.backgroundColor
      )
    });
  }

  _setChecked(checked) {
    return this.mode !== 'disabled' ? checked : this.checked;
  }

  toggle() {
    this.checked = !this.checked;
    return this;
  }

  _handleEnter() {
    if (typeof this.onEnter === 'function') {
      return this.onEnter(this);
    } else {
      this.toggle();
    }
    return false;
  }
}

export default withExtensions(Checkbox);
