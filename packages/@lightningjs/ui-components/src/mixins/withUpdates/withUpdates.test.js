import lng from '@lightningjs/core';
import { makeCreateComponent, nextTick } from '@lightningjs/ui-test-utils';
import { jest } from '@jest/globals';
import withUpdates from './index.js';
import { context } from '../../globals/index.js';
const updateMock = jest.fn();

describe('withUpdates', () => {
  let WithUpdatesComponent;
  class Example extends lng.Component {
    static get __componentName() {
      return 'Example';
    }

    static get properties() {
      return ['title', 'score'];
    }

    _update() {
      updateMock();
    }
  }

  beforeEach(() => {
    [WithUpdatesComponent] = makeCreateComponent(withUpdates(Example))();
  });

  afterEach(() => {
    WithUpdatesComponent = null;
  });

  it('extends the base class', () => {
    expect(WithUpdatesComponent.constructor.name).toBe('Example');
  });

  it('calls _update when enabled', () => {
    expect(updateMock).toHaveBeenCalled();
  });

  it('calls _update when a property changes', done => {
    updateMock.mockClear();
    WithUpdatesComponent.title = 'Test';
    setTimeout(() => {
      expect(updateMock).toHaveBeenCalled();
      done();
    });
  });

  it('debounces the _update call', done => {
    updateMock.mockClear();
    WithUpdatesComponent.title = 'Test';
    WithUpdatesComponent.score = 5;
    setTimeout(() => {
      expect(updateMock).toHaveBeenCalledTimes(1);
      done();
    });
  });

  it('allows custom getter', () => {
    WithUpdatesComponent._getTitle = () => {
      return 'Custom Getter';
    };
    WithUpdatesComponent.title = 'Test';
    expect(WithUpdatesComponent.title).toEqual('Custom Getter');
  });

  it('allows custom setter', () => {
    WithUpdatesComponent._setTitle = value => {
      return `${value} Custom Getter`;
    };
    WithUpdatesComponent.title = 'Test';
    expect(WithUpdatesComponent.title).toEqual('Test Custom Getter');
  });

  it('requestUpdate logs error when asyncronous _update rejects', async () => {
    const error = new Error('Error');
    WithUpdatesComponent._update = async function () {
      throw error;
    };
    const spy = jest.spyOn(context, 'error');
    WithUpdatesComponent.requestUpdate(true);
    await nextTick();
    expect(spy).toHaveBeenCalledWith(
      "asyncronous _update() error in 'Example'",
      WithUpdatesComponent,
      error
    );
    jest.clearAllMocks();
  });
});
