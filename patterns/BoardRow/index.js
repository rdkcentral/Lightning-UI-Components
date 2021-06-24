import { VerticalCardDynamic } from '../../patterns/Card';
import Base from '../../elements/Base';
import CardLayout from './CardLayout';
import HeroLayout from './HeroLayout';
import PosterLayout from './PosterLayout';
import SquareLayout from './SquareLayout';
import SquareSmallLayout from './SquareSmallLayout';
import StandardLayout from './StandardLayout';
import styles from './styles.js';
import withStyles from '../../mixins/withStyles';

const LAYOUTS = {
  card: CardLayout,
  hero: HeroLayout,
  poster: PosterLayout,
  square: SquareLayout,
  squaresmall: SquareSmallLayout,
  standard: StandardLayout
};

class BoardRow extends Base {
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
      ...VerticalCardDynamic.properties, // Suport same api as VerticalCard as it will always be the first item in the rows
      // Rows Props
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
  }

  _setLayout(layout) {
    const normalizeTypeName =
      'string' === typeof layout ? layout.toLowerCase() : null;
    if (LAYOUTS[normalizeTypeName]) {
      return LAYOUTS[normalizeTypeName];
    }
    return LAYOUTS['standard'];
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
}

export default withStyles(BoardRow, styles);
