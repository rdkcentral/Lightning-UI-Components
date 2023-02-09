import lng from '@lightningjs/core';
import { fastForward, makeCreateComponent } from '@lightning/ui-test-utils';
import { jest } from '@jest/globals';
import Tile from '../Tile';
import Row from '.';

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

const properties = {
  title: 'My Row',
  h: 80,
  w: 496,
  upCount: 5,
  signals: {
    selectedChange: 'selectedChangeMock'
  },
  debounceDelay: 0,
  items
};

const createRow = makeCreateComponent(Row, properties);

describe('Row', () => {
  let testRenderer, row;

  beforeEach(() => {
    [row, testRenderer] = createRow();
  });

  afterEach(() => {
    row = null;
    testRenderer = null;
  });

  it('should render', () => {
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with no items', () => {
    row.items = [];
    testRenderer.update();
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should set focus on first item', () => {
    expect(row.items[0].hasFocus()).toBe(true);
  });

  it('should return false on keyLeft', () => {
    expect(row._handleLeft()).toBe(false);
  });

  it('should set focus on next item on keyRight', () => {
    testRenderer.keyPress('Right');
    expect(row.items[1].hasFocus()).toBe(true);
  });

  it('should support adding additional spacing to an item', () => {
    const extraItemSpacing = 50;
    row.items = [baseItem, { ...baseItem, extraItemSpacing }, baseItem];
    testRenderer.forceAllUpdates();

    const itemW = row.items[0].w;
    expect(row.items[1].x).toBe(itemW + row.style.itemSpacing);
    expect(row.items[2].x).toBe(
      itemW * 2 + row.style.itemSpacing * 2 + extraItemSpacing
    );
  });

  describe('autoResize', () => {
    it('resizes width', () => {
      const [row, testRenderer] = createRow({
        autoResizeWidth: true
      });
      expect(row.Items.w).toBe(496);
      expect(row.w).toBe(row.Items.w);
      row.appendItems([
        {
          type: lng.Component,
          w: 120,
          h: 80
        }
      ]);
      testRenderer.forceAllUpdates();
      expect(row.Items.w).toBe(640);
      expect(row.w).toBe(row.Items.w);
    });

    it('resizes height', () => {
      const [row, testRenderer] = createRow({
        autoResizeHeight: true,
        h: 80
      });
      expect(row.Items.h).toBe(80);
      expect(row.h).toBe(row.Items.h);
      row.appendItems([
        {
          type: lng.Component,
          w: 80,
          h: 160
        }
      ]);
      testRenderer.forceAllUpdates();
      expect(row.Items.h).toBe(160);
      expect(row.h).toBe(row.Items.h);
    });
  });

  describe('parentFocus', () => {
    it('should tell the items when row focus changes', () => {
      row._focus();
      expect(row.items[0].parentFocus).toBe(true);
      row._unfocus();
      expect(row.items[0].parentFocus).toBe(false);
    });
  });

  describe('appendItems', () => {
    it('adds items to the item list', () => {
      const ITEMS_LENGTH = row.items.length;
      row.appendItems([{ ...baseItem }, { ...baseItem }]);

      expect(row.items.length).toBe(ITEMS_LENGTH + 2);
    });

    it('items are added outside of the viewable bounds', () => {
      const item = { ...baseItem };
      expect(row.items.length).toBe(5);
      row.appendItems([item]);
      testRenderer.forceAllUpdates();
      expect(row.items.length).toBe(6);
      expect(row.items[row.items.length - 1].x >= row.x + row.w).toBe(true);
    });

    it('has works with no items', () => {
      const { length } = row.items;
      row.appendItems();
      expect(row.items.length).toBe(length);
    });

    it('defaults item height to row renderHeight', () => {
      const item = { ...baseItem };
      delete item.h;

      row.appendItems([item]);
      expect(row.items[row.items.length - 1].h).toBe(row.h);
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
      initialLength = row.items.length;
    });

    it('should add items at the specified index', () => {
      row.appendItemsAt(items, 1);

      expect(row.items.length).toBe(initialLength + items.length);
      expect(row.items[1].testId).toBe(items[0].testId);
      expect(row.items[2].testId).toBe(items[1].testId);
    });
    it('should append items to the end of the row if an index is not specified', () => {
      row.appendItemsAt(items);

      expect(row.items.length).toBe(initialLength + items.length);
      expect(row.items[row.items.length - 2].testId).toBe(items[0].testId);
      expect(row.items[row.items.length - 1].testId).toBe(items[1].testId);
    });
    it('should not add items when none are passed to the method', () => {
      row.appendItemsAt();
      expect(row.items.length).toBe(initialLength);
    });
    it('should default itemW to 0 when w and innerW do not exist on the item to prevent _totalAddedWidth being set to NaN', () => {
      row.appendItemsAt(
        [
          {
            type: Tile,
            itemLayout: {
              ratioX: 16,
              ratioY: 9,
              upCount: 4
            }
          }
        ],
        0
      );

      expect(row._totalAddedWidth).toBe(row.style.itemSpacing);
    });
  });

  describe('prependItems', () => {
    it('should prepend items to the row', () => {
      const initialLength = row.items.length;
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
      row.prependItems(items);

      expect(row.items.length).toBe(initialLength + items.length);
      expect(row.items[0].testId).toBe(items[0].testId);
      expect(row.items[1].testId).toBe(items[1].testId);
    });
  });

  describe('removeItemAt', () => {
    beforeEach(() => {
      row.items = [
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

    it('should remove an item from the row', () => {
      row.removeItemAt(1);
      expect(row.items.length).toBe(2);
    });
    it('should maintain which item is selected after removing an item', () => {
      row.selectedIndex = 2;
      expect(row.selected.testId).toBe('C');
      row.removeItemAt(1);
      expect(row.selectedIndex).toBe(1);
      expect(row.selected.testId).toBe('C');
    });
    it('should select the next item after a selected item has been removed', () => {
      row.selectedIndex = 1;
      row.removeItemAt(1);
      expect(row.selectedIndex).toBe(1);
      expect(row.selected.testId).toBe('C');
    });
  });

  describe('when items are added at an index lesser than the current selected item', () => {
    const item = {
      ...baseItem,
      testId: 'added',
      w: 100,
      h: undefined
    };
    const items = [
      { ...baseItem, testId: 'A' },
      { ...baseItem, testId: 'B' },
      { ...baseItem, testId: 'C' }
    ];

    beforeEach(async () => {
      [row, testRenderer] = createRow(
        {
          items,
          selectedIndex: 2
        },
        {
          spyOnMethods: ['_updateLayout']
        }
      );

      await row.__updateLayoutSpyPromise;
    });

    it('should maintain the x position of the current selected item relative to the row by shifting the row', async () => {
      const initialX = row.Items.x;
      const exepctedX = row.Items.x - item.w - row.style.itemSpacing;
      expect(row.Items.x).toBe(initialX);

      row.appendItemsAt([item], 1);
      await row.__updateLayoutSpyPromise;

      expect(row.Items.x).toBe(exepctedX);
    });
    it('should maintain the x position of the current selected item relative to the row by shifting the row with lazy scroll enabled', async () => {
      row.lazyScroll = true;
      const initialX = row.Items.x;
      const exepctedX = row.Items.x - item.w - row.style.itemSpacing;
      expect(row.Items.x).toBe(initialX);

      row.appendItemsAt([item], 1);
      await row.__updateLayoutSpyPromise;

      expect(row.Items.x).toBe(exepctedX);
    });
    it('should persist which item is selected', async () => {
      expect(row.selected.testId).toBe('C');

      row.appendItemsAt([item], 1);
      await row.__updateLayoutSpyPromise;

      expect(row.selected.testId).toBe('C');
    });
  });

  describe('wrapping', () => {
    it('should default to false and should not wrap', () => {
      row._selectedIndex = 4;
      testRenderer.keyPress('Right');
      expect(row._selectedIndex).toBe(4);
    });

    it('should focus last item after Left on first item', () => {
      row.wrapSelected = true;
      testRenderer.keyPress('Left');
      expect(row._selectedIndex).toBe(4);
    });

    it('should focus first item after Right on last item', () => {
      row.wrapSelected = true;
      row._selectedIndex = 4;
      testRenderer.keyPress('Right');
      expect(row._selectedIndex).toBe(0);
    });
  });

  describe('listeners', () => {
    it('should listen for $itemChanged', () => {
      const item1X = row.items[1].x;
      row.scrollTransition = { duration: 0 };
      row.items[0].w += 200;
      testRenderer.forceAllUpdates();
      expect(row.items[1].x).toBe(item1X + 200);
    });
  });

  describe('scrolling', () => {
    beforeEach(() => {
      row.scrollTransition = { duration: 0 };
      row.items = [...items, ...items];
    });

    it('should scroll long rows', () => {
      [row, testRenderer] = createRow({
        ...properties,
        scrollTransition: { duration: 0 },
        items: [...items, ...items]
      });
      testRenderer.forceAllUpdates();
      expect(row._Items.x).toBe(0);
      testRenderer.keyPress('Right');
      fastForward(row._Items);
      testRenderer.update();
      expect(row._selectedIndex).toBe(1);
      expect(row._Items.x).toBe(-row.selected.x);
    });

    it('should add items on lazyUpCount', done => {
      row.lazyUpCount = 4;
      row.items = [...items, ...items];
      expect(row.items.length).toBe(6);
      testRenderer.keyPress('Right');
      setTimeout(() => {
        expect(row.items.length).toBe(7);
        done();
      }, 17);
    });

    it('should reset the Items x position when there are no items', done => {
      row.itemPosX = 100;
      row.items = [];
      testRenderer.keyPress('Right');
      expect(row._Items.x).toBe(100);
      done();
    });

    // TODO: Fix - released to get h
    // it('should pass on screen items to onScreenEffect', done => {
    //   row.w = 200;
    //   const onScreenEffect = jest.fn();
    //   row.onScreenEffect = onScreenEffect;
    //   testRenderer.keyPress('Right');
    //   testRenderer.update();

    //   row._whenEnabled.then(() => {
    //     expect(onScreenEffect).toBeCalled();
    //     const onScreenItems = onScreenEffect.mock.calls[0][0].map(item =>
    //       row.items.indexOf(item)
    //     );
    //     const expected = row.items
    //       .filter(item => {
    //         const x1 = item.x;
    //         const x2 = item.x + item.w;
    //         return (
    //           x2 + row.Items.transition('x').targetValue > 0 &&
    //           x1 + row.Items.transition('x').targetValue < row.w
    //         );
    //       })
    //       .map(item => row.items.indexOf(item));
    //     expect(onScreenItems).toEqual(expected);
    //     done();
    //   });
    // });

    describe('with scrollMount=0.5', () => {
      beforeEach(() => {
        row.scrollMount = 0.5;
        fastForward(row.items);
        testRenderer.update();
      });

      describe('navigating right', () => {
        it('does not scroll if selected index < start scroll index', () => {
          const expectedItems = expect.arrayContaining(
            row.items.map(({ x }) => x)
          );
          testRenderer.keyPress('Right');
          fastForward(row.items);
          testRenderer.update();

          expect(row.items.map(({ x }) => x)).toEqual(expectedItems);
        });

        it('shifts items to the left if selected index > start scroll index', done => {
          [row, testRenderer] = createRow({
            ...properties,
            items: [...items, ...items],
            scrollMount: 0.5
          });
          expect(row.items.map(({ x }) => x)).toEqual(
            expect.arrayContaining([
              0, 104, 208, 312, 416, 520, 624, 728, 832, 936
            ])
          );
          testRenderer.forceAllUpdates();
          testRenderer.keyPress('Right');
          fastForward(row._Items);
          testRenderer.update();
          expect(row.selected.x).toBe(104);
          expect(row._itemsX).toBe(-104);
          done();
        });

        it('does not scroll if last item is already in view', () => {
          testRenderer.keyPress('Right');
          testRenderer.keyPress('Right');
          testRenderer.keyPress('Right');
          testRenderer.keyPress('Right');
          testRenderer.keyPress('Right');
          testRenderer.keyPress('Right');
          testRenderer.keyPress('Right');
          fastForward(row.items);
          testRenderer.update();

          const expectedItems = expect.arrayContaining(
            row.items.map(({ x }) => x)
          );
          expect(row.selectedIndex).toBe(7);

          testRenderer.keyPress('Right');
          fastForward(row.items);
          testRenderer.update();

          expect(row.selectedIndex).toBe(8);
          expect(row.items.map(({ x }) => x)).toEqual(expectedItems);
        });
      });
    });

    describe('with neverScroll set to true', () => {
      it('should never scroll the row', done => {
        row.neverScroll = true;
        expect(row._Items.x).toBe(0);
        testRenderer.keyPress('Right');
        testRenderer.keyPress('Right');
        testRenderer.keyPress('Right');
        testRenderer.update();
        expect(row._selectedIndex).toBe(3);
        expect(row._Items.transition('x').targetValue).toBe(0);
        done();
      });
    });

    describe('when lazyScroll enabled', () => {
      beforeEach(() => {
        row.lazyScroll = true;
      });

      describe('when indexes to start and stop lazy scroll are provided', () => {
        let _getLazyScrollX;
        let _getScrollX;
        beforeEach(() => {
          _getLazyScrollX = jest.spyOn(row, '_getLazyScrollX');
          _getScrollX = jest.spyOn(row, '_getScrollX');
          row.items = Array.from({ length: 6 }).map(() => baseItem);
          row.w = baseItem.w * 2;
          row.scrollTransition = { duration: 0 };
          row.startLazyScrollIndex = 1;
          row.stopLazyScrollIndex = 4;
        });

        it('should not lazy scroll when the selected item is at or before the start lazy scroll index', done => {
          row.selectedIndex = 0;
          testRenderer.forceAllUpdates();
          _getLazyScrollX.mockClear();
          _getScrollX.mockClear();

          testRenderer.keyPress('Right');
          testRenderer.forceAllUpdates();
          testRenderer.update();

          row._whenEnabled.then(() => {
            expect(_getLazyScrollX).toHaveBeenCalled();
            expect(_getScrollX).toHaveBeenCalled();
            done();
          });
        });

        it('should lazy scroll when navigating left on items after stop lazy scroll index', done => {
          row.selectedIndex = 5;
          testRenderer.forceAllUpdates();
          _getLazyScrollX.mockClear();
          _getScrollX.mockClear();

          testRenderer.keyPress('Left');

          row._whenEnabled.then(() => {
            expect(_getLazyScrollX).toHaveBeenCalled();
            expect(_getScrollX).not.toHaveBeenCalled();
            done();
          });
        });

        it('should lazy scroll when the selected item is between the start and stop lazy scroll indexes', done => {
          row.selectedIndex = 2;
          testRenderer.forceAllUpdates();
          _getLazyScrollX.mockClear();
          _getScrollX.mockClear();

          testRenderer.keyPress('Right');

          row._whenEnabled.then(() => {
            expect(_getLazyScrollX).toHaveBeenCalled();
            expect(_getScrollX).not.toHaveBeenCalled();
            done();
          });
        });
      });
    });
  });
});
