/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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

import NavigationManager from '../NavigationManager';
import * as styles from './Row.styles.js';
import { getX } from '../../utils';

export default class Row extends NavigationManager {
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
      'lazyScroll',
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

    const x = getX(child);
    if (!Number.isFinite(x)) return false;
    const itemsTransitionX = this.getTransitionXTargetValue();
    const rowX = this.core.renderContext.px;
    let itemX = rowX + itemsTransitionX + x;
    let xModifier;

    // This section here takes the difference between a possible target value
    // and subtracts it from the current child x. That value then is subtracted from the initial
    // itemX value calculated on the core renderContext px value to more accurately
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

    let itemsContainerX; // x value for item
    // itemIndex prev index that should be used for value in itemsContainerX
    //this.itemIndex = this.selectedIndex - this.scrollIndex;
    console.log(this.itemIndex);
    if (this.itemIndex < 0 || this.itemIndex === this._firstFocusableIndex()) {
      this.itemIndex = 0;
    }

    console.log(
      `%c selectedIndex: ${this.selectedIndex}, scrollIndex: ${this.scrollIndex} , this.itemIndex: ${this.itemIndex}`,
      'color: #8A2BE2'
    );
    console.log(this.Items.children.length);
    console.log(this.Items.children[0].constructor);
    if (this.Items.children[this.itemIndex]) {
      itemsContainerX = this.Items.children[this.itemIndex].transition('x')
        ? -this.Items.children[this.itemIndex].transition('x').targetValue
        : -this.Items.children[this.itemIndex].x;
    }
    console.log(`%c itemsContainerX: ${itemsContainerX}`, 'color: #8A2BE2');

    return itemsContainerX;
  }

  _render(next, prev) {
    if (this.plinko && prev && prev.selected) {
      next.selectedIndex = this._getIndexOfItemNear(next, prev);
    }

    this._prevLastScrollIndex = this._lastScrollIndex;
    console.log(this._lastScrollIndex);
    let itemsContainerX;
    if (!this.Items.children.length) {
      itemsContainerX = this.itemPosX;
    } else if (this._shouldScroll()) {
      itemsContainerX =
        this.lazyScroll && prev
          ? this._getLazyScrollX(prev)
          : this._getScrollX();
    }

    console.log(
      `%c _render itemsContainerX: ${itemsContainerX}`,
      'color: #FF5E00 '
    );

    if (itemsContainerX !== undefined) {
      this.updatePositionOnAxis(this.Items, itemsContainerX);
    }
    this.onScreenEffect(this.onScreenItems);
  }

  _performRender() {
    this._render(this.selected, this.prevSelected);
  }

  _isOnScreen(child) {
    if (!child) return false;

    return this._isComponentHorizontallyVisible(child);
  }

  // can be overridden
  onScreenEffect() {}

  get itemIndex() {
    return this.selectedIndex - this.scrollIndex;
  }

  // set the itemIndex from Control Row?
  set itemIndex(idx) {
    //console.log(this.itemIndex);
  }

  get _totalAddedWidth() {
    return this._totalAddedLength;
  }

  _getLazyScroll() {
    if (this.alwaysScroll) {
      return false;
    }
    return this._lazyScroll !== undefined
      ? this._lazyScroll
      : this.style.lazyScroll;
  }

  _getNeverScroll() {
    if (this.alwaysScroll || this.lazyScroll) {
      return false;
    }
    return this._neverScroll !== undefined
      ? this._neverScroll
      : this.style.neverScroll;
  }
}
