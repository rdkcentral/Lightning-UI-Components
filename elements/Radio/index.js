import Base from '../../Base';
import lng from '@lightningjs/core';
import * as styles from './Radio.styles.js';
import { withExtensions } from '../../mixins';

class Radio extends Base {
  static get __componentName() {
    return 'Radio';
  }

  static get __themeStyle() {
    return styles;
  }

  static get tags() {
    return ['Knob'];
  }
  static get properties() {
    return ['checked'];
  }

  _update() {
    this._updateLayout();
    this._Knob.smooth = {
      alpha: this.checked ? 1 : 0
    };
    if (this._checkedChanged) {
      this.fireAncestors('$announce', this.announce);
      this._checkedChanged = false;
    }
  }

  _updateLayout() {
    this.patch({
      w: this.style.w,
      h: this.style.h,
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
      ),
      Knob: {
        w: this.style.knobWidth,
        h: this.style.knobHeight,
        mount: 0.5,
        x: this.style.w / 2,
        y: this.style.h / 2,
        alpha: 0,
        texture: lng.Tools.getRoundRect(
          this.style.knobWidth,
          this.style.knobHeight,
          this.style.knobWidth / 2,
          false,
          false,
          true,
          this.style.knobColor
        )
      }
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

export default withExtensions(Radio);
