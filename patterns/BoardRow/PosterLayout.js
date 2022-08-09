import BaseLayout from './BaseLayout';
import BoardRowComponent from './BoardRowComponent';
import { getAspectRatioH } from '../../Styles';
import { getWidthByUpCount } from '../../utils';

export default class PosterLayout extends BaseLayout {
  static get _cardWidth() {
    return getWidthByUpCount(4);
  }

  static get _cardHeight() {
    return getAspectRatioH(PosterLayout._cardWidth, '3:4');
  }

  static _calcTotalHeight() {
    return PosterLayout._cardHeight;
  }

  _updateItems() {
    const formattedItems = this.items.map(item => {
      return {
        ...item,
        type: BoardRowComponent(item.type, this.srcCallback),
        h: PosterLayout._cardHeight,
        w: PosterLayout._cardWidth
      };
    });

    super._updateItems(formattedItems);
  }
}
