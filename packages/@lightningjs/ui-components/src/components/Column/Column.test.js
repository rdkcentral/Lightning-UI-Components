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

import Column from '.';
import Row from '../Row';
import lng from '@lightningjs/core';
import { withThemeStyles } from '../../mixins';
import {
  completeAnimation,
  nextTick,
  makeCreateComponent,
  TestRenderer
} from '@lightningjs/ui-components-test-utils';
import { jest } from '@jest/globals';

const baseItem = {
  type: lng.Component,
  w: 80,
  h: 80
};

const items = [
  { ...baseItem },
  { ...baseItem },
  { ...baseItem },
  { ...baseItem },
  { ...baseItem }
];

const baseRow = {
  type: Row,
  h: 80,
  debounceDelay: 0,
  items
};

const skipPlinkoRow = {
  type: Row,
  h: 80,
  skipPlinko: true,
  debounceDelay: 0,
  items: [{ type: lng.Component, w: 400, h: 80 }]
};

const rows = [
  { ...baseRow },
  { ...baseRow },
  { ...baseRow },
  { ...baseRow },
  { ...baseRow }
];

const properties = {
  h: 600,
  items: rows,
  debounceDelay: 1,
  style: { itemSpacing: 20 }
};

const Component = {
  Component: {
    type: Column,
    ...properties
  }
};

const createColumn = makeCreateComponent(Column, properties);
const createStyledColumn = makeCreateComponent(
  withThemeStyles(Column, {
    itemTransition: {
      duration: 0.001
    }
  }),
  properties
);

describe('Column', () => {
  let column, testRenderer;

  beforeEach(async () => {
    [column, testRenderer] = createColumn();
  });

  it('should render', async () => {
    let resolvePromise;
    const waitForEnable = new Promise(resolve => (resolvePromise = resolve));
    const awaitComponent = {
      Component: {
        ...Component.Component,
        type: class extends Column {
          _enable() {
            if (super.enable) super.enable();
            resolvePromise();
          }
        }
      }
    };
    testRenderer = TestRenderer.create(awaitComponent);
    await waitForEnable;
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should set focus on first item', () => {
    expect(column.items[0].hasFocus()).toBe(true);
  });

  it('should return false on keyUp', () => {
    expect(column._handleUp()).toBe(false);
  });

  it('should set focus on next item on keyDown', () => {
    testRenderer.keyPress('Down');
    expect(column.items[1].hasFocus()).toBe(true);
  });

  //**  Items Spacing Tests  *//

  describe('itemSpacing', () => {
    it('should support adding additional spacing to an item', async () => {
      const extraItemSpacing = 50;
      const items = [baseItem, { ...baseItem, extraItemSpacing }, baseItem];
      const [column] = createColumn(
        {
          h: 600,
          items
        },
        {
          spyOnMethods: ['_update']
        }
      );

      await column.__updateSpyPromise;
      const itemH = column.items[0].h;
      expect(column.items[1].y).toBe(itemH + column.style.itemSpacing);
      expect(column.items[2].y).toBe(
        itemH * 2 + column.style.itemSpacing * 2 + extraItemSpacing
      );
    });
  });

  //**  auto Resize Tests  *//
  describe('autoResize', () => {
    it('resizes width', () => {
      const [column, testRenderer] = createColumn({
        autoResizeWidth: true,
        w: 400
      });
      expect(column.Items.w).toBe(400);
      expect(column.w).toBe(column.Items.w);
      column.appendItems([
        {
          type: lng.Component,
          w: 600,
          h: 80
        }
      ]);
      testRenderer.forceAllUpdates();
      expect(column.Items.w).toBe(600);
      expect(column.w).toBe(column.Items.w);
    });

    it('resizes height', () => {
      const [column, testRenderer] = createColumn({
        autoResizeHeight: true
      });
      expect(column.Items.h).toBe(480);
      expect(column.h).toBe(column.Items.h);
      column.appendItems([
        {
          type: lng.Component,
          w: 80,
          h: 80
        }
      ]);
      testRenderer.forceAllUpdates();
      expect(column.Items.h).toBe(580);
      expect(column.h).toBe(column.Items.h);
    });
  });

  //**  Append and Prepend Items Tests  *//

  describe('appendItems', () => {
    it('has works with no items', () => {
      const { length } = column.items;
      column.appendItems();
      expect(column.items.length).toBe(length);
    });

    it('defaults item width to column width', () => {
      const item = { ...baseItem };
      delete item.w;

      column.appendItems([item]);
      expect(column.items[column.items.length - 1].w).toBe(column.w);
    });
  });

  describe('appendItemsAt', () => {
    let initialLength;
    const items = [
      {
        ...baseItem,
        testId: 'A'
      },
      {
        ...baseItem,
        testId: 'B'
      }
    ];

    beforeEach(() => {
      initialLength = column.items.length;
    });

    it('should add items at the specified index', () => {
      column.appendItemsAt(items, 1);

      expect(column.items.length).toBe(initialLength + items.length);
      expect(column.items[1].testId).toBe(items[0].testId);
      expect(column.items[2].testId).toBe(items[1].testId);
    });

    it('should append items to the end of the column if an index is not specified', () => {
      column.appendItemsAt(items);

      expect(column.items.length).toBe(initialLength + items.length);
      expect(column.items[column.items.length - 2].testId).toBe(
        items[0].testId
      );
      expect(column.items[column.items.length - 1].testId).toBe(
        items[1].testId
      );
    });

    it('should not add items when none are passed to the method', () => {
      column.appendItemsAt();
      expect(column.items.length).toBe(initialLength);
    });
  });

  describe('prependItems', () => {
    it('should prepend items to the column', () => {
      const initialLength = column.items.length;
      const items = [
        {
          ...baseItem,
          testId: 'A'
        },
        {
          ...baseItem,
          testId: 'B'
        }
      ];
      column.prependItems(items);

      expect(column.items.length).toBe(initialLength + items.length);
      expect(column.items[0].testId).toBe(items[0].testId);
      expect(column.items[1].testId).toBe(items[1].testId);
    });
  });

  //**  Remove Item At Tests  *//

  describe('removeItemAt', () => {
    beforeEach(() => {
      column.items = [
        {
          ...baseItem,
          testId: 'A'
        },
        {
          ...baseItem,
          testId: 'B'
        },
        {
          ...baseItem,
          testId: 'C'
        }
      ];
    });

    it('should remove an item from the column', () => {
      column.removeItemAt(1);
      expect(column.items.length).toBe(2);
    });

    it('should maintain which item is selected after removing an item', () => {
      column.selectedIndex = 2;
      expect(column.selected.testId).toBe('C');
      column.removeItemAt(1);
      expect(column.selectedIndex).toBe(1);
      expect(column.selected.testId).toBe('C');
    });

    it('should select the next item after a selected item has been removed', () => {
      column.selectedIndex = 1;
      column.removeItemAt(1);
      expect(column.selectedIndex).toBe(1);
      expect(column.selected.testId).toBe('C');
    });
  });

  //**  Listener Tests  *//

  describe('listeners', () => {
    describe('$removeItem', () => {
      it('removes an item', () => {
        const item = column.items[1];
        column.$removeItem(item);
        expect(column.items.length).toBe(4);
      });

      it('removes selected item', () => {
        const { selectedIndex } = column;
        const item = column.items[selectedIndex];
        column.$removeItem(item);
        expect(column.items.length).toBe(4);
        expect(column.selectedIndex).toBe(selectedIndex);
      });

      it('shifts selected index if necessary', async () => {
        [column, testRenderer] = createColumn(properties, {
          spyOnMethods: ['_update']
        });
        await column.__updateSpyPromise;
        expect(column.items.map(({ y }) => y)).toEqual([0, 100, 200, 300, 400]);

        const item = column.items[1];
        column.selectedIndex = 2;
        column.$removeItem(item);
        await column.__updateSpyPromise; // wait for all _updateMethods to complete after removing the item

        // the item that was at index 2 was removed, shift the items after it up to fill in the empty space where it was
        expect(column.items.map(({ y }) => y)).toEqual([0, 100, 200, 300]);
      });

      it('fires $columnEmpty event', () => {
        const spy = jest.spyOn(column, 'fireAncestors');
        column.items = [{ ...baseItem }];
        column.$removeItem(column.items[0]);
        expect(spy).toBeCalledWith('$columnEmpty');
      });

      it('handles empty item', () => {
        const updateImmediateSpy = jest.spyOn(column, '_update');
        column.$removeItem();
        expect(updateImmediateSpy).not.toHaveBeenCalled();
      });
    });
  });

  //**  Focus  Tests  *//

  describe('_focus', () => {
    it('focuses column', () => {
      column._focus();
      expect(column.items.every(item => item.parentFocus)).toEqual(true);
    });
  });

  describe('_unfocus', () => {
    it('unfocuses column', () => {
      column._unfocus();
      expect(column.items.every(item => item.parentFocus)).toEqual(false);
    });
  });

  //**  Scrolling Tests  *//

  describe('scrolling', () => {
    describe('with plinko false', () => {
      it('should NOT set selected item for item based on previous item', () => {
        const item = column.items[0];
        column.plinko = false;
        item.selectedIndex = 3;
        testRenderer.update();
        testRenderer.keyPress('Down');
        expect(column.items[1].selectedIndex).toBe(0);
      });

      it('should reset the Items y position when there are no items', () => {
        column.itemPosY = 100;
        column.items = [];
        testRenderer.update();
        testRenderer.keyPress('Down');
        expect(column._Items.y).toBe(100);
      });
    });

    describe('with plinko true', () => {
      beforeEach(() => {
        column.plinko = true;
      });

      it('should set selected item for item based on previous item', () => {
        const item = column.items[0];
        item.selectedIndex = 3;
        testRenderer.update();
        testRenderer.keyPress('Down');
        expect(column.items[1].selectedIndex).toBe(3);
      });

      it('should select first item if there is only one', () => {
        const row = column.items[1];
        row.items = [{ ...baseItem }];
        testRenderer.update();
        testRenderer.keyPress('Down');
        expect(row.selectedIndex).toBe(0);
      });
    });

    describe('with column height > items', () => {
      beforeEach(async () => {
        [column, testRenderer] = createColumn(
          { items: items.concat(items) },
          { spyOnMethods: ['_update'] }
        );
        await column.__updateSpyPromise;
        expect(column._Items.y).toBe(0);
      });

      it('should not scroll', () => {
        const [item] = column.items;
        testRenderer.keyPress('Down');
        testRenderer.keyPress('Down');
        testRenderer.keyPress('Down');
        expect(item.y).toBe(0);
      });
    });

    describe('with column height < items', () => {
      beforeEach(async () => {
        [column, testRenderer] = createColumn(
          {
            h: 400
          },
          { spyOnMethods: ['_update'] }
        );

        expect(column._Items.y).toBe(0);
      });

      describe('and scrollIndex = 0', () => {
        it('should scroll down', async () => {
          testRenderer.keyPress('Down');
          await completeAnimation(column._Items, 'y');
          expect(column._Items.y).toBe(-100);
        });

        it('should scroll up', async () => {
          testRenderer.keyPress('Down');
          await completeAnimation(column._Items, 'y');
          expect(column._Items.y).toBe(-100);

          testRenderer.keyPress('Up');
          await completeAnimation(column._Items, 'y');
          expect(column._Items.y).toBe(0);
        });
      });

      describe('and scrollIndex = 2', () => {
        beforeEach(async () => {
          [column, testRenderer] = createColumn(
            {
              items: items.concat(items),
              scrollIndex: 2,
              h: 400
            },
            { spyOnMethods: ['_update'] }
          );
          await column.__updateSpyPromise;

          expect(column.scrollIndex).toBe(2);
          expect(column.items.length).toBe(10);
        });

        it('should render correctly', () => {
          expect(column.items[0].y).toBe(0);
          expect(column.items[1].h).toBe(80);
        });

        it('should not scroll until past the mid point', () => {
          const [item] = column.items;
          expect(item.y).toBe(0);
        });

        it('should scroll down', async () => {
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          await completeAnimation(column._Items, 'y');
          expect(column._Items.y).toBe(-column.items[1].y);
        });

        it('should scroll up', async () => {
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          await completeAnimation(column._Items, 'y');
          expect(column._Items.y).toBe(-100);
          testRenderer.keyPress('Up');
          await completeAnimation(column._Items, 'y');
          expect(column._Items.y).toBe(0);
        });

        it('should keep a full screen of items', async () => {
          const item = column.items[1];
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          await completeAnimation(column._Items, 'y');
          expect(column._Items.y + column.h).toBeGreaterThan(item.y);
        });

        it('should keep a full screen of items when at bottom', async () => {
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          await completeAnimation(column._Items, 'y');
          expect(column._Items.y).toBe(-600);
        });
      });

      describe('and scrollIndex = 4', () => {
        beforeEach(async () => {
          [column, testRenderer] = createColumn(
            {
              items: items.concat(items),
              scrollIndex: 4,
              h: 400
            },
            { spyOnMethods: ['_update'] }
          );
          await column.__updateSpyPromise;

          expect(column._Items.y).toBe(0);
        });

        it('should render correctly', () => {
          expect(column.items[0].y).toBe(0);
          expect(column.items[1].h).toBe(80);
        });

        it('should not scroll until the last item', () => {
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          expect(column._Items.y).toBe(0);
        });

        it('should scroll down', async () => {
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          await completeAnimation(column._Items, 'y');
          expect(column._Items.y).toBe(-100);
        });

        it('should not scroll up until back to top item', () => {
          const [item] = column.items;
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Up');
          testRenderer.keyPress('Up');
          testRenderer.keyPress('Up');
          testRenderer.keyPress('Up');
          testRenderer.keyPress('Up');
          expect(item.y).toBe(0);
        });

        it('should keep a full screen of items', () => {
          const item = column.items[1];
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.update();
          expect(column._Items.y + column.h).toBeGreaterThan(item.y);
        });
      });

      it('should scroll to index before', () => {
        const [column] = createStyledColumn();
        column.selectedIndex = 3;
        column.scrollTo(0);
        setTimeout(() => {
          expect(column.selectedIndex).toEqual(0);
        }, 2);
      });

      it('should scroll to index after', async () => {
        const [column, testRenderer] = createStyledColumn();
        column.selectedIndex = 0;
        column.scrollTo(3);
        await nextTick(2);
        testRenderer.forceAllUpdates();
        expect(column.selectedIndex).toEqual(3);
      });

      it('should not scroll is neverScroll if true', () => {
        column.neverScroll = true;
        expect(column._Items.y).toBe(0);
        testRenderer.keyPress('Down');
        testRenderer.keyPress('Down');
        testRenderer.keyPress('Down');
        testRenderer.update();
        expect(column._selectedIndex).toBe(3);
        expect(column._Items.transition('y').targetValue).toBe(0);
      });
    });
  });

  //**  Skip Plinko True Tests  *//
  describe('with skipPlinko true a row', () => {
    beforeEach(async () => {
      [column, testRenderer] = createColumn(
        {
          plinko: true,
          items: [{ ...baseRow }, { ...skipPlinkoRow }, { ...baseRow }]
        },
        { spyOnMethods: ['_update'] }
      );
      await column.__updateSpyPromise;

      expect(column._Items.y).toBe(0);
    });

    it('should set selected item for item based on item before skipPlinko item', () => {
      const item = column.items[0];
      item.selectedIndex = 3;
      testRenderer.keyPress('Down');
      expect(column.items[1].selectedIndex).toBe(0);
      testRenderer.keyPress('Down');
      expect(column.items[2].selectedIndex).toBe(3);
    });

    it('should set selected item for item based on item before multiple skipPlinko items', () => {
      column.items = [
        { ...baseRow },
        { ...skipPlinkoRow },
        { ...skipPlinkoRow },
        { ...skipPlinkoRow },
        { ...baseRow }
      ];
      const item = column.items[0];
      item.selectedIndex = 3;
      testRenderer.update();
      testRenderer.keyPress('Down');
      expect(column.items[1].selectedIndex).toBe(0);
      testRenderer.keyPress('Down');
      expect(column.items[2].selectedIndex).toBe(0);
      testRenderer.keyPress('Down');
      expect(column.items[3].selectedIndex).toBe(0);
      testRenderer.keyPress('Down');
      expect(column.items[4].selectedIndex).toBe(3);
    });
  });
});
