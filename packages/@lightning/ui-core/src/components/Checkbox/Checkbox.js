import lng from '@lightningjs/core';
import { withExtensions } from '../../mixins/index.js';
import Icon from '../Icon/index.js';
import Base from '../Base/index.js';
import * as styles from './Checkbox.styles.js';

class Checkbox extends Base {
  static get __componentName() {
    return 'Checkbox';
  }

  static get __themeStyle() {
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
    if (this._checkedChanged) {
      this.fireAncestors('$announce', this.announce);
      this._checkedChanged = false;
    }
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

    this.applySmooth(this._Check, alphaPatch);
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
        this.checked
          ? this.style.backgroundColorChecked
          : this.style.backgroundColor
      )
    });
  }

  _setChecked(checked) {
    this._checkedChanged = checked !== this._checked;
    return checked;
  }

  toggle() {
    if (!this._isDisabledMode) {
      this.checked = !this.checked;
    }
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

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    return this._announce || (this.checked ? 'Checked' : 'Unchecked');
  }
}

export default withExtensions(Checkbox);
