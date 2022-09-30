import * as styles from './CardContentVertical.styles';
import { withExtensions } from '../../mixins';
import CardContent from './CardContent';

class CardContentVertical extends CardContent {
  static get __componentName() {
    return 'CardContentVertical';
  }

  static get __themeStyle() {
    return styles;
  }

  _init() {
    this._orientation = 'vertical';
    super._init();
  }
}

export default withExtensions(CardContentVertical);
