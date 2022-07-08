import withStyles from '../../mixins/withThemeStyles';
import NewCard from './index';
import { withExtensions } from '../../mixins';
import TextBox from '../../elements/TextBox';
import styles from './CardTitle.styles';

class CardTitle extends NewCard {
  static _template() {
    return {
      ...super._template(),
      Description: {
        type: TextBox
      }
    };
  }
  static get __componentName() {
    return 'CardTitle';
  }
  static get tags() {
    return [...super.tags, 'Description'];
  }

  static get properties() {
    return [...super.properties, 'description'];
  }

  _update() {
    super._update();
    this._updateDescription();
    this._updateDescriptionPosition();
  }

  _updateDescription() {
    this._Description.patch({
      content: this.description,
      textStyle: {
        ...this._componentStyles.descriptionTextProperties,
        textColor: this.disabled
          ? this._componentStyles.textColorDisabled
          : this._componentStyles.descriptionTextProperties.textColor
      },
      wordWrapWidth: this._calculateTextWidth()
    });
  }

  _updateDescriptionPosition() {
    this._Description.x = this._componentStyles.paddingHorizontal;
    this._Description.y = this._componentStyles.paddingVertical + this._Title.h;
  }
}

export default withExtensions(withStyles(CardTitle, styles));
