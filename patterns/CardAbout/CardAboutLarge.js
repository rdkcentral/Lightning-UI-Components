import * as styles from './CardAboutLarge.styles';
import { withExtensions } from '../../mixins';
import CardAbout from './CardAbout';

class CardAboutLarge extends CardAbout {
  static get __componentName() {
    return 'CardAboutLarge';
  }

  static get __themeStyles() {
    return styles;
  }
}

export default withExtensions(CardAboutLarge);
