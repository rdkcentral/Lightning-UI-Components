import Card, { CardVerticalDynamic, CardHorizontal } from '../../patterns/Card';
import MetadataSmall from '../../elements/MetadataSmall';
import FocusManager from '../../layout/FocusManager';
import Row from '../../layout/Row';
import { Base, Tile } from '../../elements';
import withMetadata from '../../patterns/withMetadata';

function warningMessage(item) {
  console.warn(
    `${
      item.title ? 'Item ' + item.title : 'Item'
    } does not contain a valid type for ${this._selectedLayout.name}.`
  );
}
export default class BaseType extends Base {
  static _template() {
    return {
      Row: {
        type: Row,
        plinko: true,
        items: [],
        passSignals: {
          selectedChange: 'selectedChange'
        }
      }
    };
  }

  // eslint-disable-next-line getter-return
  static get properties() {
    // This will overwritten by the base BoardRow component so all properties from parent are available in layout
    return [];
  }

  static get tags() {
    return ['Row'];
  }

  get MenuCard() {
    if (!this.menuCard.title) return undefined;

    const card = {
      ...this.menuCard,
      h: this._selectedLayout._calcTotalHeight(this.itemSpacing),
      type: CardVerticalDynamic
    };

    return card;
  }

  // Required by extending classes
  static get _cardWidth() {
    throw new Error('Layout must have a static _cardWidth getter');
  }

  static get _cardHeight() {
    throw new Error('Layout must have a static _cardHeight getter');
  }

  static _calcTotalHeight() {
    throw new Error('Layout must have a static _calcTotalHeight method');
  }

  _setItems() {
    throw new Error('Layout must have a _setItems method');
  }

  _init() {
    super._init();
    this._Row.itemSpacing = this._itemSpacing;
    if (!this.w) {
      // if width is undefinend or 0, set the Row's width
      this._Row.w =
        this.parent && // if the Row is a child item in a FocusManager (like Column)
        this.parent.parent &&
        this.parent.parent instanceof FocusManager
          ? this.parent.parent.w
          : this.stage.w;
    } else {
      this._Row.w = this.w;
    }
  }

  _processItems(items, arrayOfTypes = [], arrayOfTypesToExclude = []) {
    const types = {
      Tile,
      Card,
      CardHorizontal
    };

    return items
      .filter(item => {
        const isForbiddenType = arrayOfTypesToExclude.find(
          type =>
            (item.type && item.type === types[type]) ||
            types[type].isPrototypeOf(item.type)
        );
        if (isForbiddenType) {
          warningMessage.call(this, item);
          return false;
        }
        const valid = arrayOfTypes.find(
          type =>
            (item.type && item.type === types[type]) ||
            types[type].isPrototypeOf(item.type)
        );
        if (!valid) {
          warningMessage.call(this, item);
        }
        return !!valid;
      })
      .map(item => {
        const updatedItem = {
          ...item
        };
        if (
          (item.type && Tile === item.type) ||
          Tile.isPrototypeOf(item.type)
        ) {
          updatedItem.type = withMetadata(item.type);
          updatedItem.metadataLocation = 'inset';
          updatedItem.Metadata = {
            type: MetadataSmall,
            data: item.description,
            progress: item.progress,
            logo: item.logo,
            title: item.title
          };
          updatedItem.title = undefined;
        }
        return updatedItem;
      });
  }

  _update() {
    if (this.items) this._updateItems(this.items);
  }

  _updateItems() {
    // This is overwritten by the selected layout. Responsible for organizing the tiles or cards
  }

  // Always called by _updateItems after the tiles have been organized in the correct structure
  _updateLayout(items) {
    let itemsArray;
    if (this.MenuCard) {
      itemsArray = [this.MenuCard, ...items];
      this.viewAll && itemsArray.push(this.MenuCard);
    } else {
      itemsArray = items;
    }

    this._Row.patch({
      scrollIndex: this.scrollIndex || 0,
      alwaysScroll: this.alwaysScroll || false,
      neverScroll: this.neverScroll || false,
      lazyScroll: this.lazyScroll || true,
      items: itemsArray
    });
  }

  _getFocused() {
    return this._Row;
  }
}
