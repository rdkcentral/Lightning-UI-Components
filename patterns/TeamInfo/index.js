import lng from '@lightningjs/core';
import Column from '../../layout/Column';
import ListItem from '../ListItem';
import OverlayDataItem from '../OverlayDataItem';
import withStyles from '../../mixins/withStyles';

export const styles = theme => ({
  getFocusScale: theme.getFocusScale
});
export default class TeamInfo extends withStyles(lng.Component, styles) {
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
            itemSpacing: 0,
            items: []
          }
        }
      }
    };
  }

  _construct() {
    this._team = '';
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
    this._announce = announce;
  }

  set team(team) {
    if (this._team !== team) {
      this._team = team;
    }
  }

  set overlayColor(overlayColor) {
    if (this._DataItem._OverlayColor.color !== overlayColor) {
      this._DataItem.overlayColor = overlayColor;
    }
  }

  set overlayImage(overlayImage) {
    if (this._DataItem._OverlayImage.src !== overlayImage) {
      this._DataItem.overlayImage = overlayImage;
    }
  }

  set items(items) {
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
    }
  }

  get _DataItem() {
    return this.tag('DataItem');
  }

  get _Column() {
    return this.tag('DataItem.Content.Column');
  }
}
