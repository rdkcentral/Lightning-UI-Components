import Control from './Control.js';
import * as styles from './ControlSmall.styles.js';
import { withExtensions } from '../../mixins/index.js';

class ControlSmall extends Control {
  static get __componentName() {
    return 'ControlSmall';
  }

  static get __themeStyle() {
    return styles;
  }
}

export default withExtensions(ControlSmall);
