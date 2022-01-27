import Radio from '.';
import { withExtensions } from '../../mixins';
import withStyles from '../../mixins/withThemeStyles';
import RadioSmallStyles from './RadioSmall.styles';

class RadioSmall extends Radio {
  static get __componentName() {
    return 'RadioSmall';
  }
}

export default withExtensions(withStyles(RadioSmall, RadioSmallStyles));
