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
  static _template() {
    return {};
  }

  static _states() {
    return [
      class LayoutNotSet extends this {},
      class LayoutSet extends this {
        _getFocused() {
          return this.tag('Layout');
        }
      }
    ];
  }

  static get properties() {
    return [
      'menuCard',
      'alwaysScroll',
      'items',
      'itemSpacing',
      'layout',
      'lazyScroll',
      'neverScroll',
      'scrollIndex',
      'srcCallback',
      'viewAll'
    ];
  }

  static get tags() {
    return ['Layout'];
  }

  _construct() {
    super._construct();
    // Set default prop values
    this._layout = 'standard';
    this._selectedLayout = LAYOUTS['standard'];
    this._itemSpacing = 0;
    this._menuCard = {};
  }

  _setLayout(layout) {
    // Normalize the layout string and set the correct _selectedLayout
    const normalizeTypeName =
      'string' === typeof layout ? layout.toLowerCase() : null;
    if (LAYOUTS[normalizeTypeName]) {
      this._selectedLayout = LAYOUTS[normalizeTypeName];
    } else {
      this._selectedLayout = LAYOUTS['standard'];
    }
    return normalizeTypeName;
  }

  _calculateHeight() {
    // Get the correct height from the current selected layout
    let h;
    if (this.layout && LAYOUTS[this.layout]) {
      h = LAYOUTS[this.layout]._calcTotalHeight(this.itemSpacing);
    } else {
      h = LAYOUTS['standard']._calcTotalHeight(this.itemSpacing);
    }
    this.h = h;
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

  _update() {
    this._calculateHeight(); // Calculate height here to minimize flash of unpositioned elements
    this._setState('LayoutNotSet'); // Ensures focus is not called until the layout is set

    // Get all properties to pass in to layout
    const properties = Object.values(BoardRow.properties).reduce(
      (acc, curr) => {
        if ('items' === curr) {
          acc[curr] = this._srcCallbackItems;
          return acc;
        }
        acc[curr] = this[curr];
        return acc;
      },
      {}
    );

    const _selectedLayout = this._selectedLayout;
    this.patch({
      Layout: {
        type: class extends this._selectedLayout {
          // Allow layouts to share the same properties api as BoardRow
          static get properties() {
            return [...BoardRow.properties];
          }

          get _selectedLayout() {
            return _selectedLayout;
          }
        },
        // Pass in property values to layout
        ...properties,
        w: this.w
      }
    });
    // After new layout is patched, set the focus
    this._setState('LayoutSet');
  }
}
