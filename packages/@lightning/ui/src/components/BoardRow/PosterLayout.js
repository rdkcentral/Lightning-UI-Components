import BaseLayout from './BaseLayout';
import BoardRowComponent from './BoardRowComponent';
import { utils, context } from '@lightning/ui-core';

export default class PosterLayout extends BaseLayout {
  static get _cardWidth() {
    return utils.getWidthByUpCount(context.theme, 4);
  }

  static get _cardHeight() {
    return utils.getAspectRatioH(PosterLayout._cardWidth, '3:4');
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
