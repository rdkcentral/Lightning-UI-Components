import ActionButton from '.';
import TestRenderer from '../lightning-test-renderer';
// styles
import { getHexColor, COLORS_NEUTRAL, COLORS_TEXT } from '../Styles';

const Component = {
  Component: {
    type: ActionButton,
    title: 'Button'
  }
};

describe('ActionButton', () => {
  let testRenderer, button;

  beforeEach(() => {
    testRenderer = TestRenderer.create(Component);
    button = testRenderer.getInstance();
    return button._whenEnabled;
  });

  it('should render', () => {
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should load before recieving data', () => {
    testRenderer = TestRenderer.create({ Component: { type: ActionButton } });
    button = testRenderer.getInstance();
    expect(button._loading.isPlaying()).toBe(true);
  });

  it('should append Button to end of announce context', () => {
    expect(button.announce).toEqual('Button, Button');
  });

  it('should patch in an icon if provided', () => {
    testRenderer = TestRenderer.create({
      Component: { type: ActionButton, title: 'Button', icon: '/path/to/icon' }
    });
    button = testRenderer.getInstance();
    expect(button.icon).toEqual('/path/to/icon');
    expect(button._Icon).toBeDefined();
  });

  it('should update button properties when focused', done => {
    button._focus();
    testRenderer.update();
    let focusColors = {
      text: getHexColor(COLORS_TEXT.dark),
      background: getHexColor(COLORS_NEUTRAL.light2)
    };
    button._whenEnabled.then(() => {
      expect(button._Background.transition('color').targetValue).toBe(
        focusColors.background
      );
      expect(button._Title.transition('color').targetValue).toBe(
        focusColors.text
      );
      expect(button._DropShadow.transition('alpha').targetValue).toBe(1);
      done();
    });
  });

  it('should update properties when unfocused', done => {
    button._unfocus();
    testRenderer.update();
    let focusColors = {
      text: getHexColor(COLORS_TEXT.light),
      background: 0
    };
    button._whenEnabled.then(() => {
      expect(button._Background.transition('color').targetValue).toBe(
        focusColors.background
      );
      expect(button._Title.transition('color').targetValue).toBe(
        focusColors.text
      );
      expect(button._DropShadow.transition('alpha').targetValue).toBe(0);
      done();
    });
  });
});
