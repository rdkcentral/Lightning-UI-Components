import Base from '../Base/index.js';
import lng from '@lightningjs/core';
import * as styles from './Radio.styles.js';
import { withExtensions } from '../../mixins/index.js';

class Radio extends Base {
  static get __componentName() {
    return 'Radio';
  }

  static get __themeStyle() {
    return styles;
  }

  static _template() {
    const center = { mount: 0.5, x: w => w / 2, y: h => h / 2 };
    return {
      Body: {
        rtt: true, // ensures the background color doesn't bleed into the knob when disabled
        ...center,
        Knob: {
          ...center,
          alpha: 0
        }
      },
      Stroke: center
    };
  }

  static get tags() {
    return ['Knob', 'Body', 'Stroke'];
  }
  static get properties() {
    return ['checked'];
  }

  _update() {
    this._updateBody();
    this._updateStroke();
    this._updateKnob();
    if (this._checkedChanged) {
      this.fireAncestors('$announce', this.announce);
      this._checkedChanged = false;
    }
    this._updateOpacity();
  }

  _updateBody() {
    const bodyColor = this.checked
      ? this.style.backgroundColorChecked
      : this.style.backgroundColor;

    // if the inner body should be square, a rounded corner radius can still be applied to the stroke
    const radius =
      this.style.radius >= this.w / 2
        ? (this.w - this.style.strokeWidth) / 2
        : 0;

    this._Body.patch({
      texture: lng.Tools.getRoundRect(
        this.w - this.style.strokeWidth,
        this.h - this.style.strokeWidth,
        radius,
        null,
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

  _updateKnob() {
    this._Knob.patch({
      texture: lng.Tools.getRoundRect(
        this.style.knobWidth,
        this.style.knobHeight,
        this.style.knobWidth / 2,
        null,
        null,
        true,
        this.style.knobColor
      )
    });

    this.applySmooth(this._Knob, {
      alpha: this.checked ? 1 : 0
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

export default withExtensions(Radio);
