import Button from './Button';
import { CheckboxSmall } from '../Checkbox';
import buttonSmallStyles from './ButtonSmall.styles';
import { withExtensions, withThemeStyles as withStyles } from '../../mixins';

class ButtonSmall extends Button {
  static get __componentName() {
    return 'ButtonSmall';
  }

  get _checkboxType() {
    return CheckboxSmall;
  }
}

export default withExtensions(withStyles(ButtonSmall, buttonSmallStyles));
