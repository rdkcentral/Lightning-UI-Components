import Slider from './index.js';
import * as styles from './SliderLarge.styles.js';

export default class SliderLarge extends Slider {
  static get __componentName() {
    return 'SliderLarge';
  }

  static get __themeStyle() {
    return styles;
  }
}
