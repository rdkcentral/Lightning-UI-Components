import * as styles from './CardAboutLarge.styles';
import { withExtensions } from '@lightning/ui-core';
import CardAbout from './CardAbout';

class CardAboutLarge extends CardAbout {
  static get __componentName() {
    return 'CardAboutLarge';
  }

  static get __themeStyle() {
    return styles;
  }
}

export default withExtensions(CardAboutLarge);
