import Button from './Button.js';
import * as styles from './ButtonSmall.styles.js';
import { withExtensions } from '../../mixins/index.js';

class ButtonSmall extends Button {
  static get __componentName() {
    return 'ButtonSmall';
  }

  static get __themeStyle() {
    return styles;
  }
}

export default withExtensions(ButtonSmall);
