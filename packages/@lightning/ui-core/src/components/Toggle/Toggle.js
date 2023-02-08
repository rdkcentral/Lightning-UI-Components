import lng from '@lightningjs/core';
import Base from '../Base/index.js';
import { withExtensions } from '../../mixins/index.js';
import * as styles from './Toggle.styles.js';

class Toggle extends Base {
  static get __componentName() {
    return 'Toggle';
  }

  static get __themeStyle() {
    return styles;
  }

  static _template() {
    return {
      Container: {
        Stroke: {},
        Knob: {}
      }
    };
  }

  static get tags() {
    return [
      'Container',
      {
        name: 'Knob',
        path: 'Container.Knob'
      },
      {
        name: 'Stroke',
        path: 'Container.Stroke'
      }
    ];
  }

  static get properties() {
    return ['checked'];
  }

  _construct() {
    super._construct && super._construct();
    this._checked = false;
  }

  _update() {
    this._updateKnobPosition();
    this._updateColors();
    this._updateContainer();
    this._updateStroke();
    this._updateKnob();
    this._updateTotalHeight();
    if (this._checkedChanged) {
      this.fireAncestors('$announce', this.announce);
      this._checkedChanged = false;
    }
  }

  _updateKnobPosition() {
    const { knobXChecked, knobX, knobPadding, knobWidth, strokeWeight } =
      this.style;
    this._knobX = knobX || strokeWeight + knobPadding;
    this._knobXChecked =
      knobXChecked || this.w - strokeWeight - knobPadding - knobWidth;
    const x = this.checked ? this._knobXChecked : this._knobX;

    this.applySmooth(this._Knob, { x });
  }

  _updateColors() {
    const {
      backgroundColor,
      backgroundColorChecked,
      knobColor,
      knobColorChecked
    } = this.style;

    const currentKnobColor = this.checked ? knobColorChecked : knobColor;
    const containerColor = this.checked
      ? backgroundColorChecked
      : backgroundColor;

    this.applySmooth(this._Knob, { color: currentKnobColor });
    this.applySmooth(this._Container, { color: containerColor });
  }

  _updateContainer() {
    const { knobRadius, knobPadding, strokeRadius, strokeWeight } = this.style;

    let radius;
    if (strokeRadius !== undefined) {
      if (strokeRadius === 0) {
        radius = 0;
      } else {
        radius = Math.max(0, strokeRadius - strokeWeight);
      }
    } else {
      radius = Math.max(0, knobRadius + knobPadding + strokeWeight);
    }

    this._Container.patch({
      w: this.w,
      h: this.h,
      texture: lng.Tools.getRoundRect(
        this.w - 2 * strokeWeight,
        this.h - 2 * strokeWeight,
        radius,
        strokeWeight,
        0,
        true,
        false
      )
    });
  }
  _updateTotalHeight() {
    this.h = this._Container.h;
    this.fireAncestors('$itemChanged');
  }

  _updateStroke() {
    const { knobRadius, knobPadding, strokeColor, strokeRadius, strokeWeight } =
      this.style;

    this._Stroke.patch({
      w: this.w,
      h: this.h,
      texture: lng.Tools.getRoundRect(
        this.w,
        this.h,
        strokeRadius !== undefined
          ? strokeRadius
          : knobRadius + knobPadding + strokeWeight,
        strokeWeight,
        strokeColor,
        false,
        false
      )
    });
  }

  _updateKnob() {
    const { knobHeight, knobWidth, knobRadius } = this.style;
    this._Knob.patch({
      zIndex: 2,
      y: (this.h - knobHeight) / 2,
      texture: lng.Tools.getRoundRect(
        knobWidth - 2,
        knobHeight - 2,
        knobRadius,
        0,
        0,
        true,
        false
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

export default withExtensions(Toggle);
