import BaseLayout from './BaseLayout';
import BoardRowComponent from './BoardRowComponent';
import { getWidthByUpCount } from '@lightning/ui-core';

export default class SquareLayout extends BaseLayout {
  static get _cardWidth() {
    return utils.getWidthByUpCount(this.theme, 4);
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
