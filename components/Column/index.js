import FocusManager from '../FocusManager';
import { GRID } from '../Styles';

const BOUNDS = 1000;
export default class Column extends FocusManager {
  static _template() {
    return {
      boundsMargin: [BOUNDS, BOUNDS, 0, 0],
      direction: 'column',
      scrollMount: 0
    };
  }

  constructor(...args) {
    super(...args);
    // Ensure setters are called after all properties are set like width
    this._whenEnabled = new Promise(
      resolve =>
        (this._firstEnable = () => {
          resolve();
        })
    );
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

  _nearEnd(BUFFER = 6) {
    return this.items.length && this.selectedIndex > this.items.length - BUFFER;
  }

  get currentItem() {
    return this.items[this.selectedIndex];
  }

  set provider(provider) {
    if (provider) {
      provider.then(data => {
        data.appendItems
          ? this.appendItems(data.items)
          : (this.items = data.items);
        this._getMoreItems = data.getMoreItems;
      });
    }
  }

  appendItems(items = []) {
    let itemWidth = this.renderWidth;
    // Add items past the bounds margin so they don't load
    let bottomOfScreen = this.y + this.h + 2 * BOUNDS;
    items.forEach(item => {
      item.w = item.w || itemWidth;
      item.y = bottomOfScreen;
      item.parentFocus = this.hasFocus();
      this.childList.add(this.application.stage.c(item));
    });

    // Ensure items are drawn so they have height
    //this.stage.update();
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

  render(selected, prev) {
    let itemY = 0;
    let index = this.selectedIndex;
    let totalItems = this.items.length;
    let COLUMN_HEIGHT = this.h + 1.5 * BOUNDS;
    let lastIndex = this._computeLastIndex();
    let scrollStart = this.h * this.scrollMount;

    if (this.plinko && prev && prev.currentItem) {
      let index = this._getIndexOfItemNear(selected, prev);
      selected._selectedIndex = index;
    }

    if (this._nearEnd() && this._getMoreItems) {
      this.provider = this._getMoreItems();
      this._getMoreItems = false;
    }

    // if (this.selected.y > scrollStart) {
    // }

    if (index > lastIndex && this._getMoreItems === undefined) {
      index = lastIndex;
    }

    while (itemY < COLUMN_HEIGHT && index < totalItems && totalItems) {
      let item = this.items[index];
      item.smooth = { y: [itemY, this.itemTransition], alpha: 1 };
      itemY += item.h + this.itemSpacing;
      index++;
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
    return this._itemSpacing || GRID.gutters.horizontal;
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
      let wasSelected = item === this.selected;
      this.childList.remove(item);
      if (wasSelected || this.selectedIndex >= this.items.length) {
        this.selectedIndex = this.selectedIndex;
      }

      let itemBefore;
      if (this.selectedIndex > 0) {
        itemBefore = this.items[this.selectedIndex - 1];
      }
      this.render(itemBefore);
      if (!this.items.length) {
        this.fireAncestors('$columnEmpty');
      }
    }
  }

  $columnChanged() {
    this.render();
  }
}
