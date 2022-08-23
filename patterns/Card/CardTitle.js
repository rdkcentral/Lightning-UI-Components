import Card from './index';
import { withExtensions } from '../../mixins';
import TextBox from '../../elements/TextBox';
import * as styles from './CardTitle.styles';

class CardTitle extends Card {
  static get __componentName() {
    return 'CardTitle';
  }

  static get __themeStyles() {
    return styles;
  }

  static get tags() {
    return [...super.tags, 'Description'];
  }

  static get properties() {
    return [...super.properties, 'description'];
  }

  static _template() {
    return {
      ...super._template(),
      Description: {
        type: TextBox
      }
    };
  }

  _update() {
    super._update();
    this._updateDescription();
    this._updateDescriptionPosition();
  }

  _updateDescription() {
    this._Description.patch({
      content: this.description,
      textStyle: this.style.descriptionTextProperties,
      wordWrapWidth: this._calculateTextWidth()
    });
  }

  _updateDescriptionPosition() {
    this._Description.x = this.style.paddingHorizontal;
    this._Description.y = this.style.paddingVertical + this._Title.h;
  }
}

export default withExtensions(CardTitle);
