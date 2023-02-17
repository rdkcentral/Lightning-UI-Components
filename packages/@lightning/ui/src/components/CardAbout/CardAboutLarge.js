import * as styles from './CardAboutLarge.styles';
import CardAbout from './CardAbout';

export default class CardAboutLarge extends CardAbout {
  static get __componentName() {
    return 'CardAboutLarge';
  }

  static get __themeStyle() {
    return styles;
  }
}
