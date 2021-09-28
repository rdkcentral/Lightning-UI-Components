import BaseLayout from './BaseLayout';
import BoardRowComponent from './BoardRowComponent';
import { calculateColumnWidth, getAspectRatioH } from '../../Styles';

export default class PosterLayout extends BaseLayout {
  static get _cardWidth() {
    return calculateColumnWidth(4);
  }

  static get _cardHeight() {
    return getAspectRatioH(PosterLayout._cardWidth, '2:3');
  }

  static _calcTotalHeight() {
    return PosterLayout._cardHeight;
  }

  _setItems(items) {
    return this._processItems(items, ['Tile']);
  }

  _updateItems(items) {
    const formattedItems = items.map(item => {
      return {
        ...item,
        type: BoardRowComponent(item.type, this.srcCallback),
        h: PosterLayout._cardHeight,
        w: PosterLayout._cardWidth
      };
    });

    this._updateLayout(formattedItems);
  }
}
