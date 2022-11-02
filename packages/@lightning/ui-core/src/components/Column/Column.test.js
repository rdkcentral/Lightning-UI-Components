import Column from '.';
import Row from '../Row/index.js';
import TestRenderer from '../../../test/lightning-test-renderer.js';
import { makeCreateComponent } from '../../../test/lightning-test-utils.js';
import lng from '@lightningjs/core';
import withThemeStyles from '../../mixins/withThemeStyles/index.js';
import {
  completeAnimation,
  nextTick
} from '../../../test/lightning-test-utils.js';
import { expect, jest } from '@jest/globals';

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
  itemSpacing: 20,
  items: rows,
  debounceDelay: 1
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
  let testRenderer, column;

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

  describe('itemSpacing', () => {
    it('should set spacing', () => {
      const spacing = 100;
      const item = column.items[1];

      column.itemSpacing = spacing;
      column.requestUpdate(true);
      testRenderer.update();
      expect(item.y).toBe(spacing + item.h);
    });

    it('should support adding additional spacing to an item', async () => {
      const itemSpacing = 100;
      const extraItemSpacing = 50;
      const items = [baseItem, { ...baseItem, extraItemSpacing }, baseItem];
      const [column] = createColumn(
        {
          h: 600,
          itemSpacing,
          items
        },
        {
          spyOnMethods: ['_update']
        }
      );

      await column.__updateSpyPromise;
      const itemH = column.items[0].h;
      expect(column.items[1].y).toBe(itemH + itemSpacing);
      expect(column.items[2].y).toBe(
        itemH * 2 + itemSpacing * 2 + extraItemSpacing
      );
    });
  });

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

      xit('shifts selected index if necessary', () => {
        expect(column.items.map(({ y }) => y)).toEqual([0, 100, 200, 300, 400]);
        const item = column.items[1];
        column.selectedIndex = 2;
        column.$removeItem(item);
        testRenderer.update();
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

    xdescribe('$columnChanged', () => {
      it('updates column', () => {
        const spy = jest.spyOn(column, '_update');
        column.$columnChanged();
        expect(spy).toHaveBeenCalled();
      });
    });
  });

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

  describe('scrolling', () => {
    describe('with plinko false', () => {
      it('should NOT set selected item for item based on previous item', () => {
        const item = column.items[0];
        column.plinko = false;
        item.selectedIndex = 3;
        testRenderer.update();
        testRenderer.keyPress('Down');
        testRenderer.update();
        expect(column.items[1].selectedIndex).toBe(0);
      });

      it('should reset the Items y position when there are no items', () => {
        column.itemPosY = 100;
        column.items = [];
        testRenderer.keyPress('Down');
        expect(column._Items.y).toBe(100);
      });
    });

    describe('with plinko true', () => {
      beforeEach(() => {
        column.plinko = true;
      });

      // TODO: test is failing because prevItem.core.getAbsoluteCoords in
      // FocusManager's getIndexOfItemNear is returning NaN. Needs investigating
      it.skip('should set selected item for item based on previous item', () => {
        const item = column.items[0];
        item.selectedIndex = 3;
        testRenderer.update();
        testRenderer.keyPress('Down');
        testRenderer.update();
        expect(column.items[1].selectedIndex).toBe(3);
      });

      // TODO: test is failing because prevItem.core.getAbsoluteCoords in
      // FocusManager's getIndexOfItemNear is returning NaN. Needs investigating
      it.skip('should select last item in selected row if it is closest', () => {
        const row = column.items[0];
        row.items = [...items, { ...baseItem }];
        row.selectedIndex = row.items.length - 1;
        testRenderer.update();
        testRenderer.keyPress('Down');
        testRenderer.update();
        expect(column.items[1].selectedIndex).toBe(4);
      });

      it('should select first item if there is only one', () => {
        const row = column.items[1];
        row.items = [{ ...baseItem }];
        testRenderer.update();
        testRenderer.keyPress('Down');
        testRenderer.update();

        expect(row.selectedIndex).toBe(0);
      });
    });

    describe('with column height > items', () => {
      it('should not scroll', () => {
        const [item] = column.items;
        testRenderer.keyPress('Down');
        testRenderer.keyPress('Down');
        testRenderer.keyPress('Down');
        testRenderer.update();
        expect(item.y).toBe(0);
      });

      // This appears to be a flaky test
      it.skip('should add items on lazyUpCount', () => {
        column.lazyUpCount = 4;
        column.items = items.concat(items);
        testRenderer.update();
        expect(column.items.length).toBe(6);
        testRenderer.keyPress('Down');
        testRenderer.keyPress('Down');
        testRenderer.keyPress('Down');
        testRenderer.update();
        setTimeout(() => {
          expect(column.items.length).toBe(9);
        }, 17);
      });
    });

    describe('with column height < items', () => {
      const waitForSmooth = column => {
        return completeAnimation(column.Items, 'y');
      };
      beforeEach(() => {
        column.h = 400;
        expect(column._Items.y).toBe(0);
      });

      describe('and scrollIndex = 0', () => {
        it('should scroll down', async () => {
          testRenderer.keyPress('Down');
          await waitForSmooth(column);
          expect(column._Items.y).toBe(-100);
        });

        it('should scroll up', async () => {
          testRenderer.keyPress('Down');
          await waitForSmooth(column);
          expect(column._Items.y).toBe(-100);

          testRenderer.keyPress('Up');
          await waitForSmooth(column);
          expect(column._Items.y).toBe(0);
        });
      });

      describe('and scrollIndex = 2', () => {
        beforeEach(() => {
          column.items = items.concat(items);
          column.scrollIndex = 2;
          testRenderer.update();
        });

        xit('should render correctly', () => {
          expect(column.items[0].y).toBe(0);
          expect(column.items[1].y).toBe(100);
        });

        it('should not scroll until past the mid point', () => {
          const [item] = column.items;
          testRenderer.keyPress('Down');
          testRenderer.update();
          expect(item.y).toBe(0);
        });

        xit('should scroll down', async () => {
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          await waitForSmooth(column);
          expect(column._Items.y).toBe(-column.items[1].y);
        });

        it('should scroll up', () => {
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Up');
          expect(column._Items.y).toBe(0);
        });

        xit('should keep a full screen of items', async () => {
          const item = column.items[1];
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          await waitForSmooth(column);
          expect(column._Items.y + column.h).toBeGreaterThan(item.y);
        });

        xit('should keep a full screen of items when at bottom', async () => {
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          await waitForSmooth(column);
          expect(column._Items.y).toBe(-600);
        });
      });

      describe('and scrollIndex = 4', () => {
        beforeEach(() => {
          column.items = items.concat(items);
          column.scrollIndex = 4;
        });

        xit('should render correctly', () => {
          expect(column.items[0].y).toBe(0);
          expect(column.items[1].y).toBe(100);
        });

        it('should not scroll until the last item', () => {
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          expect(column._Items.y).toBe(0);
        });

        xit('should scroll down', async () => {
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          await waitForSmooth(column);
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
        // TODO: find way to remove await
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

  describe('with skpPlinko true a row', () => {
    it('should set selected item for item based on item before skipPlinko item', () => {
      column.plinko = true;
      column.items = [{ ...baseRow }, { ...skipPlinkoRow }, { ...baseRow }];
      const item = column.items[0];
      item.selectedIndex = 3;
      testRenderer.update();
      testRenderer.keyPress('Down');
      expect(column.items[1].selectedIndex).toBe(0);
      testRenderer.keyPress('Down');
      testRenderer.forceAllUpdates();
      // TODO: find way to remove setTimeout
      setTimeout(() => {
        expect(column.items[2].selectedIndex).toBe(3);
      }, 1);
    });

    it('should set selected item for item based on item before multiple skipPlinko items', () => {
      column.plinko = true;
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
      testRenderer.update();
      expect(column.items[1].selectedIndex).toBe(0);
      testRenderer.keyPress('Down');
      testRenderer.update();
      expect(column.items[2].selectedIndex).toBe(0);
      testRenderer.keyPress('Down');
      testRenderer.update();
      expect(column.items[3].selectedIndex).toBe(0);
      testRenderer.keyPress('Down');
      testRenderer.forceAllUpdates();
      // TODO: find way to remove setTimeout
      setTimeout(() => {
        expect(column.items[4].selectedIndex).toBe(3);
      }, 1);
    });
  });
});
