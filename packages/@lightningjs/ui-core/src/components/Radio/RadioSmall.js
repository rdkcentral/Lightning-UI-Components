import Radio from './Radio.js';
import * as styles from './RadioSmall.styles.js';

export default class RadioSmall extends Radio {
  static get __componentName() {
    return 'RadioSmall';
  }

  static get __themeStyle() {
    return styles;
  }
}
