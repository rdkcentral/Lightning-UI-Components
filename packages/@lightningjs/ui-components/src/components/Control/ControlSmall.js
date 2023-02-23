import Control from './Control.js';
import * as styles from './ControlSmall.styles.js';

export default class ControlSmall extends Control {
  static get __componentName() {
    return 'ControlSmall';
  }

  static get __themeStyle() {
    return styles;
  }
}
