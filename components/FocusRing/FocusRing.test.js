import TestUtils from '../lightning-test-utils';
import FocusRing from '.';

const kabob = TestUtils.pathToDataURI('./assets/images/kabob_320x180.jpg');

const createFocusRing = TestUtils.makeCreateComponent(FocusRing, {
  src: kabob,
  w: 320,
  h: 180
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

  it('should render with blur', () => {
    let [, testRenderer] = createFocusRing({ blur: 2 });
    let tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should render with shadow', () => {
    let [, testRenderer] = createFocusRing({
      shadow: {
        padding: 40,
        blur: 3,
        alpha: 0.7
      }
    });
    let tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should render with all options', done => {
    let [, testRenderer] = createFocusRing({
      blur: 2,
      size: 12,
      imageSrc: kabob,
      shadow: {
        padding: 40,
        blur: 3,
        alpha: 0.7
      }
    });

    setTimeout(() => {
      let tree = testRenderer.toJSON(2);
      expect(tree).toMatchSnapshot();
      done();
    }, 50);
  });

  describe('#hide', () => {
    it('should scale down and hide the focusRing', () => {
      let [focusRing, testRenderer] = createFocusRing({
        blur: 2,
        size: 12
      });

      focusRing.hide();
      testRenderer.update();
      expect(focusRing.alpha).toBe(0);
    });
  });
});
