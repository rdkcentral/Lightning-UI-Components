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

import FocusManager from '.';
import { makeCreateComponent } from '@lightningjs/ui-components-test-utils';
import lng from '@lightningjs/core';
import Base from '../Base/Base';
import { jest } from '@jest/globals';

const baseItem = { type: Base };
const createFocusManager = makeCreateComponent(FocusManager, {
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
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should set focus on first item', () => {
    expect(focusManager.selectedIndex).toBe(0);
  });

  fit('should set the zIndex of the selectedIndex to selectedZIndex', () => {
    [focusManager, testRenderer] = createFocusManager({
      direction: 'column',
      items: [{ ...baseItem }, { ...baseItem }]
    });
    expect(focusManager.selectedIndex).toBe(0);
    testRenderer.keyPress('Down');
    expect(focusManager.selectedIndex).toBe(1);

    expect(focusManager.items[0].zIndex).toBe(focusManager.defaultZIndex);
    expect(focusManager.items[1].zIndex).toBe(focusManager.selectedZIndex);

    testRenderer.keyPress('Up');
    expect(focusManager.selectedIndex).toBe(0);

    expect(focusManager.items[0].zIndex).toBe(focusManager.selectedZIndex);
    expect(focusManager.items[1].zIndex).toBe(focusManager.defaultZIndex);
  });

  describe('adding items to the template', () => {
    const testTask = 'add items to the template';
    it(`should ${testTask} via the items property`, () => {
      expect(focusManager._Items.children.length).toBe(3);
    });
    it(`should ${testTask} via setting an Items ref in the initial render tree`, () => {
      class TestComp extends FocusManager {
        static _template() {
          return {
            Items: {
              ItemA: baseItem,
              ItemB: baseItem
            }
          };
        }
      }
      const createTestComp = makeCreateComponent(TestComp);
      const [testComp] = createTestComp();

      expect(testComp.children.length).toBe(1);
      expect(testComp._Items.children.length).toBe(2);
    });
    it(`should ${testTask} via patching Items to the template`, () => {
      class TestComp extends FocusManager {
        _construct() {
          super._construct();
          this.patch({
            Items: {
              ItemA: baseItem,
              ItemB: baseItem
            }
          });
        }
      }
      const createTestComp = makeCreateComponent(TestComp);
      const [testComp] = createTestComp();

      expect(testComp.children.length).toBe(1);
      expect(testComp._Items.children.length).toBe(2);
    });
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

  it('should skip items defined in the initial render tree with skipFocus=true', () => {
    class TestComp extends FocusManager {
      _construct() {
        super._construct();
        this.patch({
          direction: 'column',
          Items: {
            ItemA: baseItem,
            ItemB: { ...baseItem, skipFocus: true },
            ItemC: baseItem
          }
        });
      }
    }
    const createTestComp = makeCreateComponent(TestComp);
    const [testComp, testRenderer] = createTestComp();

    expect(testComp.selectedIndex).toBe(0);

    testRenderer.keyPress('Down');

    expect(testComp.selectedIndex).toBe(2);

    testRenderer.keyPress('Up');

    expect(testComp.selectedIndex).toBe(0);
  });

  describe('when skipFocus is set on an item', () => {
    const skipItem = { ...baseItem, skipFocus: true };
    it('should focus on the first item that is not skip focus when items are patched to the Items tag', () => {
      class TestComp extends FocusManager {
        _construct() {
          super._construct();
          this.patch({
            Items: {
              ItemB: skipItem,
              ItemA: baseItem,
              ItemC: baseItem
            }
          });
        }
      }
      const createTestComp = makeCreateComponent(TestComp);
      const [testComp] = createTestComp();

      expect(testComp.selectedIndex).toBe(1);
    });

    it('should focus on the first item that is not skip focus when items are set via the items property', () => {
      class TestComp extends FocusManager {
        _construct() {
          super._construct();
          this.patch({
            items: [{ ...baseItem, skipFocus: true }, baseItem, baseItem]
          });
        }
      }
      const createTestComp = makeCreateComponent(TestComp);
      const [testComp] = createTestComp();
      testComp.items = [skipItem, baseItem, baseItem];
      expect(testComp.selectedIndex).toBe(1);

      testComp.patch({ items: [skipItem, skipItem, baseItem, baseItem] });
      expect(testComp.selectedIndex).toBe(2);
    });
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

  it('resets the Items container when a new item array is patched in', () => {
    const pos = 100;
    focusManager.itemPosX = pos;
    focusManager.itemPosY = pos;
    expect(focusManager.Items.x).toBe(pos);
    expect(focusManager.Items.y).toBe(pos);

    const _resetItems = jest.spyOn(focusManager, '_resetItems');
    focusManager.items = [];

    expect(_resetItems).toHaveBeenCalled();
    expect(focusManager.Items.w).toBe(0);
    expect(focusManager.Items.h).toBe(0);
    expect(focusManager.Items.x).toBe(pos);
    expect(focusManager.Items.y).toBe(pos);
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
      const focusManager = testRenderer.getInstance();
      expect(focusManager.selectedIndex).toBe(1);
    });

    it('should accept a custom onUp', () => {
      focusManager.onUp = jest.fn();
      testRenderer.keyPress('Up');
      expect(focusManager.onUp).toHaveBeenCalled();
    });

    it('should accept a custom onDown', () => {
      focusManager.onDown = jest.fn();
      testRenderer.keyPress('Down');
      expect(focusManager.onDown).toHaveBeenCalled();
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

    it('should accept a custom onLeft', () => {
      focusManager.onLeft = jest.fn();
      testRenderer.keyPress('Left');
      expect(focusManager.onLeft).toHaveBeenCalled();
    });

    it('should accept a custom onRight', () => {
      focusManager.onRight = jest.fn();
      testRenderer.keyPress('Right');
      expect(focusManager.onRight).toHaveBeenCalled();
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
      const previous = focusManager.items[focusManager.selectedIndex - 1];
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
