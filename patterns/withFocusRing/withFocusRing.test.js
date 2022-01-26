import TestUtils from '../../test/lightning-test-utils';
import Tile from '../../elements/Tile';
const image = TestUtils.pathToDataURI(
  './assets/images/Jurassic_World_16x9.jpg'
);
const createTile = TestUtils.makeCreateComponent(Tile); // Tile will always have a focus ring as it is added at the extension layer

describe('tile', () => {
  let tile, testRenderer;

  beforeEach(async done => {
    [tile, testRenderer] = createTile(
      { w: 100, h: 100, src: image },
      { spyOnMethods: ['_update'] }
    );
    await tile.__updateSpyPromise;
    done();
  });

  afterEach(() => {
    tile = null;
    testRenderer = null;
  });

  it('should render', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should patch in a FocusRing element if parent component has a style with focusRing set to true', async done => {
    expect(tile._FocusRing).not.toBeUndefined();
    expect(tile._FocusRing.constructor.name).toBe('FocusRing');
    expect(tile._FocusRing.h).toBe(tile.h);
    expect(tile._FocusRing.w).toBe(tile.w);
    expect(tile._FocusRing.zIndex).toBe(tile.zIndex + 10);
    done();
  });

  it('should not patch FocusRing if parent component style has focusRing set to false or undefined', async done => {
    tile.style.focusRing = false;
    await tile.__updateSpyPromise;
    expect(tile._FocusRing).toBeUndefined();
    done();
  });

  it("should allow focusRing radius to be modified by the parent component's radius", async done => {
    tile.style.radius = 20;
    await tile.__updateSpyPromise;
    expect(tile._FocusRing.style.radius).toBe(20);
    done();
  });

  it("should allow FocusRing color to be modified by parent component's style file value for focusRingColor if exists", async done => {
    tile.style.focusRingColor = 0xfff663399;
    await tile.__updateSpyPromise;
    expect(tile._FocusRing.style.color).toBe(0xfff663399);
    done();
  });

  it('should set alpha value of FocusRing appropriately if focused / unfocused', async done => {
    tile._smooth = false;
    testRenderer.focus();
    await tile.__updateSpyPromise;
    expect(tile._FocusRing.alpha).toBe(1);
    testRenderer.unfocus();
    await tile.__updateSpyPromise;
    expect(tile._FocusRing.alpha).toBe(0);
    done();
  });

  it('should start and stop the animation on focused / unfocused', async done => {
    jest.spyOn(tile._FocusRing, 'startAnimation');
    jest.spyOn(tile._FocusRing, 'stopAnimation');
    testRenderer.focus();
    expect(tile._FocusRing.startAnimation).toHaveBeenCalledTimes(1);
    testRenderer.unfocus();
    expect(tile._FocusRing.stopAnimation).toHaveBeenCalledTimes(1);
    done();
  });
});
