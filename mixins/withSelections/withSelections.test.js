import lng from '@lightningjs/core';
import TestUtils from '../test/lightning-test-utils';
import withSelections from './withSelections';

const duplicate = (object, quantity) => Array.apply(null, { length: quantity }).map(() => Object.assign({}, object));

describe('selectionManager', () => {
  let WithSelections, testRenderer;
  class Example extends lng.Component {
    static _template() {
      return {
        items: duplicate({ type: lng.Component }, 3),
      }
    }

    _construct() {
      this._currentFocusedIndex = 0;
    }

    _getFocused() {
      return this.currentFocused || this;
    }

    _handleLeft() {
      if (this.currentFocusedIndex > 0) {
        this.currentFocusedIndex -= 1;
        this._refocus();
      }
    }

    _handleRight() {
      if (this.currentFocusedIndex < this.items.length - 1) {
        this.currentFocusedIndex += 1;
        this._refocus();
      }
    }

    get currentFocused() {
      return this.items[this.currentFocusedIndex]
    }

    get currentFocusedIndex() {
      return this._currentFocusedIndex;
    }

    set currentFocusedIndex(v) {
      this._currentFocusedIndex = v
    }

    get items() {
      return this.children;
    }

    set items(v) {
      this.children = v;
    }
  }

  beforeEach(() => {
    [WithSelections, testRenderer] = TestUtils.makeCreateComponent(withSelections(Example))();
  });

  afterEach(() => {
    WithSelections = null;
  });

  it('extends the base class', () => {
    expect(WithSelections.constructor.name).toBe('Example');
  });

  it('manages selected state for components', () => {
    const [c1, c2, c3] = WithSelections.items;
    expect(c1.isSelected).toBe(true);
    testRenderer.keyPress('Right');
    expect(WithSelections._getFocused()).toBe(c2);
    expect(WithSelections.currentSelected).toBe(c1);
    testRenderer.keyPress('Enter');
    expect(WithSelections.currentFocused).toBe(c2);
    expect(c1.isSelected).toBe(false);
    expect(c2.isSelected).toBe(true);

    c3.fireAncestors('$setSelected', c3, true);
    expect(c3.isSelected).toBe(true);
  });

  it('fires an event when a selected value changes', () => {
    jest.spyOn(WithSelections, 'fireAncestors');
    WithSelections.setSelected(WithSelections.items[0], true);
    expect(WithSelections.fireAncestors).not.toBeCalled();

    WithSelections.setSelected(WithSelections.items[1], true);
    expect(WithSelections.fireAncestors).toBeCalledWith('$onSelect', WithSelections.items[1], true);
  });

  it('supports custom properties', () => {
    class Custom extends lng.Component {
      static _template() {
        return {
          childs: duplicate({}, 3)
        }
      }
    }
    [WithSelections, testRenderer] = TestUtils.makeCreateComponent(withSelections(Custom, {
      keys: {
        currentSelected: 'current',
        currentSelectedIndex: 'currentIndex',
        items: 'childs',
        isSelected: 'selected',
        setSelected: 'toggleSelected',
      },
      captureKey: ['Enter', '1'],
      eventName: 'select'
    }))();
    expect(WithSelections.currentIndex).toBe(0);
    expect(WithSelections.current).toBe(WithSelections.childs[0]);
    expect(WithSelections.current.selected).toBe(true);
    expect(typeof WithSelections.toggleSelected).toBe('function');
    jest.spyOn(WithSelections, 'fireAncestors');
    WithSelections.toggleSelected(WithSelections.current, false);
    expect(WithSelections.fireAncestors).toBeCalledWith('$select', WithSelections.current, false);
    testRenderer.keyPress('1');
    expect(WithSelections.fireAncestors).toBeCalledTimes(2)
  });

  it('preserves callbacks', () => {
    const addSelected = jest.fn();
    const removeSelected = jest.fn();

    class Callbacks extends lng.Component {
      static _template() {
        return {
          items: [{ addSelected, removeSelected }]
        }
      }
    }
    [WithSelections, testRenderer] = TestUtils.makeCreateComponent(withSelections(Callbacks))();

    WithSelections.items[0].addSelected();
    expect(addSelected).toBeCalled();

    WithSelections.items[0].removeSelected();
    expect(addSelected).toBeCalled();
  });

  it('preserves initial selected state', () => {
    class InitialValue extends lng.Component {
      static _template() {
        return {
          items: [{ selected: true }]
        }
      }
    }
    [WithSelections, testRenderer] = TestUtils.makeCreateComponent(withSelections(InitialValue))();
    expect(WithSelections.items[0].selected).toBe(true);
  });
});
