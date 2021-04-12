import lng from '@lightningjs/core';
import Column from '../../layout/Column';
import ListItem from '../ListItem';
import { getXfinityTheme, getFocusScale } from '../../Styles';
import OverlayDataItem from '../OverlayDataItem';
import withStyles from '../../mixins/withStyles';

export const styles = theme => ({});
export default class Team extends withStyles(lng.Component, styles) {
  static _template() {
    return {
      h: 140,
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
      this._DataItem.h * getFocusScale(this._DataItem.w) + this._DataItem.y;
    this.fireAncestors('$itemChanged');
  }

  _unfocus() {
    this.h = this._DataItem.h + this._DataItem.y;
    this.fireAncestors('$itemChanged');
  }

  _getFocused() {
    return this._DataItem;
  }

  get announce() {
    return [
      this._team,
      this._Column.items.map(item => item.announce).join(',')
    ].join(',');
  }

  set team(team) {
    if (this._team !== team) {
      this._team = team;
    }
  }

  set backgroundColor(backgroundColor) {
    if (this._DataItem._Background.color !== backgroundColor) {
      this._DataItem.backgroundColor = backgroundColor;
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
        ...item
      }));
      this._Column.items = columns;
      this.h = this._Column.h;
    }
  }

  get _DataItem() {
    return this.tag('DataItem');
  }

  get _Column() {
    return this.tag('DataItem.Content.Column');
  }
}
