import withStyles from '../../mixins/withThemeStyles';
import NewCard from './index';
import { Icon } from '../../elements';
import styles from './CardSection.styles';
import { withExtensions } from '../../mixins';

class CardSection extends NewCard {
  static get __componentName() {
    return 'CardSection';
  }

  static get tags() {
    return [...super.tags, 'Icon'];
  }

  static get properties() {
    return [...super.properties, 'iconWidth', 'iconHeight', 'iconSrc'];
  }

  _update() {
    super._update();
    this._updateIcon();
  }

  _updateIcon() {
    const iconObject = {
      w: this.iconWidth || this._componentStyles.iconWidth,
      h: this.iconHeight || this._componentStyles.iconHeight,
      icon: this.iconSrc,
      x: this.w - this.iconWidth - this._componentStyles.paddingHorizontal,
      y:
        (this._Title._textStyle.lineHeight - this.iconHeight) / 2 +
        this._componentStyles.paddingVertical
    };
    if (!this._Icon) {
      iconObject.type = Icon;
    }
    this.patch({ Icon: iconObject });
  }

  _calculateTextWidth() {
    const textWidth = this.w - this._componentStyles.paddingHorizontal * 2;
    return this.iconSrc ? textWidth - this.iconWidth : textWidth;
  }
}

export default withExtensions(withStyles(CardSection, styles));
