import * as styles from './CardContentHero.styles';
import { withExtensions } from '../../mixins';
import CardContentHorizontal from './CardContentHorizontal';

class CardContentHero extends CardContentHorizontal {
  static get __componentName() {
    return 'CardContentHero';
  }

  static get __themeStyles() {
    return styles;
  }
}

export default withExtensions(CardContentHero);
