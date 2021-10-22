import lng from '@lightningjs/core';
import TestUtils from '../../test/lightning-test-utils';
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
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
    expect(tile.src).toEqual(kabob);
  });

  it('should render with blur', () => {
    const [tile, testRenderer] = createTile({ blur: 2 });
    tile._Item.loadTexture();
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
    expect(tile.blur).toEqual(2);
  });

  it('should render with rounded corners', () => {
    const [tile, testRenderer] = createTile({ radius: 16 });
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
    expect(tile.radius).toEqual(16);
  });

  it('should render with all options', () => {
    const [tile, testRenderer] = createTile({
      w: 320,
      h: 180,
      styleBlur: 4,
      styleRadius: 16,
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
      expect(tile._Item.shader.radius[0]).toBe(16);
    });
  });

  it('should not round image with imgRadius = 0', () => {
    const [tile] = createTile({
      w: 320,
      h: 180,
      styleRadius: 0
    });
    expect(tile._Item.shader.constructor.name).toBe('DefaultShader');
  });

  describe('focus', () => {
    it('should update item and focus ring scale on unfocus', async done => {
      tile._focus();
      await TestUtils.nextTick(2e3);
      testRenderer.unfocus();
      await TestUtils.nextTick(2e3);
      const unfocusScale = tile._componentStyles.getUnfocusScale(
        tile.w,
        tile.h
      );
      expect(tile._Item.scale).toBe(unfocusScale);
      expect(tile._FocusRing.scale).toBe(unfocusScale);
      expect(tile._FocusRing.alpha).toBe(0);
      done();
    });
    it('should update item and focus ring scale on focus', done => {
      const scale = (tile.w + 40) / tile.w;
      tile._smooth = false;
      tile._focus();
      testRenderer.update();
      setTimeout(() => {
        expect(tile._Item.scale).toBe(scale);
        expect(tile._FocusRing.scale).toBe(scale);
        done();
      }, 1);
    });

    it('should update focus ring and drop shadow alpha on focus', async done => {
      tile._smooth = false;
      tile._focus();
      await TestUtils.nextTick();
      expect(tile._FocusRing.alpha).toBe(1);
      // expect(tile._DropShadow.alpha).toBe(1);
      done();
    });
  });
});
