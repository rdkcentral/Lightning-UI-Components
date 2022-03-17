import Toggle from './Toggle';
import { withExtensions } from '../../mixins';
import withStyles from '../../mixins/withThemeStyles';
import styles from './ToggleSmall.styles';

class ToggleSmall extends Toggle {
  static get __componentName() {
    return 'ToggleSmall';
  }
}

export default withExtensions(withStyles(ToggleSmall, styles));
