import Column from '.';
import Row from '../Row';
import TestRenderer from '../../test/lightning-test-renderer';
import lng from '@lightningjs/core';

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

const Component = {
  Component: {
    type: Column,
    h: 600,
    itemTransition: { duration: 0 },
    itemSpacing: 20,
    items: rows,
    debounceDelay: 1
  }
};

describe('Column', () => {
  let testRenderer, column;

  beforeEach(done => {
    testRenderer = TestRenderer.create(Component);
    column = testRenderer.getInstance();
    setTimeout(() => {
      column._update.flush();
      done();
    }, 3);
  });

  it('should render', async done => {
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
    done();
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
    it('should set spacing', done => {
      const spacing = 100;
      const item = column.items[1];

      column.itemSpacing = spacing;
      column._update.flush();
      testRenderer.update();
      column._whenEnabled.then(() => {
        expect(item.y).toBe(spacing + item.h);
        done();
      });
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

      it('shifts selected index if necessary', done => {
        expect(column.items.map(({ y }) => y)).toEqual([0, 100, 200, 300, 400]);
        const item = column.items[1];
        column.selectedIndex = 2;
        column.$removeItem(item);
        column._whenEnabled.then(() => {
          testRenderer.update();
          expect(column.items.map(({ y }) => y)).toEqual([0, 100, 200, 300]);
          done();
        });
      });

      it('fires $columnEmpty event', () => {
        const spy = jest.spyOn(column, 'fireAncestors');
        column.items = [{ ...baseItem }];
        column.$removeItem(column.items[0]);
        expect(spy).toBeCalledWith('$columnEmpty');
      });

      it('handles empty item', () => {
        column.$removeItem();
      });
    });

    describe('$columnChanged', () => {
      it('updates column', () => {
        const spy = jest.spyOn(column, '_updateImmediate');
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

      it('should reset the Items y position when there are no items', done => {
        column.itemPosY = 100;
        column.items = [];
        testRenderer.keyPress('Down');
        column._whenEnabled.then(() => {
          expect(column.Items.y).toBe(100);
          done();
        });
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
        testRenderer.update();
        expect(column.items[1].selectedIndex).toBe(3);
      });

      it('should select last item in selected row if it is closest', () => {
        const row = column.items[0];
        row.items = [...items, { ...baseItem }];
        row._update.flush();
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
    });

    describe('with column height < items', () => {
      beforeEach(() => {
        column.h = 400;
        column._update.flush();
        testRenderer.update();
      });

      describe('and scrollIndex = 0', () => {
        it('should scroll down', done => {
          testRenderer.keyPress('Down');
          column._whenEnabled.then(() => {
            testRenderer.update();
            expect(column.Items.y).toBe(-100);
            done();
          });
        });

        it('should scroll up', done => {
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Up');
          column._whenEnabled.then(() => {
            testRenderer.update();
            expect(column.Items.y).toBe(0);
            done();
          });
        });
      });

      describe('and scrollIndex = 2', () => {
        beforeEach(() => {
          column.items = items.concat(items);
          column.scrollIndex = 2;
          column._update.flush();
          testRenderer.update();
        });

        it('should render correctly', () => {
          expect(column.items[0].y).toBe(0);
          expect(column.items[1].y).toBe(100);
        });

        it('should not scroll until past the mid point', () => {
          const [item] = column.items;
          testRenderer.keyPress('Down');
          testRenderer.update();
          expect(item.y).toBe(0);
        });

        it('should scroll down', done => {
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          column._whenEnabled.then(() => {
            testRenderer.update();
            expect(column.Items.y).toBe(-column.items[1].y);
            done();
          });
        });

        it('should scroll up', done => {
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Up');
          column._whenEnabled.then(() => {
            testRenderer.update();
            expect(column.Items.y).toBe(0);
            done();
          });
        });

        it('should keep a full screen of items', done => {
          const item = column.items[1];
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          column._whenEnabled.then(() => {
            testRenderer.update();
            expect(column.Items.y + column.h).toBeGreaterThan(item.y);
            done();
          });
        });

        it('should keep a full screen of items when at bottom', done => {
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          column._whenEnabled.then(() => {
            testRenderer.update();
            expect(column.Items.y).toBe(-600);
            done();
          });
        });
      });

      describe('and scrollIndex = 4', () => {
        beforeEach(() => {
          column.items = items.concat(items);
          column.scrollIndex = 4;
          testRenderer.update();
          return column._whenEnabled;
        });

        it('should render correctly', () => {
          expect(column.items[0].y).toBe(0);
          expect(column.items[1].y).toBe(100);
        });

        it('should not scroll until the last item', done => {
          const [item] = column.items;
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          column._whenEnabled.then(() => {
            testRenderer.update();
            expect(column.Items.y).toBe(0);
            done();
          });
        });

        it('should scroll down', () => {
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          return column._whenEnabled.then(() => {
            testRenderer.update();
            expect(column.Items.y).toBe(-100);
          });
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
          return column._whenEnabled.then(() => {
            testRenderer.update();
            expect(column.Items.y + column.h).toBeGreaterThan(item.y);
          });
        });
      });

      it('should scroll to index before', done => {
        column.itemTransition = { duration: 0.001 };
        column.selectedIndex = 3;
        column.scrollTo(0);
        setTimeout(() => {
          expect(column.selectedIndex).toEqual(0);
          done();
        }, 2);
      });

      it('should scroll to index after', done => {
        column.itemTransition = { duration: 0.001 };
        column.selectedIndex = 0;
        column.scrollTo(3);
        setTimeout(() => {
          expect(column.selectedIndex).toEqual(3);
          done();
        }, 2);
      });

      it('should not scroll is neverScroll if true', done => {
        column.neverScroll = true;
        expect(column.Items.y).toBe(0);
        testRenderer.keyPress('Down');
        testRenderer.keyPress('Down');
        testRenderer.keyPress('Down');
        testRenderer.update();
        column._whenEnabled.then(() => {
          expect(column._selectedIndex).toBe(3);
          expect(column.Items.transition('y').targetValue).toBe(0);
          done();
        });
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
      testRenderer.update();
      expect(column.items[2].selectedIndex).toBe(3);
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
      testRenderer.update();
      expect(column.items[4].selectedIndex).toBe(3);
    });
  });
});
