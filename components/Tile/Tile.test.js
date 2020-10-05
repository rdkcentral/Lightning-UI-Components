import TestUtils from '../lightning-test-utils';
import Tile from '.';

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

  it('should render with shadow', () => {
    let [, testRenderer] = createTile({ shadow: { color: 0xffffffff } });
    let tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should render with all options', done => {
    let [tile, testRenderer] = createTile({
      blur: 2,
      radius: 16,
      shadow: { color: 0xffffffff }
    });

    tile._Item.on('txLoaded', () => {
      let tree = testRenderer.toJSON(2);
      expect(tree).toMatchSnapshot();
      done();
    });
  });

  it('should render focusRing on focus', done => {
    let [tile, testRenderer] = createTile({
      blur: 2,
      radius: 16,
      shadow: { color: 0xffffffff }
    });

    tile._Item.on('txLoaded', () => {
      tile._focus();
      testRenderer.update();
      let tree = testRenderer.toJSON(2);
      expect(tree).toMatchSnapshot();
      done();
    });
  });

  it('should remove focusRing on unfocus', done => {
    let [tile, testRenderer] = createTile({
      blur: 2,
      radius: 16,
      shadow: { color: 0xffffffff }
    });
    tile._focus();
    testRenderer.update();
    tile._unfocus();
    setTimeout(() => {
      let tree = testRenderer.toJSON(2);
      expect(tree).toMatchSnapshot();
      done();
    }, 510);
  });
});
