import Column from '.';
import Row from '../Row';
import TestRenderer from '../lightning-test-renderer';
import lng from 'wpe-lightning';

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
  items
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
    title: 'My Column',
    h: 600,
    itemTransition: { duration: 0 },
    itemSpacing: 20,
    scrollMount: 0,
    items: rows
  }
};

describe('Column', () => {
  let testRenderer, column;

  beforeEach(() => {
    testRenderer = TestRenderer.create(Component);
    column = testRenderer.getInstance();
    return column._whenEnabled;
  });

  it('should render', () => {
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should set focus on first item', () => {
    expect(column.items[0].hasFocus()).toBe(true);
  });

  it('should set focus on next item on keyDown', () => {
    testRenderer.keyPress('Down');
    expect(column.items[1].hasFocus()).toBe(true);
  });

  describe('itemSpacing', () => {
    it('should set spacing', () => {
      let spacing = 100;
      let item = column.items[1];
      column.itemSpacing = spacing;
      testRenderer.update();
      expect(item.y).toBe(spacing + item.h);
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

  describe('provider', () => {
    it('should take a promise to append items', done => {
      column.provider = Promise.resolve({
        appendItems: true,
        items: [{ ...baseItem }, { ...baseItem }]
      });

      setTimeout(() => {
        expect(column.items.length).toBe(7);
        done();
      }, 1);
    });

    it('should take a promise to replace items', done => {
      column.provider = Promise.resolve({
        items: [{ ...baseItem }, { ...baseItem }]
      });

      setTimeout(() => {
        expect(column.items.length).toBe(2);
        done();
      }, 1);
    });
  });

  describe('listeners', () => {
    describe('$removeItem', () => {
      it('removes an item', () => {
        let item = column.items[1];
        column.$removeItem(item);
        expect(column.items.length).toBe(4);
      });

      it('removes selected item', () => {
        const { selectedIndex } = column;
        let item = column.items[selectedIndex];
        column.$removeItem(item);
        expect(column.items.length).toBe(4);
        expect(column.selectedIndex).toBe(selectedIndex);
      });

      it('shifts selected index if necessary', () => {
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
        column.$removeItem();
      });
    });

    describe('$columnChanged', () => {
      it('updates column', () => {
        //TODO come up with something better
        const spy = jest.spyOn(column, 'render');
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
        let item = column.items[0];
        column.plinko = false;
        item.selectedIndex = 3;
        testRenderer.update();
        testRenderer.keyPress('Down');
        testRenderer.update();
        expect(column.items[1].selectedIndex).toBe(0);
      });
    });

    describe('with plinko true', () => {
      beforeEach(() => {
        column.plinko = true;
      });

      it('should set selected item for item based on previous item', () => {
        let item = column.items[0];
        item.selectedIndex = 3;
        testRenderer.update();
        testRenderer.keyPress('Down');
        testRenderer.update();
        expect(column.items[1].selectedIndex).toBe(3);
      });

      it('should selected last item in selected row if it is closest', () => {
        let row = column.items[0];
        row.items = [...items, { ...baseItem }];
        row.selectedIndex = row.items.length - 1;
        testRenderer.update();
        testRenderer.keyPress('Down');
        testRenderer.update();

        expect(column.items[1].selectedIndex).toBe(4);
      });

      it('should select first item if there is only one', () => {
        let row = column.items[1];
        row.items = [{ ...baseItem }];
        testRenderer.update();
        testRenderer.keyPress('Down');
        testRenderer.update();

        expect(row.selectedIndex).toBe(0);
      });
    });

    describe('with column height > items', () => {
      it('should not scroll', () => {
        let [item] = column.items;
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
        column.render();
        testRenderer.update();
      });

      describe('and scrollMount = 0', () => {
        it('should scroll down', () => {
          let [item] = column.items;
          testRenderer.keyPress('Down');
          testRenderer.update();
          expect(item.y).toBe(-100);
        });

        it('should scroll up', () => {
          let item = column.items[0];
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Up');
          testRenderer.update();
          expect(item.y).toBe(0);
        });

        it('should keep a full screen of items', () => {
          let item = column.items[2];
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.update();
          expect(item.y).toBe(0);
        });

        describe('and keepFullScreen false', () => {
          it('should NOT keep a full screen of items', () => {
            let item = column.items[column.items.length - 1];
            column.keepFullScreen = false;
            testRenderer.keyPress('Down');
            testRenderer.keyPress('Down');
            testRenderer.keyPress('Down');
            testRenderer.keyPress('Down');
            testRenderer.update();
            expect(item.y).toBe(0);
          });
        });
      });

      describe('and scrollMount = 0.5', () => {
        beforeEach(() => {
          column.items = items.concat(items);
          column.scrollMount = 0.5;
          column.render();
          testRenderer.update();
        });

        it('should render correctly', () => {
          expect(column.items[0].y).toBe(0);
          expect(column.items[1].y).toBe(100);
        });

        it('should not scroll until past the mid point', () => {
          let [item] = column.items;
          testRenderer.keyPress('Down');
          testRenderer.update();
          expect(item.y).toBe(0);
        });

        it('should scroll down', () => {
          let [item] = column.items;
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.update();
          expect(item.y).toBe(-40);
        });

        it('should scroll up', () => {
          let item = column.items[0];
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Up');
          testRenderer.update();
          expect(item.y).toBe(0);
        });

        it('should keep a full screen of items', () => {
          let item = column.items[1];
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.update();
          expect(item.y).toBe(-140);
        });

        it('should keep a full screen of items when at bottom', () => {
          let item = column.items[1];
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.update();
          expect(item.y).toBe(-140);
        });

        describe('and keepFullScreen false', () => {
          it('should NOT keep a full screen of items when at bottom', () => {
            let item = column.items[column.items.length - 1];
            column.keepFullScreen = false;
            testRenderer.keyPress('Down');
            testRenderer.keyPress('Down');
            testRenderer.keyPress('Down');
            testRenderer.keyPress('Down');
            testRenderer.keyPress('Down');
            testRenderer.keyPress('Down');
            testRenderer.keyPress('Down');
            testRenderer.keyPress('Down');
            testRenderer.keyPress('Down');
            testRenderer.update();
            expect(item.y).toBe(160);
          });
        });
      });

      describe('and scrollMount = 1', () => {
        beforeEach(() => {
          column.items = items.concat(items);
          column.scrollMount = 1;
          column.render();
          testRenderer.update();
        });

        it('should render correctly', () => {
          expect(column.items[0].y).toBe(0);
          expect(column.items[1].y).toBe(100);
        });

        it('should not scroll until the last item', () => {
          let [item] = column.items;
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.update();
          expect(item.y).toBe(0);
        });

        it('should scroll down', () => {
          let [item] = column.items;
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.update();
          expect(item.y).toBe(-100);
        });

        it('should not scroll up until back to top item', () => {
          let [item] = column.items;
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Up');
          testRenderer.update();
          expect(item.y).toBe(-100);
        });

        it('should not scroll up until back to top item', () => {
          let [item] = column.items;
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
          let item = column.items[1];
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.keyPress('Down');
          testRenderer.update();
          expect(item.y).toBe(0);
        });
      });

      it('should scroll to index before', () => {
        jest.useFakeTimers();
        column.selectedIndex = 3;
        column.scrollTo(0);
        jest.runAllTimers();
        expect(column.selectedIndex).toBe(0);
      });

      it('should scroll to index after', () => {
        jest.useFakeTimers();
        column.selectedIndex = 0;
        column.scrollTo(3);
        jest.runAllTimers();
        expect(column.selectedIndex).toBe(3);
      });

      it('should load more items near bottom with getMoreItems', () => {
        column.items = items;
        let mock = jest.fn();
        mock.mockReturnValue(Promise.resolve([]));
        column._getMoreItems = mock;
        testRenderer.keyPress('Down');
        testRenderer.keyPress('Down');
        expect(mock).toHaveBeenCalled();
      });
    });
  });
});
