import { ListItemImage } from '.';
import Base from '../../elements/Base';
import Column from '../../layout/Column';
import DataItem from '../DataItem';
import styles from './ListItemImageGroup.styles';
import withStyles from '../../mixins/withStyles';
export default class ListItemImageGroup extends withStyles(Base, styles) {
  static _template() {
    return {
      w: 410,
      DataItem: {
        type: DataItem,
        w: 410,
        margin: 0,
        content: {
          flex: {
            paddingTop: this.styles.padding.y,
            paddingBottom: this.styles.padding.y
          },
          w: w => w,
          Column: {
            type: Column,
            itemSpacing: this.styles.itemSpacing
          }
        }
      }
    };
  }

  static get properties() {
    return ['listItems'];
  }

  static get tags() {
    return ['DataItem', { name: 'Column', path: 'DataItem.Content.Column' }];
  }

  _update() {
    // Allow override of props with spread as last prop
    this._Column.items = this._listItems.map(item => ({
      type: ListItemImage,
      title: item.title,
      subtitle: item.subtitle,
      size: 'small',
      image: item.src,
      backgroundType: 'float',
      imageSize: this.styles.imageResize,
      ...item
    }));

    // Image must be set before
    this._Column.items.forEach(item => {
      item.h = this.imageResize + this.styles.itemSpacing;
      item._Container.h = this.imageResize + this.styles.itemSpacing;
      item._Title.text.wordWrapWidth = 280;
      item._Subtitle.text.wordWrapWidth = 280;
      item._update();
    });

    this._setHeight();
  }
  set announce(announce) {
    super._announce = announce;
  }

  get announce() {
    if (this._announce) {
      return this._announce;
    }
    return this._Column.items.map(item => item.announce).join(',');
  }
  _setHeight() {
    let height = this.styles.padding.y * 2;
    this._Column.items.forEach((item, idx) => {
      const spacing =
        idx < this._Column.items.length - 1 ? this.styles.itemSpacing : 0;
      height += item.h + spacing;
    });
    this.h = height;
    this._DataItem.h = height;
    this._DataItem._Background.h = height;
  }

  _focus() {
    this.h =
      this._DataItem.h *
        this.styles.getFocusScale(this._DataItem.w, this._DataItem.h) +
      this._DataItem.y;
    this.fireAncestors('$itemChanged');
  }

  _unfocus() {
    this.h = this._DataItem.h + this._DataItem.y;
    this.fireAncestors('$itemChanged');
  }

  _getFocused() {
    return this._DataItem;
  }
}
