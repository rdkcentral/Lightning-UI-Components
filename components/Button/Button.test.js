import Button from '.';
import { getHexColor } from '../Styles';
import withStyles from '../../mixins/withStyles';
import TestUtils from '../lightning-test-utils';

const icon = TestUtils.pathToDataURI('assets/images/ic_lightning_white_32.png');

const createButton = TestUtils.makeCreateComponent(
  Button,
  {},
  { focused: false }
);

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

  it('should grow a stroke if given dynamically if text renders longer than default size', done => {
    [button, testRenderer] = createButton({
      title:
        'This is a button with a really long title This is a button with a really long title This is a button with a really long title This is a button with a really long title This is a button with a really long title',
      stroke: { weight: 2 }
    });
    button._Title.on('txLoaded', () => {
      expect(button._Title.renderWidth).toBeGreaterThan(150);
      done();
    });
  });

  describe('announcer', () => {
    it('should use the title as the default label', () => {
      expect(button.label).toEqual('Button');
    });

    it('should append Button to end of announce context', () => {
      expect(button.announce).toEqual('Button, Button');
    });

    it('should use the label as the announce context', () => {
      [button, testRenderer] = createButton({
        title: 'Button',
        label: 'Longer Button Label'
      });
      testRenderer.update();
      expect(button.announce).toEqual('Longer Button Label, Button');
    });
  });

  describe('focus', () => {
    it('has a default unfocus background', () => {
      expect(button.color).toBe(getHexColor('1f1f1f'));
    });
    it('has a focus background', done => {
      button._smooth = false;
      button._focus();
      button._whenEnabled.then(() => {
        expect(button.color).toBe(getHexColor('ffffff'));
        done();
      });
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
        stroke: true,
        strokeColor: 0xff74ccfc,
        strokeWeight: 5
      });
      button._whenEnabled.then(() => {
        expect(button._strokeColor).toBe(getHexColor('74ccfc'));
        expect(button._strokeWeight).toBe(5);
        expect(button._Stroke.color).toBe(getHexColor('74ccfc'));
        done();
      });
    });

    it('should default a stroke color if none is passed', done => {
      [button, testRenderer] = createButton({
        stroke: true,
        strokeWeight: 3
      });

      button._whenEnabled.then(() => {
        expect(button.strokeColor).toBe(getHexColor('000000', 0));
        expect(button.strokeWeight).toBe(3);
        expect(button._Stroke.color).toBe(getHexColor('000000', 0));
        done();
      });
    });

    it('should default a stroke weight if none is passed', done => {
      [button, testRenderer] = createButton({
        stroke: true,
        strokeColor: 0xff74ccfc
      });
      button._whenEnabled.then(() => {
        expect(button.strokeColor).toBe(getHexColor('74ccfc'));
        expect(button.strokeWeight).toBe(2);
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

  describe('styles', () => {
    it('should get the default styles', () => {
      expect(button.color).toBe(getHexColor('1f1f1f'));
      expect(button._Title.color).toBe(getHexColor('ffffff'));
      expect(button._Title.text.fontSize).toBe(20);
      expect(button.h).toBe(40);
      expect(button.w).toBe(150);
      expect(button.radius).toBe(0);
    });

    it('overrides default styles', done => {
      const styles = {
        background: { color: 0xffd22727 },
        radius: 4,
        text: { fontSize: 28, color: 0xffffc5c5 },
        w: 200,
        h: 50
      };
      const createButtonWithStyles = TestUtils.makeCreateComponent(
        withStyles(Button, styles),
        {},
        { focused: false }
      );
      [button] = createButtonWithStyles({
        title: 'Button'
      });

      button._whenEnabled.then(() => {
        expect(button.color).toBe(styles.background.color);
        expect(button._Title.text.fontSize).toBe(28);
        expect(button._Title.color).toBe(styles.text.color);
        expect(button.h).toBe(50);
        expect(button.w).toBe(200);
        expect(button.radius).toBe(4);
        done();
      });
    });

    it('sets a stroke in the theme', done => {
      const styles = {
        stroke: { weight: 5, color: 0xff74ccfc }
      };
      const createButtonWithStyles = TestUtils.makeCreateComponent(
        withStyles(Button, styles),
        {},
        { focused: false }
      );
      [button] = createButtonWithStyles(styles);

      button._whenEnabled.then(() => {
        expect(button._stroke.color).toBe(styles.stroke.color);
        expect(button._Stroke.color).toBe(styles.stroke.color);
        expect(button._stroke.weight).toBe(styles.stroke.weight);
        done();
      });
    });

    it('uses props over theme', () => {
      const styles = {
        background: { color: 0xffd22727 },
        radius: 4,
        text: { fontSize: 28, color: 0xffffc5c5 },
        minWidth: 200,
        h: 50
      };
      const createButtonWithStyles = TestUtils.makeCreateComponent(
        withStyles(Button, styles)
      );

      [button] = createButtonWithStyles({
        h: 25,
        minWidth: 120,
        radius: 10
      });
      expect(button.h).toBe(25);
      expect(button.w).toBe(120);
      expect(button.radius).toBe(10);
    });
  });
});
