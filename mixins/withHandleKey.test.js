import lng from 'wpe-lightning';
import TestUtils from '../components/lightning-test-utils';
import withHandleKey from './withHandleKey';

const duplicate = (object, quantity) => Array.apply(null, { length: quantity }).map(() => Object.assign({}, object));

describe('withHandleKey', () => {
  let HandleKeyComponent, testRenderer;
  class Example extends lng.Component {
  }

  beforeEach(() => {
    [HandleKeyComponent, testRenderer] = TestUtils.makeCreateComponent(withHandleKey(Example))();
  });

  afterEach(() => {
    HandleKeyComponent = null;
  });

  it('extends the base class', () => {
    expect(HandleKeyComponent.constructor.name).toBe('Example');
  });

  it('calls onEnter on key press down', () => {
    HandleKeyComponent.onDown = jest.fn();
    testRenderer.keyPress('Down');
    expect(HandleKeyComponent.onDown).toHaveBeenCalled();
  });

  it('does not call onEnter on key down up', () => {
    HandleKeyComponent.onDown = jest.fn();
    testRenderer.keyRelease('Down');
    expect(HandleKeyComponent.onDown).not.toHaveBeenCalled();
  });

  it('fires an event when a selected value changes', () => {
    jest.spyOn(HandleKeyComponent, 'fireAncestors');
    testRenderer.keyPress('Down');
    expect(HandleKeyComponent.fireAncestors).toBeCalledWith('$onDown', {
      key: 'Down',
      preventDefault: expect.anything(),
      type: 'keydown'
    }, HandleKeyComponent);
  });
});
