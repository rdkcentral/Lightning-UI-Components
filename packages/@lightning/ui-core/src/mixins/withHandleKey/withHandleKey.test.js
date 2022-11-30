import lng from '@lightningjs/core';
import { jest } from '@jest/globals';
import {
  makeCreateComponent,
  mockContext,
  resetContext
} from '@lightning/ui-test-utils';
import context from '../../globals/context';
import withHandleKey from './index.js';

describe('withHandleKey', () => {
  let HandleKeyComponent, testRenderer, mockedContext;
  class Example extends lng.Component {}

  beforeAll(() => {
    mockedContext = mockContext(context);
  });

  beforeEach(() => {
    [HandleKeyComponent, testRenderer] = makeCreateComponent(
      withHandleKey(Example),
      {},
      {
        keys: {
          777: 'Sideways'
        }
      }
    )();
  });

  afterEach(() => {
    HandleKeyComponent = null;
  });

  afterAll(() => {
    resetContext();
  });

  it('extends the base class', () => {
    expect(HandleKeyComponent.constructor.name).toBe('Example');
  });

  it('calls onEnter on key press down', () => {
    HandleKeyComponent.onDown = jest.fn();
    testRenderer.keyPress('Down');
    expect(HandleKeyComponent.onDown).toHaveBeenCalled();
  });

  it('calls keyMeyricsCallback with metricsPayload on key press down', () => {
    HandleKeyComponent.onDown = jest.fn();
    HandleKeyComponent.metricsPayload = { id: 123, saved: true };
    testRenderer.keyPress('Down');
    expect(HandleKeyComponent.onDown).toHaveBeenCalled();
    expect(mockedContext.keyMetricsCallback).toHaveBeenCalledTimes(1);
    expect(mockedContext.keyMetricsCallback).toHaveBeenNthCalledWith(
      1,
      'Down',
      {
        id: 123,
        saved: true
      }
    );
  });

  it('does not call onEnter on key down up', () => {
    HandleKeyComponent.onDown = jest.fn();
    testRenderer.keyRelease('Down');
    expect(HandleKeyComponent.onDown).not.toHaveBeenCalled();
  });

  it('call onEnterRelease on key enter up', () => {
    HandleKeyComponent.onEnterRelease = jest.fn();
    testRenderer.keyRelease('Enter');
    expect(HandleKeyComponent.onEnterRelease).toHaveBeenCalled();
  });

  it('does not call onEnterRelease on key enter down', () => {
    HandleKeyComponent.onEnterRelease = jest.fn();
    testRenderer.keyPress('Enter');
    expect(HandleKeyComponent.onEnterRelease).not.toHaveBeenCalled();
  });

  it('fallback to keymap key resolution', () => {
    HandleKeyComponent.onSideways = jest.fn();
    testRenderer.keyPress({ key: '', keyCode: 777 });
    expect(HandleKeyComponent.onSideways).toHaveBeenCalled();
  });
});
