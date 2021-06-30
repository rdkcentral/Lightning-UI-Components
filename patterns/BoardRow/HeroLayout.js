import BaseLayout from './BaseLayout';
import BoardRowComponent from './BoardRowComponent';
import Column from '../../layout/Column';
export default class HeroLayout extends BaseLayout {
  async _setItems(originalItems) {
    const items = this._processItems(originalItems, ['Tile']);
    // Everything will be two rows high, this is the total height
    const totalRowHeight = this._cardHeight * 2 + this._itemSpacing;
    // Create two arrays
    const formattedItems = items.reduce((acc, curr, index) => {
      const component = {
        ...curr,
        w: this._cardWidth,
        h: this._cardHeight
      };

      // Even columns will always get a hero tile
      const maxItems = acc.length % 2 ? 1 : 2;

      const lastItem = acc[Math.max(0, acc.length - 1)];

      if (!lastItem || lastItem.items.length === maxItems) {
        // This column is full, create a new one
        const componentWidth =
          acc.length % 2 ? component.w : this._aspectRatioW(totalRowHeight);

        const componentHeight =
          acc.length % 2 ? this._aspectRatioH(component.w) : totalRowHeight;

        const componentType = BoardRowComponent(curr.type, this.srcCallback);

        acc.push({
          w:
            acc.length % 2
              ? this._cardWidth
              : this._aspectRatioW(totalRowHeight),
          h: this._cardHeight * 2 + this._itemSpacing,
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
        h: this._aspectRatioH(component.w)
      });
      return acc;
    }, []);

    this._updateLayout(
      this._cardHeight * 2 + this._itemSpacing,
      formattedItems
    );
  }
}
