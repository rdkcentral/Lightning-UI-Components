import TestUtils from '../../test/lightning-test-utils';
import OverlayDataItem from '.';
import PHI from '../../static/images/PHI.png';

const createOverlayDataItem = TestUtils.makeCreateComponent(OverlayDataItem);

describe('OverlayDataItem', () => {
  let dataitem, testRenderer;

  beforeEach(() => {
    [dataitem, testRenderer] = createOverlayDataItem({ overlayImage: PHI });
  });
  afterEach(() => {
    dataitem = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('patches overlay image and zIndex', () => {
    expect(dataitem._OverlayImage).toBeDefined();
    expect(dataitem._OverlayImage.zIndex).toEqual(3);
    expect(dataitem._OverlayImage.src).toBe(PHI);
    expect(dataitem._Content.zIndex).toEqual(4);
  });

  it('sets a background gradient if passed', () => {
    dataitem.backgroundColors = {
      colorLeft: '4278931873',
      colorRight: '4278742891'
    };
    expect(dataitem._Background.colorRight).toEqual(Number('4278742891'));
    expect(dataitem._Background.colorLeft).toEqual(Number('4278931873'));
  });
});
