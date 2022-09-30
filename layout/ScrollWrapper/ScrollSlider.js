import { withExtensions } from '../../mixins';
import Slider from '../../elements/Slider';
import * as styles from './ScrollSlider.styles';

class ScrollSlider extends Slider {
  static get __themeStyle() {
    return styles;
  }
}

export default withExtensions(ScrollSlider);
