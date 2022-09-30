import Toggle from './Toggle';
import { withExtensions } from '../../mixins';
import * as styles from './ToggleSmall.styles';

class ToggleSmall extends Toggle {
  static get __componentName() {
    return 'ToggleSmall';
  }

  static get __themeStyle() {
    return styles;
  }
}

export default withExtensions(ToggleSmall);
