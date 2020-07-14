import FocusManager from '../FocusManager';

export default class Column extends FocusManager {
  static _template() {
    return {
      direction: 'column',
      scrollMount: 0,
      itemTransition: {
        duration: 0.4,
        timingFunction: 'cubic-bezier(0.20, 1.00, 0.30, 1.00)'
      }
    };
  }

  constructor(...args) {
    super(...args);
    // Ensure setters are called after all properties are set like width
    this._whenEnabled = new Promise(
      resolve =>
        (this._firstEnable = () => {
          this._columnEnabled = true;
          resolve();
        })
    );
  }

  // finds the index of the item with the closest middle to the previously selected item
  _getIndexOfItemNear(selected, prev) {
    // edge case
    if (selected.items.length < 2) return 0;

    let prevItem = prev.selected || prev.currentItem;
    let [itemX] = prevItem.core.getAbsoluteCoords(-prev.offset, 0);
    let prevMiddle = itemX + prevItem.w / 2;

    // set the first item to be closest
    let closest = selected.items[0];
    let closestMiddle = closest.core.getAbsoluteCoords(0, 0)[0] + closest.w / 2;

    // start at the 2nd item
    for (let i = 1; i < selected.items.length; i++) {
      const item = selected.items[i];
      const middle = item.core.getAbsoluteCoords(0, 0)[0] + item.w / 2;

      if (
        Math.abs(middle - prevMiddle) < Math.abs(closestMiddle - prevMiddle)
      ) {
        // current item is the closest
        closest = item;
        closestMiddle = middle;
      } else {
        // previous index is the closest, return it
        return i - 1;
      }
    }
    // last index is the closest
    return selected.items.length - 1;
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

  set provider(provider) {
    provider.then(data => {
      if (!data.appendItems) {
        this.items = [];
      }
      this.appendItems(data.items);
      this._getMoreItems = data.getMoreItems;
    });
  }

  appendItems(items = []) {
    let itemWidth = this.renderWidth;
    // Add items past the bounds margin so they don't load
    let bottomOfScreen = this.y + this._columnHeight + this.itemSpacing;
    items.forEach(item => {
      item.w = item.w || itemWidth;
      item.y = bottomOfScreen;
      item.alpha = 0;
      item.parentFocus = this.hasFocus();
    });
    super.appendItems(items);

    // Ensure items are drawn so they have height
    this.stage.update();

    // Create boundsMargin to preload images off screen
    let itemHeight = (items[0] || {}).h || this._columnHeight * 0.15;
    let bounds = itemHeight + this.itemSpacing;
    this.boundsMargin = [bounds, bounds, 0, 0];

    this.render();
  }

  _computeLastIndex() {
    let totalItems = this.items.length;
    let MAX_HEIGHT = this._columnHeight - this.itemSpacing;

    for (let i = totalItems - 1; i >= 0; i--) {
      MAX_HEIGHT -= this.items[i].h + this.itemSpacing;
      if (MAX_HEIGHT <= 0) {
        return i + 1;
      }
    }

    return 0;
  }

  _computeStartScrollIndex(scrollStart) {
    let totalItems = this.items.length;
    let MAX_HEIGHT = scrollStart;

    for (let i = 0; i < totalItems; i++) {
      MAX_HEIGHT -= this.items[i].h + this.itemSpacing;
      if (MAX_HEIGHT <= 0) {
        return i + 1;
      }
    }
  }

  // can be overridden
  onScreenEffect() {}

  render(selected = this.selected, prev) {
    if (this.items.length === 0) {
      return;
    }

    let itemY = 0;
    let index = this.selectedIndex;
    let lastIndex = this._computeLastIndex();

    if (this.plinko && prev && (prev.currentItem || prev.selected)) {
      selected._selectedIndex = this._getIndexOfItemNear(selected, prev);
    }

    if (this._nearEnd() && this._getMoreItems) {
      this.provider = this._getMoreItems();
      this._getMoreItems = false;
    }

    if (index > lastIndex && this._getMoreItems === undefined) {
      index = lastIndex;
    }

    if (this.scrollMount === 0 || index === 0) {
      return this.onScreenEffect(this._renderDown(index));
    }

    if (this.scrollMount === 1) {
      itemY = this.selected.y;
      if (this._isOnScreen(itemY)) {
        return;
      }

      if (itemY >= this._columnHeight) {
        return this.onScreenEffect(this._renderUp());
      }
    }

    // Scroll mount is middle
    let scrollStart = this._columnHeight * this.scrollMount;
    let startScrollIndex = this._computeStartScrollIndex(scrollStart);

    if (index < startScrollIndex) {
      return this.onScreenEffect(this._renderDown(0));
    }

    itemY = scrollStart - this.selected.h / 2;
    this.onScreenEffect(
      [].concat(
        this._renderUp(index - 1, itemY),
        this._renderDown(index, itemY)
      )
    );
  }

  _renderUp(index = this.selectedIndex, itemY = this._columnHeight) {
    let onScreenItems = [];
    const [BOUNDS] = this.boundsMargin;

    if (index + 1 < this.items.length) {
      index++;
      itemY += this.items[index].h + this.itemSpacing;
    }

    while (itemY >= -BOUNDS && index >= 0) {
      let item = this.items[index];
      if (this._isOnScreen(itemY)) onScreenItems.push(item);
      itemY -= item.h + this.itemSpacing;
      let alpha = this._isOnScreen(itemY) ? 1 : 0;
      item.smooth = { y: [itemY, this.itemTransition], alpha };
      index--;
    }

    return onScreenItems;
  }

  _renderDown(index, itemY = 0) {
    let onScreenItems = [];
    const [BOUNDS] = this.boundsMargin;

    if (index - 1 >= 0) {
      index--;
      itemY -= this.items[index].h + this.itemSpacing;
    }

    let overFillHeight = this._columnHeight + BOUNDS + this.itemSpacing;
    while (itemY < overFillHeight && index < this.items.length) {
      let item = this.items[index];
      let alpha = this._isOnScreen(itemY) ? 1 : 0;
      if (this._isOnScreen(itemY)) onScreenItems.push(item);

      item.smooth = { y: [itemY, this.itemTransition], alpha };
      itemY += item.h + this.itemSpacing;
      index++;
    }

    return onScreenItems;
  }

  _isOnScreen(y) {
    return y >= 0 && y < this._columnHeight;
  }

  get _columnHeight() {
    return this.h || this.renderHeight || this.stage.h;
  }

  set itemSpacing(val) {
    this._itemSpacing = val;
    this.render();
  }

  get itemSpacing() {
    return this._itemSpacing || 0;
  }

  updateItems(callback) {
    if (this._columnEnabled) {
      this.items.forEach(callback);
      this.render();
    } else {
      this._whenEnabled.then(() => this.items.forEach(callback));
    }
  }

  _focus() {
    // Wait till Items are focused before rendering
    setTimeout(() => this.render(), 0);
    this.items.forEach(item => (item.parentFocus = true));
  }

  _unfocus() {
    // Wait till Items are focused before rendering
    setTimeout(() => this.render(), 0);
    this.items.forEach(item => (item.parentFocus = false));
  }

  $removeItem(item) {
    if (item) {
      let wasSelected = item === this.selected;
      this.Items.childList.remove(item);
      if (wasSelected || this.selectedIndex >= this.items.length) {
        // eslint-disable-next-line no-self-assign
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
