import lng from '@lightningjs/core';
import { makeCreateComponent } from '@lightning/ui-test-utils';
import { jest } from '@jest/globals';
import withSelections from './index.js';

const duplicate = (object, quantity) =>
  Array.apply(null, { length: quantity }).map(() => Object.assign({}, object));

describe('selectionManager', () => {
  let withSelectionsComponent, testRenderer;
  class Example extends lng.Component {
    static _template() {
      return {
        items: duplicate({ type: lng.Component }, 3)
      };
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
      return this.items[this.currentFocusedIndex];
    }

    get currentFocusedIndex() {
      return this._currentFocusedIndex;
    }

    set currentFocusedIndex(v) {
      this._currentFocusedIndex = v;
    }

    get items() {
      return this.children;
    }

    set items(v) {
      this.children = v;
    }
  }

  beforeEach(() => {
    [withSelectionsComponent, testRenderer] = makeCreateComponent(
      withSelections(Example)
    )();
  });

  afterEach(() => {
    withSelectionsComponent = null;
  });

  it('extends the base class', () => {
    expect(withSelectionsComponent.constructor.name).toBe('Example');
  });

  it('manages selected state for components', () => {
    const [c1, c2, c3] = withSelectionsComponent.items;
    expect(c1.isSelected).toBe(true);
    testRenderer.keyPress('Right');
    expect(withSelectionsComponent._getFocused()).toBe(c2);
    expect(withSelectionsComponent.currentSelected).toBe(c1);
    testRenderer.keyPress('Enter');
    expect(withSelectionsComponent.currentFocused).toBe(c2);
    expect(c1.isSelected).toBe(false);
    expect(c2.isSelected).toBe(true);

    c3.fireAncestors('$setSelected', c3, true);
    expect(c3.isSelected).toBe(true);
  });

  it('fires an event when a selected value changes', () => {
    jest.spyOn(withSelectionsComponent, 'fireAncestors');
    withSelectionsComponent.setSelected(withSelectionsComponent.items[0], true);
    expect(withSelectionsComponent.fireAncestors).not.toBeCalled();

    withSelectionsComponent.setSelected(withSelectionsComponent.items[1], true);
    expect(withSelectionsComponent.fireAncestors).toBeCalledWith(
      '$onSelect',
      withSelectionsComponent.items[1],
      true
    );
  });

  it('supports custom properties', () => {
    class Custom extends lng.Component {
      static _template() {
        return {
          childs: duplicate({}, 3)
        };
      }
    }
    [withSelectionsComponent, testRenderer] = makeCreateComponent(
      withSelections(Custom, {
        keys: {
          currentSelected: 'current',
          currentSelectedIndex: 'currentIndex',
          items: 'childs',
          isSelected: 'selected',
          setSelected: 'toggleSelected'
        },
        captureKey: ['Enter', '1'],
        eventName: 'select'
      })
    )();
    expect(withSelectionsComponent.currentIndex).toBe(0);
    expect(withSelectionsComponent.current).toBe(
      withSelectionsComponent.childs[0]
    );
    expect(withSelectionsComponent.current.selected).toBe(true);
    expect(typeof withSelectionsComponent.toggleSelected).toBe('function');
    jest.spyOn(withSelectionsComponent, 'fireAncestors');
    withSelectionsComponent.toggleSelected(
      withSelectionsComponent.current,
      false
    );
    expect(withSelectionsComponent.fireAncestors).toBeCalledWith(
      '$select',
      withSelectionsComponent.current,
      false
    );
    testRenderer.keyPress('1');
    expect(withSelectionsComponent.fireAncestors).toBeCalledTimes(2);
  });

  it('preserves callbacks', () => {
    const addSelected = jest.fn();
    const removeSelected = jest.fn();

    class Callbacks extends lng.Component {
      static _template() {
        return {
          items: [{ addSelected, removeSelected }]
        };
      }
    }
    [withSelectionsComponent, testRenderer] = makeCreateComponent(
      withSelections(Callbacks)
    )();

    withSelectionsComponent.items[0].addSelected();
    expect(addSelected).toBeCalled();

    withSelectionsComponent.items[0].removeSelected();
    expect(addSelected).toBeCalled();
  });

  it('preserves initial selected state', () => {
    class InitialValue extends lng.Component {
      static _template() {
        return {
          items: [{ selected: true }]
        };
      }
    }
    [withSelectionsComponent, testRenderer] = makeCreateComponent(
      withSelections(InitialValue)
    )();
    expect(withSelectionsComponent.items[0].selected).toBe(true);
  });
});
