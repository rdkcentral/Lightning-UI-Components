/**
 * FocusManager Component
 *
 * Container to set focus on elements with key[Up/Down] or key[Left/Right]
 */
import lng from 'wpe-lightning';

export default class FocusManager extends lng.Component {
  constructor(stage) {
    super(stage);
    this.patch({ Items: {} });
    this._direction = this.direction || 'row';
  }

  _init() {
    this.selectedIndex = this.selectedIndex || 0;
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
    return this.tag('Items');
  }

  get items() {
    return this.Items.children;
  }

  set items(items) {
    this.Items.childList.clear();
    this._selectedIndex = 0;
    this.appendItems(items);
  }

  appendItems(items = []) {
    this.Items.childList.a(items);
    this._refocus();
  }

  get selected() {
    return this.Items.children[this.selectedIndex];
  }

  set selectedIndex(index) {
    let previousIndex = this.selectedIndex;
    let prevSelected = this.selected;
    let direction = index > previousIndex ? 'next' : 'previous';
    let numItems = this.Items.children.length;

    if (index > 0) {
      if (index < numItems) {
        this._selectedIndex = index;
      } else {
        this._selectedIndex = numItems - 1;
      }
    } else {
      this._selectedIndex = 0;
    }

    // Have items update (change height or width) before we render
    this._refocus();

    if (this.selected) {
      let args = [this.selected, prevSelected, direction];
      this.render(...args);
      this.signal('selectedChange', ...args);

      // We still want to signal so rendering can occur
      if (this.selected.skipFocus) {
        index = this.selectedIndex;
        this.selectedIndex = direction === 'next' ? index + 1 : index - 1;
      }
    }
  }

  // Override
  render() {}

  get selectedIndex() {
    return this._selectedIndex || 0;
  }

  selectPrevious() {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
      return true;
    } else if (this.wrapSelected) {
      this.selectedIndex = this.Items.children.length - 1;
      return true;
    }
    return false;
  }

  selectNext() {
    if (this.selectedIndex < this.Items.children.length - 1) {
      this.selectedIndex++;
      return true;
    } else if (this.wrapSelected) {
      this.selectedIndex = 0;
      return true;
    }
    return false;
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
