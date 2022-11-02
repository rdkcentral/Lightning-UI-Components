import * as styles from './Card.styles.js';
import { TextBox, Surface, withExtensions } from '@lightning/ui-core';

class Card extends Surface {
  static get __componentName() {
    return 'Card';
  }

  static get __themeStyle() {
    return styles;
  }

  static get properties() {
    return [...super.properties, 'title'];
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
      textStyle: this.style.titleTextStyle,
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

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    return this._announce || (this._Title && this._Title.announce);
  }
}

export default withExtensions(Card);
