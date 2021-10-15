import lng from '@lightningjs/core';
import TestUtils from '../../test/lightning-test-utils';
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

const createRow = TestUtils.makeCreateComponent(Row, {
  title: 'My Row',
  h: 80,
  w: 400,
  upCount: 5,
  signals: {
    selectedChange: 'selectedChangeMock'
  },
  debounceDelay: 0,
  items
});

describe('Row', () => {
  let testRenderer, row;

  beforeEach(() => {
    [row, testRenderer] = createRow();
    return row._whenEnabled;
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

  describe('itemSpacing', () => {
    it('should initialize spacing between items', () => {
      const itemSpacing = 20;
      [row, testRenderer] = createRow({ itemSpacing });
      const item = row.items[1];
      row._update.flush();

      expect(item.x).toBe(row.items[0].w + itemSpacing);
    });

    it('should set spacing', () => {
      const itemSpacing = 100;
      const item = row.items[1];
      row.itemSpacing = itemSpacing;
      row._update.flush();

      const x = item.x;
      expect(x).toBe(row.items[0].w + itemSpacing);
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
      row.$itemChanged();
      row._update.flush();
      testRenderer.update();
      expect(row.items[1].x).toBe(item1X + 200);
    });
  });

  describe('scrolling', () => {
    beforeEach(() => {
      row.scrollTransition = { duration: 0 };
      row.items = [...items, ...items];
    });

    it('should scroll long rows', done => {
      expect(row.Items.x).toBe(0);
      testRenderer.keyPress('Right');
      row._whenEnabled.then(() => {
        expect(row._selectedIndex).toBe(1);
        expect(row.Items.transition('x').targetValue).toBe(-row.selected.x);
        done();
      });
    });

    it('should reset the Items x position when there are no items', done => {
      row.itemPosX = 100;
      row.items = [];
      testRenderer.keyPress('Right');
      row._whenEnabled.then(() => {
        expect(row.Items.x).toBe(100);
        done();
      });
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
        TestUtils.fastForward(row.items);
        testRenderer.update();
      });

      describe('navigating right', () => {
        it('does not scroll if selected index < start scroll index', () => {
          const expectedItems = expect.arrayContaining(
            row.items.map(({ x }) => x)
          );
          testRenderer.keyPress('Right');
          TestUtils.fastForward(row.items);
          testRenderer.update();

          expect(row.items.map(({ x }) => x)).toEqual(expectedItems);
        });

        it('shifts items to the left if selected index > start scroll index', done => {
          expect(row.items.map(({ x }) => x)).toEqual(
            expect.arrayContaining([
              0, 80, 160, 240, 320, 400, 480, 560, 640, 720
            ])
          );

          testRenderer.keyPress('Right');

          row._whenEnabled.then(() => {
            testRenderer.update();
            expect(row.selected.x).toBe(80);
            expect(row._itemsX).toBe(-80);
            done();
          });
        });

        it('does not scroll if last item is already in view', () => {
          testRenderer.keyPress('Right');
          testRenderer.keyPress('Right');
          testRenderer.keyPress('Right');
          testRenderer.keyPress('Right');
          testRenderer.keyPress('Right');
          testRenderer.keyPress('Right');
          testRenderer.keyPress('Right');
          TestUtils.fastForward(row.items);
          testRenderer.update();

          const expectedItems = expect.arrayContaining(
            row.items.map(({ x }) => x)
          );
          expect(row.selectedIndex).toBe(7);

          testRenderer.keyPress('Right');
          TestUtils.fastForward(row.items);
          testRenderer.update();

          expect(row.selectedIndex).toBe(8);
          expect(row.items.map(({ x }) => x)).toEqual(expectedItems);
        });
      });
    });

    describe('with neverScroll set to true', () => {
      it('should never scroll the row', done => {
        row.neverScroll = true;
        expect(row.Items.x).toBe(0);
        testRenderer.keyPress('Right');
        testRenderer.keyPress('Right');
        testRenderer.keyPress('Right');
        testRenderer.update();
        row._whenEnabled.then(() => {
          expect(row._selectedIndex).toBe(3);
          expect(row.Items.transition('x').targetValue).toBe(0);
          done();
        });
      });
    });
  });
});
