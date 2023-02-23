import * as styles from './CardContentHorizontalLarge.styles';
import CardContentHorizontal from './CardContentHorizontal';

export default class CardContentHorizontalLarge extends CardContentHorizontal {
  static get __componentName() {
    return 'CardContentHorizontalLarge';
  }

  static get __themeStyle() {
    return styles;
  }
}
