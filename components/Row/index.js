import FocusManager from '../FocusManager';
import { getX, getH } from '../../utils';
import { debounce } from 'debounce';
export default class Row extends FocusManager {
  static _template() {
    return {
      direction: 'row'
    };
  }

  _construct() {
    super._construct();
    this._smooth = false;
    this._itemSpacing = 0;
    this._scrollIndex = 0;
    this._whenEnabled = new Promise(resolve => (this._firstEnable = resolve));
    this._w = this.stage.w;
    this.debounceDelay = Number.isInteger(this.debounceDelay)
      ? this.debounceDelay
      : 1;
    this._update = debounce(this._updateLayout, this.debounceDelay);
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
    return (
      this._itemsX < 0 &&
      (this._lastScrollIndex
        ? this.selectedIndex < this._lastScrollIndex
        : this.selectedIndex >= this._scrollIndex)
    );
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

  render() {
    this._whenEnabled.then(() => {
      const scrollOffset = (this.Items.children[this._scrollIndex] || { x: 0 })
        .x;
      const lastChild = this.Items.childList.last;
      const shouldScroll =
        this.alwaysScroll ||
        (lastChild && (this.shouldScrollLeft() || this.shouldScrollRight()));

      if (shouldScroll) {
        const scrollItem =
          this.selectedIndex > this._lastScrollIndex
            ? this.Items.children[this._lastScrollIndex - this._scrollIndex]
            : this.selected;
        if (this._smooth) {
          this.Items.smooth = {
            x: [
              -scrollItem.transition('x').targetValue +
                (scrollItem === this.selected ? scrollOffset : 0),
              this._itemTransition
            ]
          };
        } else {
          this.Items.patch({
            x: -scrollItem.x + (scrollItem === this.selected ? scrollOffset : 0)
          });
        }
      }

      this.onScreenEffect(
        this.Items.children.filter((child, idx) => {
          const x = getX(child);
          const { w } = child;
          const withinLowerBounds = x + w + this._itemsX > 0;
          const withinUpperBounds = x + this._itemsX < this.w;
          return withinLowerBounds && withinUpperBounds;
        })
      );
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
      }
      nextX += child.w;
      if (i < this.Items.children.length - 1) {
        nextX += this.itemSpacing;
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
    this.Items.patch({ h: nextH, w: nextX });

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
    this.fireAncestors('$itemChanged');
    this.render(this.selected, null);
  }

  get itemSpacing() {
    return this._itemSpacing;
  }

  set itemSpacing(itemSpacing) {
    if (itemSpacing !== this._itemSpacing) {
      this._itemSpacing = itemSpacing;
      this._update();
    }
  }

  get scrollIndex() {
    return this._scrollIndex;
  }

  set scrollIndex(scrollIndex) {
    if (scrollIndex !== this._scrollIndex) {
      this._scrollIndex = scrollIndex;
      this._update();
    }
  }

  get _itemsX() {
    return getX(this.Items);
  }

  appendItems(items = []) {
    let itemHeight = this.renderHeight;

    items.forEach(item => {
      item.parentFocus = this.hasFocus();
      item = this.Items.childList.a(item);
      item.h = item.h || itemHeight;
    });
    this.stage.update();
    this._updateLayout();
    this._update.clear();
    this._refocus();
  }

  $itemChanged() {
    this._update();
  }

  // can be overridden
  onScreenEffect() {}
}
