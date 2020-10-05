import TestUtils from '../lightning-test-utils';
import TileIcon from '.';

const icon = TestUtils.pathToDataURI(
  './assets/images/ic_lightning_white_32.png'
);
const kabob = TestUtils.pathToDataURI('./assets/images/kabob_320x180.jpg');

const createTileIcon = TestUtils.makeCreateComponent(TileIcon, {
  src: kabob,
  icon,
  w: 320,
  h: 180
});

describe('TileIcon', () => {
  let tileicon, testRenderer;

  beforeEach(() => {
    [tileicon, testRenderer] = createTileIcon();
  });

  afterEach(() => {
    tileicon = null;
    testRenderer = null;
  });

  it('should render', () => {
    let tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
    expect(tileicon.icon).toEqual(icon);
    tileicon._Icon.loadTexture();
    testRenderer.update();
  });
});
