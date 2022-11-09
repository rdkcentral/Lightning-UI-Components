import OverlayDataItem from '../OverlayDataItem';
import { withStyles, Base, Column } from '@lightning/ui-core';
import { ListItem } from '../../patterns';
import styles from './TeamInfo.styles';
export default class TeamInfo extends withStyles(Base, styles) {
  static _template() {
    return {
      h: 140,
      w: 410,
      DataItem: {
        type: OverlayDataItem,
        h: 140,
        w: 410,
        content: {
          flex: {
            ...this.styles.padding
          },
          Column: {
            type: Column,
            style: {
              itemSpacing: 0
            },
            items: []
          }
        }
      }
    };
  }

  static get properties() {
    return ['items', 'overlayColor', 'overlayImage', 'team'];
  }

  static get tags() {
    return [
      {
        name: 'Column',
        path: 'DataItem.Content.Column'
      },
      'DataItem'
    ];
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

  setHeight() {
    let itemsHeight = 0;
    this._Column.items.forEach(item => {
      itemsHeight += item.h;
    });
    this.h = Math.max(itemsHeight, this._DataItem.h);
    this.fireAncestors('$itemChanged');
  }

  get announce() {
    if (this._announce) {
      return this._announce;
    }

    let announceText = this._team ? `${this._team},` : '';
    announceText += this._Column.items.map(item => item.announce).join(',');
    return announceText;
  }

  set announce(announce) {
    super.announce = announce;
  }

  _setItems(items) {
    if (this._items !== items) {
      this._items = items;
      const columns = items.map(item => ({
        type: ListItem,
        backgroundType: 'float',
        size: 'small',
        ...item
      }));
      this._Column.items = columns;
      this.setHeight();
      return items;
    }
  }

  _update() {
    this._updateDataItem();
  }

  _updateDataItem() {
    this._DataItem.patch({
      overlayColor: this._overlayColor,
      overlayImage: this._overlayImage
    });
  }
}
