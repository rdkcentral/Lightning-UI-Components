import Radio from '.';
import { withExtensions } from '../../mixins';
import * as styles from './RadioSmall.styles';

class RadioSmall extends Radio {
  static get __componentName() {
    return 'RadioSmall';
  }

  static get __themeStyles() {
    return styles;
  }
}

export default withExtensions(RadioSmall);
