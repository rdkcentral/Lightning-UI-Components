import Card, { CardVerticalDynamic, CardHorizontal } from '../../patterns/Card';
import MetadataSmall from '../../elements/MetadataSmall';
import FocusManager from '../../layout/FocusManager';
import Row from '../../layout/Row';
import { Base, Tile } from '../../elements';

function warningMessage(item) {
  console.warn(
    `${
      item.title ? 'Item ' + item.title : 'Item'
    } does not contain a valid type for ${this._layoutType.name}.`
  );
}
export default class BaseType extends Base {
  static _template() {
    return {
      Row: {
        type: Row,
        plinko: true,
        passSignals: {
          selectedChange: 'selectedChange'
        }
      }
    };
  }

  static get tags() {
    return ['Row'];
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

  _init() {
    if (!this.w) {
      // if width is undefined or 0, set the Row's width
      this._Row.w =
        this.parent && // if the Row is a child item in a FocusManager (like Column)
        this.parent.parent &&
        this.parent.parent instanceof FocusManager
          ? this.parent.parent.w
          : this.stage.w / this.stage.getRenderPrecision();
    } else {
      this._Row.w = this.w;
    }

    this._Row.h = this.h = this._layoutType._cardHeight;
    super._init();
  }

  _update() {
    this.h = this._layoutType._calcTotalHeight(this.itemSpacing);
    this._updateLayout();
  }

  get _validItemTypes() {
    return ['Tile'];
  }

  get _invalidItemTypes() {
    return [];
  }

  get MenuCard() {
    if (!this.menuCard.title) return undefined;

    const card = {
      ...this.menuCard,
      h: this._layoutType._calcTotalHeight(this.itemSpacing),
      type: CardVerticalDynamic
    };

    return card;
  }

  set items(items) {
    // need to wait for other properties to load, like the itemSpacing, srcCallbacks, etc.
    this._whenEnabled.then(() => {
      this._items = this._processItems(items);
      this._updateItems();
    });
  }

  get items() {
    return this._items;
  }

  _processItems(items) {
    const types = {
      Tile,
      Card,
      CardHorizontal
    };

    return items
      .filter(item => {
        const isForbiddenType = this._invalidItemTypes.find(
          type =>
            (item.type && item.type === types[type]) ||
            types[type].isPrototypeOf(item.type)
        );
        if (isForbiddenType) {
          warningMessage.call(this, item);
          return false;
        }
        const valid = this._validItemTypes.find(
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
          updatedItem.type = item.type;
          updatedItem.metadataLocation = 'inset';
          updatedItem.Metadata = {
            type: MetadataSmall,
            secondLine: item.description,
            progress: item.progress,
            logo: item.logo,
            firstLine: item.title
          };
          updatedItem.title = undefined;
        }
        return updatedItem;
      });
  }

  _updateItems(formattedItems) {
    let itemsArray;
    if (this.MenuCard) {
      itemsArray = [this.MenuCard, ...formattedItems];
      this.viewAll && itemsArray.push(this.MenuCard);
    } else {
      itemsArray = formattedItems;
    }

    this._Row.items = itemsArray;
  }

  _updateLayout() {
    this._Row.patch({
      h: this.h,
      itemSpacing: this.itemSpacing,
      scrollIndex: this.scrollIndex || 0,
      alwaysScroll: this.alwaysScroll || false,
      neverScroll: this.neverScroll || false,
      lazyScroll: this.lazyScroll || true
    });
  }

  _getFocused() {
    return this._Row;
  }
}
