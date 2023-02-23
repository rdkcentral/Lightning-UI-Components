import * as styles from './CardContentVerticalSmall.styles';
import CardContentVertical from './CardContentVertical';

export default class CardContentVerticalSmall extends CardContentVertical {
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
