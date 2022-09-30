import FocusManager from '../FocusManager';
import { getY, getW, delayForAnimation } from '../../utils';
import { withExtensions } from '../../mixins';
import * as styles from './Column.styles';

class Column extends FocusManager {
  static get __componentName() {
    return 'Column';
  }

  static get __themeStyle() {
    return styles;
  }

  static _template() {
    return {
      ...super._template(),
      direction: 'column'
    };
  }

  static get properties() {
    return [
      ...super.properties,
      'itemSpacing',
      'scrollIndex',
      'alwaysScroll',
      'lazyUpCount',
      'neverScroll',
      'autoResizeWidth',
      'autoResizeHeight'
    ];
  }

  // TODO: withUpdates will set the _itemSpacing property the first time the getter runs. Using accessor to ensure theme updates are applied. May need to update withUpdates to not modify the underscore property
  get _calculatedItemSpacing() {
    return this.itemSpacing || this.style.itemSpacing;
  }

  _construct() {
    super._construct();
    this.shouldSmooth = false;
  }

  _init() {
    if (!this.h) {
      // if height is undefined or 0, set the Columns's height
      if (
        // if the Column is a child item in a FocusManager (like Row)
        this.parent &&
        this.parent.parent &&
        this.parent.parent instanceof FocusManager &&
        this.parent.parent.h
      ) {
        this.h = this.parent.parent.h;
      } else {
        let parent = this.p;
        while (parent && !parent.h) {
          parent = parent.p;
        }
        this.h =
          (parent && parent.h) ||
          this.stage.h / this.stage.getRenderPrecision();
      }
    }

    this.Items.transition('y').on(
      'finish',
      this._transitionListener.bind(this)
    );

    super._init();
  }

  _update() {
    this._updateLayout();
  }

  _getScrollIndex() {
    return this._scrollIndex !== undefined
      ? this._scrollIndex
      : this.style.scrollIndex;
  }

  _getAlwaysScroll() {
    return this._alwaysScroll !== undefined
      ? this._alwaysScroll
      : this.style.alwaysScroll;
  }

  _getNeverScroll() {
    return this._neverScroll !== undefined
      ? this._neverScroll
      : this.style.neverScroll;
  }

  get _itemTransition() {
    return this.style.itemTransition;
  }

  _focus() {
    this.items.forEach(item => (item.parentFocus = true));
  }

  _unfocus() {
    this.items.forEach(item => (item.parentFocus = false));
  }

  selectNext() {
    this.shouldSmooth = true;
    if (this._lazyItems && this._lazyItems.length) {
      delayForAnimation(() => {
        this.appendItems(this._lazyItems.splice(0, 1));
      });
    }
    return super.selectNext();
  }

  selectPrevious() {
    this.shouldSmooth = true;
    return super.selectPrevious();
  }

  _shouldScroll() {
    let shouldScroll = this.alwaysScroll;
    if (!shouldScroll && !this.neverScroll) {
      const lastChild = this.Items.childList.last;
      shouldScroll =
        lastChild && (this.shouldScrollUp() || this.shouldScrollDown());
    }
    return shouldScroll;
  }

  // TODO: can be documented in API when lastScrollIndex is made public
  shouldScrollUp() {
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

    return this._itemsY < 0 && shouldScroll;
  }

  // TODO: can be documented in API when lastScrollIndex is made public
  shouldScrollDown() {
    const lastChild = this.Items.childList.last;
    return (
      this.selectedIndex > this.scrollIndex &&
      // end of Items container < end of last item
      Math.abs(this.itemPosY - this.h) < lastChild.y + lastChild.h
    );
  }

  render(next, prev) {
    this._prevLastScrollIndex = this._lastScrollIndex;

    if (
      this.plinko &&
      prev &&
      prev.selected &&
      !(this.items.indexOf(prev) === 0 && prev.skipPlinko)
    ) {
      const prevPlinko = this.checkSkipPlinko(prev, next);
      next.selectedIndex = this._getIndexOfItemNear(next, prevPlinko || prev);
    } else if (next && !next.selectedIndex) {
      next.selectedIndex = 0;
    }

    this._performRender();
  }

  checkSkipPlinko(prev, next) {
    // If previous doesn't have skip plinko or previous is the first or last item
    if (
      !prev ||
      !prev.skipPlinko ||
      [0, this.items.length - 1].includes(this.items.indexOf(prev))
    ) {
      return null;
    }

    const prevIndex = this.items.indexOf(prev);
    const direction = prevIndex - this.items.indexOf(next);
    const up = direction > 0;

    // Grab all items below prev if up or all items before prev if down
    const prevItems = up
      ? this.items.slice(prevIndex).map(i => ({
          skipPlinko: i.skipPlinko,
          index: this.items.indexOf(i)
        }))
      : this.items
          .slice(0, prevIndex + 1)
          .map(i => ({
            skipPlinko: i.skipPlinko,
            index: this.items.indexOf(i)
          }))
          .reverse();

    // first item that has skipPlinko but the previous does not
    // Start at the index prev
    const endOfMultiSkipPlinkos = prevItems.find(
      i => i.skipPlinko && !this.items[i.index + direction].skipPlinko
    );
    const prevPlinkoIndex = endOfMultiSkipPlinkos
      ? endOfMultiSkipPlinkos.index + direction
      : prevIndex + direction; // +/- 1, item index before prev

    return this.items[prevPlinkoIndex];
  }

  _performRender() {
    if (!this.Items.children.length) {
      this.applySmooth(this.Items, { y: this.itemPosY });
      if (!this.shouldSmooth) {
        this._updateTransitionTarget(this.Items, 'y', this.itemPosY);
      }
    } else if (this._shouldScroll()) {
      let scrollItem =
        this.selectedIndex > this._lastScrollIndex
          ? this.Items.children[this._lastScrollIndex - this.scrollIndex]
          : this.selected;
      if (this.Items.children[this._firstFocusableIndex()] === scrollItem) {
        scrollItem = this.Items.children[0];
      }
      const scrollOffset = (this.Items.children[this.scrollIndex] || { y: 0 })
        .y;
      const smoothObj = [
        -(scrollItem || this.Items.childList.first).transition('y')
          .targetValue + (scrollItem === this.selected ? scrollOffset : 0),
        this._itemTransition
      ];
      const scrollTarget =
        -scrollItem.y + (scrollItem === this.selected ? scrollOffset : 0);
      this.applySmooth(
        this.Items,
        {
          y: scrollTarget
        },
        {
          y: smoothObj
        }
      );
      if (!this.shouldSmooth) {
        this._updateTransitionTarget(this.Items, 'y', scrollTarget);
      }
    }

    this.onScreenEffect(this.onScreenItems);
  }

  _updateLayout() {
    let nextY = 0;
    let nextW = 0;
    let maxInnerW = 0;
    const childrenToCenter = [];
    // layout items in row
    for (let i = 0; i < this.Items.children.length; i++) {
      const child = this.Items.children[i];
      nextW = Math.max(nextW, getW(child));
      maxInnerW = Math.max(maxInnerW, child.innerW || 0);
      this.applySmooth(
        child,
        { y: nextY },
        { y: [nextY, this._itemTransition] }
      );
      if (!this.shouldSmooth) {
        this._updateTransitionTarget(child, 'y', nextY);
      }
      nextY += child.h;
      if (i < this.Items.children.length - 1) {
        const extraItemSpacing = child.extraItemSpacing || 0;
        nextY += this._calculatedItemSpacing + extraItemSpacing;
      }

      if (child.centerInParent) {
        // if the child is another focus manager, check the width of the item container
        const childWidth = (child.Items && child.Items.w) || child.w;
        // only center the child if it is within the bounds of this focus manager
        // center based off innerW in cases where elements with innerW exist in Items (ex. Tile with metadata)
        if (childWidth < this.Items.innerW) {
          childrenToCenter.push({ childIdx: i, childWidth });
        }
      } else {
        child.x = 0;
      }
    }

    const itemChanged = this.Items.w !== nextW || this.Items.h !== nextY;
    this.Items.patch({
      w: nextW,
      h: nextY,
      innerW: maxInnerW || nextW
    });

    if (childrenToCenter.length) {
      childrenToCenter.forEach(({ childIdx, childWidth }) => {
        if (childWidth < this.Items.innerW) {
          this.Items.children[childIdx].x =
            (this.Items.innerW - childWidth) / 2;
        }
      });
    }

    if (this.autoResizeWidth) {
      this.w = this.Items.w;
    }
    if (this.autoResizeHeight) {
      this.h = this.Items.h;
    }

    const lastChild = this.Items.childList.last;
    const endOfLastChild = lastChild ? getY(lastChild) + lastChild.h : 0;
    const scrollOffset = (this.Items.children[this.scrollIndex] || { y: 0 }).y;

    // determine when to stop scrolling down
    if (this.alwaysScroll) {
      this._lastScrollIndex = this.Items.children.length - 1;
    } else if (endOfLastChild > this.h) {
      for (let i = this.Items.children.length - 1; i >= 0; i--) {
        const child = this.Items.children[i];
        const childY = getY(child);
        if (childY + this.h - scrollOffset > endOfLastChild) {
          this._lastScrollIndex = i;
        } else {
          break;
        }
      }
    } else if (this._lastScrollIndex > this.items.length) {
      this._lastScrollIndex = this.items.length - 1;
    }

    itemChanged && this.fireAncestors('$itemChanged');
    this._performRender();
  }

  get _itemsY() {
    return getY(this.Items);
  }

  appendItems(items = []) {
    const itemWidth = this.renderWidth;
    this.shouldSmooth = false;

    if (items.length > this.lazyUpCount + 2) {
      this._lazyItems = items.splice(this.lazyUpCount + 2);
    }

    items.forEach(item => {
      item.parentFocus = this.hasFocus();
      item = this.Items.childList.a(item);
      item.w = getW(item) || itemWidth;
    });
    this.stage.update();
    this.queueRequestUpdate();
    this._refocus();
  }

  scrollTo(index, duration = this._itemTransition.duration * 100) {
    if (index !== undefined) {
      if (duration === 0) {
        this.selectedIndex = index;
        return;
      }

      for (let i = 0; i !== Math.abs(this.selectedIndex - index); i++) {
        setTimeout(() => {
          this.selectedIndex > index
            ? this.selectPrevious()
            : this.selectNext();
        }, duration * i);
      }
    }
  }

  _transitionListener() {
    this.shouldSmooth = false;
    this.transitionDone();
  }

  $itemChanged() {
    this.queueRequestUpdate();
  }

  $removeItem(item) {
    if (item) {
      const wasSelected = item === this.selected;
      this.Items.childList.remove(item);
      this.queueRequestUpdate();

      if (wasSelected || this.selectedIndex >= this.items.length) {
        // eslint-disable-next-line no-self-assign
        this.selectedIndex = this._selectedIndex;
      }

      if (!this.items.length) {
        this.fireAncestors('$columnEmpty');
      }
    }
  }

  $columnChanged() {
    this.queueRequestUpdate();
  }

  _isOnScreen(child) {
    if (!child) return false;

    return this._isComponentVerticallyVisible(child);
  }

  // can be overridden
  onScreenEffect() {}

  // can be overridden
  transitionDone() {}
}

export default withExtensions(Column);
