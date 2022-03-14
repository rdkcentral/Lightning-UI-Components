import lng from '@lightningjs/core';
import Base from '../Base';
import { withStyles } from '../../mixins';
import { getValidColor } from '../../Styles/Styles';

export const styles = theme => ({
  radius: theme.border.radius.small,
  gradientColor: theme.palette.background.default,
  gradientTop: 'rgba(0,0,0,0)'
});

export default class Gradient extends withStyles(Base, styles) {
  static get properties() {
    return ['radius', 'gradientColor', 'gradientTop', 'radius'];
  }

  _construct() {
    super._construct();
    this._radius = this.styles.radius;
    this._gradientColor = getValidColor(this.styles.gradientColor);
    this._gradientTop = getValidColor(this.styles.gradientTop);
  }

  _update() {
    if (this.gradientColor) {
      this.patch({
        rect: true,
        rtt: true,
        colorTop: this.gradientTop,
        colorBottom: this.gradientColor,
        texture: lng.Tools.getRoundRect(this.w, this.h, this.radius)
      });
    }
  }

  _setGradientColor(color) {
    return getValidColor(color);
  }

  _setGradientTop(color) {
    return getValidColor(color);
  }
}
