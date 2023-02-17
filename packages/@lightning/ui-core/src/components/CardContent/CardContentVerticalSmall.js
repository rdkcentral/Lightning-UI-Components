import * as styles from './CardContentVerticalSmall.styles';
import { withExtensions } from '../../mixins/index.js';
import CardContentVertical from './CardContentVertical';

class CardContentVerticalSmall extends CardContentVertical {
  static get __componentName() {
    return 'CardContentVerticalSmall';
  }

  static get __themeStyle() {
    return styles;
  }

  _setMetadata(metadata) {
    return {
      ...metadata,
      details: undefined,
      provider: undefined
    };
  }
}

export default withExtensions(CardContentVerticalSmall);
