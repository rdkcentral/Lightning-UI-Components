import lng from '@lightningjs/core';
import withStyles from '../mixins/withStyles';
import withUpdates from '../mixins/withUpdates';
import withTags from '../mixins/withTags';
import Row from '../layout/Row';
const style = theme => {
  return {
    space: theme.spacing(4),
    focusColor: theme.palette.background.focus
  };
};
export default class CollectionDocItem extends withTags(
  withUpdates(withStyles(lng.Component, style))
) {
  static _template() {
    return {
      CollectionDocItem: {
        Row: {
          type: Row,
          itemSpacing: this.styles.space,
          items: []
        },
        FocusIndicator: {
          x: 0,
          y: 0,
          w: 8,
          h: 0,
          alpha: 0,
          rect: true,
          color: this.styles.focusColor
        }
      }
    };
  }

  static get properties() {
    return ['items', 'defaultHeight'];
  }

  static get tags() {
    return [
      'CollectionDocItem',
      { name: 'Row', path: 'CollectionDocItem.Row' },
      { name: 'FocusIndicator', path: 'CollectionDocItem.FocusIndicator' }
    ];
  }

  _update() {
    if (!this.items.length) return;
    this._Row.items = [...this.items];
    if (this._isActive()) this._setMockActiveState(true);
  }

  _setMockActiveState(toggle) {
    if (!this._Row.items.length) return;
    this._Row.h = this.h;
    this._Row.items.forEach(item => {
      const identifier = item.title || item._label || '';
      if (identifier.toLowerCase().includes('(focus)')) {
        // Fake the hasFocus checks
        item.hasFocus = () => true;
        if (item.title) item.title = item.title.replace('(focus)', '').trim();
        if (item.label) item.label = item.label.replace('(focus)', '').trim();
        const action = toggle ? item._focus : item._unfocus;
        if ('function' === typeof action) action.call(item);
      }
    });
  }

  _active() {
    this._setMockActiveState(true);
  }

  _inactive() {
    this._setMockActiveState(false);
  }

  _focus() {
    this._FocusIndicator.patch({
      smooth: { alpha: 1 }
    });
    this._Row.patch({
      smooth: { x: this.styles.space }
    });
  }

  _unfocus() {
    this._FocusIndicator.patch({
      smooth: { alpha: 0 }
    });
    this._Row.patch({
      smooth: { x: 0 }
    });
  }

  $itemChanged() {
    this.h =
      this._defaultHeight || Math.max(...this._Row.items.map(item => item.h));
    this._FocusIndicator.h = this.h;
  }
}
