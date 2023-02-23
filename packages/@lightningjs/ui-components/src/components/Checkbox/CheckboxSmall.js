import Checkbox from './Checkbox.js';
import * as styles from './CheckboxSmall.styles.js';

export default class CheckboxSmall extends Checkbox {
  static get __themeStyle() {
    return styles;
  }
}
