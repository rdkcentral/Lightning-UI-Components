import Checkbox from './Checkbox';
import * as styles from './CheckboxSmall.styles';
import { withExtensions } from '../../mixins';

class CheckboxSmall extends Checkbox {
  static get __themeStyle() {
    return styles;
  }
}

export default withExtensions(CheckboxSmall);
