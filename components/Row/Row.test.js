import lng from 'wpe-lightning';
import TestUtils from '../lightning-test-utils';
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
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with no items', () => {
    row.items = [];
    testRenderer.update();
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should set focus on first item', () => {
    expect(row.items[0].hasFocus()).toBe(true);
  });

  it('should set focus on next item on keyRight', () => {
    testRenderer.keyPress('Right');
    expect(row.items[1].hasFocus()).toBe(true);
  });

  describe('itemSpacing', () => {
    it('should initialize spacing between items', () => {
      const itemSpacing = 20;
      [row, testRenderer] = createRow({ itemSpacing });
      let item = row.items[1];

      expect(item.x).toBe(row.items[0].w + itemSpacing);
    });

    it('should set spacing', () => {
      const itemSpacing = 100;
      const item = row.items[1];
      row.itemSpacing = itemSpacing;

      const x = item.transition('x').targetValue;
      expect(x).toBe(row.items[0].w + itemSpacing);
    });
  });

  describe('focusHeightChange', () => {
    it('should change the rows height when it has focus', () => {
      const ROW_HEIGHT = 80;
      row.focusHeightChange = 100;
      row._focus();
      expect(row.h).toBe(ROW_HEIGHT + 100);
      row._unfocus();
      expect(row.h).toBe(ROW_HEIGHT);
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

  describe('provider', () => {
    it('should take a promise to get items', done => {
      row.provider = Promise.resolve({
        items: [{ ...baseItem }, { ...baseItem }]
      });

      setTimeout(() => {
        expect(row.items.length).toBe(2);
        done();
      }, 0);
    });

    it('should append items if appendItems is set', done => {
      const ITEMS_LENGTH = row.items.length;
      row.provider = Promise.resolve({
        appendItems: true,
        items: [{ ...baseItem }]
      });

      setTimeout(() => {
        expect(row.items.length).toBe(ITEMS_LENGTH + 1);
        done();
      }, 0);
    });
  });

  describe('appendItems', () => {
    it('adds items to the item list', () => {
      const ITEMS_LENGTH = row.items.length;
      row.appendItems([{ ...baseItem }, { ...baseItem }]);

      expect(row.items.length).toBe(ITEMS_LENGTH + 2);
    });

    it('items are added outside of the viewable bounds', () => {
      let item = { ...baseItem };
      row.appendItems([item]);
      expect(item.x).toBeGreaterThan(row.x + row.w);
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
      let item1X = row.items[1].x;
      row.scrollTransition = { duration: 0 };
      row.items[0].w += 200;
      row.$itemChanged();
      testRenderer.update();
      expect(row.items[1].transition('x').targetValue).toBe(item1X + 200);
    });

    it('should listen for $itemHeightChanged', () => {
      const { h } = row;
      row.$itemHeightChanged(20);
      expect(row.h).toBe(h + 20);
    });
  });

  describe('scrolling', () => {
    beforeEach(() => {
      row.scrollTransition = { duration: 0 };
      row.items = [...items, ...items];
    });

    it('should scroll long rows', () => {
      expect(row.items[4].x).toBe(800);
      row._selectedIndex = 4;
      testRenderer.keyPress('Right');
      testRenderer.keyPress('Right');
      testRenderer.keyPress('Right');
      testRenderer.keyPress('Right');
      testRenderer.update();
      expect(row._selectedIndex).toBe(8);
      expect(row.selected.transition('x').targetValue).toBe(160);
    });

    it('should pass on screen items to onScreenEffect', () => {
      row.w = 200;
      const onScreenEffect = jest.fn();
      row.onScreenEffect = onScreenEffect;
      testRenderer.keyPress('Right');
      testRenderer.keyPress('Right');
      testRenderer.update();

      expect(onScreenEffect).toBeCalledTimes(2);

      // items within row boundary (x, x+w)
      const actualOnScreenItems = expect.arrayContaining(
        row.items
          .filter(item => {
            const x = item.transition('x').targetValue;
            return x >= row.x && x + item.w <= row.x + row.w;
          })
          .map(expect.objectContaining)
      );
      const onScreenItems = onScreenEffect.mock.calls[1][0];

      expect(onScreenItems.length).not.toEqual(row.items.length);
      expect(onScreenItems).toEqual(actualOnScreenItems);
    });

    describe('with scrollMount=1', () => {
      beforeEach(() => {
        row.scrollMount = 1;
        TestUtils.fastForward(row.items);
        testRenderer.update();
      });

      describe('navigating right', () => {
        it('does not scroll if selected item is within bounds', () => {
          const expectedItems = expect.arrayContaining(
            row.items.map(({ x }) => x)
          );

          testRenderer.keyPress('Right');
          TestUtils.fastForward(row.items);
          testRenderer.update();

          expect(row.items.map(({ x }) => x)).toEqual(expectedItems);
        });

        it('shifts items to the left if selected item is past bounds', () => {
          expect(row.items.map(item => item.x)).toEqual(
            expect.arrayContaining([
              0,
              80,
              160,
              240,
              320,
              400,
              800,
              800,
              800,
              800
            ])
          );

          testRenderer.keyPress('Right');
          testRenderer.keyPress('Right');
          testRenderer.keyPress('Right');
          testRenderer.keyPress('Right');
          testRenderer.keyPress('Right');
          TestUtils.fastForward(row.items);
          testRenderer.update();

          expect(row.items.map(item => item.x)).toEqual(
            expect.arrayContaining([
              -80,
              0,
              80,
              160,
              240,
              320,
              400,
              800,
              800,
              800
            ])
          );
        });

        it('does not scroll if selected index > last index', () => {
          Array.apply(null, { length: row.items.length - 1 }).forEach(() =>
            testRenderer.keyPress('Right')
          );
          TestUtils.fastForward(row.items);
          testRenderer.update();

          const expectedItems = expect.arrayContaining(
            row.items.map(item => item.x)
          );

          testRenderer.keyPress('Right');
          TestUtils.fastForward(row.items);
          testRenderer.update();

          expect(row.items.map(item => item.x)).toEqual(expectedItems);
        });
      });

      describe('navigating left', () => {
        beforeEach(() => {
          Array.apply(null, { length: row.items.length - 1 }).forEach(() =>
            testRenderer.keyPress('Right')
          );
          TestUtils.fastForward(row.items);
          testRenderer.update();
        });
        it('does not scroll if selected item is within bounds', () => {
          const expectedItems = expect.arrayContaining(
            row.items.map(({ x }) => x)
          );

          testRenderer.keyPress('Left');
          TestUtils.fastForward(row.items);
          testRenderer.update();

          expect(row.items.map(({ x }) => x)).toEqual(expectedItems);
        });
        it('shifts items to the right if selected item is past bounds', () => {
          expect(row.items.map(({ x }) => x)).toEqual(
            expect.arrayContaining([
              -160,
              -160,
              -160,
              -160,
              -80,
              0,
              80,
              160,
              240,
              320
            ])
          );

          testRenderer.keyPress('Left');
          testRenderer.keyPress('Left');
          testRenderer.keyPress('Left');
          testRenderer.keyPress('Left');
          testRenderer.keyPress('Left');
          TestUtils.fastForward(row.items);
          testRenderer.update();

          expect(row.items.map(({ x }) => x)).toEqual([
            -160,
            -160,
            -160,
            -80,
            0,
            80,
            160,
            240,
            320,
            400
          ]);
        });

        it('does not scroll if selected index < 0', () => {
          Array.apply(null, { length: row.items.length - 1 }).forEach(() =>
            testRenderer.keyPress('Left')
          );
          TestUtils.fastForward(row.items);
          testRenderer.update();

          const expectedItems = expect.arrayContaining(
            row.items.map(item => item.x)
          );
          testRenderer.keyPress('Left');
          TestUtils.fastForward(row.items);
          testRenderer.update();

          expect(row.items.map(item => item.x)).toEqual(expectedItems);
        });
      });
    });

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

        it('shifts items to the left if selected index > start scroll index', () => {
          expect(row.items.map(({ x }) => x)).toEqual(
            expect.arrayContaining([
              0,
              80,
              160,
              240,
              320,
              400,
              800,
              800,
              800,
              800
            ])
          );

          testRenderer.keyPress('Right');
          testRenderer.keyPress('Right');
          testRenderer.keyPress('Right');
          TestUtils.fastForward(row.items);
          testRenderer.update();

          expect(row.items.map(({ x }) => x)).toEqual(
            expect.arrayContaining([
              -80,
              0,
              80,
              160,
              240,
              320,
              400,
              800,
              800,
              800
            ])
          );
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

      describe('navigating left', () => {
        beforeEach(() => {
          Array.apply(null, { length: row.items.length - 1 }).forEach(() =>
            testRenderer.keyPress('Right')
          );
          TestUtils.fastForward(row.items);
          testRenderer.update();
        });

        it('does not scroll if selected index > start scroll index', () => {
          const expectedItems = expect.arrayContaining(
            row.items.map(({ x }) => x)
          );
          testRenderer.keyPress('Left');
          TestUtils.fastForward(row.items);
          testRenderer.update();

          expect(row.items.map(({ x }) => x)).toEqual(expectedItems);
        });

        it('shifts items to the right if selected index < start scroll index', () => {
          expect(row.items.map(({ x }) => x)).toEqual(
            expect.arrayContaining([
              -160,
              -160,
              -160,
              -160,
              -80,
              0,
              80,
              160,
              240,
              320
            ])
          );

          testRenderer.keyPress('Left');
          testRenderer.keyPress('Left');
          testRenderer.keyPress('Left');
          TestUtils.fastForward(row.items);
          testRenderer.update();

          expect(row.items.map(({ x }) => x)).toEqual(
            expect.arrayContaining([
              -160,
              -160,
              -160,
              -80,
              0,
              80,
              160,
              240,
              320,
              400
            ])
          );
        });

        it('does not scroll if first item is already in view', () => {
          testRenderer.keyPress('Left');
          testRenderer.keyPress('Left');
          testRenderer.keyPress('Left');
          testRenderer.keyPress('Left');
          testRenderer.keyPress('Left');
          testRenderer.keyPress('Left');
          testRenderer.keyPress('Left');
          TestUtils.fastForward(row.items);
          testRenderer.update();

          const expectedItems = expect.arrayContaining(
            row.items.map(({ x }) => x)
          );
          expect(row.selectedIndex).toBe(2);

          testRenderer.keyPress('Left');
          TestUtils.fastForward(row.items);
          testRenderer.update();

          expect(row.selectedIndex).toBe(1);
          expect(row.items.map(({ x }) => x)).toEqual(expectedItems);
        });
      });
    });
  });
});
