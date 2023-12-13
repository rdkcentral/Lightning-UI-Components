/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import lng from '@lightningjs/core';
import {
  makeCreateComponent,
  nextTick
} from '@lightningjs/ui-components-test-utils';
import withExtensions, { getAllCustomDescriptors } from '.';
import { context } from '../../globals';
import { jest } from '@jest/globals';

const extensionMock = jest.fn();
const cleanupMock = jest.fn();

class Example extends lng.Component {
  static get __componentName() {
    return 'Example';
  }

  get testGetter() {
    return this._testGetter;
  }

  set testGetter(v) {
    this._testGetter = v;
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

class BaseWithInit extends lng.Component {
  static get __componentName() {
    return 'BaseWithInit';
  }

  _init() {
    extensionMock('base init');
  }
}

const extensions = [
  {
    targetComponent: ['Example', 'Example2'],
    extension: function (Base) {
      return class AppliedFirst extends Base {
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
        _extensionCleanup() {
          cleanupMock('cleanup 1');
          super._extensionCleanup && super._extensionCleanup();
        }
      };
    }
  },
  {
    targetComponent: ['Example'],
    extension: function (Base) {
      return class AppliedSecond extends Base {
        _update() {
          extensionMock('extension 2');
          super._update();
        }

        _testAddedMethod() {}

        get testAddedAccessor() {
          return this._testAddedAccessor;
        }
        set testAddedAccessor(val) {
          this._testAddedAccessor = val;
        }
        _extensionCleanup() {
          cleanupMock('cleanup 2');
          super._extensionCleanup && super._extensionCleanup();
        }
      };
    }
  },
  {
    targetComponent: ['/^Example.*$/'],
    extension: function (Base) {
      return class AppliedThird extends Base {
        _update() {
          extensionMock('extension 3');
          super._update();
        }
      };
    }
  },
  {
    targetComponent: ['BaseWithInit'],
    extension: function (Base) {
      return class extends Base {
        _init() {
          extensionMock('extension init');
          super._init();
        }
      };
    }
  }
];

describe('withExtensions', () => {
  let withExtensionsComponent,
    withExtensionsComponent2,
    withExtensionsComponent3,
    testRenderer,
    renderTwoInstances,
    testComponentType;

  beforeEach(async () => {
    await context.setTheme({ extensions: extensions });

    [withExtensionsComponent, testRenderer] = makeCreateComponent(
      withExtensions(Example),
      {}
    )();

    [withExtensionsComponent2] = makeCreateComponent(
      withExtensions(Example2),
      {}
    )();
    [withExtensionsComponent3] = makeCreateComponent(
      withExtensions(Example3),
      {}
    )();

    renderTwoInstances = () => {
      const app = testRenderer.getApp();
      const testComponentType = withExtensions(Example);
      const firstInstance = app.stage.c({ type: testComponentType });
      const secondInstance = app.stage.c({ type: testComponentType });
      app.children = [firstInstance, secondInstance];
      app.stage.drawFrame();
      extensionMock.mockClear();
      return [firstInstance, secondInstance];
    };
  });

  afterEach(() => {
    extensionMock.mockClear();
    cleanupMock.mockClear();
  });

  it('returns the theme timestamp for _lastThemeUpdateTimestamp to ensure prototypes are only modified once', () => {
    expect(
      withExtensionsComponent.constructor._lastThemeUpdateTimestamp
    ).toEqual(expect.any(Number));
  });

  it('Calls createExtension method once for  all instances of a component class until the theme is changed', async () => {
    const app = testRenderer.getApp();
    const testComponentType = withExtensions(Example);
    jest.spyOn(testComponentType.prototype, '_createExtension');

    app.stage.c({ type: testComponentType });
    expect(testComponentType.prototype._createExtension).toHaveBeenCalled();

    jest.clearAllMocks();

    app.stage.c({ type: testComponentType });
    expect(testComponentType.prototype._createExtension).not.toHaveBeenCalled();

    await context.setTheme({ extensions: [] });

    app.stage.c({ type: testComponentType });
    expect(testComponentType.prototype._createExtension).toHaveBeenCalled();
    jest.clearAllMocks();
  });

  it('Calls createExtension method once for all reused instances of a class when they are attached after a theme change ', async () => {
    const app = testRenderer.getApp();
    const testComponentType = withExtensions(Example);
    jest.spyOn(testComponentType.prototype, '_createExtension');
    app.children = [];

    const firstInstance = app.stage.c({ type: testComponentType });
    const secondInstance = app.stage.c({ type: testComponentType });
    jest.clearAllMocks();

    await context.setTheme({ extensions: [] });
    app.children = [firstInstance, secondInstance];
    expect(testComponentType.prototype._createExtension).toHaveBeenCalledTimes(
      1
    );

    jest.clearAllMocks();
  });

  it('returns the proper extensions for component1', () => {
    withExtensionsComponent._update();
    expect(extensionMock.mock.calls[0][0]).toBe('extension 1');
    expect(extensionMock.mock.calls[1][0]).toBe('extension 2');
    expect(extensionMock.mock.calls[2][0]).toBe('extension 3');
    expect(extensionMock.mock.calls[3][0]).toBe('base component');
    expect(withExtensionsComponent.testGetter).toBe(
      'extension layer + test getter'
    );
  });

  it('returns the proper extensions for a second instance of component1', () => {
    const secondInstance = renderTwoInstances()[1];

    extensionMock.mockClear();
    secondInstance._update();
    expect(extensionMock.mock.calls[0][0]).toBe('extension 1');
    expect(extensionMock.mock.calls[1][0]).toBe('extension 2');
    expect(extensionMock.mock.calls[2][0]).toBe('extension 3');
    expect(extensionMock.mock.calls[3][0]).toBe('base component');
    expect(secondInstance.testGetter).toBe('extension layer + test getter');
  });

  it('returns the proper extensions for components2', () => {
    withExtensionsComponent2._update();
    expect(extensionMock.mock.calls[0][0]).toBe('extension 1');
    expect(extensionMock.mock.calls[1][0]).toBe('extension 3');
    expect(extensionMock.mock.calls[2][0]).toBe('base component 2');
  });

  it('allows extensions to be applied via RegExp', () => {
    withExtensionsComponent._update();
    expect(extensionMock).toHaveBeenCalledWith('extension 3');
    extensionMock.mockClear();
    withExtensionsComponent2._update();
    expect(extensionMock).toHaveBeenCalledWith('extension 3');
    extensionMock.mockClear();
    withExtensionsComponent3._update();
    expect(extensionMock).toHaveBeenCalledWith('extension 3');
  });

  it('allows extensions to be applied via a string', async () => {
    await context.setTheme({
      extensions: [
        {
          targetComponent: 'Example',
          extension: function (Base) {
            return class WithString extends Base {
              _update() {
                extensionMock('from string');
                super._update();
              }
            };
          }
        }
      ]
    });
    await nextTick();
    withExtensionsComponent._update();
    expect(extensionMock).toHaveBeenCalledWith('from string');
  });

  it('allows getters and setters to be overwritten at the extension level', () => {
    withExtensionsComponent.testGetter = 'test';
    expect(withExtensionsComponent.testGetter).toBe('test from setter');
  });

  it('calls _init hook of the extension and base class for both the first instance and later instances', () => {
    extensionMock.mockClear();

    makeCreateComponent(withExtensions(BaseWithInit), {})();
    expect(extensionMock.mock.calls[0][0]).toBe('extension init');
    expect(extensionMock.mock.calls[1][0]).toBe('base init');

    extensionMock.mockClear();

    makeCreateComponent(withExtensions(BaseWithInit), {})();
    expect(extensionMock.mock.calls[0][0]).toBe('extension init');
    expect(extensionMock.mock.calls[1][0]).toBe('base init');
  });

  it('tracks added and overridden props', () => {
    expect(withExtensionsComponent.addedProps.sort()).toEqual(
      ['_testAddedMethod', 'testAddedAccessor', '_extensionCleanup'].sort()
    );

    expect(withExtensionsComponent.overRiddenProps.sort()).toEqual(
      ['_update', 'testGetter'].sort()
    );
  });

  it('calls cleanup functions in proper order', async () => {
    await context.setTheme({ extensions: [] }); // remove extension

    expect(cleanupMock.mock.calls[0][0]).toBe('cleanup 1');
    expect(cleanupMock.mock.calls[1][0]).toBe('cleanup 2');
  });

  it('removes overridden extension functions on theme change from all instances', async () => {
    const [firstInstance, secondInstance] = renderTwoInstances();

    await context.setTheme({ extensions: [] }); // remove extension
    await nextTick();
    firstInstance._update();
    expect(extensionMock.mock.calls[0][0]).toBe('base component');
    expect(extensionMock).toHaveBeenCalledTimes(1);
    extensionMock.mockClear();

    secondInstance._update();
    expect(extensionMock.mock.calls[0][0]).toBe('base component');
    expect(extensionMock).toHaveBeenCalledTimes(1);
  });

  it('removes added methods on theme chage from all instances', async () => {
    const [firstInstance, secondInstance] = renderTwoInstances();

    await context.setTheme({ extensions: [] }); // remove extension
    await nextTick();
    expect(firstInstance._testAddedMethod).toBeUndefined();
    expect(secondInstance._testAddedMethod).toBeUndefined();
  });

  it('removes extension getters and setters on theme change', async () => {
    await context.setTheme({ extensions: [] }); // remove extension
    await nextTick();
    withExtensionsComponent.testGetter = 'test';
    expect(withExtensionsComponent.testGetter).toBe('test');
  });

  it('cleans up extensions even if component instances have been detached and reused', async () => {
    const app = testRenderer.getApp();
    const [firstInstance, secondInstance] = renderTwoInstances();

    // detach instances
    app.children = [];
    app.stage.drawFrame();

    // change theme
    await context.setTheme({ extensions: [] }); // remove extension
    await nextTick();

    expect(firstInstance._instanceNeedsReset()).toBe(true);
    expect(secondInstance._instanceNeedsReset()).toBe(true);

    // re-attach instances
    app.children = [firstInstance, secondInstance];

    expect(firstInstance._testAddedMethod).toBeUndefined();
    expect(secondInstance._testAddedMethod).toBeUndefined();
  });
});

describe('getAllCustomDescriptors', () => {
  it('Does not return base Object or Object.prototype property descriptors', () => {
    class TestClass {}
    const testClassInstance = new TestClass();

    expect(getAllCustomDescriptors(testClassInstance)).toEqual({
      constructor: {
        writable: true,
        enumerable: false,
        configurable: true,
        value: TestClass
      }
    });
  });

  it('Aggregates property descriptors throughout the prototype chain', () => {
    class BaseClass {
      constructor() {}
      baseMethod() {}
    }

    class TestClass extends BaseClass {
      testMethod() {}
    }

    const testClassInstance = new TestClass();

    expect(getAllCustomDescriptors(testClassInstance)).toMatchObject({
      constructor: {
        writable: true,
        enumerable: false,
        configurable: true,
        value: TestClass
      },
      baseMethod: {
        writable: true,
        enumerable: false,
        configurable: true,
        value: BaseClass.prototype.baseMethod
      },
      testMethod: {
        writable: true,
        enumerable: false,
        configurable: true,
        value: TestClass.prototype.testMethod
      }
    });
  });
});
