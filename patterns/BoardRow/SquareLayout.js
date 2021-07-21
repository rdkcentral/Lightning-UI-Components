import BaseLayout from './BaseLayout';
import BoardRowComponent from './BoardRowComponent';
import { calculateColumnWidth } from '../../Styles';
export default class SquareLayout extends BaseLayout {
  static get _cardWidth() {
    return calculateColumnWidth(4);
  }

  static get _cardHeight() {
    return SquareLayout._cardWidth;
  }

  static _calcTotalHeight() {
    return SquareLayout._cardHeight;
  }

  _setItems(items) {
    return this._processItems(items, ['Tile']);
  }

  async _updateItems(items) {
    const formattedItems = items.map(item => {
      return {
        ...item,
        type: BoardRowComponent(item.type, this.srcCallback),
        h: SquareLayout._cardHeight,
        w: SquareLayout._cardWidth
      };
    });
    this._updateLayout(formattedItems);
  }
}
