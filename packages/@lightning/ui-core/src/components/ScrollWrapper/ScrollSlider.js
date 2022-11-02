import { withExtensions } from '../../mixins/index.js';
import Slider from '../Slider/index.js';
import * as styles from './ScrollSlider.styles.js';

class ScrollSlider extends Slider {
  static get __themeStyle() {
    return styles;
  }
}

export default withExtensions(ScrollSlider);
