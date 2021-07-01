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
    let state = {
      none: 'None',
      column: 'Column',
      row: 'Row'
    }[direction];

    if (state) {
      this._setState(state);
    }
  }

  get Items() {
    if (!this.tag('Items')) {
      this.patch({ Items: {} });
    }
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
    const prevSelected = this.selected;
    if (
      !this.Items.children.length ||
      !this.Items.children[index] ||
      !this.Items.children[index].skipFocus
    ) {
      if (index !== this._selectedIndex) {
        this._selectedIndex = index;
      }
      if (this.selected) {
        this.render(this.selected, prevSelected);
        this.signal('selectedChange', this.selected, prevSelected);
      }
      // Don't call refocus until after a new render in case of a situation like Plinko nav
      // where we don't want to focus the previously selected item and need to get the new one first
      this._refocus();
    }
  }

  // Override
  render() {}

  selectPrevious() {
    const hasFocusable = !!(this.items || []).filter(i => !i.skipFocus).length;
    if ((this.selectedIndex === 0 && !this.wrapSelected) || !hasFocusable) {
      return false;
    }

    let prevIndex =
      this.selectedIndex === 0
        ? this.Items.children.length - 1
        : this.selectedIndex - 1;
    let previous = this.items[prevIndex];

    while (prevIndex >= 0 && previous && previous.skipFocus) {
      if (prevIndex === 0 && this.wrapSelected) {
        prevIndex = this.Items.children.length - 1;
        previous = this.items[prevIndex];
      } else {
        this._selectedIndex = prevIndex;
        this.render(previous, this.items[prevIndex + 1]);
        if (prevIndex > 0) {
          prevIndex -= 1;
          previous = this.items[prevIndex];
        } else {
          break;
        }
      }
    }
    this.selectedIndex = prevIndex;
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

    let nextIndex =
      this.selectedIndex === this.Items.children.length - 1
        ? 0
        : this.selectedIndex + 1;
    let next = this.items[nextIndex];

    while (nextIndex <= this.items.length - 1 && next && next.skipFocus) {
      if (nextIndex === this.Items.children.length - 1 && this.wrapSelected) {
        nextIndex = 0;
        next = this.items[nextIndex];
      } else {
        this._selectedIndex = nextIndex;
        this.render(next, this.items[nextIndex - 1]);
        if (nextIndex < this.Items.children.length - 1) {
          nextIndex += 1;
          next = this.items[nextIndex];
        } else {
          break;
        }
      }
    }
    this.selectedIndex = nextIndex;
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
    let { selected } = this;
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
