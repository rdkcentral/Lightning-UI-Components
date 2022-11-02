import * as styles from './CardContentHero.styles';
import { withExtensions } from '@lightning/ui-core';
import CardContentHorizontal from './CardContentHorizontal';

class CardContentHero extends CardContentHorizontal {
  static get __componentName() {
    return 'CardContentHero';
  }

  static get __themeStyle() {
    return styles;
  }
}

export default withExtensions(CardContentHero);
