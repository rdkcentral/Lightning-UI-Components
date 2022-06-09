import lng from '@lightningjs/core';
import TestUtils from '../../test/lightning-test-utils';
import withExtensions from '.';
import context from '../../context';

const extensionMock = jest.fn();

class Example extends lng.Component {
  static get __componentName() {
    return 'Example';
  }

  get testGetter() {
    return this._testGetter;
  }

  set testGetter(v) {
    this._textGetter = v;
  }

  _update() {
    extensionMock('base component');
  }
}

class Example2 extends lng.Component {
  static get __componentName() {
    return 'Example2';
  }

  _update() {
    extensionMock('base component 2');
  }
}

class Example3 extends lng.Component {
  static get __componentName() {
    return 'Example3';
  }

  _update() {
    extensionMock('base component 3');
  }
}

const extensions = [
  {
    targetComponent: ['Example', 'Example2'],
    extension: Base =>
      class AppliedFirst extends Base {
        get testGetter() {
          return this._testGetter || 'extension layer + test getter';
        }

        set testGetter(v) {
          this._testGetter = v + ' from setter';
        }

        _update() {
          extensionMock('extension 1');
          super._update();
        }
      }
  },
  {
    targetComponent: ['Example'],
    extension: Base =>
      class AppliedSecond extends Base {
        _update() {
          extensionMock('extension 2');
          super._update();
        }
      }
  },
  {
    targetComponent: ['/^Example.*$/'],
    extension: Base =>
      class AppliedThird extends Base {
        _update() {
          extensionMock('extension 3');
          super._update();
        }
      }
  }
];

describe('withExtensions', () => {
  let WithExtensionsComponent,
    WithExtensionsComponent2,
    WithExtensionsComponent3;

  beforeEach(() => {
    context.setTheme({ extensions: extensions });
    [WithExtensionsComponent] = TestUtils.makeCreateComponent(
      withExtensions(Example),
      {}
    )();
    [WithExtensionsComponent2] = TestUtils.makeCreateComponent(
      withExtensions(Example2),
      {}
    )();
    [WithExtensionsComponent3] = TestUtils.makeCreateComponent(
      withExtensions(Example3),
      {}
    )();
  });

  afterEach(() => {
    extensionMock.mockClear();
  });

  it('returns true for _withExtensionsApplied to ensure prototypes are only modified once', () => {
    expect(WithExtensionsComponent.constructor._withExtensionsApplied).toBe(
      true
    );
  });

  it('returns the proper extensions for component1', () => {
    WithExtensionsComponent._update();
    expect(extensionMock.mock.calls[0][0]).toBe('extension 1');
    expect(extensionMock.mock.calls[1][0]).toBe('extension 2');
    expect(extensionMock.mock.calls[2][0]).toBe('extension 3');
    expect(extensionMock.mock.calls[3][0]).toBe('base component');
    expect(WithExtensionsComponent.testGetter).toBe(
      'extension layer + test getter'
    );
  });

  it('returns the proper extensions for components2', () => {
    WithExtensionsComponent2._update();
    expect(extensionMock.mock.calls[0][0]).toBe('extension 1');
    expect(extensionMock.mock.calls[1][0]).toBe('extension 3');
    expect(extensionMock.mock.calls[2][0]).toBe('base component 2');
  });

  it('allows extensions to be applied via RegExp', () => {
    WithExtensionsComponent._update();
    expect(extensionMock).toHaveBeenCalledWith('extension 3');
    extensionMock.mockClear();
    WithExtensionsComponent2._update();
    expect(extensionMock).toHaveBeenCalledWith('extension 3');
    extensionMock.mockClear();
    WithExtensionsComponent3._update();
    expect(extensionMock).toHaveBeenCalledWith('extension 3');
  });

  it('allows extensions to be applied via a string', done => {
    context.on('themeUpdate', () => {
      setTimeout(() => {
        WithExtensionsComponent._update();
        expect(extensionMock).toHaveBeenCalledWith('from string');
        done();
      }, 0);
    });
    context.setTheme({
      extensions: [
        {
          targetComponent: 'Example',
          extension: Base =>
            class WithString extends Base {
              _update() {
                extensionMock('from string');
                super._update();
              }
            }
        }
      ]
    });
  });

  it('allows getters and setters to be overwritten at the extension level', () => {
    WithExtensionsComponent.testGetter = 'test';
    expect(WithExtensionsComponent.testGetter).toBe('test from setter');
  });
});
