import withStyles from '../../mixins/withThemeStyles';
import styles from './AboutStackedCard.styles';
import { withExtensions } from '../../mixins';
import AboutCard from './AboutCard';
import TextBox from '../../elements/TextBox';

class AboutStackedCard extends AboutCard {
  static get __componentName() {
    return 'AboutStackedCard';
  }
  static get properties() {
    return [
      ...super.properties,
      'titleBottom',
      'contentBottom',
      'descriptionBottom'
    ];
  }
  static get tags() {
    return [...super.tags, 'TitleBottom'];
  }

  _update() {
    super._updateTitleStyle();
    this._updateContainer();
    this._updateBottomText();
    this._updateDescriptionPosition();
    super._update();
  }

  _updateContainer() {
    if (!this.contentBottom) {
      this._Title.alpha = 0;
      return;
    }
    this.patch({
      LeftIconTextContainer: {
        x: this._componentStyles.paddingHorizontal,
        content: this.contentBottom,
        y:
          this._Title.y +
          this._Title.textStyle.lineHeight +
          this._componentStyles.paddingVertical * 1.5
      }
    });
  }

  _updateBottomText() {
    let titleBottomObject = {};
    titleBottomObject = {
      content: this.titleBottom.toUpperCase(),
      x: this._componentStyles.paddingHorizontal,
      y: this.contentBottom
        ? this._LeftIconTextContainer.y +
          this._LeftIconTextContainer.textProperties.lineHeight +
          this._componentStyles.paddingVertical * 2
        : this._componentStyles.paddingFirstLine,
      wordWrapWidth: this._calculateTextWidth(),
      textStyle: {
        ...this._componentStyles.titleTextProperties,
        textColor: this.disabled
          ? this._componentStyles.textColorDisabled
          : this._componentStyles.titleTextProperties.textColor
      }
    };
    if (!this._TitleBottom) {
      titleBottomObject.type = TextBox;
    }
    this.patch({ TitleBottom: titleBottomObject });
  }

  _updateDescriptionPosition() {
    if (this.descriptionBottom) {
      this._Description.patch({
        content: this.descriptionBottom,
        alpha: this.titleBottom ? 1 : 0,
        x: this._componentStyles.paddingHorizontal,
        y:
          this._TitleBottom.textStyle.lineHeight +
          this._TitleBottom.y +
          this._componentStyles.paddingVertical,
        wordWrapWidth: this._calculateTextWidth(),
        textStyle: {
          ...this._componentStyles.descriptionTextProperties,
          textColor: this.disabled
            ? this._componentStyles.textColorDisabled
            : this._componentStyles.descriptionTextProperties.textColor
        }
      });
    }
  }

  _updateContent() {
    return;
    // This method from AboutCard needs to be overridden
    // disabled because there is no RightIconTextContainer that is used in AboutCard
  }
}

export default withExtensions(withStyles(AboutStackedCard, styles));
