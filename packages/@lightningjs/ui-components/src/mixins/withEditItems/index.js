/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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

export default function (Base) {
  return class extends Base {
    _init() {
      super._init();
      this.isEditing = false;
    }

    toggleEdit() {
      this.isEditing = !this.isEditing;
    }

    _swapItemArrayPos(array, current, previous) {
      [array[current], array[previous]] = [array[previous], array[current]];
      super.selectedIndex = current;
    }

    _unfocus() {
      this.isEditing = false;
      super._unfocus();
    }

    _selectedChange(selected, prevSelected) {
      if (this.isEditing) return;
      this._render(selected, prevSelected);
      this.signal('selectedChange', selected, prevSelected);
    }

    get selectedIndex() {
      return super.selectedIndex;
    }

    set selectedIndex(index) {
      if (!this.isEditing) {
        super.selectedIndex = index;
        return;
      }

      if (
        this.selectedIndex >= this.items.length - 1 &&
        index > this.selectedIndex
      ) {
        return;
      }

      const currentItem = this.selected;
      this.prevSelected = currentItem;
      const nextItem = this.items[index];
      const previousIndex = this.selectedIndex;

      const getPositionValue = (item, axis) =>
        item.transition(axis) ? item.transition(axis).targetValue : item[axis];
      const oldPos = {
        x: getPositionValue(currentItem, 'x'),
        y: getPositionValue(currentItem, 'y')
      };
      const newPos = {
        x: getPositionValue(nextItem, 'x'),
        y: getPositionValue(nextItem, 'y')
      };

      this._swapItemArrayPos(this.items, index, previousIndex);
      currentItem.setSmooth('x', newPos.x);
      currentItem.setSmooth('y', newPos.y);
      nextItem.setSmooth('x', oldPos.x);
      nextItem.setSmooth('y', oldPos.y);

      const waitForTransition = (item, axis) =>
        new Promise(resolve => item._getTransition(axis).on('finish', resolve));

      (async () => {
        await Promise.all([
          waitForTransition(currentItem, 'x'),
          waitForTransition(currentItem, 'y'),
          waitForTransition(nextItem, 'x'),
          waitForTransition(nextItem, 'y')
        ]);

        if (
          !this.Items.children.length ||
          !this.Items.children[index]?.skipFocus
        ) {
          this._selectedIndex = index;
          this._render(this.selected, this.prevSelected);
          this.signal('selectedChange', this.selected, this.prevSelected);
          this._refocus();
        }
      })();
    }
  };
}
