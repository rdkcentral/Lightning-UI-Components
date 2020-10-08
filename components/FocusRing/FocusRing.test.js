import TestUtils from '../lightning-test-utils';
import FocusRing from '.';

const kabob = TestUtils.pathToDataURI('./assets/images/kabob_320x180.jpg');

const createFocusRing = TestUtils.makeCreateComponent(FocusRing, {
  w: 320,
  h: 180,
  radius: 8,
  size: 8
});

describe('FocusRing', () => {
  let focusRing, testRenderer;

  beforeEach(() => {
    [focusRing, testRenderer] = createFocusRing();
  });

  afterEach(() => {
    focusRing = null;
    testRenderer = null;
  });

  it('should render', () => {
    let tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should take focus animation override', () => {
    const focusRingAnimation = {
      duration: 1,
      actions: [{ p: 'y', v: { 0: 0, 1: 100 } }]
    };
    [focusRing, testRenderer] = createFocusRing({ focusRingAnimation });
    let tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });
});
