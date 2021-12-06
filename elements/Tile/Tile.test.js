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
    const [tile, testRenderer] = createTile({
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
    it('should update item and focus ring scale on unfocus', async done => {
      testRenderer.unfocus();
      await TestUtils.nextTick(2e3);
      const unfocusScale = tile._getUnfocusScale(tile.w, tile.h);
      expect(tile._Item.scale).toBe(unfocusScale);
      expect(tile._FocusRing.scale).toBe(unfocusScale);
      expect(tile._FocusRing.alpha).toBe(0);
      expect(tile._DropShadow.alpha).toBe(0);
      done();
    });
    it('should update item and focus ring scale on focus', done => {
      const scale = (tile.w + 40) / tile.w;
      tile._smooth = false;
      tile._focus();
      testRenderer.update();
      tile._whenEnabled.then(() => {
        expect(tile._Item.scale).toBe(scale);
        expect(tile._FocusRing.scale).toBe(scale);
        done();
      });
    });

    it('should update focus ring and drop shadow alpha on focus', async done => {
      tile._smooth = false;
      tile._focus();
      await TestUtils.nextTick();
      expect(tile._FocusRing.alpha).toBe(1);
      expect(tile._DropShadow.alpha).toBe(1);
      done();
    });

    describe('rendering with a checkbox', () => {
      it('should prepend button text with a checkbox', async () => {
        [tile, testRenderer] = createTile({
          checkbox: {
            checked: false
          }
        });
        expect(tile.checkbox).toMatchObject({
          checked: false,
          placement: 'right'
        });

        await testRenderer.update();

        expect(tile._Checkbox.checked).toBe(false);
      });
      it('should allow center aligned placement of the checkbox', async () => {
        const placement = 'center';
        [tile, testRenderer] = createTile({
          checkbox: {
            checked: false,
            placement
          }
        });
        expect(tile.checkbox).toMatchObject({
          checked: false,
          placement
        });

        await testRenderer.update();
        expect(tile._Checkbox.x).toEqual(tile.w / 2);
      });
      it('should add a checkbox if the checked property is invalid', async () => {
        [tile, testRenderer] = createTile({
          checkbox: {
            checked: 'yes'
          }
        });
        expect(tile.checkbox).toBeNull();

        await testRenderer.update();

        expect(tile._Checkbox).toBeUndefined();
      });
    });
  });
});
