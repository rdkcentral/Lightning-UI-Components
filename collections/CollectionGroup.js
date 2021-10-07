import lng from '@lightningjs/core';
import { getXfinityTheme } from '../Styles/createTheme';
const theme = getXfinityTheme();
const style = {
  space: theme.spacing(4),
  caption: theme.typography.caption
};

export default class CollectionGroup extends lng.Component {
  static _template() {
    return {
      Label: {
        h: 34,
        text: style.caption
      },
      Items: {}
    };
  }

  get _Label() {
    return this.tag('Label');
  }

  get _Items() {
    return this.tag('Items');
  }

  get _ItemFirstChild() {
    return this._Items.children[0];
  }

  get _itemsHeight() {
    return Math.max.apply(
      null,
      ((Array.isArray(this.items) && this.items) || [{ h: 0 }]).map(
        item => item.h || 0
      )
    );
  }

  set title(title) {
    if (title) this._Label.text.text = title;
  }

  _init() {
    if (Array.isArray(this.items) && this.items.length) {
      this.patch({
        h: this._Label.h + style.space / 2 + this._itemsHeight
      });
      this._Items.patch({
        y: 34 + style.space / 2,
        children: this.items
      });
    } else {
      this.patch({
        h: this._Label.h
      });
    }
  }

  _getFocused() {
    return this._ItemFirstChild;
  }

  _unfocus() {
    if (this._ItemFirstChild && this._ItemFirstChild._selectedIndex) {
      this._ItemFirstChild._selectedIndex = 0;
    }
  }
}
