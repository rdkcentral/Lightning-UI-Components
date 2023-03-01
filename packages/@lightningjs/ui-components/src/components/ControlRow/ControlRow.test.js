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

import { makeCreateComponent } from '@lightningjs/ui-components-test-utils';
import Tile from '../Tile';
import lightningLogo from '../../assets/images/ic_lightning_white_32.png';
import ControlRow from '.';
import { jest } from '@jest/globals';

const createItem = (props = {}) => ({
  type: Tile,
  itemLayout: {
    ratioX: 16,
    ratioY: 9,
    upCount: 4
  },
  ...props
});

const createItems = length => {
  return Array.from({ length }).map(() => createItem());
};

const createControl = (props = {}) => ({
  logo: lightningLogo,
  ...props
});

const createControls = length => {
  return Array.from({ length }).map(() => createControl());
};

const leftControls = createControls(2);
const rightControls = createControls(2);
const items = createItems(2);

const createComponent = makeCreateComponent(ControlRow);

describe('ControlRow', () => {
  let controlRow, testRenderer;

  beforeEach(() => {
    [controlRow, testRenderer] = createComponent({
      contentItems: items
    });
  });

  it('renders', () => {
    [controlRow, testRenderer] = createComponent({
      title: 'Title',
      leftControls,
      contentItems: items,
      rightControls
    });
    testRenderer.forceAllUpdates();
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  describe('updating the content in a row', () => {
    it('should add controls and items to the row', () => {
      [controlRow, testRenderer] = createComponent({ leftControls });
      testRenderer.forceAllUpdates();
      expect(controlRow.items.length).toBe(leftControls.length);
      expect(controlRow._getLeftControlItems().length).toBe(
        leftControls.length
      );

      controlRow.contentItems = items;
      testRenderer.forceAllUpdates();
      expect(controlRow.items.length).toBe(leftControls.length + items.length);
      expect(controlRow._getContentItemItems().length).toBe(items.length);

      controlRow.rightControls = rightControls;
      testRenderer.forceAllUpdates();
      expect(controlRow.items.length).toBe(
        leftControls.length + items.length + rightControls.length
      );
      expect(controlRow._getRightControlItems().length).toBe(
        rightControls.length
      );
    });

    it('should add controls and items to the row via the ComponentList setter', () => {
      [controlRow, testRenderer] = createComponent({});

      controlRow.leftControls = leftControls;
      testRenderer.forceAllUpdates();
      expect(controlRow.items.length).toBe(leftControls.length);
      expect(controlRow._getLeftControlItems().length).toBe(
        leftControls.length
      );

      controlRow.contentItems = items;
      testRenderer.forceAllUpdates();
      expect(controlRow.items.length).toBe(leftControls.length + items.length);
      expect(controlRow._getContentItemItems().length).toBe(items.length);

      controlRow.rightControls = rightControls;
      testRenderer.forceAllUpdates();
      expect(controlRow.items.length).toBe(
        leftControls.length + items.length + rightControls.length
      );
      expect(controlRow._getRightControlItems().length).toBe(
        rightControls.length
      );
    });

    it('should add extra space between controls and and items', () => {
      controlRow.leftControls = leftControls;
      controlRow.contentItems = items;
      controlRow.rightControls = rightControls;
      testRenderer.forceAllUpdates();
      const spacing = controlRow.style.extraItemSpacing;
      expect(controlRow.items[0].extraItemSpacing).toBeUndefined();
      expect(controlRow.items[1].extraItemSpacing).toBe(spacing);
      expect(controlRow.items[2].extraItemSpacing).toBeUndefined();
      expect(controlRow.items[3].extraItemSpacing).toBe(spacing);
      expect(controlRow.items[4].extraItemSpacing).toBeUndefined();
      expect(controlRow.items[5].extraItemSpacing).toBeUndefined();
    });

    it('should allow overwriting extra item spacing space between controls and and items', () => {
      const spacing = 3;
      controlRow.extraItemSpacing = spacing;
      controlRow.leftControls = leftControls;
      controlRow.contentItems = items;
      controlRow.rightControls = rightControls;
      testRenderer.forceAllUpdates();
      expect(controlRow.items[0].extraItemSpacing).toBeUndefined();
      expect(controlRow.items[1].extraItemSpacing).toBe(spacing);
      expect(controlRow.items[2].extraItemSpacing).toBeUndefined();
      expect(controlRow.items[3].extraItemSpacing).toBe(spacing);
      expect(controlRow.items[4].extraItemSpacing).toBeUndefined();
      expect(controlRow.items[5].extraItemSpacing).toBeUndefined();
    });

    it('should default the selected item to the first item', () => {
      controlRow.leftControls = leftControls;
      controlRow.contentItems = items;
      controlRow.rightControls = rightControls;
      testRenderer.forceAllUpdates();
      expect(controlRow.selectedIndex).toBe(controlRow.leftControls.length);
    });

    it('should allow setting the selected index', () => {
      controlRow.leftControls = leftControls;
      controlRow.contentItems = items;
      controlRow.rightControls = rightControls;
      controlRow.selectedIndex = 0;
      testRenderer.forceAllUpdates();
      expect(controlRow.selectedIndex).toBe(0);
    });
  });

  describe('add - adding to ControlRow', () => {
    beforeEach(() => {
      controlRow.leftControls = leftControls;
      controlRow.contentItems = items;
      controlRow.rightControls = rightControls;

      testRenderer.forceAllUpdates();
      expect(controlRow.selectedIndex).toBe(2);
    });

    describe('left controls', () => {
      it('should persist the selected item when an item is added before the selected item index', () => {
        controlRow.addLeftControls(leftControls);
        expect(controlRow.selectedIndex).toBe(4);
      });
      it('should persist the selected item when an item is added at the selected item index', () => {
        controlRow.selectedIndex = 1;
        controlRow.addLeftControls(leftControls);
        expect(controlRow.selectedIndex).toBe(1);
      });
      it('should persist the selected item when an item is added after the selected item index', () => {
        controlRow.selectedIndex = 0;
        testRenderer.forceAllUpdates();
        controlRow.addLeftControls(leftControls);
        expect(controlRow.selectedIndex).toBe(0);
      });
    });

    describe('right controls', () => {
      it('should persist the selected item when an item is added before the selected item index', () => {
        controlRow.addRightControls(rightControls);
        expect(controlRow.selectedIndex).toBe(2);
      });
    });

    describe('content items', () => {
      it('should persist the selected item when an item is added at selected item index', () => {
        controlRow.addContentItems(items);
        expect(controlRow.selectedIndex).toBe(2);
      });
      it('should persist the selected item when an item is added after the selected item index', () => {
        controlRow.selectedIndex = 1;
        controlRow.addContentItems(items);
        expect(controlRow.selectedIndex).toBe(1);
      });
    });
  });

  describe('addAt - adding at a specified index to ControlRow', () => {
    beforeEach(() => {
      controlRow.leftControls = createControls(3);
      controlRow.contentItems = createItems(3);
      controlRow.rightControls = createControls(3);
      testRenderer.forceAllUpdates();
    });

    const controlId = 'newControl';
    const itemId = 'newItem';
    const newControl = createControl({ testId: controlId });
    const newItem = createItem({ testId: itemId });

    describe('left controls', () => {
      it('should add a control to the end of the left controls', () => {
        controlRow.addLeftControlsAt([newControl], 3);
        expect(controlRow.items[3].testId).toBe(controlId);
        expect(controlRow.leftControls.length).toBe(4);
      });
      it('should add a control at a specific index', () => {
        controlRow.addLeftControlsAt([newControl], 2);
        expect(controlRow.items[2].testId).toBe(controlId);
        expect(controlRow.leftControls.length).toBe(4);
      });
    });

    describe('right controls', () => {
      it('should add a control to the end of the right controls', () => {
        controlRow.addRightControlsAt([newControl], 3);
        expect(controlRow.items[9].testId).toBe(controlId);
        expect(controlRow.rightControls.length).toBe(4);
      });
      it('should add a control at a specific index', () => {
        controlRow.addRightControlsAt([newControl], 2);
        expect(controlRow.items[8].testId).toBe(controlId);
        expect(controlRow.rightControls.length).toBe(4);
      });
    });

    describe('content items', () => {
      let initialRowItemsLength;
      beforeEach(() => {
        initialRowItemsLength = controlRow.items.length;
      });
      it('should add an item to the end of the items', () => {
        controlRow.addContentItemsAt([newItem], 3);
        expect(controlRow.items[6].testId).toBe(itemId);
        expect(controlRow.contentItems.length).toBe(4);
        expect(controlRow.items.length).toBe(initialRowItemsLength + 1);
      });
      it('should add an item at a specific index', () => {
        controlRow.addContentItemsAt([newItem], 2);
        expect(controlRow.items[5].testId).toBe(itemId);
        expect(controlRow.contentItems.length).toBe(4);
        expect(controlRow.items.length).toBe(initialRowItemsLength + 1);
      });
    });
  });

  describe('removeAt - removing an item or control from ControlRow', () => {
    beforeEach(() => {
      controlRow.leftControls = createControls(3);
      controlRow.contentItems = createItems(3);
      controlRow.rightControls = createControls(3);
      testRenderer.forceAllUpdates();
    });

    describe('left controls', () => {
      it('should remove a control', () => {
        controlRow.removeLeftControlAt(2);
        expect(controlRow.leftControls.length).toBe(2);
      });
    });

    describe('right controls', () => {
      it('should remove a control', () => {
        controlRow.removeRightControlAt(2);
        expect(controlRow.rightControls.length).toBe(2);
      });
    });

    describe('content items', () => {
      let initialRowItemsLength;
      let initialContentItemsLength;
      beforeEach(() => {
        initialRowItemsLength = controlRow.items.length;
        initialContentItemsLength = controlRow._getContentItemItems().length;
      });
      it('should remove an item', () => {
        controlRow.removeContentItemAt(2);
        expect(controlRow._getContentItemItems().length).toBe(
          initialContentItemsLength - 1
        );
        expect(controlRow.items.length).toBe(initialRowItemsLength - 1);
      });
    });
  });

  describe('signaling to the consumer to load more items', () => {
    let signalSpy;
    beforeEach(() => {
      jest.clearAllMocks();
      signalSpy = jest.spyOn(controlRow, 'signal');
      controlRow.contentItems = createItems(6);
      controlRow.lazyLoadBuffer = 2;
    });
    it('should signal if an item is selected at or after the load more index', () => {
      controlRow.selectedIndex = 1;
      expect(signalSpy).not.toHaveBeenCalledWith('loadMoreItems');

      controlRow.selectNext();
      expect(signalSpy).not.toHaveBeenCalledWith('loadMoreItems');

      controlRow.selectNext();
      expect(signalSpy).toHaveBeenCalledWith('loadMoreItems');
      signalSpy.mockClear();

      expect(signalSpy).not.toHaveBeenCalledWith('loadMoreItems');
      controlRow.selectNext();
      expect(signalSpy).toHaveBeenCalledWith('loadMoreItems');
    });

    it('should not signal when a control is selected', () => {
      controlRow.selectedIndex = 0;
      expect(signalSpy).not.toHaveBeenCalledWith('loadMoreItems');

      controlRow.selectPrevious();
      expect(signalSpy).not.toHaveBeenCalledWith('loadMoreItems');

      controlRow.selectedIndex = 6;
      controlRow.selectNext();
      expect(signalSpy).not.toHaveBeenCalledWith('loadMoreItems');
    });

    it('should not signal when a lazy scroll buffer has not been set', () => {
      controlRow.lazyLoadBuffer = undefined;
      controlRow.selectedIndex = 3;
      expect(signalSpy).not.toHaveBeenCalledWith('loadMoreItems');

      controlRow.selectNext();
      expect(signalSpy).not.toHaveBeenCalledWith('loadMoreItems');
    });
  });
});
