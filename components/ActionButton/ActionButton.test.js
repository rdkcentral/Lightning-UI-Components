import ActionButton, { ACTION_BUTTON_THEME } from '.';
import TestRenderer from '../lightning-test-renderer';
import TestUtils from '../lightning-test-utils';
import { getHexColor } from '../Styles';

const icon = TestUtils.pathToDataURI('assets/images/ic_lightning_white_32.png');

const createActionButton = TestUtils.makeCreateComponent(ActionButton);

describe('ActionButton', () => {
  let actionbutton, testRenderer;
  beforeEach(() => {
    [actionbutton, testRenderer] = createActionButton({
      title: 'Action Button'
    });
    testRenderer.update();
  });
  afterEach(() => {
    actionbutton = null;
    testRenderer = null;
  });

  it('should render', () => {
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('style', () => {
    it('should set background to stroke', () => {
      [actionbutton, testRenderer] = createActionButton({
        background: 'stroke'
      });
      expect(actionbutton._Button.color).toBe(0);
      expect(actionbutton._Button._stroke).toEqual(
        expect.objectContaining({ color: getHexColor('ECECF2'), weight: 2 })
      );
    });
    it('should set background to fill', () => {
      [actionbutton, testRenderer] = createActionButton({ background: 'fill' });
      expect(actionbutton._Button.color).toBe(getHexColor('232328', 48));
      expect(actionbutton._Button._stroke).toBeUndefined();
    });
    it('should set background to float', () => {
      [actionbutton, testRenderer] = createActionButton({
        background: 'float'
      });
      expect(actionbutton._Button.color).toBe(0);
      expect(actionbutton._Button._stroke).toBeUndefined();
    });
    it('should default background to float', () => {
      [actionbutton, testRenderer] = createActionButton({
        background: 'orange'
      });
      expect(actionbutton._Button.color).toBe(0);
      expect(actionbutton._Button._stroke).toBeUndefined();
    });
  });

  describe('icon', () => {
    it('should patch in an icon', done => {
      [actionbutton, testRenderer] = createActionButton({
        title: 'Action Button',
        icon
      });
      actionbutton._whenEnabled.then(() => {
        expect(actionbutton._icon).toBe(icon);
        expect(actionbutton._Button._icon).toEqual(
          expect.objectContaining({ src: icon, size: 32, spacing: 16 })
        );
        done();
      });
    });
  });

  describe('loading', () => {
    it('should load if no title is set', () => {
      [actionbutton, testRenderer] = createActionButton({});
      expect(actionbutton._loading.isPlaying()).toBe(true);
    });
    it('should stop loading once title is set', () => {
      [actionbutton, testRenderer] = createActionButton({});
      expect(actionbutton._loading.isPlaying()).toBe(true);
      actionbutton.title = 'Action Button';
      testRenderer.update();
      expect(actionbutton._loading.isPlaying()).toBe(false);
    });
  });

  describe('focus', () => {
    it('should set focus on the Button tag', () => {
      expect(actionbutton._getFocused()).toBe(actionbutton._Button);
    });

    it('should provide patch funtion in theme', () => {
      expect(ACTION_BUTTON_THEME.unfocus.patch).toBeInstanceOf(Function);
      expect(ACTION_BUTTON_THEME.focus.patch).toBeInstanceOf(Function);
    });

    it('should update color and scale on focus', () => {
      actionbutton._Button._focus();
      testRenderer.update();
      expect(actionbutton._Button.color).toBe(getHexColor('ECECF2'));
      expect(actionbutton._Button.scale).toBe(1.12);
      expect(actionbutton._Button._Title.color).toBe(getHexColor('070707'));
    });

    it('should update color and scale on unfocus', () => {
      actionbutton._Button._unfocus();
      testRenderer.update();
      expect(actionbutton._Button.color).toBe(0);
      expect(actionbutton._Button.scale).toBe(1);
      expect(actionbutton._Button._Title.color).toBe(getHexColor('FAFAFA'));
    });

    it('should alpha in drop shadow and scale up on focus', () => {
      actionbutton._focus();
      testRenderer.update();
      expect(actionbutton._DropShadow.alpha).toBe(1);
      expect(actionbutton.alpha).toBe(1);
    });
    it('should alpha out drop shadow on unfocus', () => {
      actionbutton._unfocus();
      testRenderer.update();
      expect(actionbutton._DropShadow.alpha).toBe(0);
    });
  });
});
