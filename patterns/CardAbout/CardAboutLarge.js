import withStyles from '../../mixins/withThemeStyles';
import styles from './CardAboutLarge.styles';
import { withExtensions } from '../../mixins';
import CardAbout from './CardAbout';

class CardAboutLarge extends CardAbout {
  static get __componentName() {
    return 'CardAboutLarge';
  }
}

export default withExtensions(withStyles(CardAboutLarge, styles));
