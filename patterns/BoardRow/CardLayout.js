import BaseLayout from './BaseLayout';
import BoardRowComponent from './BoardRowComponent';
import { getWidthByUpCount } from '../../utils';

export default class CardLayout extends BaseLayout {
  static get _cardWidth() {
    return getWidthByUpCount(4);
  }

  static get _cardHeight() {
    return 502;
  }

  static _calcTotalHeight() {
    return CardLayout._cardHeight;
  }

  get _validItemTypes() {
    return ['Card'];
  }

  get _invalidItemTypes() {
    return ['CardHorizontal'];
  }

  _updateItems() {
    const formattedItems = this.items.map(item => {
      return {
        ...item,
        type: BoardRowComponent(
          class extends item.type {
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

    super._updateItems(formattedItems);
  }
}
