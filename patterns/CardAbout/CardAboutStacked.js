import * as styles from './CardAboutStacked.styles';
import { withExtensions } from '../../mixins';
import CardAbout from './CardAbout';
import TextBox from '../../elements/TextBox';

class CardAboutStacked extends CardAbout {
  static get __componentName() {
    return 'CardAboutStacked';
  }

  static get __themeStyle() {
    return styles;
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
        x: this.style.paddingHorizontal,
        content: this.contentBottom,
        y:
          this._Title.y + this._Title.textStyle &&
          this._Title.textStyle.lineHeight + this.style.paddingVertical * 1.5
      }
    });
  }

  _updateBottomText() {
    let titleBottomObject = {};
    let y = this.style.paddingFirstLine;
    if (this.contentBottom) {
      const lineHeight =
        (this._LeftIconTextContainer.style.textStyle &&
          this._LeftIconTextContainer.style.textStyle.lineHeight) ||
        0;
      y =
        this._LeftIconTextContainer.y +
        lineHeight +
        this.style.paddingVertical * 2;
    }

    titleBottomObject = {
      content: this.titleBottom && this.titleBottom.toUpperCase(),
      x: this.style.paddingHorizontal,
      y,
      wordWrapWidth: this._calculateTextWidth(),
      textStyle: this.style.titleTextProperties
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
        x: this.style.paddingHorizontal,
        y:
          this._TitleBottom.textStyle.lineHeight +
          this._TitleBottom.y +
          this.style.paddingVertical,
        wordWrapWidth: this._calculateTextWidth(),
        textStyle: this.style.descriptionTextProperties
      });
    }
  }

  _updateContent() {
    return;
    // This method from CardAbout needs to be overridden
    // disabled because there is no RightIconTextContainer that is used in CardAbout
  }
}

export default withExtensions(CardAboutStacked);
