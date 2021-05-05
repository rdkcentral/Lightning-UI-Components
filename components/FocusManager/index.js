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
/**
 * FocusManager Component
 *
 * Container to set focus on elements with key[Up/Down] or key[Left/Right]
 */
import lng from '@lightningjs/core';

export default class FocusManager extends lng.Component {
  constructor(stage) {
    super(stage);
    this.patch({ Items: {} });
    this._direction = this.direction || 'row';
  }

  _construct() {
    this._selectedIndex = 0;
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

  get selectedIndex() {
    return this._selectedIndex;
  }

  set selectedIndex(index) {
    const prevSelected = this.selected;
    if (index !== this._selectedIndex) {
      this._selectedIndex = index;
    }
    // Have items update (change height or width) before we render
    this._refocus();
    if (this.selected) {
      this.render(this.selected, prevSelected);
      this.signal('selectedChange', this.selected, prevSelected);
    }
  }

  // Override
  render() {}

  selectPrevious() {
    if (this.selectedIndex > 0) {
      let prevIndex = this.selectedIndex - 1;
      let previous = this.items[prevIndex];
      while (prevIndex && previous.skipFocus) {
        this._selectedIndex = prevIndex;
        this.render(previous, this.items[prevIndex + 1]);
        prevIndex -= 1;
        previous = this.items[prevIndex];
      }
      this.selectedIndex = prevIndex;
      return true;
    } else if (this.wrapSelected) {
      this.selectedIndex = this.Items.children.length - 1;
      return true;
    }
    return false;
  }

  selectNext() {
    if (this.selectedIndex < this.Items.children.length - 1) {
      let nextIndex = this.selectedIndex + 1;
      let next = this.items[nextIndex];
      while (nextIndex < this.items.length - 1 && next.skipFocus) {
        this._selectedIndex = nextIndex;
        this.render(next, this.items[nextIndex - 1]);
        nextIndex += 1;
        next = this.items[nextIndex];
      }
      this.selectedIndex = nextIndex;
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
