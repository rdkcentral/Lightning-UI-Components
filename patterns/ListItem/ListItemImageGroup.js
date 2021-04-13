import lng from '@lightningjs/core';
import Column from '../../layout/Column';
import DataItem from '../DataItem';
import { ListItemImage } from '.';
import { getFocusScale } from '../../Styles';
import withStyles from '../../mixins/withStyles';

export const styles = theme => ({
  imageResize: 96,
  itemSpacing: theme.spacing(1),
  padding: {
    y: theme.spacing(2)
  }
});

export default class ListItemImageGroup extends withStyles(
  lng.Component,
  styles
) {
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

  _construct() {
    super._construct();
    this.paddingY = this.styles.padding.y;
    this.imageResize = this.styles.imageResize;
    this.itemSpacing = this.styles.itemSpacing;
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
    return this._Column.items.map(item => item.announce).join(',');
  }

  set listItems(listItems) {
    this._Column.items = listItems.map(item => ({
      type: ListItemImage,
      title: item.title,
      subtitle: item.subtitle,
      image: item.src,
      backgroundType: 'float'
    }));

    this._Column.items.forEach(item => {
      item.h = this.imageResize + this.itemSpacing;
      item._Container.h = this.imageResize + this.itemSpacing;
      item._Image.h = this.imageResize;
      item._Image.w = this.imageResize;
      item._Image.texture.resizeMode = {
        h: this.imageResize,
        w: this.imageResize,
        type: 'cover'
      };
    });
    this.setHeight();
  }

  setHeight() {
    let height = this.paddingY * 2;
    this._Column.items.forEach((item, idx) => {
      const spacing =
        idx < this._Column.items.length - 1 ? this.itemSpacing : 0;
      height += item.h + spacing;
    });
    this.h = height;
    this._DataItem.h = height;
    this._DataItem._Background.h = height;
  }

  get _DataItem() {
    return this.tag('DataItem');
  }

  get _Column() {
    return this.tag('DataItem.Content.Column');
  }
}
