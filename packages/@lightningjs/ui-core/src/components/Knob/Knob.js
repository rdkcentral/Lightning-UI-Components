import Base from '../Base/index.js';
import * as styles from './Knob.styles.js';
import lng from '@lightningjs/core';

export default class Knob extends Base {
  static get __componentName() {
    return 'Knob';
  }

  static get __themeStyle() {
    return styles;
  }

  static _template() {
    return {
      mount: 0.5
    };
  }

  _update() {
    this._updateCircleLayout();
  }

  _updateCircleLayout() {
    this.patch({
      texture: lng.Tools.getRoundRect(
        this.w,
        this.h,
        this.style.radius,
        null,
        null,
        true,
        this.style.circleColor
      )
    });
  }
}
