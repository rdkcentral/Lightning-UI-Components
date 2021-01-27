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
import { getY, getW } from '../../utils';

export default class Column extends FocusManager {
  static _template() {
    return {
      direction: 'column',
      itemTransition: {
        duration: 0.4,
        timingFunction: 'cubic-bezier(0.20, 1.00, 0.30, 1.00)'
      }
    };
  }

  _construct() {
    super._construct();
    this._smooth = false;
    this._itemSpacing = 0;
    this._scrollIndex = 0;
    this._whenEnabled = new Promise(resolve => (this._firstEnable = resolve));
    this._h = this.stage.h;
  }

  _init() {
    this._updateLayout();
  }

  _focus() {
    this.items.forEach(item => (item.parentFocus = true));
  }

  _unfocus() {
    this.items.forEach(item => (item.parentFocus = false));
  }

  selectNext() {
    this._smooth = true;
    super.selectNext();
  }

  selectPrevious() {
    this._smooth = true;
    super.selectPrevious();
  }

  // TODO: can be documented in API when lastScrollIndex is made public
  shouldScrollUp() {
    return (
      this._itemsY < 0 &&
      (this._lastScrollIndex
        ? this.selectedIndex < this._lastScrollIndex
        : this.selectedIndex >= this._scrollIndex)
    );
  }

  // TODO: can be documented in API when lastScrollIndex is made public
  shouldScrollDown() {
    const lastChild = this.Items.childList.last;
    return (
      this.selectedIndex > this._scrollIndex &&
      // end of Items container < end of last item
      Math.abs(this._itemsY - this.h) <
        lastChild.y + this.Items.childList.last.h
    );
  }

  render(next, prev) {
    if (this.plinko && prev && (prev.currentItem || prev.selected)) {
      next.selectedIndex = this._getIndexOfItemNear(next, prev);
    }

    this._whenEnabled.then(() => {
      const scrollOffset = (this.Items.children[this._scrollIndex] || { y: 0 })
        .y;
      const lastChild = this.Items.childList.last;
      const shouldScroll =
        lastChild && (this.shouldScrollUp() || this.shouldScrollDown());

      if (shouldScroll) {
        const scrollItem =
          this.selectedIndex > this._lastScrollIndex
            ? this.Items.children[this._lastScrollIndex - this._scrollIndex]
            : this.selected;
        if (this._smooth) {
          this.Items.smooth = {
            y: [
              -scrollItem.transition('y').targetValue +
                (scrollItem === this.selected ? scrollOffset : 0),
              this.itemTransition
            ]
          };
        } else {
          this.Items.patch({
            y: -scrollItem.y + (scrollItem === this.selected ? scrollOffset : 0)
          });
        }
      }

      this.onScreenEffect(
        this.Items.children.filter((child, index) => {
          const y = getY(child);
          const { h } = child;
          const withinLowerBounds = y + h + this._itemsY > 0;
          const withinUpperBounds = y + this._itemsY < this.h;

          return withinLowerBounds && withinUpperBounds;
        })
      );
    });
  }

  _updateLayout() {
    this._whenEnabled.then(() => {
      let nextY = 0;
      let nextW = 0;
      // layout items in row
      for (let i = 0; i < this.Items.children.length; i++) {
        const child = this.Items.children[i];
        nextW = Math.max(nextW, getW(child));
        if (this._smooth) {
          child.smooth = { y: [nextY, this.itemTransition] };
        } else {
          child.patch({ y: nextY });
        }
        nextY += this.itemSpacing + child.h;
      }
      this.patch({ w: nextW });

      const lastChild = this.Items.childList.last;
      const endOfLastChild = lastChild ? getY(lastChild) + lastChild.h : 0;
      const scrollOffset = (this.Items.children[this._scrollIndex] || { y: 0 })
        .y;

      // determine when to stop scrolling down
      if (endOfLastChild > this.h) {
        for (let i = this.Items.children.length - 1; i >= 0; i--) {
          const child = this.Items.children[i];
          const childY = getY(child);
          if (childY + this.h - scrollOffset > endOfLastChild) {
            this._lastScrollIndex = i;
          } else {
            break;
          }
        }
      }
      this.render(this.selected, null);
    });
  }

  // finds the index of the item with the closest middle to the previously selected item
  _getIndexOfItemNear(selected, prev) {
    // edge case
    if (selected.items.length < 2) return 0;

    let prevItem = prev.selected || prev.currentItem;
    let prevOffset = prev.transition('x').targetValue || 0;
    let [itemX] = prevItem.core.getAbsoluteCoords(-prevOffset, 0);
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

  get itemSpacing() {
    return this._itemSpacing;
  }

  set itemSpacing(itemSpacing) {
    if (itemSpacing !== this._itemSpacing) {
      this._itemSpacing = itemSpacing;
      this._updateLayout();
    }
  }

  get scrollIndex() {
    return this._scrollIndex;
  }

  set scrollIndex(scrollIndex) {
    if (scrollIndex !== this._scrollIndex) {
      this._scrollIndex = scrollIndex;
      this._updateLayout();
    }
  }

  get _itemsY() {
    return getY(this.Items);
  }

  appendItems(items = []) {
    let itemWidth = this.renderWidth;

    items.forEach(item => {
      item.parentFocus = this.hasFocus();
      item = this.Items.childList.a(item);
      item.w = getW(item) || itemWidth;
    });
    this.stage.update();
    this._updateLayout();
  }

  scrollTo(index, duration = this.itemTransition.duration * 100) {
    if (duration === 0) this.selectedIndex = index;

    for (let i = 0; i !== Math.abs(this.selectedIndex - index); i++) {
      setTimeout(() => {
        this.selectedIndex > index ? this.selectPrevious() : this.selectNext();
      }, duration * i);
    }
    this.Items.transition('y').on('finish', () => (this._smooth = false));
  }

  $itemChanged() {
    this._updateLayout();
  }

  $removeItem(item) {
    if (item) {
      let wasSelected = item === this.selected;
      this.Items.childList.remove(item);
      this._updateLayout();

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
    this._updateLayout();
  }

  // can be overridden
  onScreenEffect() {}
}
