import FocusManager from '../FocusManager';
import { getX, getH } from '../../utils';
export default class Row extends FocusManager {
  static _template() {
    return {
      ...super._template(),
      direction: 'row'
    };
  }

  static get properties() {
    return [
      ...super.properties,
      'itemSpacing',
      'scrollIndex',
      'alwaysScroll',
      'neverScroll',
      'lazyScroll',
      'autoResize',
      'startLazyScrollIndex',
      'stopLazyScrollIndex'
    ];
  }

  _construct() {
    super._construct();
    this._smooth = false;
    this._itemSpacing = 0;
    this._itemPosX = 0;
    this._itemPosY = 0;
    this._scrollIndex = 0;
  }

  _init() {
    super._init();
    if (!this.w) {
      // if width is undefined or 0, set the Row's width
      this.w =
        this.parent && // if the Row is a child item in a FocusManager (like Column)
        this.parent.parent &&
        this.parent.parent instanceof FocusManager
          ? this.parent.parent.w
          : this.stage.w / this.stage.getRenderPrecision();
    }

    this.Items.transition('x').on(
      'finish',
      this._transitionListener.bind(this)
    );
  }

  _update() {
    this._updateLayout();
  }

  _setItemSpacing(itemSpacing) {
    return itemSpacing || 0;
  }

  get _itemTransition() {
    return (
      this.itemTransition || {
        duration: 0.4,
        timingFunction: 'cubic-bezier(0.20, 1.00, 0.30, 1.00)'
      }
    );
  }

  _focus() {
    this.items.forEach(item => (item.parentFocus = true));
  }

  _unfocus() {
    this.items.forEach(item => (item.parentFocus = false));
  }

  selectNext() {
    this._smooth = true;
    return super.selectNext();
  }

  selectPrevious() {
    this._smooth = true;
    return super.selectPrevious();
  }

  // TODO: can be documented in API when lastScrollIndex is made public
  shouldScrollLeft() {
    let shouldScroll = false;

    if (this._lastScrollIndex) {
      shouldScroll = this.selectedIndex < this._lastScrollIndex;
      if (
        this._prevLastScrollIndex !== undefined &&
        this._prevLastScrollIndex !== this._lastScrollIndex
      ) {
        shouldScroll = true;
      }
    } else {
      shouldScroll = this.selectedIndex >= this._scrollIndex;
    }

    return this._itemsX < 0 && shouldScroll;
  }

  // TODO: can be documented in API when lastScrollIndex is made public
  shouldScrollRight() {
    const lastChild = this.Items.childList.last;
    return (
      this.selectedIndex > this._scrollIndex &&
      // end of Items container < end of last item
      Math.abs(this._itemsX - this.w) <
        lastChild.x + this.Items.childList.last.w
    );
  }

  // Since this is a Row, scrolling should be done only when focused item (this.selected) is fully visible horizontally
  // as scrolling is happening along X axis. So, if we have a row that has height greater than screen's height, it still
  // can scroll. Method below the '_isComponentHorizontallyVisible' does not take "full" visibility into an account.
  // At the same time, 'isFullyOnScreen' method on the Base class or utils method checks that element is fully visible
  // both vertically and horizontally.
  // At a later time, we should investigate this further.
  _isOnScreenForScrolling(child) {
    if (!child) return false;
    const itemX = child.core.renderContext.px;
    const rowX = this.core.renderContext.px;
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
          this.itemSpacing +
          (this.selected.extraItemSpacing || 0))
      );
    } else if (prev) {
      // otherwise, no start/stop indexes, perform normal lazy scroll
      let itemsContainerX;
      const prevIndex = this.Items.childList.getIndex(prev);
      if (prevIndex > this.selectedIndex) {
        itemsContainerX = -this.selected.x;
      } else if (prevIndex < this.selectedIndex) {
        itemsContainerX = this.w - this.selected.x - this.selected.w;
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
    this._whenEnabled.then(() => {
      if (this.plinko && prev && (prev.currentItem || prev.selected)) {
        next.selectedIndex = this._getIndexOfItemNear(next, prev);
      }

      this._prevLastScrollIndex = this._lastScrollIndex;

      let itemsContainerX;
      if (!this.Items.children.length) {
        itemsContainerX = this.itemPosX;
      } else if (this._shouldScroll()) {
        itemsContainerX = this.lazyScroll
          ? this._getLazyScrollX(prev)
          : this._getScrollX();
      }
      if (itemsContainerX !== undefined) {
        if (this._smooth) {
          this.Items.smooth = {
            x: [itemsContainerX, this._itemTransition]
          };
        } else {
          this.Items.x = itemsContainerX;
          this._updateTransitionTarget(this.Items, 'x', itemsContainerX);
        }
      }

      this.onScreenEffect(this.onScreenItems);
    });
  }

  _updateLayout() {
    let nextX = 0;
    let nextH = 0;
    // layout items in row
    for (let i = 0; i < this.Items.children.length; i++) {
      const child = this.Items.children[i];
      nextH = Math.max(nextH, getH(child));
      if (this._smooth) {
        child.smooth = { x: [nextX, this._itemTransition] };
      } else {
        child.patch({ x: nextX });
        this._updateTransitionTarget(child, 'x', nextX);
      }
      nextX += child.w;
      if (i < this.Items.children.length - 1) {
        const extraItemSpacing = child.extraItemSpacing || 0;
        nextX += this.itemSpacing + extraItemSpacing;
      }

      if (child.centerInParent) {
        // if the child is another focus manager, check the height of the item container
        const childHeight = (child.Items && child.Items.h) || child.h;
        // only center the child if it is within the bounds of this focus manager
        if (childHeight < this.h) {
          child.y = (this.h - childHeight) / 2;
        }
      }
    }

    const itemChanged = this.Items.h !== nextH || this.Items.w !== nextX;
    this.Items.patch({ h: nextH, w: nextX + (this._totalAddedWidth || 0) });

    if (this.autoResize) {
      this.h = this.Items.h;
      this.w = this.Items.w;
    }

    const lastChild = this.Items.childList.last;
    const endOfLastChild = lastChild ? getX(lastChild) + lastChild.w : 0;
    const scrollOffset = (this.Items.children[this._scrollIndex] || { x: 0 }).x;

    // determine when to stop scrolling right
    if (this.alwaysScroll) {
      this._lastScrollIndex = this.Items.children.length - 1;
    } else if (endOfLastChild > this.w) {
      for (let i = this.Items.children.length - 1; i >= 0; i--) {
        const child = this.Items.children[i];
        const childX = getX(child);
        if (childX + this.w - scrollOffset > endOfLastChild) {
          this._lastScrollIndex = i;
        } else {
          break;
        }
      }
    }
    itemChanged && this.fireAncestors('$itemChanged');
    this.render(this.selected, this.prevSelected);
  }

  set itemPosX(x) {
    this.Items.x = this._itemPosX = x;
  }

  get itemPosX() {
    return this._itemPosX;
  }

  set itemPosY(y) {
    this.Items.y = this._itemPosY = y;
  }

  get itemPosY() {
    return this._itemPosY;
  }

  get _itemsX() {
    return getX(this.Items);
  }

  _isOnScreen(child) {
    if (!child) return false;

    return this._isComponentHorizontallyVisible(child);
  }

  appendItems(items = []) {
    const itemHeight = this.renderHeight;
    this._smooth = false;

    items.forEach(item => {
      item.parentFocus = this.hasFocus();
      item = this.Items.childList.a(item);
      item.h = item.h || itemHeight;
    });
    this.stage.update();
    this._update();
    this._refocus();
  }

  appendItemsAt(items = [], idx) {
    const addIndex = Number.isInteger(idx) ? idx : this.Items.children.length;
    this._smooth = false;
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
      const extraItemSpacing = item.extraItemSpacing || 0;
      this._totalAddedWidth += item.w + this.itemSpacing + extraItemSpacing;
    });

    if (this.selectedIndex >= this._lastAppendedIdx) {
      this._selectedPastAdded = true;
      this._selectedIndex += items.length;
    }

    this._updateLayout();
    this._refocus();
  }

  prependItems(items) {
    this.appendItemsAt(items, 0);
  }

  $itemChanged() {
    this._update();
  }

  _transitionListener() {
    this._smooth = false;
    this.transitionDone();
  }

  // can be overridden
  onScreenEffect() {}

  // can be overridden
  transitionDone() {}
}
