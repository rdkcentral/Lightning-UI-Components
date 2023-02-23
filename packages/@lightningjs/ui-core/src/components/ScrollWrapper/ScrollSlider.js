import Slider from '../Slider/index.js';
import * as styles from './ScrollSlider.styles.js';

export default class ScrollSlider extends Slider {
  static get __componentName() {
    return 'ScrollSlider';
  }

  static get __themeStyle() {
    return styles;
  }
}
