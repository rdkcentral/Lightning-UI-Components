import BaseLayout from './BaseLayout';
import BoardRowComponent from './BoardRowComponent';
import { utils, context } from '@lightning/ui-core';
import * as CardContentVerticalStyle from '../CardContent/CardContentVertical.styles';

export default class CardLayout extends BaseLayout {
  static get _cardWidth() {
    return utils.getWidthByUpCount(context.theme, 4);
  }

  static get _cardHeight() {
    // Matching the formula used for the height of CardContentVertical,
    // to make sure the MenuCard matches the items in the row.
    return CardContentVerticalStyle.base(context.theme).expandedH;
  }

  static _calcTotalHeight() {
    return CardLayout._cardHeight;
  }

  get _validItemTypes() {
    return ['CardContentVertical'];
  }

  _updateItems() {
    const formattedItems = this.items.map(item => {
      return {
        ...item,
        type: BoardRowComponent(
          class extends item.type {
            set src(src) {
              this.artwork = src;
              this._src = src;
            }
          },
          this.srcCallback
        ),

        h: CardLayout._cardHeight,
        w: CardLayout._cardWidth
      };
    });

    super._updateItems(formattedItems);
  }
}
