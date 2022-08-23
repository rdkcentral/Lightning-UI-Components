import Button from './Button';
import { CheckboxSmall } from '../Checkbox';
import * as styles from './ButtonSmall.styles';
import { withExtensions } from '../../mixins';

class ButtonSmall extends Button {
  static get __componentName() {
    return 'ButtonSmall';
  }

  static get __themeStyles() {
    return styles;
  }

  get _checkboxType() {
    return CheckboxSmall;
  }
}

export default withExtensions(ButtonSmall);
