import * as styles from './CardContentHero.styles';
import { CardContentHorizontal, withExtensions } from '@lightning/ui-core';

class CardContentHero extends CardContentHorizontal {
  static get __componentName() {
    return 'CardContentHero';
  }

  static get __themeStyle() {
    return styles;
  }
}

export default withExtensions(CardContentHero);
