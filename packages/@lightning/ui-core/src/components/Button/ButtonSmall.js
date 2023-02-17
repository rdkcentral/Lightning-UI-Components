import Button from './Button.js';
import * as styles from './ButtonSmall.styles.js';

export default class ButtonSmall extends Button {
  static get __componentName() {
    return 'ButtonSmall';
  }

  static get __themeStyle() {
    return styles;
  }
}
