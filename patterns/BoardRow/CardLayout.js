import BaseLayout from './BaseLayout';
import BoardRowComponent from './BoardRowComponent';
export default class CardLayout extends BaseLayout {
  get _cardHeight() {
    return this._aspectRatioH(this._cardWidth, '2:3');
  }

  async _setItems(originalItems) {
    const items = this._processItems(
      originalItems,
      ['Card'],
      ['HorizontalCard']
    );
    const formattedItems = items.map(item => {
      return {
        ...item,
        type: BoardRowComponent(
          class extends item.type {
            get _artWidth() {
              return 3;
            }

            get _artHeight() {
              return 2;
            }

            set src(src) {
              this.artwork = src;
              this._src = src;
            }
          },
          this.srcCallback
        ),

        h: this._cardHeight,
        w: this._cardWidth
      };
    });
    this._updateLayout(this._cardHeight, formattedItems);
  }
}
