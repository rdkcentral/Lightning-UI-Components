import TestUtils from '../../test/lightning-test-utils';
import TileCircle from '.';
import { rgba2argb } from '../../utils';

const kabob = TestUtils.pathToDataURI('./assets/images/kabob_320x180.jpg');

const createTileCircle = TestUtils.makeCreateComponent(TileCircle, {
  src: kabob,
  w: 320,
  h: 180,
  imageSize: 164
});

describe('TileCircle', () => {
  let tilecircle, testRenderer;

  beforeEach(() => {
    [tilecircle, testRenderer] = createTileCircle();
  });
  afterEach(() => {
    tilecircle = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should crop the image into a circle', async () => {
    testRenderer.forceAllUpdates();
    expect(tilecircle._Artwork.shader.constructor.name).toBe(
      'RoundedRectangleShader'
    );
    expect(tilecircle._Artwork.shader.radius[0]).toBe(tilecircle._radius);
  });

  it('should update the background blur color', async done => {
    const blurColor = rgba2argb('rgba(0,0,255,1)');
    [tilecircle, testRenderer] = createTileCircle(
      {
        blurBackgroundColor: blurColor,
        blurBackground: true,
        circleImage: true
      },
      { spyOnMethods: ['_update'] }
    );
    await tilecircle.__updatePromiseSpy;
    testRenderer.forceAllUpdates();
    expect(tilecircle.blurBackgroundColor).toBe(blurColor);
  });
});
