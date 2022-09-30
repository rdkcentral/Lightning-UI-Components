import Base from '../../Base';
import * as styles from './Knob.styles.js';
import { withExtensions } from '../../mixins';
import { Circle } from '../../textures';
import lng from '@lightningjs/core';
import { getValidColor } from '../../utils';

class Knob extends Base {
  static get __componentName() {
    return 'Knob';
  }

  static get __themeStyle() {
    return styles;
  }

  static get tags() {
    return ['Circle'];
  }

  static _template() {
    return {
      mount: 0.5,
      Circle: {}
    };
  }

  _getCircleTexture() {
    return {
      type: Circle,
      radius: this.style.circleSize / 2,
      color: lng.StageUtils.getRgbString(getValidColor(this.style.circleColor)),
      stroke: false
    };
  }

  _update() {
    this.w = this.style.circleSize;
    this.h = this.style.circleSize;
    this._updateCircleLayout();
  }

  _updateCircleLayout() {
    this._Circle.patch({
      texture: this._getCircleTexture(),
      color: this.style.circleColor,
      alpha: this.disabled ? 0 : 1
    });
  }
}

export default withExtensions(Knob);
