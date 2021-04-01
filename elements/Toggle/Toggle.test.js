import TestUtils from '../../test/lightning-test-utils';
import Toggle from '.';

const createToggle = TestUtils.makeCreateComponent(Toggle);

describe('Toggle', () => {
  let toggle, testRenderer;

  beforeEach(() => {
    [toggle, testRenderer] = createToggle();
  });
  afterEach(() => {
    toggle = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  describe('#toggle', () => {
    it('changes checked state', () => {
      expect(toggle.checked).toEqual(false);

      toggle.toggle();
      expect(toggle.checked).toEqual(true);

      toggle.toggle();
      expect(toggle.checked).toEqual(false);
    });

    it('renders checked state', () => {
      toggle.toggle();
      testRenderer.update();
      const tree = testRenderer.toJSON(2);
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Key handling', () => {
    it('Enter press toggles', () => {
      const spy = spyOn(toggle, 'toggle');

      // TODO: this should work
      // testRenderer.keyPress('Enter')

      toggle._handleEnter();
      expect(spy).toBeCalled();
    });
  });
});
