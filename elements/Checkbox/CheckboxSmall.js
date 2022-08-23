import Checkbox from './Checkbox';
import * as styles from './CheckboxSmall.styles';
import { withExtensions } from '../../mixins';

class CheckboxSmall extends Checkbox {
  static get __themeStyles() {
    return styles;
  }
}

export default withExtensions(CheckboxSmall);
