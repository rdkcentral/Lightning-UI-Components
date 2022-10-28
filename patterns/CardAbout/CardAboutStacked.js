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
    const props = super.properties.filter(
      prop => !['iconRight', 'textRight', 'iconLeft', 'textLeft'].includes(prop)
    );
    return [...props, 'titleBottom', 'descriptionBottom'];
  }

  static get tags() {
    const tags = super.tags.filter(
      tag => !['LeftIconTextContainer', 'RightIconTextContainer'].includes(tag)
    );
    return [...tags, 'TitleBottom', 'DescriptionBottom'];
  }

  static _template() {
    return {
      ...super._template(),
      DescriptionBottom: { type: TextBox }
    };
  }

  _update() {
    super._updateTitleStyle();
    this._updateBottomTitle();
    super._update();
    this._updateBottomDescription();
  }

  _updateDescriptionPosition() {
    if (!this.description) {
      this._Title.alpha = 0;
      return;
    }
    this._Description.patch({
      x: this.style.paddingHorizontal,
      content: this.description,
      y:
        this._Title.y + this._Title.textStyle &&
        this._Title.textStyle.lineHeight + this.style.paddingVertical * 1.5,
      textStyle: this.style.descriptionTextStyle
    });
  }

  _updateBottomTitle() {
    let titleBottomObject = {};
    let y = this.style.paddingFirstLine;
    if (this.description) {
      const lineHeight =
        (this._Description.style.textStyle &&
          this._Description.style.textStyle.lineHeight) ||
        0;
      y = this._Description.y + lineHeight + this.style.paddingVertical * 2;
    }

    titleBottomObject = {
      content: this.titleBottom && this.titleBottom.toUpperCase(),
      x: this.style.paddingHorizontal,
      y,
      wordWrapWidth: this._calculateTextWidth(),
      textStyle: this.style.titleTextStyle
    };
    if (!this._TitleBottom) {
      titleBottomObject.type = TextBox;
    }
    this.patch({ TitleBottom: titleBottomObject });
  }

  _updateBottomDescription() {
    if (this.descriptionBottom) {
      this._DescriptionBottom.patch({
        content: this.descriptionBottom,
        alpha: this.titleBottom ? 1 : 0,
        x: this.style.paddingHorizontal,
        y:
          this._TitleBottom.textStyle.lineHeight +
          this._TitleBottom.y +
          this.style.paddingVertical,
        wordWrapWidth: this._calculateTextWidth(),
        textStyle: this.style.descriptionTextStyle
      });
    }
  }

  _updateContent() {
    return;
    // This method from CardAbout needs to be overridden
    // disabled because there is no RightIconTextContainer that is used in CardAbout
  }

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    return (
      this._announce || [
        this._Title && this._Title.announce,
        this._Description && this._Description.announce,
        this._TitleBottom && this._TitleBottom.announce,
        this._DescriptionBottom && this._DescriptionBottom.announce
      ]
    );
  }
}

export default withExtensions(CardAboutStacked);
