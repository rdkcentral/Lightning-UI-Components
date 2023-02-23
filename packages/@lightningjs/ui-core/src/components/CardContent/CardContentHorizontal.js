import * as styles from './CardContent.styles.js';
import CardContent from './CardContent';

export default class CardContentHorizontal extends CardContent {
  static get __componentName() {
    return 'CardContentHorizontal';
  }

  static get __themeStyle() {
    return styles;
  }

  _init() {
    this._orientation = 'horizontal';
    super._init();
  }
}
