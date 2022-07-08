import Base from '../../Base';
import styles from './Knob.styles.js';
import { withExtensions } from '../../mixins';
import { Circle } from '../../textures';
import lng from '@lightningjs/core';
import { getValidColor } from '../../Styles';
import withStyles from '../../mixins/withThemeStyles';

class Knob extends Base {
  static _template() {
    return {
      mount: 0.5,
      Circle: {}
    };
  }

  static get __componentName() {
    return 'Knob';
  }

  static get tags() {
    return ['Circle'];
  }

  _getCircleTexture() {
    return {
      type: Circle,
      radius: this._componentStyles.circleSize / 2,
      color: lng.StageUtils.getRgbString(
        getValidColor(this._componentStyles.circleColor)
      ),
      stroke: false
    };
  }

  _update() {
    this.w = this._componentStyles.circleSize;
    this.h = this._componentStyles.circleSize;
    this._updateCircleLayout();
  }

  _updateCircleLayout() {
    this._Circle.patch({
      texture: this._getCircleTexture(),
      color: this._componentStyles.circleColor,
      alpha: this.disabled ? 0 : 1
    });
  }
}

export default withExtensions(withStyles(Knob, styles));
