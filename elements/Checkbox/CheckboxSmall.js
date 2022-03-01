import Checkbox from './Checkbox';
import CheckboxSmallStyles from './CheckboxSmall.styles';
import withStyles from '../../mixins/withThemeStyles';
import { withExtensions } from '../../mixins';

class CheckboxSmall extends Checkbox {}

export default withExtensions(withStyles(CheckboxSmall, CheckboxSmallStyles));
