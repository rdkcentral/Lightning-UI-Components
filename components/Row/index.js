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
export default class Row extends FocusManager {
  static _template() {
    return {
      direction: 'row',
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
    this._w = this.stage.w;
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
        lastChild && (this.shouldScrollLeft() || this.shouldScrollRight());

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
              this.itemTransition
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
        child.smooth = { x: [nextX, this.itemTransition] };
      } else {
        child.patch({ x: nextX });
      }
      nextX += this.itemSpacing + child.w;
    }
    this.patch({ h: nextH });

    const lastChild = this.Items.childList.last;
    const endOfLastChild = lastChild ? getX(lastChild) + lastChild.w : 0;
    const scrollOffset = (this.Items.children[this._scrollIndex] || { x: 0 }).x;

    // determine when to stop scrolling right
    if (endOfLastChild > this.w) {
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
    this.render(this.selected, null);
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
  }

  $itemChanged() {
    this._updateLayout();
  }

  // can be overridden
  onScreenEffect() {}
}
