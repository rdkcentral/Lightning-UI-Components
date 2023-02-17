import lng from '@lightningjs/core';
import Icon from '../Icon/index.js';
import Base from '../Base/index.js';
import * as styles from './Checkbox.styles.js';

export default class Checkbox extends Base {
  static get __componentName() {
    return 'Checkbox';
  }

  static get __themeStyle() {
    return styles;
  }

  static _template() {
    const center = { mount: 0.5, x: w => w / 2, y: h => h / 2 };
    return {
      Body: {
        rtt: true, // ensures the background color doesn't bleed into the checkbox icon when disabled
        ...center,
        Check: {
          type: Icon,
          ...center,
          alpha: 0
        }
      },
      Stroke: center
    };
  }

  static get tags() {
    return ['Check', 'Body', 'Stroke'];
  }

  static get properties() {
    return ['checked'];
  }

  _update() {
    this._updateBody();
    this._updateStroke();
    this._updateCheck();
    if (this._checkedChanged) {
      this.fireAncestors('$announce', this.announce);
      this._checkedChanged = false;
    }
    this._updateOpacity();
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

  _updateBody() {
    const bodyColor = this.checked
      ? this.style.backgroundColorChecked
      : this.style.backgroundColor;

    // if the inner checkbox should be square, a rounded corner radius can still be applied to the stroke
    const radius =
      this.style.radius >= this.w / 2
        ? (this.w - this.style.strokeWidth) / 2
        : 0;

    this._Body.patch({
      texture: lng.Tools.getRoundRect(
        this.w - this.style.strokeWidth,
        this.h - this.style.strokeWidth,
        radius,
        0,
        null,
        true,
        bodyColor
      )
    });
  }

  _updateStroke() {
    this._Stroke.patch({
      texture: lng.Tools.getRoundRect(
        this.w,
        this.h,
        this.style.radius,
        this.style.strokeWidth,
        this.style.strokeColor,
        false
      )
    });
  }

  _updateOpacity() {
    this.applySmooth(this, { alpha: this.style.alpha });
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
