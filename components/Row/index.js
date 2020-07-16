import FocusManager from '../FocusManager';

export default class Row extends FocusManager {
  static _template() {
    return {
      direction: 'row',
      scrollMount: 0,
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

  set itemSpacing(val) {
    this._itemSpacing = val;
    this.render();
  }

  get itemSpacing() {
    return this._itemSpacing || 0;
  }

  set provider(provider) {
    provider.then(data => {
      if (!data.appendItems) {
        this.Items.childList.clear();
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
      this.Items.add(this.application.stage.c(item));
    });

    // Ensure items are drawn so they have height
    this.stage.update();
    let itemWidth = (items[0] || {}).w || this._rowWidth * 0.15;
    let bounds = itemWidth + this.itemSpacing;
    this.boundsMargin = [0, 0, bounds, bounds];
    this._refocus();
    this.render();
  }

  _updateHeight(change) {
    this.h += change;
  }

  _focus() {
    // Wait till items are focused before rendering
    setTimeout(() => this.render(), 0);
    this.items.forEach(item => (item.parentFocus = true));
    if (this.focusHeightChange) {
      this._updateHeight(this.focusHeightChange);
    }
  }

  _unfocus() {
    // Wait till items are focused before rendering
    setTimeout(() => this.render(), 0);
    this.items.forEach(item => (item.parentFocus = false));
    if (this.focusHeightChange) {
      this._updateHeight(-this.focusHeightChange);
    }
  }

  _computeLastIndex() {
    let totalItems = this.items.length;
    let mount = this.scrollMount || 1;
    let MAX_WIDTH = this._rowWidth * mount;

    for (let i = totalItems - 1; i >= 0; i--) {
      MAX_WIDTH -= this.items[i].w + this.itemSpacing;
      if (MAX_WIDTH <= 0) {
        return i + 1;
      }
    }

    return 0;
  }

  _isOnScreen(x, w) {
    return x >= 0 && x + w < this._rowWidth;
  }

  _computeStartScrollIndex(scrollStart) {
    let totalItems = this.items.length;
    let MAX_WIDTH = scrollStart;

    for (let i = 0; i < totalItems; i++) {
      MAX_WIDTH -= this.items[i].w + this.itemSpacing;
      if (MAX_WIDTH <= 0) {
        return i + 1;
      }
    }
  }

  get _rowWidth() {
    return this.w || this.renderWidth || this.stage.w;
  }

  render(selected = this.selected, prev) {
    if (this.items.length === 0) return;
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
      const itemW = this.selected.w;
      if (!this.alwaysScroll && this._isOnScreen(itemX, itemW)) {
        return;
      }

      if (itemX + this.selected.w >= this._rowWidth) {
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

    itemX = scrollStart - this.selected.w / 2;
    this._renderRight(index, itemX);
    this._renderLeft(index - 1, itemX);
  }

  _renderLeft(
    index = this.selectedIndex,
    itemX = this._rowWidth - this.itemSpacing
  ) {
    let onScreenItems = [];
    let BOUNDS = this.boundsMargin[3];
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
    let BOUNDS = this.boundsMargin[3];
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

  $itemChanged() {
    this.render();
  }

  $itemHeightChanged(height) {
    this.smooth = { y: height };
    this._updateHeight(height);
  }

  // can be overridden
  onScreenEffect() {}
}
