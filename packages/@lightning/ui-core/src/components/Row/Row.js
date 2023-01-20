import NavigationManager from '../NavigationManager/index.js';
import { withExtensions } from '../../mixins/index.js';
import * as styles from './Row.styles.js';

class Row extends NavigationManager {
  static get __componentName() {
    return 'Row';
  }

  static get __themeStyle() {
    return styles;
  }

  static _template() {
    return {
      ...super._template(),
      direction: 'row'
    };
  }

  static get properties() {
    return [
      ...super.properties,
      'lazyScroll', // not in Column
      'lazyUpCount',
      'startLazyScrollIndex',
      'stopLazyScrollIndex'
    ];
  }

  // Since this is a Row, scrolling should be done only when focused item (this.selected) is fully visible horizontally
  // as scrolling is happening along X axis. So, if we have a row that has height greater than screen's height, it still
  // can scroll. Method below the '_isComponentHorizontallyVisible' does not take "full" visibility into an account.
  // At the same time, 'isFullyOnScreen' method on the Base class or utils method checks that element is fully visible
  // both vertically and horizontally.
  // At a later time, we should investigate this further.
  _isOnScreenForScrolling(child) {
    if (!child) return false;
    let itemX = child.core.renderContext.px;
    const rowX = this.core.renderContext.px;
    let xModifier;

    // This section here takes the difference between a possible target value
    // and subtracts it from the current child x. That value then is subtracted from the initial
    // itemX valu calculated on the cor rendercontext px value to more accurately
    // calculate the item's location on screen when it's own x value will be updating.
    if (child.transition('x')) {
      xModifier = child.x - child.transition('x').targetValue;
      itemX = itemX - xModifier;
    }
    return itemX >= rowX && itemX + child.w <= rowX + this.w;
  }

  _shouldScroll() {
    if (
      this.lazyScroll &&
      (this.selectedIndex <= this.startLazyScrollIndex ||
        this.selectedIndex >= this.stopLazyScrollIndex)
    ) {
      return true;
    }

    let shouldScroll = this.alwaysScroll || this._selectedPastAdded;
    if (!shouldScroll && !this.neverScroll) {
      const isCompletelyOnScreen = this._isOnScreenForScrolling(this.selected);

      if (this.lazyScroll) {
        shouldScroll = !isCompletelyOnScreen;
      } else {
        const lastChild = this.Items.childList.last;
        shouldScroll =
          lastChild &&
          (this.shouldScrollLeft() ||
            this.shouldScrollRight() ||
            !isCompletelyOnScreen);
      }
    }
    return shouldScroll;
  }

  _getPrependedOffset() {
    this._selectedPastAdded = false;
    return this.Items.x - this._totalAddedWidth;
  }

  _getLazyScrollX(prev) {
    const prevIndex = this.Items.childList.getIndex(this.prevSelected);
    if (this._selectedPastAdded) {
      return this._getPrependedOffset();
    }

    if (this.selectedIndex <= this.startLazyScrollIndex) {
      // if navigating on items before start lazy scroll index, use normal scroll logic
      return this._getScrollX();
    } else if (
      this.selectedIndex >= this.stopLazyScrollIndex &&
      this.selectedIndex < prevIndex
    ) {
      // if navigating left on items after stop lazy scroll index, only shift by size of prev item
      const currItemsX = this.Items.transition('x')
        ? this.Items.transition('x').targetValue
        : this.Items.x;

      return (
        currItemsX +
        (this.prevSelected.w +
          this.style.itemSpacing +
          (this.selected.extraItemSpacing || 0))
      );
    } else if (prev) {
      // otherwise, no start/stop indexes, perform normal lazy scroll
      let itemsContainerX;
      const prevIndex = this.Items.childList.getIndex(prev);
      const selectedX = this.selected.transition('x')
        ? this.selected.transition('x').targetValue
        : this.selected.x;
      if (prevIndex === -1) {
        // No matches found in childList, start set x to 0
        return;
      }
      if (prevIndex > this.selectedIndex) {
        itemsContainerX = -selectedX;
      } else if (prevIndex < this.selectedIndex) {
        itemsContainerX = this.w - selectedX - this.selected.w;
      }

      return itemsContainerX;
    }
    // if no prev item or start/stop index, default to normal scroll logic
    return this._getScrollX();
  }

  _getScrollX() {
    if (this._selectedPastAdded) {
      return this._getPrependedOffset();
    }
    let itemsContainerX;
    let itemIndex = this.selectedIndex - this.scrollIndex;
    itemIndex = itemIndex < 0 ? 0 : itemIndex;
    if (itemIndex === this._firstFocusableIndex()) {
      itemIndex = 0;
    }

    if (this.Items.children[itemIndex]) {
      itemsContainerX = this.Items.children[itemIndex].transition('x')
        ? -this.Items.children[itemIndex].transition('x').targetValue
        : -this.Items.children[itemIndex].x;
    }

    return itemsContainerX;
  }

  render(next, prev) {
    if (this.plinko && prev && prev.selected) {
      next.selectedIndex = this._getIndexOfItemNear(next, prev);
    }

    this._prevLastScrollIndex = this._lastScrollIndex;

    let itemsContainerX;
    if (!this.Items.children.length) {
      itemsContainerX = this.itemPosX;
    } else if (this._shouldScroll()) {
      itemsContainerX =
        this.lazyScroll && prev
          ? this._getLazyScrollX(prev)
          : this._getScrollX();
    }
    if (itemsContainerX !== undefined) {
      this.updatePositionOnAxis(this.Items, itemsContainerX);
    }

    this.onScreenEffect(this.onScreenItems);
  }

  _performRender() {
    this.render(this.selected, this.prevSelected);
  }

  _isOnScreen(child) {
    if (!child) return false;

    return this._isComponentHorizontallyVisible(child);
  }

  appendItems(items = []) {
    const itemHeight = this.renderHeight;
    this.shouldSmooth = false;

    if (items.length > this.lazyUpCount + 2) {
      this._lazyItems = items.splice(this.lazyUpCount + 2);
    }
    items.forEach(item => {
      item.parentFocus = this.hasFocus();
      item = this.Items.childList.a(item);
      item.h = item.h || itemHeight;
    });
    this.stage.update();
    this.queueRequestUpdate();
    this._refocus();
  }

  appendItemsAt(items = [], idx) {
    const addIndex = Number.isInteger(idx) ? idx : this.Items.children.length;
    this.shouldSmooth = false;
    this._lastAppendedIdx = addIndex;
    this._totalAddedWidth = 0;

    items.forEach((item, itemIdx) => {
      this.Items.childList.addAt(
        {
          ...item,
          parentFocus: this.hasFocus(),
          h: item.h || this.Items.h
        },
        addIndex + itemIdx
      );
      const itemW = item.w || item.innerW || 0;
      const extraItemSpacing = item.extraItemSpacing || 0;
      this._totalAddedWidth +=
        itemW + this.style.itemSpacing + extraItemSpacing;
    });

    if (this.selectedIndex >= this._lastAppendedIdx) {
      this._selectedPastAdded = true;
      this._selectedIndex += items.length;
    }

    this.requestUpdate();
    this._refocus();
  }

  // can be overridden
  onScreenEffect() {}
}

export default withExtensions(Row);
