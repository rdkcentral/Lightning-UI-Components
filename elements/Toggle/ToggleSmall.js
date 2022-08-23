import Toggle from './Toggle';
import { withExtensions } from '../../mixins';
import * as styles from './ToggleSmall.styles';

class ToggleSmall extends Toggle {
  static get __componentName() {
    return 'ToggleSmall';
  }

  static get __themeStyles() {
    return styles;
  }
}

export default withExtensions(ToggleSmall);
