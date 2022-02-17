/**
 * FocusManager Component
 *
 * Container to set focus on elements with key[Up/Down] or key[Left/Right]
 */
import Base from '../../elements/Base';
import { getX, getY } from '../../utils';

export default class FocusManager extends Base {
  static _template() {
    return { Items: {} };
  }

  _construct() {
    super._construct();
    this._selectedIndex = 0;
    this.direction = this.direction || 'row';
  }

  static get tags() {
    return ['Items'];
  }

  static get properties() {
    return ['direction'];
  }

  get Items() {
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
    // If the first item has skip focus when appended get the next focusable item
    const initialSelection = this.Items.children[this.selectedIndex];
    if (initialSelection && initialSelection.skipFocus) {
      this.selectNext();
    }
  }

  _resetItems() {
    this.Items.childList.clear();
    this.Items.patch({ w: 0, h: 0 });
  }

  appendItems(items = []) {
    this.Items.childList.a(items);
    this._refocus();
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
        this.render(this.selected, this.prevSelected);
        this.signal('selectedChange', this.selected, this.prevSelected);
      }
      // Don't call refocus until after a new render in case of a situation like Plinko nav
      // where we don't want to focus the previously selected item and need to get the new one first
      this._refocus();
    }
  }

  // Override
  render() {}

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
    const hasFocusable = !!(this.items || []).filter(i => !i.skipFocus).length;
    if ((this.selectedIndex === 0 && !this.wrapSelected) || !hasFocusable) {
      return false;
    }

    const previousItemIndex = this.items
      .map(item => !!item.skipFocus)
      .lastIndexOf(false, this._selectedIndex - 1);

    if (previousItemIndex > -1) {
      this.selectedIndex = previousItemIndex;
    } else if (this.wrapSelected) {
      this.selectedIndex = this._lastFocusableIndex();
    }
    return true;
  }

  selectNext() {
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
    } else if (this.wrapSelected) {
      this.selectedIndex = this._firstFocusableIndex();
    }
    return true;
  }

  _getIndexOfItemNear(selected, prev) {
    // Euclidean distance
    function distance(xA, yA, xB, yB) {
      const xDiff = xA - xB;
      const yDiff = yA - yB;
      return Math.sqrt(Math.pow(xDiff, 2) + Math.sqrt(Math.pow(yDiff, 2)));
    }

    const prevItem = prev.selected || prev.currentItem;

    if (!selected || !selected.items || !selected.items.length || !prevItem) {
      return 0;
    }

    const prevOffsetX = prev.transition('x').targetValue || 0;
    const prevOffsetY = prev.transition('y').targetValue || 0;
    const [itemX, itemY] = prevItem.core.getAbsoluteCoords(
      -prevOffsetX,
      -prevOffsetY
    );
    const prevMiddle = [itemX + prevItem.w / 2, itemY + prevItem.h / 2];

    // Get all item center points from selected
    const selectedCoordArray = selected.items
      .map((item, index) => {
        let [x, y] = [0, 0];
        if (item.core) {
          [x, y] = item.core.getAbsoluteCoords(0, 0);
        }
        return {
          index,
          distance: !item.skipFocus
            ? distance(
                prevMiddle[0],
                prevMiddle[1],
                x + item.w / 2,
                y + item.h / 2
              )
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
  _focus() {}
  _unfocus() {}

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

  /**
   * Return list of items that are currently fully and partially on screen
   * @returns {Array} Array of matching lng.Component objects or empty array
   */
  get onScreenItems() {
    return this._onScreenItems(false);
  }

  /**
   * Gets list of items that are completely visible on screen.
   * This function will return list of items and not containers (i.e. FocusManager)
   * @returns {Array} Array of matching lng.Component objects or empty array
   */
  get onScreenCompletelyItems() {
    return this._onScreenItems(true);
  }

  _onScreenItems(fullyVisible) {
    return this.Items.children.reduce((res, child) => {
      const isFm = child instanceof FocusManager;
      const withinXBounds = isFm && child.direction === 'column' ? false : true;

      // if current child is of type FocusManager and it is _partially_ on screen,
      // return this child's fully on screen items. This would account for a case,
      // where we have a column that has 2 rows and first row is visible, but second is not
      if (
        isFm &&
        this._isComponentOnScreen(child, {
          withinXBounds,
          withinYBounds: true,
          fullyVisible
        })
      ) {
        const osi = fullyVisible
          ? child.onScreenCompletelyItems
          : child.onScreenItems;
        return [...res, child, ...osi];
      }
      // if child is NOT a FocusManager, return it if it's _fully_ on screen
      else if (
        !isFm &&
        this._isComponentOnScreen(child, {
          withinXBounds: true,
          withinYBounds: true,
          fullyVisible
        })
      ) {
        return [...res, child];
      }
      // return accumulated list of items w/out adding current child to the list
      else {
        return res;
      }
    }, []);
  }

  /**
   * Checks component's visibility
   * @param {lng.Component} child Component to check visibility of
   * @param {boolean} withinXBounds Whether component is visible horizontally
   * @param {boolean} withinYBounds Whether component is visible vertically
   * @param {boolean} fullyVisible Whether component is visible in its entirety on screen
   * @returns True if component is visible; False otherwise
   */
  _isComponentOnScreen(child, { withinXBounds, withinYBounds, fullyVisible }) {
    if (!child) return false;

    if (!withinXBounds && !withinYBounds) {
      return false;
    } else if (withinYBounds && !withinXBounds) {
      return this._isComponentVerticallyVisible(child, fullyVisible);
    } else if (withinXBounds && !withinYBounds) {
      return this._isComponentHorizontallyVisible(child, fullyVisible);
    } else {
      return (
        this._isComponentVerticallyVisible(child, fullyVisible) &&
        this._isComponentHorizontallyVisible(child, fullyVisible)
      );
    }
  }

  _isComponentHorizontallyVisible(child, fullyVisible) {
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

    let isFullyVisible = true;
    if (fullyVisible) {
      const childPx = child.core.renderContext.px;
      isFullyVisible = childPx >= px && childPx + child.w <= px + this.w;
    }

    return (
      withinLeftStageBounds &&
      withinRightStageBounds &&
      withinLeftClippingBounds &&
      withinRightClippingBounds &&
      isFullyVisible
    );
  }

  _isComponentVerticallyVisible(child, fullyVisible) {
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

    let isFullyVisible = true;
    if (fullyVisible) {
      const childPy = child.core.renderContext.py;
      isFullyVisible = childPy >= py && childPy + child.h <= py + this.h;
    }

    return (
      withinTopStageBounds &&
      withingBottomStageBounds &&
      withinTopClippingBounds &&
      withinBottomClippingBounds &&
      isFullyVisible
    );
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
