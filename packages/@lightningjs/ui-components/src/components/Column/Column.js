﻿/**
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
import { getY } from '../../utils';
import * as styles from './Column.styles.js';

export default class Column extends NavigationManager {
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

  _shouldScroll() {
    let shouldScroll = this.alwaysScroll;
    if (!shouldScroll && !this.neverScroll) {
      const lastChild = this.Items.childList.last;
      shouldScroll =
        lastChild && (this.shouldScrollUp() || this.shouldScrollDown());
    }

    if (this.selectedIndex < this.scrollIndex) {
      shouldScroll = false;
    }

    return shouldScroll;
  }

  _render(next, prev) {
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
          .targetValue +
          (scrollItem === this.selected ? scrollOffset : 0) +
          this.itemPosY,
        this.style.itemTransition
      ];
      const scrollTarget =
        -scrollItem.y + (scrollItem === this.selected ? scrollOffset : 0);
      this.applySmooth(this.Items, { y: scrollTarget }, { y: smoothObj });
      if (!this.shouldSmooth) {
        this._updateTransitionTarget(this.Items, 'y', scrollTarget);
      }
    }

    this.onScreenEffect(this.onScreenItems);
  }

  _performRender() {
    this._render(this.selected, this.prevSelected);
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

  get _itemsY() {
    return getY(this.Items);
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
