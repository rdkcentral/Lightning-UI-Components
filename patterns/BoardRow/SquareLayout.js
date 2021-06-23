import BaseLayout from './BaseLayout';
import BoardRowComponent from './BoardRowComponent';
export default class SquareLayout extends BaseLayout {
  get _cardHeight() {
    return this._cardWidth;
  }

  async _setItems(originalItems) {
    const items = this._processItems(originalItems, ['Tile']);
    const formattedItems = items.map(item => {
      return {
        ...item,
        type: BoardRowComponent(item.type, this.srcCallback),
        h: this._cardHeight,
        w: this._cardWidth
      };
    });
    this._updateLayout(this._cardHeight, formattedItems);
  }
}
