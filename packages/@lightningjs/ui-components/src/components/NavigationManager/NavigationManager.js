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

import FocusManager from '../FocusManager';
import { getX, getY, getH, getW, max } from '../../utils';
import * as styles from './NavigationManager.styles';

const directionPropNames = {
  row: {
    axis: 'x',
    crossAxis: 'y',
    lengthDimension: 'w',
    crossDimension: 'h',
    innerCrossDimension: 'innerH'
  },
  column: {
    axis: 'y',
    crossAxis: 'x',
    lengthDimension: 'h',
    crossDimension: 'w',
    innerCrossDimension: 'innerW'
  }
};

export default class NavigationManager extends FocusManager {
  static get __componentName() {
    return 'NavigationManager';
  }

  static get __themeStyle() {
    return styles;
  }

  static get properties() {
    return [
      ...super.properties,
      'alwaysScroll',
      'neverScroll',
      'scrollIndex',
      'autoResizeWidth',
      'autoResizeHeight',
      'lazyUpCount',
      'lazyUpCountBuffer'
    ];
  }

  _construct() {
    super._construct();
    this.shouldSmooth = false;
    this._lazyUpCountBuffer = 2;
  }

  _init() {
    const { lengthDimension, axis } = this._directionPropNames;

    if (!this[lengthDimension]) {
      this._initComponentSize();
    }

    this.Items.transition(axis).on(
      'finish',
      this._transitionListener.bind(this)
    );

    super._init();
  }

  _initComponentSize() {
    const { lengthDimension } = this._directionPropNames;
    if (
      this?.parent.parent instanceof NavigationManager &&
      this?.parent.parent[lengthDimension]
    ) {
      // component is a child item in a NavigationManager (or subclass of NavigationManager)
      this[lengthDimension] = this.parent.parent[lengthDimension];
    } else {
      // find closest parent in render tree with lengthDimension property set(w for Row, h for Column)
      let parent = this.parent;
      while (parent && !parent[lengthDimension]) {
        parent = parent.parent;
      }
      this[lengthDimension] =
        (parent && parent[lengthDimension]) ||
        this.stage.h / this.stage.getRenderPrecision();
    }
  }

  _update() {
    this._updateLayout();
  }

  _updateLayout() {
    const { lengthDimension, crossDimension, crossAxis, innerCrossDimension } =
      this._directionPropNames;
    let nextPosition = 0;
    let maxCrossDimensionSize = 0;
    let maxInnerCrossDimensionSize = 0;
    const childrenToCenter = [];

    for (let i = 0; i < this.Items.children.length; i++) {
      const child = this.Items.children[i];
      const childCrossDimensionSize = this._calcCrossDimensionSize(child);
      maxCrossDimensionSize = max(
        maxCrossDimensionSize,
        childCrossDimensionSize
      );
      maxInnerCrossDimensionSize = max(
        maxInnerCrossDimensionSize,
        child[innerCrossDimension] || 0
      );

      this.updatePositionOnAxis(child, nextPosition);

      nextPosition += child[lengthDimension];

      if (i < this.Items.children.length - 1) {
        const extraItemSpacing = child.extraItemSpacing || 0;
        nextPosition += this.style.itemSpacing + extraItemSpacing;
      }

      if (child.centerInParent) {
        // if the child is another NavigationManager, check the cross dimension size of the item container
        const childCrossDimensionSize =
          (child.Items && child.Items[crossDimension]) || child[crossDimension];
        // only center the child if it is within the bounds of this NavigationManager
        // center based off innerCrossDimension in cases where elements with
        // innerCrossDimension exist in Items (ex. Tile with metadata)
        if (
          childCrossDimensionSize < this[crossDimension] ||
          !this.Items[innerCrossDimension]
        ) {
          childrenToCenter.push({ childIdx: i, childCrossDimensionSize });
        }
      } else {
        child[crossAxis] = 0;
      }
    }

    const itemChanged =
      this.Items[crossDimension] !== maxCrossDimensionSize ||
      this.Items[lengthDimension] !== nextPosition;

    this.Items.patch({
      [crossDimension]: maxCrossDimensionSize,
      [innerCrossDimension]:
        maxInnerCrossDimensionSize || maxCrossDimensionSize,
      [lengthDimension]: nextPosition + (this._totalAddedWidth || 0)
    });

    this._autoResize();
    this._centerItemsInParent(childrenToCenter);
    this._updateLastScrollIndex();

    if (itemChanged) {
      this._performRender();
      this.fireAncestors('$itemChanged');
    }
  }

  _centerItemsInParent(items) {
    const { crossDimension, crossAxis, innerCrossDimension } =
      this._directionPropNames;
    if (items.length) {
      const sizes = [
        this.Items[crossDimension],
        this.Items[innerCrossDimension]
      ];
      // If a subclass of NavigationManager only contains a row or column of items:
      // then also consider the h or w of that component when centering items .
      // Subclasses that add other components outside of the Items array (ex. TitleRow)
      // likely increase the h or w of the component and centering should be with respect to only the Items element.
      if (this.children.length === 1) {
        sizes.push(this[crossDimension]);
      }

      const crossDimensionSize = Math.max(...sizes);
      items.forEach(({ childIdx, childCrossDimensionSize }) => {
        this.Items.children[childIdx][crossAxis] =
          (crossDimensionSize - childCrossDimensionSize) / 2;
      });
    }
  }

  _autoResize() {
    if (this.autoResizeWidth) {
      this.w = this.Items.w;
    }
    if (this.autoResizeHeight) {
      this.h = this.Items.h;
    }
  }

  _updateLastScrollIndex() {
    const { axis, lengthDimension } = this._directionPropNames;
    if (this.alwaysScroll) {
      this._lastScrollIndex = this.Items.children.length - 1;
      return;
    }

    const scrollOffset = (this.Items.children[this.scrollIndex] || {
      [axis]: 0
    })[axis];
    const lastChild = this.Items.childList.last;
    const endOfLastChild = lastChild
      ? this._calcAxisPosition(lastChild) + lastChild[lengthDimension]
      : 0;
    if (endOfLastChild > this[lengthDimension]) {
      let lastScrollIndex;
      for (let i = this.Items.children.length - 1; i >= 0; i--) {
        const childPosition = this._calcAxisPosition(this.Items.children[i]);
        const canScrollToChild =
          childPosition + this[lengthDimension] - scrollOffset > endOfLastChild;
        if (canScrollToChild) {
          lastScrollIndex = i;
        } else {
          break;
        }
      }
      this._lastScrollIndex = lastScrollIndex;
      return;
    }

    // TODO: This conditional originated in Column (prior to NavigationManager refactor).
    //  What scenario would this ever be true?
    //  Add a comment to describe it when that is identified.
    if (this._lastScrollIndex > this.items.length) {
      this._lastScrollIndex = this.items.length - 1;
    }
  }

  _calcCrossDimensionSize(comp) {
    if (this._isRow) {
      return getH(comp);
    }

    if (this._isColumn) {
      return getW(comp);
    }
  }

  _calcAxisPosition(comp) {
    if (this._isRow) {
      return getX(comp);
    }

    if (this._isColumn) {
      return getY(comp);
    }
  }

  _transitionListener() {
    this.shouldSmooth = false;
    this.transitionDone();
  }

  _withAfterUpdate(component) {
    component.onAfterUpdate = function (element) {
      let hasChanged = false;
      const watchProps = ['w', 'h', 'x', 'y', 'innerW', 'innerH'];

      watchProps.forEach(prop => {
        const prevValueKey = `_navItemPrev${prop}`;
        if (!hasChanged && element[prop] !== element[prevValueKey]) {
          element[prevValueKey] = element[prop];
          hasChanged = true;
        }
      });

      if (hasChanged) {
        this.queueRequestUpdate();
      }
    }.bind(this);

    return component;
  }

  // can be overwritten
  _performRender() {}

  $itemChanged() {
    this.queueRequestUpdate();
  }

  appendItems(items = []) {
    const { crossDimension } = this._directionPropNames;
    const itemCrossSize = this._isRow ? this.renderHeight : this.renderWidth;
    this.shouldSmooth = false;

    if (items.length > this.lazyUpCount + this.lazyUpCountBuffer) {
      this._lazyItems = items.splice(this.lazyUpCount + this.lazyUpCountBuffer);
    }
    const a = {
      crossDimension,
      'item[crossDimension]': [],
      itemCrossSize: [],
      result: []
    };
    items.forEach(item => {
      item.parentFocus = this.hasFocus();
      item = this.Items.childList.a(item);
      a.itemCrossSize.push(item[crossDimension]);
      item[crossDimension] = item[crossDimension] || itemCrossSize;

      a['item[crossDimension]'].push(item[crossDimension]);
      a.result.push(item[crossDimension]);

      item = this._withAfterUpdate(item);
    });

    this.stage.update();
    this.queueRequestUpdate();
    this._refocus();
  }

  updatePositionOnAxis(item, position) {
    const { axis } = this._directionPropNames;
    this.applySmooth(
      item,
      { [axis]: position },
      { [axis]: [position, this.style.itemTransition] }
    );

    if (!this.shouldSmooth) {
      this._updateTransitionTarget(item, axis, position);
    }
  }

  scrollTo(index, duration = this.style.itemTransition.duration * 100) {
    if (index == undefined) {
      return;
    }

    if (duration === 0) {
      this.selectedIndex = index;
      return;
    }

    for (let i = 0; i !== Math.abs(this.selectedIndex - index); i++) {
      setTimeout(() => {
        this.selectedIndex > index ? this.selectPrevious() : this.selectNext();
      }, duration * i);
    }
  }

  // can be overridden
  transitionDone() {}

  shouldScrollLeft() {
    return this._isRow && this._canScrollBack;
  }

  shouldScrollRight() {
    return this._isRow && this._canScrollNext;
  }

  shouldScrollUp() {
    return this._isColumn && this._canScrollBack;
  }

  shouldScrollDown() {
    return this._isColumn && this._canScrollNext;
  }

  get _directionPropNames() {
    return directionPropNames[this.direction];
  }

  get _canScrollBack() {
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

    const itemsStartCoord = this._isRow ? this._itemsX : this._itemsY;
    return itemsStartCoord < 0 && shouldScroll;
  }

  get _canScrollNext() {
    const { axis, lengthDimension } = this._directionPropNames;
    const lastChild = this.Items.childList.last;
    let endOfItemsPosition;

    if (this._isRow) {
      endOfItemsPosition = Math.abs(this._itemsX - this.w);
    }
    if (this._isColumn) {
      endOfItemsPosition = Math.abs(this.itemPosY - this.h);
    }

    return (
      this.selectedIndex > this.scrollIndex &&
      // end of Items container < end of last item
      endOfItemsPosition < lastChild[axis] + lastChild[lengthDimension]
    );
  }

  get _isColumn() {
    return this.direction === 'column';
  }

  get _isRow() {
    return this.direction === 'row';
  }

  get _itemsX() {
    return getX(this.Items);
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

  _setScrollIndex(index) {
    return index >= 0 ? index : 0;
  }

  _getScrollIndex() {
    return this._scrollIndex !== undefined
      ? this._scrollIndex
      : this.style.scrollIndex;
  }
}
