import ActionButton, { ACTION_BUTTON_THEME } from '.';
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

  it("should update it's shadow width for long titles", done => {
    [actionbutton, testRenderer] = createActionButton({
      title:
        'This is a really long title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title title'
    });
    // default width
    expect(actionbutton.w).toBe(410);
    setTimeout(() => {
      expect(actionbutton.w).toBe(473);
      actionbutton._DropShadow.loadTexture();
      expect(actionbutton._DropShadow.texture._lookupId).toEqual(
        'shadow457,56,16,32,8,8,8,8'
      );
      done();
    });
  });

  describe('style', () => {
    it('should set background to stroke', () => {
      [actionbutton, testRenderer] = createActionButton({
        backgroundType: 'stroke'
      });
      expect(actionbutton.background).toBe(0);
      expect(actionbutton.stroke).toEqual(
        expect.objectContaining({ color: getHexColor('ECECF2'), weight: 2 })
      );
    });
    it('should set background to fill', () => {
      [actionbutton, testRenderer] = createActionButton({
        backgroundType: 'fill'
      });
      expect(actionbutton.background).toBe(0xff232328);
      expect(actionbutton.stroke.color).toBe(0);
    });
    it('should set background to float', () => {
      [actionbutton, testRenderer] = createActionButton({
        backgroundType: 'float'
      });
      expect(actionbutton.background).toBe(0);
      expect(actionbutton.stroke.color).toBe(0);
    });
    it('should default background to float', () => {
      [actionbutton, testRenderer] = createActionButton({
        backgroundType: 'orange'
      });
      expect(actionbutton.background).toBe(0);
      expect(actionbutton.stroke.color).toBe(0);
    });
  });

  describe('icon', () => {
    it('should patch in an icon', () => {
      [actionbutton, testRenderer] = createActionButton({
        title: 'Action Button',
        icon
      });
      expect(actionbutton.icon).toEqual(
        expect.objectContaining({ src: icon, size: 32, spacing: 16 })
      );
    });
  });

  describe('loading', () => {
    it('should load if no title is set', () => {
      [actionbutton, testRenderer] = createActionButton({});
      expect(actionbutton._loading.isPlaying()).toBe(true);
    });
    it('should stop loading once title is set', done => {
      [actionbutton, testRenderer] = createActionButton({});
      expect(actionbutton._loading.isPlaying()).toBe(true);
      actionbutton.title = 'Action Button';
      actionbutton._whenEnabled.then(() => {
        testRenderer.update();
        expect(actionbutton._loading.isPlaying()).toBe(false);
        done();
      });
    });
  });

  describe('focus', () => {
    it('should update color and scale on focus', () => {
      actionbutton._focus();
      testRenderer.update();
      expect(actionbutton.color).toBe(getHexColor('ECECF2'));
      expect(actionbutton.scale).toBe(1.12);
      expect(actionbutton._Title.color).toBe(4060086272);
    });

    it('should update color and scale on unfocus', () => {
      actionbutton._unfocus();
      testRenderer.update();
      expect(actionbutton.color).toBe(0);
      expect(actionbutton.scale).toBe(1);
      expect(actionbutton._Title.color).toBe(0xf2ffffff);
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
