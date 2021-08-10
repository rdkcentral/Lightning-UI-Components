import lng from '@lightningjs/core';
import Base from '../Base';
import withStyles from '../../mixins/withStyles';
import styles from './Toggle.styles';

export default class Toggle extends withStyles(Base, styles) {
  static _template() {
    return {
      checked: false,
      Container: {
        w: this.styles.w,
        h: this.styles.h,
        texture: lng.Tools.getRoundRect(
          this.styles.w - 8,
          this.styles.h - 4,
          this.styles.radius,
          this.styles.stroke.weight,
          0,
          true,
          0xffffffff
        ),
        Stroke: {
          w: this.styles.w,
          h: this.styles.h,
          texture: lng.Tools.getRoundRect(
            this.styles.w,
            this.styles.h,
            this.styles.radius,
            this.styles.stroke.weight,
            this.styles.stroke.color,
            false,
            false
          )
        },
        Knob: {
          zIndex: 2,
          x: 12,
          y: 7,
          texture: lng.Tools.getRoundRect(
            this.styles.knob.size,
            this.styles.knob.size,
            this.styles.knob.size / 2,
            0,
            0,
            true,
            0xffffffff
          )
        }
      }
    };
  }

  static get properties() {
    return ['onEnter'];
  }

  static get tags() {
    return [
      'Container',
      {
        name: 'Knob',
        path: 'Container.Knob'
      }
    ];
  }

  _construct() {
    super._construct();
    this._checkedStyles = this.styles.checked;
    this._uncheckedStyles = this.styles.unchecked;
  }

  _init() {
    this._update();
  }

  toggle() {
    this.checked = !this.checked;
    this._update();
    return this;
  }

  get onEnter() {
    return this._onEnter || this.toggle;
  }

  _handleEnter() {
    if (typeof this.onEnter === 'function') {
      this.onEnter(this);
    }
  }

  _update() {
    const { checked } = this;
    const style = checked ? this._checkedStyles : this._uncheckedStyles;
    this._Knob.smooth = {
      x: style.knob.x,
      color: style.knob.color
    };
    this._Container.smooth = {
      color: style.background.color
    };
  }
}
