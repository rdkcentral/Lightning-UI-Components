import Button from './Button';
import * as styles from './ButtonSmall.styles';
import { withExtensions } from '../../mixins';

class ButtonSmall extends Button {
  static get __componentName() {
    return 'ButtonSmall';
  }

  static get __themeStyles() {
    return styles;
  }
}

export default withExtensions(ButtonSmall);
