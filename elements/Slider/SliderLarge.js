import Slider from '.';
import { withExtensions } from '../../mixins';
import * as styles from './SliderLarge.styles';

class SliderLarge extends Slider {
  static get __componentName() {
    return 'SliderLarge';
  }

  static get __themeStyle() {
    return styles;
  }
}

export default withExtensions(SliderLarge);
