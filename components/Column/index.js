import lng from 'wpe-lightning';
import FocusManager from '../FocusManager';
import { COLUMN } from '../Styles/Styles';

const BOUNDS = 1000;
export default class Column extends lng.Component {
  static _template() {
    return {
      boundsMargin: [BOUNDS, BOUNDS, 0, 0],
      Items: {
        type: FocusManager,
        direction: 'column',
        signals: {
          selectedChange: '_scroll'
        },
        x: COLUMN.margin.x,
        w: w => w - 2 * COLUMN.margin.x,
        y: COLUMN.gutters.vertical
      },
      loading: true
    };
  }

  constructor(...args) {
    super(...args);
    // Ensure setters are called after all properties are set like width
    this._whenEnabled = new Promise(
      resolve =>
        (this._firstEnable = () => {
          this._enabled = true;
          resolve();
        })
    );
  }

  _init() {
    super._init();
    this._originalH = this.h;
  }

  _scroll(selected, prev, direction) {
    if (!this.static) {
      if (prev && prev.currentItem) {
        let index = this._getIndexOfItemNear(selected, prev);
        selected._selectedIndex = index;
      }

      if (direction === 'next') {
        this._scrollDown(prev);
      } else {
        this._scrollUp();
      }
    }
  }

  _getIndexOfItemNear(selected, prev) {
    let prevItem = prev.currentItem;
    let [itemX] = prevItem.core.getAbsoluteCoords(-prev.offset, 0);
    let index = selected.items.findIndex(item => {
      let [x] = item.core.getAbsoluteCoords(0, 0);
      return x >= itemX || itemX <= x + item.w;
    });

    if (index === -1) {
      return selected.items.length - 1;
    }

    return index;
  }

  scrollTo(index, duration = this.itemTransition.duration * 100) {
    for (let i = 0; i !== Math.abs(this.selectedIndex - index); i++) {
      setTimeout(() => {
        this.selectedIndex > index
          ? this.selectedIndex--
          : this.selectedIndex++;
      }, duration * i);
    }
  }

  _scrollUp() {
    this.render();
  }

  _scrollDown(itemAbove) {
    this.render(itemAbove);

    if (this._nearEnd() && this._getMoreItems) {
      this.provider = this._getMoreItems();
      this._getMoreItems = false;
    }
  }

  _nearEnd(BUFFER = 6) {
    return this.items.length && this.selectedIndex > this.items.length - BUFFER;
  }

  _getFocused() {
    return this._Items;
  }

  resetIndex() {
    this.selectedIndex = 0;
    this.items && this.items.forEach(item => (item.selectedIndex = 0));
  }

  set itemsPos(pos) {
    this._Items.x = pos.x !== undefined ? pos.x : this._Items.x;
    this._Items.y = pos.y !== undefined ? pos.y : this._Items.y;
  }

  get _Items() {
    return this.tag('Items');
  }

  get selectedIndex() {
    return this._Items.selectedIndex;
  }

  set selectedIndex(index) {
    this._Items.selectedIndex = index;
  }

  get items() {
    return this._Items.children;
  }

  set items(items) {
    if (this._columnEnabled) {
      this._Items.childList.clear();
      if (this.fallbacks)
        Object.keys(this.fallbacks).forEach(
          key => (this[`is${[key]}`] = false)
        );
      this.appendItems(items);
    } else {
      this._whenEnabled.then(() => (this.items = items));
    }
  }

  get currentItem() {
    return this.items[this.selectedIndex];
  }

  set provider(provider) {
    if (provider) {
      provider.then(data => {
        if (Array.isArray(data)) {
          this.items = data;
        } else {
          data.appendItems
            ? this.appendItems(data.items)
            : (this.items = data.items);
          this._getMoreItems = data.getMoreItems;
        }
      });
    }
  }

  appendItems(items = []) {
    let itemWidth = this._Items.renderWidth;
    // Add items past the bounds margin so they don't load
    let bottomOfScreen = this.y + this.h + 2 * BOUNDS;
    items.forEach(item => {
      item.w = item.w || itemWidth;
      item.y = bottomOfScreen;
      item.parentFocus = this.hasFocus();
      this._Items.childList.add(this.application.stage.c(item));
    });

    // Ensure items are drawn so they have height
    this.stage.update();
    this.loading = false;
    this._refocus();
    this.render();
  }

  _computeLastIndex() {
    let totalItems = this.items.length;
    let MAX_HEIGHT =
      (this.parentH ? this.parentH : this._originalH) - this.itemSpacing;

    for (let i = totalItems - 1; i >= 0; i--) {
      MAX_HEIGHT -= this.items[i].h + this.itemSpacing;
      if (MAX_HEIGHT <= 0) {
        return i + 1;
      }
    }

    return 0;
  }

  _patchFallback(state) {
    if (this.fallbacks && this.fallbacks[state]) {
      this.patch({ Items: { [state]: this.fallbacks[state] } });
      this[`is${[state]}`] = true;
    }
  }

  render(itemAbove) {
    let itemY = 0;
    let index = this.static ? 0 : this.selectedIndex;
    let totalItems = this.items.length;
    let COLUMN_HEIGHT = this._originalH + 1.5 * BOUNDS;
    let lastIndex = this._computeLastIndex();

    if (index > lastIndex && this._getMoreItems === undefined) {
      index = lastIndex;
    } else if (itemAbove) {
      itemAbove.smooth = {
        y: [-(itemAbove.h + this.itemSpacing), this.itemTransition],
        alpha: 0
      };
    }

    while (itemY < COLUMN_HEIGHT && index < totalItems && totalItems) {
      let item = this.items[index];
      item.smooth = { y: [itemY, this.itemTransition], alpha: 1 };
      itemY += item.h + this.itemSpacing;
      index++;
    }

    if (!this._originalH && itemY) {
      this.h = this._totalH;
      this.fireAncestors('$columnChanged');
    }
  }

  get _totalH() {
    return this.items.reduce(
      (acc, cur, index) =>
        (acc += cur.h + (index < this.items.length - 1 ? this.itemSpacing : 0)),
      this._Items && this._Items.y ? this._Items.y : 0
    );
  }

  set itemSpacing(val) {
    this._itemSpacing = val;
    this.render();
  }

  get itemSpacing() {
    return this._itemSpacing || COLUMN.gutters.horizontal;
  }

  set updateItems(callback) {
    if (this._columnEnabled) {
      this.items.forEach(callback);
      this.render();
    } else {
      this._whenEnabled.then(() => (this.updateItems = callback));
    }
  }

  get itemTransition() {
    return (
      this._itemTransition || {
        duration: 0.4,
        timingFunction: 'cubic-bezier(0.20, 1.00, 0.30, 1.00)'
      }
    );
  }

  set itemTransition(val) {
    this._itemTransition = val;
  }

  _focus() {
    // Wait till Items are focused before rendering
    setTimeout(() => this.render(), 0);
    this.items.forEach(item => (item.parentFocus = true));
  }

  _unfocus() {
    this.items.forEach(item => (item.parentFocus = false));
  }

  $removeItem(item) {
    if (item) {
      let wasSelected = item === this._Items.selected;
      this._Items.childList.remove(item);
      if (wasSelected || this.selectedIndex >= this.items.length) {
        this.selectedIndex = this.selectedIndex;
      }

      let itemBefore;
      if (this.selectedIndex > 0) {
        itemBefore = this.items[this.selectedIndex - 1];
      }
      this.render(itemBefore);
      if (!this.items.length) {
        this._patchFallback('EmptyState');
      }
    }
  }

  $columnChanged() {
    this.render();
  }
}
