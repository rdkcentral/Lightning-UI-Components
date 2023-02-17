import BaseLayout from './BaseLayout';
import BoardRowComponent from './BoardRowComponent';

import { Column, utils, context } from '@lightning/ui-core';

export default class StandardLayout extends BaseLayout {
  static get _cardWidth() {
    return utils.getWidthByUpCount(context.theme, 4);
  }

  static get _cardHeight() {
    return utils.getAspectRatioH(StandardLayout._cardWidth, '16:9');
  }

  static _calcTotalHeight(itemSpacing = 0) {
    return StandardLayout._cardHeight * 2 + itemSpacing;
  }

  _updateItems(items) {
    const formattedItems = items.reduce((acc, curr) => {
      const Component = BoardRowComponent(curr.type, this.srcCallback);
      const component = {
        ...curr,
        type: Component,
        w: StandardLayout._cardWidth,
        h: StandardLayout._cardHeight
      };
      let targetColumnIndex = acc.findIndex(
        column => column.items.length && column.items.length < 2
      );

      if (targetColumnIndex === -1) {
        targetColumnIndex = acc.push({
          w: StandardLayout._cardWidth,
          h: StandardLayout._calcTotalHeight(this.itemSpacing),
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
