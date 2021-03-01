import lng from '@lightningjs/core';
import TestUtils from '../lightning-test-utils';
import Tile from '.';
import { rgba2argb } from '../../utils';

const kabob = TestUtils.pathToDataURI('./assets/images/kabob_320x180.jpg');

const createTile = TestUtils.makeCreateComponent(Tile, {
  src: kabob,
  w: 320,
  h: 180
});

describe('Tile', () => {
  let tile, testRenderer;

  beforeEach(() => {
    [tile, testRenderer] = createTile();
  });

  afterEach(() => {
    tile = null;
    testRenderer = null;
  });

  it('should render', () => {
    let tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
    expect(tile.src).toEqual(kabob);
  });

  it('should render with blur', () => {
    let [tile, testRenderer] = createTile({ blur: 2 });
    tile._Item.loadTexture();
    let tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
    expect(tile.blur).toEqual(2);
  });

  it('should render with rounded corners', () => {
    let [tile, testRenderer] = createTile({ radius: 16 });
    let tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
    expect(tile.radius).toEqual(16);
  });

  it('should render with all options', () => {
    let [tile, testRenderer] = createTile({
      w: 320,
      h: 180,
      blur: 4,
      radius: 16,
      shadow: {
        w: 320,
        h: 180,
        x: 10,
        y: 10,
        zIndex: -1,
        texture: lng.Tools.getShadowRect(320, 180, 16, 4),
        color: rgba2argb('rgba(63,92,30,0.7)')
      }
    });

    tile._smooth = false;
    testRenderer.update();
    return tile._whenEnabled.then(() => {
      expect(tile._Blur.amount).toBe(4);
      expect(tile._Image.shader.radius[0]).toBe(16);
    });
  });

  it('should not round image with imgRadius = 0', () => {
    let [tile, testRenderer] = createTile({
      w: 320,
      h: 180,
      blur: 4,
      radius: 16,
      imgRadius: 0
    });

    tile._smooth = false;
    testRenderer.update();
    return tile._whenEnabled.then(() => {
      expect(tile._Blur.amount).toBe(4);
      expect(tile._Image.shader).toBeNull();
    });
  });

  describe('focus', () => {
    it('should update item and focus ring scale on unfocus', done => {
      tile._smooth = false;
      testRenderer.unfocus();
      testRenderer.update();
      tile._whenEnabled.then(() => {
        expect(tile._Item.scale).toBe(1);
        expect(tile._FocusRing.scale).toBe(1);
        expect(tile._FocusRing.alpha).toBe(0);
        expect(tile._DropShadow.alpha).toBe(0);
        done();
      });
    });
    it('should update item and focus ring scale on focus', done => {
      tile._smooth = false;
      tile._focus();
      testRenderer.update();
      tile._whenEnabled.then(() => {
        expect(tile._Item.scale).toBe(1.15);
        expect(tile._FocusRing.scale).toBe(1.15);
        done();
      });
    });

    it('should update focus ring and drop shadow alpha on focus', done => {
      tile._smooth = false;
      tile._focus();
      testRenderer.update();
      tile._whenEnabled.then(() => {
        expect(tile._FocusRing.alpha).toBe(1);
        expect(tile._DropShadow.alpha).toBe(1);
        done();
      });
    });
  });
});
