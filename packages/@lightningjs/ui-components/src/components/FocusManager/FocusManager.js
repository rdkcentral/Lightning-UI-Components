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

/**
 * FocusManager Component
 *
 * Container to set focus on elements with key[Up/Down] or key[Left/Right]
 */
import Base from '../Base';
import {
  getX,
  getY,
  isComponentOnScreen,
  delayForAnimation,
  getShortestDistance
} from '../../utils';

export default class FocusManager extends Base {
  static get __componentName() {
    return 'FocusManager';
  }

  static get tags() {
    return ['Items'];
  }

  static get properties() {
    return ['direction', 'wrapSelected'];
  }

  _construct() {
    super._construct();
    this._selectedIndex = 0;
    this._itemPosX = 0;
    this._itemPosY = 0;
    this.direction = this.direction || 'row';
  }

  _init() {
    this._checkSkipFocus();
  }

  get Items() {
    if (!this.tag('Items')) {
      this.patch({ Items: {} });
    }
    return this._Items;
  }

  _setDirection(direction) {
    const state = {
      none: 'None',
      column: 'Column',
      row: 'Row'
    }[direction];

    if (state) {
      this._setState(state);
    }
    return direction;
  }

  _getItems() {
    return this._Items.children;
  }

  get items() {
    return this.Items.children;
  }

  set items(items) {
    this._resetItems();
    this._selectedIndex = 0;
    this.appendItems(items);
    this._checkSkipFocus();
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

  _resetItems() {
    this.Items.childList.clear();
    this.Items.patch({
      w: 0,
      h: 0,
      x: this.itemPosX,
      y: this.itemPosY
    });
  }

  _appendLazyItem(item) {
    this.appendItems([item]);
  }

  appendItems(items = []) {
    this.Items.childList.a(items);
    this._refocus();
  }

  appendItemsAt(items = [], idx) {
    const addIndex = Number.isInteger(idx) ? idx : this.Items.children.length;
    this.shouldSmooth = false;
    this._lastAppendedIdx = addIndex;

    items.forEach((item, itemIdx) => {
      this.Items.childList.addAt(
        {
          ...item,
          parentFocus: this.hasFocus()
        },
        addIndex + itemIdx
      );
    });

    if (this.selectedIndex >= this._lastAppendedIdx) {
      this._selectedIndex += items.length;
    }

    this.requestUpdate();
    this._refocus();
  }

  prependItems(items) {
    this.appendItemsAt(items, 0);
  }

  removeItemAt(index) {
    this.shouldSmooth = false;
    this.Items.childList.removeAt(index);

    if (
      this.selectedIndex > index ||
      this.selectedIndex === this.Items.children.length
    ) {
      this._selectedIndex--;
    }

    this.requestUpdate();
    this._refocus();
  }

  _checkSkipFocus() {
    // If the first item has skip focus when appended get the next focusable item
    const initialSelection = this.Items.children[this.selectedIndex];
    if (initialSelection && initialSelection.skipFocus) {
      this.selectNext();
    }
  }

  get selected() {
    return this.Items.children[this.selectedIndex];
  }

  get selectedIndex() {
    return this._selectedIndex;
  }

  set selectedIndex(index) {
    this.prevSelected = this.selected;
    if (
      !this.Items.children.length ||
      !this.Items.children[index] ||
      !this.Items.children[index].skipFocus
    ) {
      if (index !== this._selectedIndex) {
        this._selectedIndex = index;
      }
      if (this.selected) {
        this._selectedChange(this.selected, this.prevSelected);
      }
      // Don't call refocus until after a new render in case of a situation like Plinko nav
      // where we don't want to focus the previously selected item and need to get the new one first
      this._refocus();
    }
  }

  _selectedChange(selected, prevSelected) {
    this._render(selected, prevSelected);
    this.signal('selectedChange', selected, prevSelected);
  }

  // Override
  _render() {}

  _firstFocusableIndex() {
    if (!this.items.length) return 0;
    const firstItem = this.items
      .reduce((acc, item, idx) => {
        if (!item.skipFocus) {
          acc.push({ ...item, originalIdx: idx });
        }
        return acc;
      }, [])
      .shift();

    return firstItem.originalIdx;
  }

  _lastFocusableIndex() {
    if (!this.items.length) return 0;
    const lastItem = this.items
      .reduce((acc, item, idx) => {
        if (!item.skipFocus) {
          acc.push({ ...item, originalIdx: idx });
        }
        return acc;
      }, [])
      .pop();

    return lastItem.originalIdx;
  }

  selectPrevious() {
    this.shouldSmooth = true;
    const hasFocusable = !!(this.items || []).filter(i => !i.skipFocus).length;
    if ((this.selectedIndex === 0 && !this.wrapSelected) || !hasFocusable) {
      return false;
    }

    const previousItemIndex = this.items
      .map(item => !!item.skipFocus)
      .lastIndexOf(false, this._selectedIndex - 1);

    if (previousItemIndex > -1) {
      this.selectedIndex = previousItemIndex;
      return true;
    } else if (this.wrapSelected) {
      this.selectedIndex = this._lastFocusableIndex();
      return true;
    }
    return false;
  }

  selectNext() {
    this.shouldSmooth = true;
    if (this._lazyItems && this._lazyItems.length) {
      delayForAnimation(() => {
        this._appendLazyItem(this._lazyItems.splice(0, 1)[0]);
      });
    }
    const hasFocusable = !!(this.items || []).filter(i => !i.skipFocus).length;
    if (
      (this.selectedIndex === this.Items.children.length - 1 &&
        !this.wrapSelected) ||
      !hasFocusable
    ) {
      return false;
    }

    const nextIndex = this.items.findIndex(
      (item, idx) => !item.skipFocus && idx > this._selectedIndex
    );

    if (nextIndex > -1) {
      this.selectedIndex = nextIndex;
      return true;
    } else if (this.wrapSelected) {
      this.selectedIndex = this._firstFocusableIndex();
      return true;
    }
    return false;
  }

  _getIndexOfItemNear(selected, prev) {
    const prevItem = prev.selected;

    if (!selected || !selected.items || !selected.items.length || !prevItem) {
      return 0;
    }

    const [itemX, itemY] = prevItem.core.getAbsoluteCoords(0, 0);
    const prevMiddle = [itemX + prevItem.w / 2, itemY + prevItem.h / 2];

    // Get all item center points from selected
    const selectedCoordArray = selected.items
      .map((item, index) => {
        return {
          index,
          distance: !item.skipFocus
            ? getShortestDistance(prevMiddle, item)
            : null
        };
      })
      .filter(item => {
        // Remove all indexes that don't have a distance (skipFocus)
        return null !== item.distance;
      })
      .sort(function (a, b) {
        return a.distance - b.distance;
      });
    return selectedCoordArray[0].index;
  }

  /**
   * TODO: Update Base to remove the focus/unfocus calls and add a second "BaseComponent" that does have them
   *
   * Layout Components (Column, Row, BoardRows, etc.) would extend only Base,
   *    need to confirm this applies to InlineContnet and ScrollWrapper??
   * Element/Pattern Components (Tile, Badge, etc.) would extend "BaseComponent" that does have focus/unfocus overrides
   */
  _focus() {
    this.items.forEach(item => (item.parentFocus = true));
  }
  _unfocus() {
    this.items.forEach(item => (item.parentFocus = false));
  }

  _getFocused() {
    const { selected } = this;
    // Make sure we're focused on a component
    if (selected) {
      if (selected.focusRef) {
        return selected.tag(selected.focusRef);
      } else if (selected.cparent) {
        return selected;
      }
    }
    return this;
  }

  //called in updatePositionOnAxis in Navigation Manager
  _updateTransitionTarget(element, property, newValue) {
    console.log(
      '%c--- _updateTransitionTarget in Focus Manager',
      'color: #3aed2d'
    );
    if (
      element &&
      element.transition(property) &&
      !element.transition(property).isRunning() &&
      element.transition(property).targetValue !== newValue
    ) {
      console.log(
        `%c targetValue: ${element.transition(property).targetValue}`,
        'color: #3aed2d'
      );
      console.log(
        `%c newValue passed to updateTargetValue: ${newValue}`,
        'color: #3aed2d'
      );

      element.transition(property).updateTargetValue(newValue);
    }
    console.log('%c----- end of _updateTransitionTarget', 'color: #3aed2d ');
  }

  /**
   * Return list of items that are currently fully and partially on screen
   * @returns {Array} Array of matching lng.Component objects or empty array
   */
  get onScreenItems() {
    return this.Items.children.filter(child => this._isOnScreen(child));
  }

  _isOnScreenCompletely(child) {
    // 'isFullyOnScreen' method has been added to the Base class.
    // in case child does _not_ extend Base, 'isComponentOnScreen'
    // from the 'util' module will be invoked. The same method is
    // invoked by Base class
    return child.isFullyOnScreen
      ? child.isFullyOnScreen()
      : isComponentOnScreen(child);
  }

  get fullyOnScreenItems() {
    return this.Items.children.reduce((rv, item) => {
      if (item instanceof FocusManager) {
        return [
          ...rv,
          ...item.Items.children.filter(this._isOnScreenCompletely)
        ];
      } else if (this._isOnScreenCompletely(item)) {
        return [...rv, item];
      } else {
        return rv;
      }
    }, []);
  }

  _isOnScreen() {
    throw new Error("'_isOnScreen' must be implemented by 'row'/'column'");
  }

  _isComponentHorizontallyVisible(child) {
    // get child's destination X; If child is moving to a destination,
    // get the value of where child will end up
    const x = getX(child);
    if (!Number.isFinite(x)) return false;
    // to calculate the target absolute X position of the item, we need to use
    // 1) the entire component's absolute position,
    // 2) the target animation value of the items container, and
    // 3) the target value of the item itself
    const transitionX = this.getTransitionXTargetValue();
    // get absolute position of FocusManager on screen
    const px = this.core.renderContext.px;
    const itemX = px + transitionX + x;

    // _scissor consists of [ left position (x), top position (y), width, height ]
    const [leftBounds = null, , clipWidth = null] = this.core._scissor || [];
    const stageW = this.stage.w / this.stage.getRenderPrecision();
    const { w } = child;

    const withinLeftStageBounds = itemX >= 0;
    const withinRightStageBounds = itemX + w <= stageW;
    // short circuit
    if (!withinLeftStageBounds || !withinRightStageBounds) return false;

    let withinLeftClippingBounds = true;
    let withinRightClippingBounds = true;
    if (Number.isFinite(leftBounds)) {
      withinLeftClippingBounds =
        Math.round(itemX + w) >= Math.round(leftBounds);
      withinRightClippingBounds =
        Math.round(itemX) <= Math.round(leftBounds + clipWidth);
    }

    return withinLeftClippingBounds && withinRightClippingBounds;
  }

  _isComponentVerticallyVisible(child) {
    // get child's destination Y; If child is moving to a destination,
    // get the value of where child will end up
    const y = getY(child);
    if (!Number.isFinite(y)) return false;

    // to calculate the target absolute Y position of the item, we need to use
    // 1) the entire component's absolute position,
    // 2) the target animation value of the items container, and
    // 3) the target value of the item itself
    const transitionY = this.getTransitionYTargetValue();

    // get absolute position of FocusManager on screen
    const py = this.core.renderContext.py;

    // _scissor consists of [ left position (x), top position (y), width, height ]
    const [, topBounds = null, , clipHeight = null] = this.core._scissor || [];
    const { h } = child;

    const itemY = py + transitionY + y;
    const stageH = this.stage.h / this.stage.getRenderPrecision();
    const withinTopStageBounds = itemY + h >= 0;
    const withingBottomStageBounds = itemY <= stageH;

    // short circuit
    if (!withinTopStageBounds || !withingBottomStageBounds) return false;

    let withinTopClippingBounds = true;
    let withinBottomClippingBounds = true;
    if (Number.isFinite(topBounds)) {
      withinTopClippingBounds = Math.round(itemY + h) > Math.round(topBounds);
      withinBottomClippingBounds =
        Math.round(itemY) < Math.round(topBounds + clipHeight);
    }

    return withinTopClippingBounds && withinBottomClippingBounds;
  }

  getTransitionXTargetValue() {
    return this.Items.transition('x').targetValue;
  }

  getTransitionYTargetValue() {
    return this.Items.transition('y').targetValue;
  }

  static _states() {
    return [
      class None extends this {},
      class Row extends this {
        _handleLeft() {
          return this.selectPrevious();
        }

        _handleRight() {
          return this.selectNext();
        }
      },

      class Column extends this {
        _handleUp() {
          return this.selectPrevious();
        }

        _handleDown() {
          return this.selectNext();
        }
      }
    ];
  }
}
