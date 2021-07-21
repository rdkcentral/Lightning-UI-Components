import BaseLayout from './BaseLayout';
import BoardRowComponent from './BoardRowComponent';
import { calculateColumnWidth, getAspectRatioH } from '../../Styles';
export default class CardLayout extends BaseLayout {
  static get _cardWidth() {
    return calculateColumnWidth(4);
  }

  static get _cardHeight() {
    return getAspectRatioH(CardLayout._cardWidth, '2:3');
  }

  static _calcTotalHeight() {
    return CardLayout._cardHeight;
  }

  _setItems(items) {
    return this._processItems(items, ['Card'], ['CardHorizontal']);
  }

  async _updateItems(items) {
    const formattedItems = items.map(item => {
      return {
        ...item,
        type: BoardRowComponent(
          class extends item.type {
            get _artWidth() {
              return 3;
            }

            get _artHeight() {
              return 2;
            }

            set src(src) {
              this.artwork = src;
              this._src = src;
            }
          },
          this.srcCallback
        ),

        h: CardLayout._cardHeight,
        w: CardLayout._cardWidth
      };
    });
    this._updateLayout(formattedItems);
  }
}
