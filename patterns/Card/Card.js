import Surface from '../../elements/Surface';
import { withExtensions } from '../../mixins';
import * as styles from './Card.styles';
import TextBox from '../../elements/TextBox';

class Card extends Surface {
  static get __componentName() {
    return 'Card';
  }

  static get __themeStyles() {
    return styles;
  }

  static get properties() {
    return ['title'];
  }

  static get tags() {
    return [...super.tags, 'Title'];
  }

  static _template() {
    return {
      ...super._template(),
      Title: {
        type: TextBox,
        signals: {
          textBoxChanged: 'queueRequestUpdate'
        }
      }
    };
  }

  _update() {
    super._update();
    this._updateTitle();
    this._updateTitlePosition();
  }

  _updateTitle() {
    this._Title.patch({
      content: this.title,
      textStyle: this.style.titleTextProperties,
      wordWrapWidth: this._calculateTextWidth()
    });
  }

  _calculateTextWidth() {
    return this.w - this.style.paddingHorizontal * 2;
  }

  _updateTitlePosition() {
    this._Title.x = this.style.paddingHorizontal;
    this._Title.y = this.style.paddingVertical;
  }
}

export default withExtensions(Card);
