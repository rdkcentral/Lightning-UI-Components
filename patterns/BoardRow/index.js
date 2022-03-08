import CardLayout from './CardLayout';
import HeroLayout from './HeroLayout';
import PosterLayout from './PosterLayout';
import SquareLayout from './SquareLayout';
import SquareSmallLayout from './SquareSmallLayout';
import StandardLayout from './StandardLayout';
import { Base } from '../../elements';

const LAYOUTS = {
  card: CardLayout,
  hero: HeroLayout,
  poster: PosterLayout,
  square: SquareLayout,
  squaresmall: SquareSmallLayout,
  standard: StandardLayout
};

export default class BoardRow extends Base {
  static get properties() {
    return [
      'items',
      'menuCard',
      'itemSpacing',
      'scrollIndex',
      'alwaysScroll',
      'neverScroll',
      'lazyScroll',
      'srcCallback',
      'viewAll'
    ];
  }

  static get tags() {
    return ['Layout'];
  }

  _construct() {
    super._construct();
    this._itemSpacing = 0;
    this._menuCard = {};
  }

  /**
   * TODO: Update Base to remove the focus/unfocus calls and add a second "BaseComponent" that does have them
   *
   * Layout Components (Column, Row, BoardRows, etc.) would extend only Base,
   *    need to confirm this applies to InlineContnet and ScrollWrapper??
   * Element/Pattern Components (Tile, Badge, etc.) would extend "BaseComponent" that does have focus/unfocus overrides
   */
  _focus() {}
  _unfocus() {}

  _init() {
    super._init();
    const normalizeTypeName =
      'string' === typeof this.layout ? this.layout.toLowerCase() : null;
    this.layout = LAYOUTS[normalizeTypeName] ? normalizeTypeName : 'standard';
    this._createLayout();
  }

  _update() {
    if (this._Layout) {
      this._Layout.patch(this._layoutProperties);
      this._calculateHeight(this.itemSpacing);
    }
  }

  get _layoutProperties() {
    return Object.values(BoardRow.properties).reduce((acc, curr) => {
      if ('items' === curr) {
        acc[curr] = this._srcCallbackItems;
        return acc;
      }
      acc[curr] = this[curr];
      return acc;
    }, {});
  }

  _calculateHeight() {
    // Get the correct height from the current selected layout
    this.h =
      this.layout && LAYOUTS[this.layout]
        ? LAYOUTS[this.layout]._calcTotalHeight(this.itemSpacing)
        : LAYOUTS['standard']._calcTotalHeight(this.itemSpacing);
  }

  get _srcCallbackItems() {
    // Cache item src if using srcCallback
    if (!this.items || !this.items.length) return [];
    if (this.srcCallback && 'function' === typeof this.srcCallback) {
      return this.items.map(item => {
        const newItem = {
          ...item,
          srcCached: item.src
        };
        delete newItem.src;
        return newItem;
      });
    }
    return this.items;
  }

  _createLayout() {
    const layout = this.layout;
    // do not include items in the update lifecycle
    const layoutProps = BoardRow.properties;
    layoutProps.splice(BoardRow.properties.indexOf('items'), 1);

    this.patch({
      Layout: {
        type: class extends LAYOUTS[layout] {
          // Allow layouts to share the same properties api as BoardRow
          static get properties() {
            return layoutProps;
          }

          get _layoutType() {
            return LAYOUTS[layout];
          }
        },

        w: this.w
      }
    });

    this._calculateHeight(this.itemSpacing);
  }

  _getFocused() {
    return this.tag('Layout') || this;
  }

  get fullyOnScreenItems() {
    return this._Layout._Row.fullyOnScreenItems;
  }
}
