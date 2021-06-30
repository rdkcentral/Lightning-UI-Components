import { calculateColumnWidth } from '../../Styles';
import BaseLayout from './BaseLayout';
import BoardRowComponent from './BoardRowComponent';
import Column from '../../layout/Column';
export default class SquareSmallLayout extends BaseLayout {
  get _cardWidth() {
    return calculateColumnWidth(8);
  }

  get _cardHeight() {
    return this._cardWidth;
  }

  async _setItems(originalItems) {
    const items = this._processItems(originalItems, ['Tile']);

    // Everything will be two rows high, this is the total height
    const totalRowHeight = this._cardHeight * 2 + this._itemSpacing;

    // Create two arrays
    const formattedItems = items.reduce((acc, curr, index) => {
      const component = {
        ...curr,
        type: BoardRowComponent(curr.type, this.srcCallback),
        w: this._cardWidth,
        h: this._cardHeight
      };
      let targetColumnIndex = acc.findIndex(
        column => column.items.length && column.items.length < 2
      );

      if (-1 === targetColumnIndex) {
        targetColumnIndex = acc.push({
          w: this._cardWidth,
          h: this._cardHeight * 2 + this._itemSpacing,
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

    this._updateLayout(totalRowHeight, formattedItems);
  }
}
