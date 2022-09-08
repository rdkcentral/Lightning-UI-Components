import { withExtensions } from '../../mixins';
import Slider from '../../elements/Slider';
import * as styles from './ScrollSlider.styles';

class ScrollSlider extends Slider {
  static get __themeStyles() {
    return styles;
  }
}

export default withExtensions(ScrollSlider);
