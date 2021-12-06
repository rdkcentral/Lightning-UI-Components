import TestUtils from '../../test/lightning-test-utils';
import TileCircle from '.';
import { rgba2argb } from '../../utils';

const kabob = TestUtils.pathToDataURI('./assets/images/kabob_320x180.jpg');

const createTileCircle = TestUtils.makeCreateComponent(TileCircle, {
  src: kabob,
  w: 320,
  h: 180
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

  it('should crop the image into a circle', () => {
    expect(tilecircle._Image.shader.constructor.name).toBe(
      'RoundedRectangleShader'
    );
    expect(tilecircle._Image.shader.radius[0]).toBe(tilecircle._Image.w / 2);
  });

  it('should update the background blur color', async () => {
    const blurColor = rgba2argb('rgba(0,0,255,1)');
    [tilecircle, testRenderer] = createTileCircle(
      {
        blurBackgroundColor: blurColor
      },
      { spyOnMethods: ['_update'] }
    );
    await tilecircle.__updatePromiseSpy;
    testRenderer.update();
    expect(tilecircle.blurBackgroundColor).toBe(blurColor);

    expect(tilecircle._Blur.content.tag('Background').color).toBe(blurColor);
  });

  it('should not accept a invalid color', () => {
    const blurColor = tilecircle.blurBackgroundColor;
    tilecircle.blurBackgroundColor = 'invalidColor';
    expect(tilecircle.blurBackgroundColor).toBe(blurColor);
  });
});
