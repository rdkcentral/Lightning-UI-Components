import Card from './Card.js';
import { TextBox, withExtensions } from '@lightning/ui-core';
import * as styles from './CardTitle.styles';

class CardTitle extends Card {
  static get __componentName() {
    return 'CardTitle';
  }

  static get __themeStyle() {
    return styles;
  }

  static get tags() {
    return [...super.tags, 'Description', 'Details'];
  }

  static get properties() {
    return [...super.properties, 'description', 'details'];
  }

  static _template() {
    return {
      ...super._template(),
      Description: {
        type: TextBox
      },
      Details: {
        type: TextBox,
        mountY: 1
      }
    };
  }

  _update() {
    super._update();
    this._updateDescription();
    this._updateDescriptionPosition();
    this._updateDetails();
    this._updateDetailsPosition();
  }

  _updateDescription() {
    this._Description.patch({
      content: this.description,
      style: {
        textStyle: {
          ...this.style.descriptionTextStyle,
          wordWrapWidth: this._calculateTextWidth()
        }
      }
    });
  }

  _updateDescriptionPosition() {
    this._Description.x = this.style.paddingHorizontal;
    this._Description.y = this.style.paddingVertical + this._Title.h;
  }

  _updateDetails() {
    this._Details.patch({
      content: this.details,
      textStyle: this.style.detailsTextProperties,
      wordWrapWidth: this._calculateTextWidth()
    });
  }

  _updateDetailsPosition() {
    this._Details.x = this.style.paddingHorizontal;
    this._Details.y = this.h - this.style.paddingVertical;
  }

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    return (
      this._announce || [
        this._Title && this._Title.announce,
        this._Description && this._Description.announce,
        this._Details && this._Details.announce
      ]
    );
  }
}

export default withExtensions(CardTitle);
