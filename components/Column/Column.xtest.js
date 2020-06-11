import Grid from 'src/components/Grid';
import Row from 'src/components/Row';
import TestRenderer from 'test/lightning-test-renderer';
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
    type: Grid,
    title: 'My Grid',
    h: 800,
    rowTransition: { duration: 0 },
    rowSpacing: 80,
    rows
  }
};

describe('Grid', () => {
  let testRenderer, grid;

  beforeEach(() => {
    testRenderer = TestRenderer.create(Component);
    grid = testRenderer.getInstance();
    return grid._whenEnabled;
  });

  it('should render', () => {
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should set focus on first row', () => {
    expect(grid.rows[0].hasFocus()).toBe(true);
  });

  it('should set focus on next row on keyDown', () => {
    testRenderer.keyPress('Down');
    expect(grid.rows[1].hasFocus()).toBe(true);
  });

  describe('rowSpacing', () => {
    it('should set spacing', () => {
      let spacing = 100;
      let row = grid.rows[1];
      grid.rowSpacing = spacing;
      testRenderer.update();
      expect(row.y).toBe(spacing + row.h);
    });
  });

  describe('provider', () => {
    it('should take a promise to append items', done => {
      grid.provider = Promise.resolve({
        appendRows: true,
        rows: [{ ...baseRow }, { ...baseRow }]
      });

      setTimeout(() => {
        expect(grid.rows.length).toBe(7);
        done();
      }, 1);
    });

    it('should take a promise to replace items', done => {
      grid.provider = Promise.resolve({
        rows: [{ ...baseRow }, { ...baseRow }]
      });

      setTimeout(() => {
        expect(grid.rows.length).toBe(2);
        done();
      }, 1);
    });
  });

  describe('listeners', () => {
    it('should listen for $removeRow', () => {
      let row = grid.rows[1];
      grid.$removeRow(row);
      testRenderer.update();
      expect(grid.rows.length).toBe(4);
    });
  });

  describe('scrolling', () => {
    it('should scroll down', () => {
      let row = grid.rows[0];
      testRenderer.keyPress('Down');
      testRenderer.keyPress('Down');
      testRenderer.keyPress('Down');
      testRenderer.keyPress('Down');
      testRenderer.update();
      expect(row.y).toBe(-160);
    });

    it('should scroll up', () => {
      let row = grid.rows[0];
      testRenderer.keyPress('Down');
      testRenderer.keyPress('Up');
      testRenderer.update();
      expect(row.y).toBe(0);
    });

    it('should scroll to index before', () => {
      jest.useFakeTimers();
      grid.selectedIndex = 3;
      grid.scrollTo(0);
      jest.runAllTimers();
      expect(grid.selectedIndex).toBe(0);
    });

    it('should scroll to index after', () => {
      jest.useFakeTimers();
      grid.selectedIndex = 0;
      grid.scrollTo(3);
      jest.runAllTimers();
      expect(grid.selectedIndex).toBe(3);
    });

    it('should set selected item for row based on previous row', () => {
      let row = grid.rows[0];
      row._selectedIndex = 3;
      testRenderer.update();
      testRenderer.keyPress('Down');
      testRenderer.update();
      expect(grid.rows[1]._selectedIndex).toBe(3);
    });

    it('should keep a full screen of rows', () => {
      let row = grid.rows[1];
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
      grid._getMoreRows = mock;
      testRenderer.keyPress('Down');
      testRenderer.keyPress('Down');
      expect(mock).toHaveBeenCalled();
    });
  });
});
