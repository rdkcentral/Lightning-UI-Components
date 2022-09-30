import Card from './Card';
import { Icon } from '../../elements';
import * as styles from './CardSection.styles';
import { withExtensions } from '../../mixins';

class CardSection extends Card {
  static get __componentName() {
    return 'CardSection';
  }

  static get __themeStyle() {
    return styles;
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
      w: this.iconWidth || this.style.iconWidth,
      h: this.iconHeight || this.style.iconHeight,
      icon: this.iconSrc,
      x: this.w - this.iconWidth - this.style.paddingHorizontal,
      y:
        (this._Title._textStyle.lineHeight - this.iconHeight) / 2 +
        this.style.paddingVertical
    };
    if (!this._Icon) {
      iconObject.type = Icon;
    }
    this.patch({ Icon: iconObject });
  }

  _calculateTextWidth() {
    const textWidth = this.w - this.style.paddingHorizontal * 2;
    return this.iconSrc ? textWidth - this.iconWidth : textWidth;
  }
}

export default withExtensions(CardSection);
