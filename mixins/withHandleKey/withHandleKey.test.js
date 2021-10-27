import lng from '@lightningjs/core';
import TestUtils from '../../test/lightning-test-utils';
import withHandleKey from '.';
import { mockContext, resetContext } from '../../test/MockContextUtils';

describe('withHandleKey', () => {
  let HandleKeyComponent, testRenderer, mockedContext;
  class Example extends lng.Component {}

  beforeAll(() => {
    mockedContext = mockContext();
  });

  beforeEach(() => {
    [HandleKeyComponent, testRenderer] = TestUtils.makeCreateComponent(
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

  it('fires an event when a selected value changes', () => {
    jest.spyOn(HandleKeyComponent, 'fireAncestors');
    testRenderer.keyPress('Down');
    expect(HandleKeyComponent.fireAncestors).toBeCalledWith(
      '$onDown',
      HandleKeyComponent,
      {
        key: 'Down',
        preventDefault: expect.anything(),
        type: 'keydown'
      }
    );
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

  it('fires an event when a selected value changes for keyRelease', () => {
    jest.spyOn(HandleKeyComponent, 'fireAncestors');
    testRenderer.keyRelease('Down');
    expect(HandleKeyComponent.fireAncestors).toBeCalledWith(
      '$onDownRelease',
      HandleKeyComponent,
      {
        key: 'Down',
        preventDefault: expect.anything(),
        type: 'keyup'
      }
    );
  });

  it('fallback to keymap key resolution', () => {
    HandleKeyComponent.onSideways = jest.fn();
    testRenderer.keyPress({ key: '', keyCode: 777 });
    expect(HandleKeyComponent.onSideways).toHaveBeenCalled();
  });
});
