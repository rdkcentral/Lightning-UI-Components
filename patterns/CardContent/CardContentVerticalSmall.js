import * as styles from './CardContentVerticalSmall.styles';
import { withExtensions } from '../../mixins';
import CardContentVertical from './CardContentVertical';

class CardContentVerticalSmall extends CardContentVertical {
  static get __componentName() {
    return 'CardContentVerticalSmall';
  }

  static get __themeStyles() {
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
