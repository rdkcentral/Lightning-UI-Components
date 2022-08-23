import lng from '@lightningjs/core';
import Base from '../../Base';
import * as styles from './Gradient.styles';
import { withExtensions } from '../../mixins';

class Gradient extends Base {
  static get __componentName() {
    return 'Gradient';
  }

  static get __themeStyles() {
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

export default withExtensions(Gradient);
