/**
 * Copyright 2020 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

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

  get onScreenItems() {
    return this.Items.children.filter(child => this._isOnScreen(child));
  }

  _isOnScreen(child) {
    const x = getX(child);
    const { w } = child;
    const withinLowerBounds = x + w + this._itemsX > 0;
    const withinUpperBounds = x + this._itemsX < this.w;
    return withinLowerBounds && withinUpperBounds;
  }

  _isOnScreenCompletely(child) {
    let itemX = child.core.renderContext.px;
    let rowX = this.core.renderContext.px;
    return itemX >= rowX && itemX + child.w <= rowX + this.w;
  }

  _shouldScroll() {
    const lastChild = this.Items.childList.last;
    let shouldScroll = this.alwaysScroll;
    if (!shouldScroll) {
      if (this.lazyScroll) {
        shouldScroll = !this._isOnScreenCompletely(this.selected);
      } else {
        shouldScroll =
          lastChild &&
          (this.shouldScrollLeft() ||
            this.shouldScrollRight() ||
            !this._isOnScreenCompletely(this.selected));
      }
    }
    return shouldScroll;
  }

  _getLazyScrollX(prev) {
    let itemsContainerX;
    const prevIndex = this.Items.childList.getIndex(prev);
    if (prevIndex > this.selectedIndex) {
      itemsContainerX = -this.selected.x;
    } else if (prevIndex < this.selectedIndex) {
      itemsContainerX = this.w - this.selected.x - this.selected.w;
    }
    return itemsContainerX;
  }

  _getScrollX() {
    let itemsContainerX;
    let itemIndex = this.selectedIndex - this.scrollIndex;
    itemIndex = itemIndex < 0 ? 0 : itemIndex;
    if (this.Items.children[itemIndex]) {
      itemsContainerX = this.Items.children[itemIndex].transition('x')
        ? -this.Items.children[itemIndex].transition('x').targetValue
        : -this.Items.children[itemIndex].x;
    }
    return itemsContainerX;
  }

  render(next, prev) {
    this._whenEnabled.then(() => {
      this._prevLastScrollIndex = this._lastScrollIndex;

      if (this._shouldScroll()) {
        const itemsContainerX =
          this.lazyScroll && prev
            ? this._getLazyScrollX(prev)
            : this._getScrollX();
        if (itemsContainerX !== undefined) {
          if (this._smooth) {
            this.Items.smooth = {
              x: [itemsContainerX, this._itemTransition]
            };
          } else {
            this.Items.x = itemsContainerX;
          }
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
