import lng from 'wpe-lightning';
import FocusManager from '../FocusManager';
import { TYPESCALE, GRID } from '../Styles';

const BOUNDS = 200;

export default class Row extends FocusManager {
  static _template() {
    return {
      boundsMargin: [0, 0, BOUNDS, BOUNDS],
      direction: 'row',
      scrollMount: 1,
      itemTransition: {
        duration: 0.4,
        timingFunction: 'cubic-bezier(0.20, 1.00, 0.30, 1.00)'
      }
    };
  }

  constructor(...args) {
    super(...args);
    // Ensure we have width + height
    this._whenEnabled = new Promise(
      resolve =>
        (this._firstEnable = () => {
          this._rowEnabled = true;
          resolve();
        })
    );
  }

  _init() {
    this.alwaysScroll = this.alwaysScroll || false;
    this.showTitle = this._showTitle === undefined ? true : this.showTitle;
    this._originalW = this.w;
    this._originalH = this.h;
    this._originalY = 0;
    this.scrollMount = this.scrollMount || 0;
    this._refocus();
  }

  resetIndex() {
    this.selectedIndex = 0;
  }

  set itemSpacing(val) {
    this._itemSpacing = val;
    this.render();
  }

  get itemSpacing() {
    return this._itemSpacing || GRID.gutters.vertical;
  }

  get _requiresScrolling() {
    return this.upCount < this.items.length;
  }

  _defaultItemWidth(upCount) {
    if (this._calculatedItemWidth) {
      return this._calculatedItemWidth;
    }
    let width = this._originalW || this.renderWidth || this.finalW;
    let columnGapTotal = (upCount - 1) * this.itemSpacing;
    let widthForItems = width - columnGapTotal;
    this._calculatedItemWidth = widthForItems / upCount;
    return this._calculatedItemWidth;
  }

  set provider(provider) {
    provider.then(data => {
      if (!data.appendItems) {
        this.childList.clear();
      }
      this.appendItems(data.items);
      this._getMoreItems = data.getMoreItems;
    });
  }

  appendItems(items = []) {
    let itemHeight = this.renderHeight;
    // Add items past the bounds margin so they don't load
    let outOfBounds = this.w + this._rowWidth + this.itemSpacing;
    items.forEach(item => {
      item.h = item.h || itemHeight;
      item.x = outOfBounds;
      item.alpha = 0;
      item.parentFocus = this.hasFocus();
      this.childList.add(this.application.stage.c(item));
    });

    // Ensure items are drawn so they have height
    this.stage.update();
    this._refocus();
    this.render();
  }

  _updateHeight(change) {
    this.h += change;
  }

  _focus() {
    setTimeout(() => this.render(), 0);
    this.items.forEach(item => (item.parentFocus = true));
    if (this.focusHeightChange) {
      this._updateHeight(this.focusHeightChange);
    }
  }

  _unfocus() {
    this.items.forEach(item => (item.parentFocus = false));
    if (this.focusHeightChange) {
      this._updateHeight(-this.focusHeightChange);
    }
  }

  get scrollTransition() {
    return this._scrollTransition || {};
  }

  set scrollTransition(val) {
    this._scrollTransition = val;
  }

  _isOffScreen(item) {
    let [itemX] = item.core.getAbsoluteCoords(0, 0);
    return (
      itemX < this.itemSpacing || itemX > this._originalW - this.itemSpacing
    );
  }

  _getIndexOfItemNear(selected, prev) {
    let prevItem = prev.selected;
    let [_, itemY] = prevItem.core.getAbsoluteCoords(-prev.offset, 0);
    let index = selected.items.findIndex(item => {
      let [_, y] = item.core.getAbsoluteCoords(0, 0);
      return y >= itemY || itemY <= y + item.h;
    });

    if (index === -1) {
      return selected.items.length - 1;
    }

    return index;
  }

  _nearEnd(BUFFER = 6) {
    return this.items.length && this.selectedIndex > this.items.length - BUFFER;
  }

  _computeLastIndex() {
    let totalItems = this.items.length;
    let MAX_WIDTH = this._rowWidth - this.itemSpacing;

    for (let i = totalItems - 1; i >= 0; i--) {
      MAX_WIDTH -= this.items[i].w + this.itemSpacing;
      if (MAX_WIDTH <= 0) {
        return i + 1;
      }
    }

    return 0;
  }

  _isOnScreen(x, w) {
    return x + w >= 0 && x < this._rowWidth;
  }

  _computeStartScrollIndex(scrollStart) {
    if (scrollStart === 0) {
      return 0;
    }

    let totalItems = this.items.length;
    let MAX_WIDTH = scrollStart;

    for (let i = 0; i < totalItems; i++) {
      MAX_WIDTH -= this.items[i].w + this.itemSpacing;
      if (MAX_WIDTH <= 0) {
        return i + 1;
      }
    }

    return 0;
  }

  get _rowWidth() {
    return this.w || this.renderWidth || this.stage.w;
  }

  render(selected = this.selected, prev) {
    if (this.items.length === 0) {
      return;
    }

    if (this.plinko && prev && prev.selected) {
      selected.selectedIndex = this._getIndexOfItemNear(selected, prev);
    }

    if (this._nearEnd() && this._getMoreItems) {
      this.provider = this._getMoreItems();
      this._getMoreItems = false;
    }

    let itemX = 0;
    let index = this.selectedIndex;
    let lastIndex = this._computeLastIndex();

    if (index > lastIndex && this._getMoreItems === undefined) {
      index = lastIndex;
    }

    if (this.scrollMount === 0 || index === 0) {
      return this._renderRight(index);
    }

    if (this.scrollMount === 1) {
      itemX = this.selected.x;

      if (!this.alwaysScroll && this._isOnScreen(itemX, this.selected.w)) {
        return;
      }

      if (itemX >= this._rowWidth) {
        return this._renderLeft();
      }
      return this._renderRight();
    }

    // Scroll mount is middle
    let scrollStart = this._rowWidth * this.scrollMount;
    let startScrollIndex = this._computeStartScrollIndex(scrollStart);

    if (index < startScrollIndex) {
      return this._renderRight(0);
    }

    if (index >= lastIndex) {
      return this._renderLeft(this.items.length - 1);
    }

    // itemX = scrollStart - this.selected.w / 2;
    // this._renderLeft(index - 1, itemX);
    // this._renderRight(index, itemX);
  }

  _renderLeft(index = this.selectedIndex, itemX = this._rowWidth) {
    let onScreenItems = [];
    if (index + 1 < this.items.length) {
      index++;
      itemX += this.items[index].w + this.itemSpacing;
    }
    while (itemX >= -BOUNDS && index >= 0) {
      let item = this.items[index];
      if (this._isOnScreen(itemX, item.w)) onScreenItems.push(item);
      itemX -= item.w + this.itemSpacing;
      let alpha = this._isOnScreen(itemX, item.w) ? 1 : 0;
      item.smooth = { x: [itemX, this.itemTransition], alpha };
      index--;
    }

    this.onScreenEffect(onScreenItems);
  }

  _renderRight(index = this.selectedIndex, itemX = 0) {
    let onScreenItems = [];
    if (index - 1 >= 0) {
      index--;
      itemX -= this.items[index].w + this.itemSpacing;
    }

    let overFillWidth = this._rowWidth + BOUNDS + this.itemSpacing;
    while (itemX < overFillWidth && index < this.items.length) {
      let item = this.items[index];
      let alpha = this._isOnScreen(itemX, item.w) ? 1 : 0;

      if (this._isOnScreen(itemX, item.w)) onScreenItems.push(item);
      item.smooth = { x: [itemX, this.itemTransition], alpha };
      itemX += item.w + this.itemSpacing;
      index++;
    }

    this.onScreenEffect(onScreenItems);
  }

  get offset() {
    let t = this.transition('x');
    return t ? t.targetValue : 0;
  }

  $shiftRow({ position }) {
    this.smooth = { x: [position, this.scrollTransition] };
  }

  $itemChanged() {
    this.render(true);
  }

  $itemHeightChanged(height) {
    if (this.parentGridFocus && !this.title) {
      if (this.hasFocus()) {
        this.smooth = { y: height };
        this._updateHeight(height);
      } else {
        this.smooth = { y: this._originalY };
        this.h = this._originalH;
      }
    }
  }

  // can be overridden
  onScreenEffect() {}

  parentGridFocused() {}

  parentGridUnfocused() {}
}
