import TestUtils from '../lightning-test-utils';
import FocusRing from '.';
import { getHexColor, getValidColor, GREY } from '../Styles/Styles';

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

  it('should set size', () => {
    [focusRing, testRenderer] = createFocusRing({ size: 4 });
    expect(focusRing.size).toEqual(4);
  });

  it('should set primary color accounting for color type passed', () => {
    const testColor = getHexColor(GREY[5], 96);
    [focusRing, testRenderer] = createFocusRing({
      color: getHexColor(GREY[5], 96)
    });
    expect(focusRing.color).toEqual(testColor);
  });

  it('should set primary color transition from color', () => {
    const testColor = getHexColor(getHexColor(GREY[5], 96), 54);
    [focusRing, testRenderer] = createFocusRing({
      color: getHexColor(GREY[5], 96)
    });
    const { transition } = focusRing.getColors();
    expect(transition).toEqual(testColor);
  });

  it('should set secondary color', () => {
    [focusRing, testRenderer] = createFocusRing({
      secondaryColor: getHexColor(GREY[0], 8)
    });
    expect(focusRing.secondaryColor).toEqual(getHexColor(GREY[0], 8));
  });

  it('should set radius', () => {
    [focusRing, testRenderer] = createFocusRing({ radius: 12 });
    expect(focusRing.radius).toEqual(12);
  });
});
