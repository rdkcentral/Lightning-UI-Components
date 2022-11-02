import * as styles from './CardContentHorizontalLarge.styles';
import { withExtensions } from '@lightning/ui-core';
import CardContentHorizontal from './CardContentHorizontal';

class CardContentHorizontalLarge extends CardContentHorizontal {
  static get __componentName() {
    return 'CardContentHorizontalLarge';
  }

  static get __themeStyle() {
    return styles;
  }
}

export default withExtensions(CardContentHorizontalLarge);
