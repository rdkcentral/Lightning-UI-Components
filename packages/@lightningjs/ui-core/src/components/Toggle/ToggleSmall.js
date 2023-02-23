import Toggle from './Toggle.js';
import * as styles from './ToggleSmall.styles.js';

export default class ToggleSmall extends Toggle {
  static get __componentName() {
    return 'ToggleSmall';
  }

  static get __themeStyle() {
    return styles;
  }
}
