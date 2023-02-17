import * as styles from './NestedSlider.styles.js';
import Slider from '../Slider';

export default class NestedSlider extends Slider {
  static get __componentName() {
    return 'NestedSlider';
  }

  static get __themeStyle() {
    return styles;
  }
}
