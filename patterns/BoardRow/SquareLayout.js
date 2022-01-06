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

  _updateItems() {
    const formattedItems = this.items.map(item => {
      return {
        ...item,
        type: BoardRowComponent(item.type, this.srcCallback),
        h: SquareLayout._cardHeight,
        w: SquareLayout._cardWidth
      };
    });
    super._updateItems(formattedItems);
  }
}
