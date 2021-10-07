import BaseLayout from './BaseLayout';
import BoardRowComponent from './BoardRowComponent';
import Column from '../../layout/Column';
import { calculateColumnWidth, getAspectRatioH } from '../../Styles';
export default class StandardLayout extends BaseLayout {
  static get _cardWidth() {
    return calculateColumnWidth(4);
  }

  static get _cardHeight() {
    return getAspectRatioH(StandardLayout._cardWidth, '16:9');
  }

  static _calcTotalHeight(itemSpacing = 0) {
    return StandardLayout._cardHeight * 2 + itemSpacing;
  }

  _setItems(items) {
    return this._processItems(items, ['Tile']);
  }

  async _updateItems(items) {
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

      if (-1 === targetColumnIndex) {
        targetColumnIndex = acc.push({
          w: StandardLayout._cardWidth,
          h: StandardLayout._calcTotalHeight(this._itemSpacing),
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
