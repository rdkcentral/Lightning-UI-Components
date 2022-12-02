import * as styles from './CardAboutStacked.styles';
import CardAbout from './CardAbout';
import { TextBox, withExtensions } from '@lightning/ui-core';

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
        this._Title.y + this._Title.style.textStyle &&
        this._Title.style.textStyle.lineHeight +
          this.style.paddingVertical * 1.5,
      style: { textStyle: this.style.descriptionTextStyle },
      justify: 'flex-start'
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
      style: {
        textStyle: {
          ...this.style.titleTextStyle,
          wordWrapWidth: this._calculateTextWidth()
        }
      }
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
          this._TitleBottom.style.textStyle.lineHeight +
          this._TitleBottom.y +
          this.style.paddingVertical,
        style: {
          textStyle: {
            ...this.style.descriptionTextStyle,
            wordWrapWidth: this._calculateTextWidth()
          }
        }
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
