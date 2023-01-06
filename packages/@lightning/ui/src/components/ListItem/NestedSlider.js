import * as styles from './NestedSlider.styles.js';
import { withExtensions, Slider } from '@lightning/ui-core';

class NestedSlider extends Slider {
  static _template() {
    const template = super._template;
    return {
      Container: {
        ...template().Container,
        Bar: {
          ...template().Container.Bar,
          Circle: undefined
        }
      }
    };
  }
  static get __themeStyle() {
    return styles;
  }
}

export default withExtensions(NestedSlider);
