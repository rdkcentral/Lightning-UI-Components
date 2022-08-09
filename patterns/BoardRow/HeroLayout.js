import BaseLayout from './BaseLayout';
import BoardRowComponent from './BoardRowComponent';
import Column from '../../layout/Column';
import { getAspectRatioH } from '../../Styles';
import { getWidthByUpCount } from '../../utils';

export default class HeroLayout extends BaseLayout {
  static get _cardWidth() {
    return getWidthByUpCount(4);
  }

  static get _cardHeight() {
    return getAspectRatioH(HeroLayout._cardWidth, '16:9');
  }

  static _calcTotalHeight(itemSpacing = 0) {
    return HeroLayout._cardHeight * 2 + itemSpacing;
  }

  _updateItems() {
    // Create two arrays
    const formattedItems = this.items.reduce((acc, curr) => {
      const component = {
        ...curr,
        w: HeroLayout._cardWidth,
        h: HeroLayout._cardHeight
      };

      // Even columns will always get a hero tile
      const maxItems = acc.length % 2 ? 1 : 2;

      const lastItem = acc[Math.max(0, acc.length - 1)];

      if (!lastItem || lastItem.items.length === maxItems) {
        // This column is full, create a new one
        const componentWidth =
          acc.length % 2 ? component.w : component.w * 2 + this.itemSpacing;

        const componentHeight =
          acc.length % 2
            ? getAspectRatioH(component.w)
            : HeroLayout._calcTotalHeight(this.itemSpacing);

        const componentType = BoardRowComponent(curr.type, this.srcCallback);

        acc.push({
          w:
            acc.length % 2
              ? HeroLayout._cardWidth
              : component.w * 2 + this.itemSpacing,
          h: HeroLayout._cardHeight * 2 + this._itemSpacing,
          type: Column,
          itemSpacing: this._itemSpacing,
          items: [
            {
              ...component,
              type: componentType,
              w: componentWidth,
              h: componentHeight
            }
          ]
        });
        return acc;
      }
      lastItem.items.push({
        ...component,
        type: BoardRowComponent(curr.type, this.srcCallback),
        h: getAspectRatioH(component.w)
      });
      return acc;
    }, []);

    super._updateItems(formattedItems);
  }
}
