import { CardVerticalDynamic } from '../../patterns/Card';
import CardLayout from './CardLayout';
import HeroLayout from './HeroLayout';
import PosterLayout from './PosterLayout';
import SquareLayout from './SquareLayout';
import SquareSmallLayout from './SquareSmallLayout';
import StandardLayout from './StandardLayout';
import withTags from '../../mixins/withTags';
import withUpdates from '../../mixins/withUpdates';
import lng from '@lightningjs/core';
import { calculateColumnWidth } from '../../Styles';

const LAYOUTS = {
  card: CardLayout,
  hero: HeroLayout,
  poster: PosterLayout,
  square: SquareLayout,
  squaresmall: SquareSmallLayout,
  standard: StandardLayout
};

class BoardRow extends lng.Component {
  static _template() {
    return {};
  }

  static _states() {
    return [
      class LayoutNotSet extends this {},
      class LayoutSet extends this {
        _getFocused() {
          return this.tag('Container');
        }
      }
    ];
  }

  static get properties() {
    return [
      ...CardVerticalDynamic.properties, // Suport same api as VerticalCard as it will always be the first item in the rows
      // Rows Props
      'itemSpacing',
      'scrollIndex',
      'alwaysScroll',
      'neverScroll',
      'lazyScroll',
      // BoardRow Specific
      'onEnter',
      'viewAll',
      'layout',
      'items',
      'srcCallback' // This should be a function that returns a value or a promise
    ];
  }

  static get tags() {
    return ['Container'];
  }

  _construct() {
    super._construct();
    this._layout = LAYOUTS['standard']; // Sets default layout
    this._itemSpacing = 0;
  }

  _setLayout(layout) {
    const normalizeTypeName =
      'string' === typeof layout ? layout.toLowerCase() : null;
    this._calculateHeight(normalizeTypeName);
    if (LAYOUTS[normalizeTypeName]) {
      return LAYOUTS[normalizeTypeName];
    }
    return LAYOUTS['standard'];
  }

  _calculateHeight(layoutName) {
    let boardRowHeight;
    switch (layoutName) {
      case 'card':
      case 'poster':
        boardRowHeight = calculateColumnWidth(4) / (2 / 3);
        break;
      case 'square':
        boardRowHeight = calculateColumnWidth(4);
        break;
      case 'squaresmall':
        boardRowHeight = calculateColumnWidth(8) * 2 + this.itemSpacing;
        break;
      default:
        boardRowHeight =
          (calculateColumnWidth(4) / (16 / 9)) * 2 + this.itemSpacing;
    }
    this.h = boardRowHeight;
  }

  get _srcCallbackItems() {
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

    this.patch({
      Container: {
        type: class extends this.layout {
          // Allow layouts to share the same properties api as BoardRow
          static get properties() {
            return BoardRow.properties;
          }
        },
        // Pass in property values to layout
        ...properties
      }
    });
    // After new layout is patched, set the focus
    this._setState('LayoutSet');
  }

  $itemChanged() {
    // catch the item changed event from child or column scroll doesn't work properly
    return false;
  }
}

export default withUpdates(withTags(BoardRow));
