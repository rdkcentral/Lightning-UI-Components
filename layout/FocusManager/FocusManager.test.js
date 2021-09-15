/**
 * Copyright 2021 Comcast Cable Communications Management, LLC
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

import FocusManager from '.';
import TestUtils from '../../components/lightning-test-utils';
import lng from '@lightningjs/core';

const baseItem = { type: lng.Component };
const createFocusManager = TestUtils.makeCreateComponent(FocusManager, {
  items: [{ ...baseItem }, { ...baseItem }, { ...baseItem }]
});

describe('FocusManager', () => {
  let focusManager, testRenderer;
  beforeEach(() => {
    [focusManager, testRenderer] = createFocusManager();
  });
  afterEach(() => {
    focusManager = null;
    testRenderer = null;
  });
  it('should render', () => {
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should set focus on first item', () => {
    expect(focusManager.selectedIndex).toBe(0);
  });

  it('skips items with skipFocus=true', () => {
    [focusManager, testRenderer] = createFocusManager({
      direction: 'column',
      items: [
        { ...baseItem },
        { ...baseItem, skipFocus: true },
        { ...baseItem }
      ]
    });
    testRenderer.keyPress('Down');
    expect(focusManager.selectedIndex).toBe(2);
    testRenderer.keyPress('Up');
    expect(focusManager.selectedIndex).toBe(0);
  });

  it('looks for focusRef on the selected item', () => {
    [focusManager, testRenderer] = createFocusManager({
      items: [
        {
          ...baseItem,
          Item: { type: lng.Component, title: 'Item' },
          focusRef: 'Item'
        }
      ]
    });

    expect(focusManager._getFocused().title).toEqual('Item');
  });

  it('appends items', () => {
    const { length } = focusManager.items;

    focusManager.appendItems();
    expect(focusManager.items.length).toBe(length);

    focusManager.appendItems([{ ...baseItem }]);
    expect(focusManager.items.length).toBe(length + 1);
  });

  describe('direction column', () => {
    beforeEach(() => {
      [focusManager, testRenderer] = createFocusManager({
        direction: 'column'
      });
    });
    it('should set focus on next item on keyDown', () => {
      testRenderer.keyPress('Down');
      testRenderer.update();

      expect(focusManager.selectedIndex).toBe(1);
    });

    it('should track focus correctly', () => {
      testRenderer.keyPress('Down');
      testRenderer.keyPress('Down');
      testRenderer.keyPress('Up');
      let focusManager = testRenderer.getInstance();
      expect(focusManager.selectedIndex).toBe(1);
    });
  });

  describe('direction row', () => {
    beforeEach(() => {
      [focusManager, testRenderer] = createFocusManager({ direction: 'row' });
    });
    it('should set focus on next item on keyRight', () => {
      testRenderer.keyPress('Right');
      expect(focusManager.selectedIndex).toBe(1);
    });

    it('should not track keyDown', () => {
      testRenderer.keyPress('Down');
      expect(focusManager.selectedIndex).toBe(0);
    });

    it('should track focus correctly', () => {
      testRenderer.keyPress('Right');
      testRenderer.keyPress('Right');
      testRenderer.keyPress('Left');
      expect(focusManager.selectedIndex).toBe(1);
    });
  });

  describe('handling bounds', () => {
    it('should keep selected in bounds via keypress', () => {
      [focusManager, testRenderer] = createFocusManager({ direction: 'row' });

      testRenderer.keyPress('Left');
      expect(focusManager.selectedIndex).toBe(0);

      testRenderer.keyPress('Right');
      testRenderer.keyPress('Right');
      testRenderer.keyPress('Right');
      testRenderer.keyPress('Right');
      expect(focusManager.selectedIndex).toBe(2);
    });
  });

  describe('signals', () => {
    let app;
    beforeEach(() => {
      [focusManager, testRenderer] = createFocusManager({
        direction: 'column',
        signals: {
          selectedChange: 'selectedChangeMock'
        }
      });
      app = testRenderer.getApp();
      app.constructor.prototype.selectedChangeMock = jest.fn();
    });
    it('should signal selectedChange', () => {
      testRenderer.keyPress('Down');
      let previous = focusManager.items[focusManager.selectedIndex - 1];
      expect(app.selectedChangeMock).toHaveBeenCalledWith(
        focusManager.selected,
        previous
      );
    });
    it('should not signal if items are empty', () => {
      focusManager.items = [];
      testRenderer.keyPress('Down');
      expect(testRenderer.selected).toBeUndefined();
      expect(app.selectedChangeMock).not.toBeCalled();
    });
  });
});
