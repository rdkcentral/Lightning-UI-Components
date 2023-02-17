import * as styles from './CardContentHero.styles';
import { CardContentHorizontal } from '@lightning/ui-core';

export default class CardContentHero extends CardContentHorizontal {
  static get __componentName() {
    return 'CardContentHero';
  }

  static get __themeStyle() {
    return styles;
  }
}
