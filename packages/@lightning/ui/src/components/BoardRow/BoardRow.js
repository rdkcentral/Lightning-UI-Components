import CardLayout from './CardLayout';
import HeroLayout from './HeroLayout';
import PosterLayout from './PosterLayout';
import SquareLayout from './SquareLayout';
import SquareSmallLayout from './SquareSmallLayout';
import StandardLayout from './StandardLayout';
import { Base, withExtensions } from '@lightning/ui-core';
import * as styles from './BoardRow.styles';

const LAYOUTS = {
  card: CardLayout,
  hero: HeroLayout,
  poster: PosterLayout,
  square: SquareLayout,
  squaresmall: SquareSmallLayout,
  standard: StandardLayout
};

class BoardRow extends Base {
  static get __componentName() {
    return 'BoardRow';
  }

  static get __themeStyle() {
    return styles;
  }

  static get properties() {
    return [
      'items',
      'menuCard',
      'scrollIndex',
      'alwaysScroll',
      'neverScroll',
      'lazyScroll',
      'lazyUpCount',
      'autoResizeWidth',
      'autoResizeHeight',
      'startLazyScrollIndex',
      'stopLazyScrollIndex',
      'srcCallback',
      'viewAll'
    ];
  }

  static get tags() {
    return ['Layout'];
  }

  _construct() {
    super._construct();
    this._menuCard = {};
  }

  /**
   * TODO: Update Base to remove the focus/unfocus calls and add a second "BaseComponent" that does have them
   *
   * Layout Components (Column, Row, BoardRows, etc.) would extend only Base,
   *    need to confirm this applies to InlineContent and ScrollWrapper??
   * Element/Pattern Components (Tile, Badge, etc.) would extend "BaseComponent" that does have focus/unfocus overrides
   */
  _focus() {}
  _unfocus() {}

  _init() {
    this._renderLayout();
    super._init();
  }

  _renderLayout() {
    // removes Layout if exists and replaces with new Layout
    if (this._Layout) {
      this.patch({ Layout: undefined });
    }
    const normalizeTypeName =
      typeof this._layout === 'string' ? this._layout.toLowerCase() : null;
    this._layout = LAYOUTS[normalizeTypeName] ? normalizeTypeName : 'standard';
    this._createLayout();
  }

  _update() {
    if (this._Layout) {
      this._Layout.patch(this._layoutProperties);
      this._calculateHeight(this.style.itemSpacing);
    }
  }

  set layout(layout) {
    if (layout !== this._layout) {
      this._layout = layout;
      this._renderLayout();
      this.queueRequestUpdate();
    }
  }

  get layout() {
    return this._layout;
  }

  get _layoutProperties() {
    const props = Object.values(BoardRow.properties).reduce((acc, curr) => {
      if (curr === 'items') {
        acc[curr] = this._srcCallbackItems;
        return acc;
      }
      acc[curr] = this[curr];
      return acc;
    }, {});

    return { ...props, itemSpacing: this.style.itemSpacing };
  }

  _calculateHeight() {
    // Get the correct height from the current selected layout
    this.h =
      this._layout && LAYOUTS[this._layout]
        ? LAYOUTS[this._layout]._calcTotalHeight(this.style.itemSpacing)
        : LAYOUTS['standard']._calcTotalHeight(this.style.itemSpacing);
  }

  get _srcCallbackItems() {
    // Cache item src if using srcCallback
    if (!this.items || !this.items.length) return [];
    if (this.srcCallback && typeof this.srcCallback === 'function') {
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
    const layout = this._layout;
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

    this._calculateHeight(this.style.itemSpacing);
  }

  _getFocused() {
    return this.tag('Layout') || this;
  }

  get fullyOnScreenItems() {
    return this._Layout._Row.fullyOnScreenItems;
  }
}

export default withExtensions(BoardRow);
