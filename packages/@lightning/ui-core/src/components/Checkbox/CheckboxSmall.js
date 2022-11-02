import Checkbox from './Checkbox.js';
import * as styles from './CheckboxSmall.styles.js';
import { withExtensions } from '../../mixins/index.js';

class CheckboxSmall extends Checkbox {
  static get __themeStyle() {
    return styles;
  }
}

export default withExtensions(CheckboxSmall);
