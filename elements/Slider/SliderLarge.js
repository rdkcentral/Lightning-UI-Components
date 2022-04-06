import Slider from '.';
import { withExtensions } from '../../mixins';
import withStyles from '../../mixins/withThemeStyles';
import styles from './SliderLarge.styles';

class SliderLarge extends Slider {
  static get __componentName() {
    return 'SliderLarge';
  }
}

export default withExtensions(withStyles(SliderLarge, styles));
