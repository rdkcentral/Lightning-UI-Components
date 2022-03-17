import lng from '@lightningjs/core';
import Base from '../../Base';
import { withExtensions } from '../../mixins';
import withStyles from '../../mixins/withThemeStyles';
import styles from './Toggle.styles';

class Toggle extends Base {
  static get __componentName() {
    return 'Toggle';
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
    return ['checked', 'disabled'];
  }

  _construct() {
    super._construct && super._construct();
    this._checked = false;
  }

  toggle() {
    if (!this.disabled) {
      this.checked = !this.checked;
    }
    return this;
  }

  _setChecked(checked) {
    if (!this.disabled) {
      return checked;
    }
    return this._checked;
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
    const {
      w,
      knobCheckedX,
      knobUncheckedX,
      knobPadding,
      knobWidth,
      strokeWeight
    } = this._componentStyles;
    this._knobUncheckedX = knobUncheckedX || strokeWeight + knobPadding;
    this._knobCheckedX =
      knobCheckedX || w - strokeWeight - knobPadding - knobWidth;
    const x = this.checked ? this._knobCheckedX : this._knobUncheckedX;

    if (this._smooth) {
      this._Knob.smooth = { x };
    } else {
      this._Knob.x = x;
    }
  }

  _updateColors() {
    const {
      backgroundCheckedColor,
      backgroundUncheckedColor,
      backgroundDisabledColor,
      knobCheckedColor,
      knobUncheckedColor,
      knobDisabledColor
    } = this._componentStyles;
    let knobColor;
    let containerColor;
    if (this.disabled) {
      knobColor = knobDisabledColor;
      containerColor = backgroundDisabledColor;
    } else {
      knobColor = this.checked ? knobCheckedColor : knobUncheckedColor;
      containerColor = this.checked
        ? backgroundCheckedColor
        : backgroundUncheckedColor;
    }

    if (this._smooth) {
      this._Knob.smooth = {
        color: knobColor
      };
      this._Container.smooth = {
        color: containerColor
      };
    } else {
      this._Knob.color = knobColor;
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
    } = this._componentStyles;
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
      strokeDisabledColor,
      strokeRadius,
      strokeWeight
    } = this._componentStyles;
    const h = knobHeight + 2 * knobPadding + 2 * strokeWeight;
    const newStrokeColor = this.disabled ? strokeDisabledColor : strokeColor;
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
        newStrokeColor,
        false,
        false
      )
    });
  }

  _updateKnob() {
    const { knobHeight, knobWidth, knobRadius, knobPadding, strokeWeight } =
      this._componentStyles;
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

export default withExtensions(withStyles(Toggle, styles));
