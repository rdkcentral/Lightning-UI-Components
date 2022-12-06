import BaseLayout from './BaseLayout';
import BoardRowComponent from './BoardRowComponent';
import { Column, utils, context } from '@lightning/ui-core';
export default class SquareSmallLayout extends BaseLayout {
  static get _cardWidth() {
    return utils.getWidthByUpCount(context.theme, 8);
  }

  static get _cardHeight() {
    return SquareSmallLayout._cardWidth;
  }

  static _calcTotalHeight(itemSpacing = 0) {
    return SquareSmallLayout._cardHeight * 2 + itemSpacing;
  }

  _updateItems() {
    // Create two arrays
    const formattedItems = this.items.reduce((acc, curr) => {
      const component = {
        ...curr,
        type: BoardRowComponent(curr.type, this.srcCallback),
        w: SquareSmallLayout._cardWidth,
        h: SquareSmallLayout._cardHeight
      };
      let targetColumnIndex = acc.findIndex(
        column => column.items.length && column.items.length < 2
      );

      if (targetColumnIndex === -1) {
        targetColumnIndex = acc.push({
          w: SquareSmallLayout._cardWidth,
          h: SquareSmallLayout._cardHeight * 2 + this.itemSpacing,
          type: Column,
          style: {
            itemSpacing: this.itemSpacing
          },
          items: []
        });
        acc[targetColumnIndex - 1].items.push(component);
      } else {
        acc[targetColumnIndex].items.push(component);
      }
      return acc;
    }, []);

    super._updateItems(formattedItems);
  }
}
