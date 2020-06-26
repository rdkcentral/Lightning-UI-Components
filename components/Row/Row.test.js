import lng from 'wpe-lightning';
import TestRenderer from '../lightning-test-renderer';
import Row from '.';

const rowFactory = (args = {}) => ({
  Component: {
    title: 'My Row',
    h: 80,
    items,
    ...args,
    type: Row
  }
});

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
const Component = {
  Component: {
    type: Row,
    title: 'My Row',
    h: 80,
    upCount: 5,
    signals: {
      selectedChange: 'selectedChangeMock'
    },
    items
  }
};

describe('Row', () => {
  let testRenderer, row;

  beforeEach(() => {
    testRenderer = TestRenderer.create(Component);
    row = testRenderer.getInstance();
    return row._whenEnabled;
  });

  it('should render', () => {
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
      testRenderer = TestRenderer.create(rowFactory({ itemSpacing }));
      row = testRenderer.getInstance();
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

  xdescribe('focusHeightChange', () => {
    it('should change the rows height when it has focus', () => {
      const ROW_HEIGHT = 80;
      const TITLE_HEIGHT = 92;
      row.focusHeightChange = 100;
      row._focus();

      expect(row.h).toBe(ROW_HEIGHT + TITLE_HEIGHT + 100);
      row._unfocus();
      expect(row.h).toBe(ROW_HEIGHT + TITLE_HEIGHT);
    });
  });

  describe('parentRowFocused', () => {
    it('should tell the items when row focus changes', () => {
      row._focus();
      expect(row.items[0].parentFocus).toBe(true);
      row._unfocus();
      expect(row.items[0].parentFocus).toBe(false);
    });
  });

  xdescribe('provider', () => {
    it('should take a promise to get items', done => {
      row.provider = Promise.resolve([{ ...baseItem }, { ...baseItem }]);

      setTimeout(() => {
        expect(row.items.length).toBe(2);
        done();
      }, 0);
    });

    it('should update the title if provided', done => {
      row.provider = Promise.resolve({
        items: [{ ...baseItem }, { ...baseItem }],
        title: 'abc'
      });

      setTimeout(() => {
        expect(row.items.length).toBe(2);
        expect(row.title).toBe('abc');
        done();
      }, 0);
    });

    it('with empty provider it fires $removeRow', done => {
      row.fireAncestors = jest.fn();
      row.provider = Promise.resolve([]);
      setTimeout(() => {
        expect(row.fireAncestors).toHaveBeenCalledWith('$removeRow', row);
        done();
      }, 0);
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

    xit('should remove wrapping on rows that scroll', done => {
      row.wrapSelected = true;
      row.items = [...items, ...items];
      setTimeout(() => {
        expect(row.wrapSelected).toBe(false);
        done();
      }, 1);
    });
  });

  describe('listeners', () => {
    it('should listen for $shiftRow', () => {
      row.scrollTransition = { duration: 0 };
      row.$shiftRow({ position: 50 });
      testRenderer.update();
      expect(row.x).toBe(50);
    });

    it('should listen for $itemChanged', () => {
      let item1X = row.items[1].x;
      row.scrollTransition = { duration: 0 };
      row.items[0].w += 200;
      row.$itemChanged();
      testRenderer.update();
      expect(row.items[1].transition('x').targetValue).toBe(item1X + 200);
    });
  });

  describe('scrolling', () => {
    it('should scroll long rows', () => {
      row.scrollTransition = { duration: 0 };
      row.items = [...items, ...items];
      expect(row.items[4].x).toBe(1920);
      row._selectedIndex = 4;
      testRenderer.keyPress('Right');
      testRenderer.keyPress('Right');
      testRenderer.keyPress('Right');
      testRenderer.keyPress('Right');
      testRenderer.update();
      expect(row._selectedIndex).toBe(8);
      expect(row.selected.transition('x').targetValue).toBe(640);
    });
  });
});
