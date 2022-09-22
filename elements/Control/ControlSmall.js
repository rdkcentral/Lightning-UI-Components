import Control from './Control';
import * as styles from './ControlSmall.styles';
import { withExtensions } from '../../mixins';

class ControlSmall extends Control {
  static get __componentName() {
    return 'ControlSmall';
  }

  static get __themeStyles() {
    return styles;
  }
}

export default withExtensions(ControlSmall);
