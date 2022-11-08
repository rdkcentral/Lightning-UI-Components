import * as styles from './NestedSlider.styles.js';
import { withExtensions, Slider } from '@lightning/ui-core';

class NestedSlider extends Slider {
  static get __themeStyle() {
    return styles;
  }
}

export default withExtensions(NestedSlider);
