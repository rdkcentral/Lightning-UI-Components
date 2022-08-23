import lng from '@lightningjs/core';
import Base from '../../Base';
import { withExtensions } from '../../mixins';
import * as styles from './Toggle.styles';

class Toggle extends Base {
  static get __componentName() {
    return 'Toggle';
  }

  static get __themeStyles() {
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

  toggle() {
    this.checked = !this.checked;
    return this;
  }

  _setChecked(checked) {
    return this.mode !== 'disabled' ? checked : this.checked;
  }

  _handleEnter() {
    if (typeof this.onEnter === 'function') {
      return this.onEnter(this);
    } else {
      this.toggle();
    }
    return false;
  }

  _update() {
    this._updateKnobPosition();
    this._updateColors();
    this._updateContainer();
    this._updateStroke();
    this._updateKnob();
  }

  _updateKnobPosition() {
    const { w, knobXChecked, knobX, knobPadding, knobWidth, strokeWeight } =
      this.style;
    this._knobX = knobX || strokeWeight + knobPadding;
    this._knobXChecked =
      knobXChecked || w - strokeWeight - knobPadding - knobWidth;
    const x = this.checked ? this._knobXChecked : this._knobX;

    if (this._smooth) {
      this._Knob.smooth = { x };
    } else {
      this._Knob.x = x;
    }
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

    if (this._smooth) {
      this._Knob.smooth = {
        color: currentKnobColor
      };
      this._Container.smooth = {
        color: containerColor
      };
    } else {
      this._Knob.color = currentKnobColor;
      this._Container.color = containerColor;
    }
  }

  _updateContainer() {
    const {
      w,
      knobHeight,
      knobRadius,
      knobPadding,
      strokeRadius,
      strokeWeight
    } = this.style;
    const h = knobHeight + 2 * knobPadding + 2 * strokeWeight;

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
      w,
      h,
      texture: lng.Tools.getRoundRect(
        w - 2 * strokeWeight,
        h - 2 * (knobPadding + strokeWeight),
        radius,
        strokeWeight,
        0,
        true,
        false
      )
    });
  }

  _updateStroke() {
    const {
      w,
      knobHeight,
      knobRadius,
      knobPadding,
      strokeColor,
      strokeRadius,
      strokeWeight
    } = this.style;
    const h = knobHeight + 2 * knobPadding + 2 * strokeWeight;
    this._Stroke.patch({
      w,
      h,
      texture: lng.Tools.getRoundRect(
        w,
        h,
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
    const { knobHeight, knobWidth, knobRadius, knobPadding, strokeWeight } =
      this.style;
    this._Knob.patch({
      zIndex: 2,
      y: strokeWeight + knobPadding,
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
}

export default withExtensions(Toggle);
