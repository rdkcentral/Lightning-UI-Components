import TestUtils from '../../test/lightning-test-utils';
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
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
    expect(tileicon.icon).toEqual(icon);
  });

  // it('should update icon dimensions', async () => {
  //   [tileicon, testRenderer] = createTileIcon(
  //     { iconW: 50, iconH: 25 },
  //     { spyOnMethods: ['_update'] }
  //   );
  //   await tileicon.__updatePromiseSpy;
  //   testRenderer.update();
  //   expect(tileicon.iconW).toBe(50);
  //   expect(tileicon.iconH).toBe(25);
  //   expect(tileicon._Icon.w).toBe(50);
  //   expect(tileicon._Icon.h).toBe(25);
  // });
});
