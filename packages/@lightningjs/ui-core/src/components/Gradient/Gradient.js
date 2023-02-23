import lng from '@lightningjs/core';
import Base from '../Base/index.js';
import * as styles from './Gradient.styles.js';

export default class Gradient extends Base {
  static get __componentName() {
    return 'Gradient';
  }

  static get __themeStyle() {
    return styles;
  }

  _update() {
    this.patch({
      rect: true,
      rtt: true,
      colorTop: this.style.gradientTop,
      colorBottom: this.style.gradientColor,
      texture: lng.Tools.getRoundRect(this.w, this.h, this.style.radius)
    });
  }
}
