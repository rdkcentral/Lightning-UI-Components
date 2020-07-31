import Button from '.';
import { getHexColor } from '../Styles';
import TestUtils from '../lightning-test-utils';

const icon = TestUtils.pathToDataURI('assets/images/ic_lightning_white_32.png');

const createButton = TestUtils.makeCreateComponent(Button);

describe('Button', () => {
  let button, testRenderer;
  beforeEach(() => {
    [button, testRenderer] = createButton({ title: 'Button' });
    testRenderer.update();
  });
  afterEach(() => {
    button = null;
    testRenderer = null;
  });

  it('should render', () => {
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should append Button to end of announce context', () => {
    expect(button.announce).toEqual('Button, Button');
  });

  // TODO: Passes but the test renderer is not pulling in fonts
  // Issue #29
  it('should grow width dynamically if text renders longer than default size', done => {
    [button, testRenderer] = createButton({
      title:
        'This is a button with a really long title This is a button with a really long title This is a button with a really long title This is a button with a really long title This is a button with a really long title'
    });
    button._Title.on('txLoaded', () => {
      expect(button._Title.renderWidth).toBeGreaterThan(150);
      done();
    });
  });

  describe('focus', () => {
    it('has a default unfocus background', () => {
      expect(button.color).toBe(getHexColor('1f1f1f'));
    });
    it('has a focus background', () => {
      button._focus();
      testRenderer.update();
      expect(button.color).toBe(getHexColor('ffffff'));
    });
    it('resets colors on unfocus', () => {
      button._focus();
      testRenderer.update();

      button._unfocus();
      testRenderer.update();
      expect(button.color).toBe(getHexColor('1f1f1f'));
    });
  });

  describe('stroke', () => {
    it('should set a stroke', done => {
      [button, testRenderer] = createButton({
        stroke: { weight: 5, color: 0xff74ccfc }
      });
      button._whenEnabled.then(() => {
        expect(button._stroke.color).toBe(getHexColor('74ccfc'));
        expect(button._stroke.weight).toBe(5);
        expect(button._Stroke.color).toBe(getHexColor('74ccfc'));
        done();
      });
    });
    it('should default a stroke color if none is passed', done => {
      [button, testRenderer] = createButton({ stroke: { weight: 3 } });
      button._whenEnabled.then(() => {
        expect(button._stroke.color).toBe(getHexColor('00ff00'));
        expect(button._stroke.weight).toBe(3);
        expect(button._Stroke.color).toBe(getHexColor('00ff00'));
        done();
      });
    });

    it('should default a stroke weight if none is passed', done => {
      [button, testRenderer] = createButton({ stroke: { color: 0xff74ccfc } });
      button._whenEnabled.then(() => {
        expect(button._stroke.color).toBe(getHexColor('74ccfc'));
        expect(button._stroke.weight).toBe(2);
        expect(button._Stroke.color).toBe(getHexColor('74ccfc'));
        done();
      });
    });
  });

  describe('icon', () => {
    it('should patch in an icon if provided', () => {
      [button, testRenderer] = createButton({ icon: { src: icon } });
      expect(button._Icon).toBeDefined();
    });

    it('should default icon props', () => {
      [button, testRenderer] = createButton({ icon: { src: icon } });
      expect(button._icon.size).toBe(20);
      expect(button._icon.spacing).toBe(5);
      expect(button._icon.color).toBe(getHexColor('ffffff'));
    });

    it('should set icon sizing', () => {
      [button, testRenderer] = createButton({
        icon: {
          src: icon,
          size: 25,
          spacing: 10,
          color: 0xff00ff00
        }
      });
      expect(button._icon.size).toBe(25);
      expect(button._icon.spacing).toBe(10);
      expect(button._icon.color).toBe(getHexColor('00ff00'));
    });
  });

  describe('loading', () => {
    let loading = {
      tag: 'this',
      animation: {
        duration: 1,
        repeat: -1,
        stopMethod: 'immediate',
        actions: [{ p: 'alpha', v: { 0: 0.5, 0.5: 1, 1: 0.5 } }]
      }
    };
    describe('should set a loading state', () => {
      [button, testRenderer] = createButton({ loading });
      expect(button._loadingAnimation.isPlaying()).toBe(true);
    });
    describe('should set stop loading when given a title', () => {
      [button, testRenderer] = createButton({ loading });
      expect(button._loadingAnimation.isPlaying()).toBe(true);
      button.title = 'Hello';
      testRenderer.update();
      expect(button._loadingAnimation.isPlaying()).toBe(false);
    });
    describe('should set loading on any tag', () => {
      [button, testRenderer] = createButton({
        loading: { ...loading, tag: 'Content' }
      });
      expect(button._loadingAnimation.element.ref).toBe('Content');
    });
  });

  describe('theme', () => {
    let theme = {
      radius: 4,
      text: { fontSize: 28 },
      w: 200,
      h: 50,
      unfocus: {
        background: 0xffffc5c5,
        text: 0xffd22727
      },
      focus: {
        background: 0xffd22727,
        text: 0xffffc5c5
      }
    };
    it('should get the default theme', () => {
      expect(button.color).toBe(getHexColor('1f1f1f'));
      expect(button._Title.color).toBe(getHexColor('ffffff'));
      expect(button._Title.text.fontSize).toBe(20);
      expect(button.h).toBe(40);
      expect(button.w).toBe(150);
      expect(button.radius).toBe(0);
    });

    it('overrrides default theme', () => {
      [button, testRenderer] = createButton({ theme });
      expect(button.color).toBe(getHexColor('ffc5c5'));
      expect(button._Title.color).toBe(getHexColor('d22727'));
      expect(button._Title.text.fontSize).toBe(28);
      expect(button.h).toBe(50);
      expect(button.w).toBe(200);
      expect(button.radius).toBe(4);
    });

    it('sets a stroke in the theme', done => {
      [button, testRenderer] = createButton({
        theme: {
          ...theme,
          stroke: { weight: 5, color: 0xff74ccfc }
        }
      });
      button._whenEnabled.then(() => {
        expect(button._stroke.color).toBe(getHexColor('74ccfc'));
        expect(button._stroke.weight).toBe(5);
        expect(button._Stroke.color).toBe(getHexColor('74ccfc'));
        done();
      });
    });

    it('uses props over theme', () => {
      [button, testRenderer] = createButton({
        theme,
        h: 25,
        w: 120,
        radius: 10
      });
      expect(button.h).toBe(25);
      expect(button.w).toBe(120);
      expect(button.radius).toBe(10);
    });
  });
});
