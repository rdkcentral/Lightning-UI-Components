import Toggle from './Toggle.js';
import { withExtensions } from '../../mixins/index.js';
import * as styles from './ToggleSmall.styles.js';

class ToggleSmall extends Toggle {
  static get __componentName() {
    return 'ToggleSmall';
  }

  static get __themeStyle() {
    return styles;
  }
}

export default withExtensions(ToggleSmall);
