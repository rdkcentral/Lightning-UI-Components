import Radio from './Radio.js';
import { withExtensions } from '../../mixins/index.js';
import * as styles from './RadioSmall.styles.js';

class RadioSmall extends Radio {
  static get __componentName() {
    return 'RadioSmall';
  }

  static get __themeStyle() {
    return styles;
  }
}

export default withExtensions(RadioSmall);
