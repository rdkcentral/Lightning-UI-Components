/**
 * FocusManager Component
 *
 * Container to set focus on elements with key[Up/Down] or key[Left/Right]
 */
import lng from '@lightningjs/core';

export default class FocusManager extends lng.Component {
  static _template() {
    return { Items: {} };
  }

  _construct() {
    this._selectedIndex = 0;
    this.direction = this.direction || 'row';
  }

  get direction() {
    return this._direction;
  }

  set direction(direction) {
    this._direction = direction;
    const state = {
      none: 'None',
      column: 'Column',
      row: 'Row'
    }[direction];

    if (state) {
      this._setState(state);
    }
  }

  get Items() {
    return this.tag('Items');
  }

  get items() {
    return this.Items.children;
  }

  set items(items) {
    this.Items.childList.clear();
    this._selectedIndex = 0;
    this.appendItems(items);
    // If the first item has skip focus when appended get the next focusable item
    const initialSelection = this.Items.children[this.selectedIndex];
    if (initialSelection && initialSelection.skipFocus) {
      this.selectNext();
    }
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
        const [x, y] = item.core.getAbsoluteCoords(0, 0);
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
