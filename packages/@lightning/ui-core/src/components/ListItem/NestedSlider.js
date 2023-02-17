import * as styles from './NestedSlider.styles.js';
import Slider from '../Slider';
import { withExtensions } from '../../mixins/index.js';

class NestedSlider extends Slider {
  static get __componentName() {
    return 'NestedSlider';
  }

  static get __themeStyle() {
    return styles;
  }
}

export default withExtensions(NestedSlider);
