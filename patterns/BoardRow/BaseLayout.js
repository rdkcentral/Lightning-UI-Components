import { calculateColumnWidth } from '../../Styles';
import Card, { VerticalCardDynamic, HorizontalCard } from '../../patterns/Card';
import Base from '../../elements/Base';
import MetadataCard from '../../elements/MetadataCard';
import Row from '../../layout/Row';
import styles from './styles';
import Tile from '../../elements/Tile';
import withMetaData from '../../patterns/withMetadata';
import withStyles from '../../mixins/withStyles';

function warningMessage(item) {
  console.warn(
    `Item ${item.title} does not contain a valid type for BoardRow ${this.layout.name}.`
  );
}
export default class BaseType extends withStyles(Base, styles) {
  static _template() {
    return {
      Layout: {
        type: Row,
        itemSpacing: this.styles.columnSpacing,
        plinko: true,
        items: []
      }
    };
  }

  static get properties() {
    // This will overwritten by the base BoardRow component so all properties from parent are available in layout
  }

  static get tags() {
    return ['Layout'];
  }

  get FirstCard() {
    return {
      type: VerticalCardDynamic,
      title: this.title,
      description: this.description,
      action: this.action
    };
  }

  get _cardWidth() {
    return calculateColumnWidth(4);
  }

  get _cardHeight() {
    return this._aspectRatioH(this._cardWidth, '16:9');
  }

  _processItems(items, arrayOfTypes = [], arrayOfTypesToExclude = []) {
    const types = {
      Tile,
      Card,
      HorizontalCard
    };

    return (
      items
        // This check does not work in flex
        // .filter(item => {
        //   const isForbiddenType = arrayOfTypesToExclude.find(
        //     type => item.type && item.type.prototype instanceof types[type]
        //   );
        //   if (isForbiddenType) {
        //     warningMessage.call(this, item);
        //     return false;
        //   }
        //   const valid = arrayOfTypes.find(
        //     type => {
        //       debugger
        //       return item.type && item.type.prototype instanceof types[type]
        //     }
        //   );
        //   if (!valid) {
        //     warningMessage.call(this, item);
        //   }
        //   return !!valid;
        // })
        .map(item => {
          const addMetaData = item.type && item.type.prototype instanceof Tile;
          const onEnter = !item.onEnter ? () => {} : item.onEnter;
          if (addMetaData) {
            const newItem = {
              ...item,
              onEnter,
              type: withMetaData(item.type),
              metadataLocation: 'inset',
              Metadata: {
                type: MetadataCard,
                firstLine: item.title,
                secondLine: item.description,
                logo: item.logo,
                logoW: 32
              }
            };
            return newItem;
          }

          return {
            ...item,
            onEnter
          };
        })
    );
  }

  _aspectRatioW(h, ratio) {
    switch (ratio) {
      case '1:1':
        return h;
      case '2:3':
        return h * (2 / 3);
      default:
        return h * (16 / 9);
    }
  }

  _aspectRatioH(w, ratio) {
    switch (ratio) {
      case '1:1':
        return w;
      case '2:3':
        return w / (2 / 3);
      default:
        return w / (16 / 9);
    }
  }

  _updateLayout(totalHeight, items) {
    const menuCard = { ...this.FirstCard, h: totalHeight };
    let itemsArray = [menuCard, ...items];
    this.viewAll && itemsArray.push(menuCard);

    this._Layout.patch({
      scrollIndex: this.scrollIndex || 0,
      alwaysScroll: this.alwaysScroll || false,
      neverScroll: this.neverScroll || false,
      lazyScroll: this.lazyScroll || true,
      items: itemsArray
    });
  }

  _getFocused() {
    return this._Layout;
  }
}
