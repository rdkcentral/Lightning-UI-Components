import FocusManager from '../FocusManager';
import { getX, getH, delayForAnimation } from '../../utils';
import withStyles from '../../mixins/withThemeStyles';
import withExtensions from '../../mixins/withExtensions';
import styles from './Row.styles';

class Row extends FocusManager {
  static get __componentName() {
    return 'Row';
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
      'itemSpacing',
      'scrollIndex',
      'alwaysScroll',
      'neverScroll',
      'lazyScroll',
      'lazyUpCount',
      'autoResizeWidth',
      'autoResizeHeight',
      'startLazyScrollIndex',
      'stopLazyScrollIndex'
    ];
  }

  _construct() {
    super._construct();
    this._smooth = false;
  }

  _init() {
    if (!this.w) {
      // if width is undefined or 0, set the Row's width
      if (
        // if the Row is a child item in a FocusManager (like Column)
        this.parent &&
        this.parent.parent &&
        this.parent.parent instanceof FocusManager &&
        this.parent.parent.w
      ) {
        this.w = this.parent.parent.w;
      } else {
        let parent = this.p;
        while (parent && !parent.w) {
          parent = parent.p;
        }
        this.w =
          (parent && parent.w) ||
          this.stage.h / this.stage.getRenderPrecision();
      }
    }

    this.Items.transition('x').on(
      'finish',
      this._transitionListener.bind(this)
    );

    super._init();
  }

  _update() {
    this._updateLayout();
  }

  _getItemSpacing() {
    return this._itemSpacing !== undefined
      ? this._itemSpacing
      : this._componentStyles.itemSpacing;
  }

  _getScrollIndex() {
    return this._scrollIndex !== undefined
      ? this._scrollIndex
      : this._componentStyles.scrollIndex;
  }

  _getAlwaysScroll() {
    return this._alwaysScroll !== undefined
      ? this._alwaysScroll
      : this._componentStyles.alwaysScroll;
  }

  _getNeverScroll() {
    return this._neverScroll !== undefined
      ? this._neverScroll
      : this._componentStyles.neverScroll;
  }

  get _itemTransition() {
    return this._componentStyles.itemTransition;
  }

  _focus() {
    this.items.forEach(item => (item.parentFocus = true));
  }

  _unfocus() {
    this.items.forEach(item => (item.parentFocus = false));
  }

  selectNext() {
    this._smooth = true;
    if (this._lazyItems && this._lazyItems.length) {
      delayForAnimation(() => {
        this.appendItems(this._lazyItems.splice(0, 1));
      });
    }
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
      shouldScroll = this.selectedIndex >= this.scrollIndex;
    }

    return this._itemsX < 0 && shouldScroll;
  }

  // TODO: can be documented in API when lastScrollIndex is made public
  shouldScrollRight() {
    const lastChild = this.Items.childList.last;
    return (
      this.selectedIndex > this.scrollIndex &&
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
      if (prevIndex === -1) {
        // No matches found in childList, start set x to 0
        return;
      }
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

    if (this.autoResizeWidth) {
      this.w = this.Items.w;
    }
    if (this.autoResizeHeight) {
      this.h = this.Items.h;
    }

    const lastChild = this.Items.childList.last;
    const endOfLastChild = lastChild ? getX(lastChild) + lastChild.w : 0;
    const scrollOffset = (this.Items.children[this.scrollIndex] || { x: 0 }).x;

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

    if (items.length > this.lazyUpCount + 2) {
      this._lazyItems = items.splice(this.lazyUpCount + 2);
    }

    items.forEach(item => {
      item.parentFocus = this.hasFocus();
      item = this.Items.childList.a(item);
      item.h = item.h || itemHeight;
    });
    this.stage.update();
    this._requestUpdateDebounce();
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

    this._update();
    this._refocus();
  }

  prependItems(items) {
    this.appendItemsAt(items, 0);
  }

  removeItemAt(index) {
    this._smooth = false;
    this.Items.childList.removeAt(index);

    if (
      this.selectedIndex > index ||
      this.selectedIndex === this.Items.children.length
    ) {
      this._selectedIndex--;
    }

    this._update();
    this._refocus();
  }

  $itemChanged() {
    this._requestUpdateDebounce();
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

export default withExtensions(withStyles(Row, styles));
