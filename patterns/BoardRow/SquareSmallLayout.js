import { calculateColumnWidth } from '../../Styles';

import BaseLayout from './BaseLayout';
import BoardRowComponent from './BoardRowComponent';
import Column from '../../layout/Column';
export default class SquareSmallLayout extends BaseLayout {
  static get _cardWidth() {
    return calculateColumnWidth(8);
  }

  static get _cardHeight() {
    return SquareSmallLayout._cardWidth;
  }

  static _calcTotalHeight(itemSpacing = 0) {
    return SquareSmallLayout._cardHeight * 2 + itemSpacing;
  }

  _setItems(items) {
    return this._processItems(items, ['Tile']);
  }

  _updateItems(items) {
    // Everything will be two rows high, this is the total height
    const totalRowHeight =
      SquareSmallLayout._cardHeight * 2 + this._itemSpacing;

    // Create two arrays
    const formattedItems = items.reduce((acc, curr, index) => {
      const component = {
        ...curr,
        type: BoardRowComponent(curr.type, this.srcCallback),
        w: SquareSmallLayout._cardWidth,
        h: SquareSmallLayout._cardHeight
      };
      let targetColumnIndex = acc.findIndex(
        column => column.items.length && column.items.length < 2
      );

      if (-1 === targetColumnIndex) {
        targetColumnIndex = acc.push({
          w: SquareSmallLayout._cardWidth,
          h: SquareSmallLayout._cardHeight * 2 + this._itemSpacing,
          type: Column,
          itemSpacing: this._itemSpacing,
          items: []
        });
        acc[targetColumnIndex - 1].items.push(component);
      } else {
        acc[targetColumnIndex].items.push(component);
      }
      return acc;
    }, []);

    this._updateLayout(formattedItems);
  }
}
