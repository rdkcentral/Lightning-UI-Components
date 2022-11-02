import Slider from './index.js';
import { withExtensions } from '../../mixins/index.js';
import * as styles from './SliderLarge.styles.js';

class SliderLarge extends Slider {
  static get __componentName() {
    return 'SliderLarge';
  }

  static get __themeStyle() {
    return styles;
  }
}

export default withExtensions(SliderLarge);
