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
    h: 800,
    itemTransition: { duration: 0 },
    itemSpacing: 80,
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

  it('should set focus on first row', () => {
    expect(column.rows[0].hasFocus()).toBe(true);
  });

  it('should set focus on next row on keyDown', () => {
    testRenderer.keyPress('Down');
    expect(column.rows[1].hasFocus()).toBe(true);
  });

  describe('rowSpacing', () => {
    it('should set spacing', () => {
      let spacing = 100;
      let row = column.rows[1];
      column.rowSpacing = spacing;
      testRenderer.update();
      expect(row.y).toBe(spacing + row.h);
    });
  });

  describe('provider', () => {
    it('should take a promise to append items', done => {
      column.provider = Promise.resolve({
        appendRows: true,
        rows: [{ ...baseRow }, { ...baseRow }]
      });

      setTimeout(() => {
        expect(column.rows.length).toBe(7);
        done();
      }, 1);
    });

    it('should take a promise to replace items', done => {
      column.provider = Promise.resolve({
        rows: [{ ...baseRow }, { ...baseRow }]
      });

      setTimeout(() => {
        expect(column.rows.length).toBe(2);
        done();
      }, 1);
    });
  });

  describe('listeners', () => {
    it('should listen for $removeRow', () => {
      let row = column.rows[1];
      column.$removeRow(row);
      testRenderer.update();
      expect(column.rows.length).toBe(4);
    });
  });

  describe('scrolling', () => {
    it('should scroll down', () => {
      let row = column.rows[0];
      testRenderer.keyPress('Down');
      testRenderer.keyPress('Down');
      testRenderer.keyPress('Down');
      testRenderer.keyPress('Down');
      testRenderer.update();
      expect(row.y).toBe(-160);
    });

    it('should scroll up', () => {
      let row = column.rows[0];
      testRenderer.keyPress('Down');
      testRenderer.keyPress('Up');
      testRenderer.update();
      expect(row.y).toBe(0);
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

    it('should set selected item for row based on previous row', () => {
      let row = column.rows[0];
      row._selectedIndex = 3;
      testRenderer.update();
      testRenderer.keyPress('Down');
      testRenderer.update();
      expect(column.rows[1]._selectedIndex).toBe(3);
    });

    it('should keep a full screen of rows', () => {
      let row = column.rows[1];
      testRenderer.keyPress('Down');
      testRenderer.keyPress('Down');
      testRenderer.keyPress('Down');
      testRenderer.keyPress('Down');
      testRenderer.update();
      expect(row.y).toBe(0);
    });

    it('should load more items near bottom with getMoreRows', () => {
      let mock = jest.fn();
      mock.mockReturnValue(Promise.resolve([]));
      column._getMoreRows = mock;
      testRenderer.keyPress('Down');
      testRenderer.keyPress('Down');
      expect(mock).toHaveBeenCalled();
    });
  });
});
