import { makeCreateComponent } from '../../../test/lightning-test-utils.js';
import lightning from '../../assets/images/ic_lightning_white_32.png';
import Icon from './index.js';
import { jest } from '@jest/globals';

const createIcon = makeCreateComponent(Icon, {
  w: 50,
  h: 50
});

const emitTxLoaded = icon => {
  // fileMock.js changes all files to empty string, so txLoaded will never be called
  // this emits the txLoaded event directly from the Icon class
  icon._eventFunction.txLoaded();
};

describe('Icon', () => {
  it('renders an icon path', () => {
    // eslint-disable-next-line no-unused-vars
    const [_, testRenderer] = createIcon({
      icon: 'src/assets/images/ic_lightning_white_32.png'
    });
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should render nothing when there is a texture error', () => {
    const [icon] = createIcon({
      icon: 'src/assets/images/circle.svg'
    });
    expect(icon.texture).not.toBeNull();
    icon.emit('txError');
    expect(icon.texture).toBeNull();
  });

  it('renders an icon with color', () => {
    const iconColor = 4281214016;
    const [icon] = createIcon({
      icon: 'src/assets/images/ic_lightning_white_32.png',
      color: iconColor
    });
    expect(icon.color).toBe(iconColor);
  });

  it('renders an icon with a different width', () => {
    const w = 80;
    const [icon] = createIcon({
      icon: 'src/assets/images/ic_lightning_white_32.png',
      w: w
    });
    expect(icon.w).toBe(w);
  });

  it('renders an icon with a different height', () => {
    const h = 90;
    const [icon] = createIcon({
      icon: 'src/assets/images/ic_lightning_white_32.png',
      h: h
    });
    expect(icon.h).toBe(h);
  });

  it('should update an icon size to its finalW and finalH', () => {
    const size = 90;
    const finalSize = 100;
    const [icon] = createIcon({
      icon: 'assets/images/ic_lightning_white_32.png',
      w: size,
      h: size
    });
    jest.spyOn(icon, 'finalW', 'get').mockReturnValue(finalSize);
    jest.spyOn(icon, 'finalH', 'get').mockReturnValue(finalSize);
    jest.spyOn(icon, 'signal');
    jest.spyOn(icon, 'fireAncestors');

    expect(icon.signal).not.toHaveBeenCalledWith('itemChanged');
    expect(icon.fireAncestors).not.toHaveBeenCalledWith('$itemChanged');

    emitTxLoaded(icon);

    expect(icon.h).toBe(finalSize);
    expect(icon.h).toBe(finalSize);
    expect(icon.signal).toHaveBeenCalledWith('itemChanged', icon);
    expect(icon.fireAncestors).toHaveBeenCalledWith('$itemChanged');
  });

  it('should not update an icon size to its finalW and finalH when fixed', () => {
    const size = 90;
    const finalSize = 100;
    const [icon] = createIcon({
      icon: 'assets/images/ic_lightning_white_32.png',
      w: size,
      h: size,
      fixed: true
    });
    jest.spyOn(icon, 'finalW', 'get').mockReturnValue(finalSize);
    jest.spyOn(icon, 'finalH', 'get').mockReturnValue(finalSize);
    jest.spyOn(icon, 'signal');
    jest.spyOn(icon, 'fireAncestors');

    expect(icon.signal).not.toHaveBeenCalledWith('itemChanged');
    expect(icon.fireAncestors).not.toHaveBeenCalledWith('$itemChanged');

    emitTxLoaded(icon);

    expect(icon.h).toBe(size);
    expect(icon.h).toBe(size);
    expect(icon.signal).not.toHaveBeenCalledWith('itemChanged');
    expect(icon.fireAncestors).not.toHaveBeenCalledWith('$itemChanged');
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
      icon: 'src/assets/images/circle.svg'
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

  it('should not regenerate the same icon template', () => {
    const [icon, testRenderer] = createIcon({
      icon: lightning
    });
    const patch = jest.spyOn(icon, 'patch');

    testRenderer.forceAllUpdates();

    expect(patch).not.toHaveBeenCalled();

    icon.icon = lightning;
    testRenderer.forceAllUpdates();

    expect(patch).not.toHaveBeenCalled();
  });

  it('should regenerate the icon template if an icon is changed', () => {
    const png = 'src/assets/images/ic_lightning_white_32.png';
    const [icon, testRenderer] = createIcon({
      icon: lightning
    });
    const patch = jest.spyOn(icon, 'patch');

    testRenderer.forceAllUpdates();

    expect(patch).not.toHaveBeenCalled();

    icon.icon = png;
    testRenderer.forceAllUpdates();

    expect(patch).toHaveBeenCalled();
  });

  it('should overwrite the themed color of the icon if one is provide', () => {
    const color = '#F6F6F9';
    const [icon] = createIcon({ icon: lightning, color });
    expect(icon.color).toEqual(color);
  });
});
