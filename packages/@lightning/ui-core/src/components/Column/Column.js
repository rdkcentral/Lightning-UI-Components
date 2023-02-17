import NavigationManager from '../NavigationManager/index.js';
import { getY, getW } from '../../utils/index.js';
import { withExtensions } from '../../mixins/index.js';
import * as styles from './Column.styles.js';

class Column extends NavigationManager {
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
    return [...super.properties, 'lazyUpCount'];
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
        this.style.itemTransition
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

  get _itemsY() {
    return getY(this.Items);
  }

  appendItems(items = []) {
    const itemWidth = this.renderWidth;
    this.shouldSmooth = false;

    if (items.length > this.lazyUpCount + 2) {
      // +2 is a buffer added for fast scrolling
      // TODO: add bufferCount as a property
      this._lazyItems = items.splice(this.lazyUpCount + 2);
    }

    items.forEach(item => {
      item.parentFocus = this.hasFocus();
      item = this.Items.childList.a(item);
      item.w = getW(item) || itemWidth;
      item = this._withAfterUpdate(item);
    });
    this.stage.update();
    this.queueRequestUpdate();
    this._refocus();
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
}

export default withExtensions(Column);
