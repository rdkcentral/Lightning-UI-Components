import TestUtils from '../../test/lightning-test-utils';
import Icon from '.';

const createIcon = TestUtils.makeCreateComponent(Icon, {
  w: 50,
  h: 50
});

describe('Icon', () => {
  it('renders an icon path', () => {
    // eslint-disable-next-line no-unused-vars
    const [_, testRenderer] = createIcon({
      icon: 'assets/images/ic_lightning_white_32.png'
    });
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should render nothing when there is a texture error', () => {
    const [icon] = createIcon({
      icon: 'assets/images/circle.svg'
    });
    expect(icon.texture).not.toBeNull();
    icon.emit('txError');
    expect(icon.texture).toBeNull();
  });

  it('renders an icon with color', () => {
    const iconColor = 4281214016;
    const [icon] = createIcon({
      icon: 'assets/images/ic_lightning_white_32.png',
      color: iconColor
    });
    expect(icon.color).toBe(iconColor);
  });

  it('renders an icon with a different width', () => {
    const w = 80;
    const [icon] = createIcon({
      icon: 'assets/images/ic_lightning_white_32.png',
      w: w
    });
    expect(icon.w).toBe(w);
  });

  it('renders an icon with a different height', () => {
    const h = 90;
    const [icon] = createIcon({
      icon: 'assets/images/ic_lightning_white_32.png',
      h: h
    });
    expect(icon.h).toBe(h);
  });

  describe('handleTxtError', () => {
    let icon;
    beforeEach(() => {
      jest.clearAllMocks();
      Icon.prototype._handleTxtError = jest.fn();
      [icon] = createIcon({
        w: 60,
        h: 60,
        icon: 'bad/path'
      });
    });

    it('is fired on init', () => {
      expect(icon._handleTxtError).not.toBeCalledWith();
      icon._handleTxtError();
      expect(icon._handleTxtError).toBeCalledWith();
    });
  });

  it('renders an svg path', () => {
    // eslint-disable-next-line no-unused-vars
    const [_, testRenderer] = createIcon({
      icon: 'assets/images/circle.svg'
    });
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('renders an inline svg', () => {
    const svg =
      '<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100"><circle cx="50" cy="50" r="40"/></svg>';
    // eslint-disable-next-line no-unused-vars
    const [_, testRenderer] = createIcon({
      icon: svg
    });
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('handles invalid icon sources', () => {
    // eslint-disable-next-line no-unused-vars
    const [_, testRenderer] = createIcon({ icon: 'bad/path' });
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });
});
