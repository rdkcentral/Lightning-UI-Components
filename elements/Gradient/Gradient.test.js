import TestUtils from '../../test/lightning-test-utils';
import Gradient from '.';
import { getValidColor } from '../../Styles/Colors';

const createComponent = TestUtils.makeCreateComponent(Gradient);

describe('Gradient', () => {
  // eslint-disable-next-line no-unused-vars
  let component, testRenderer;

  beforeEach(() => {
    [component, testRenderer] = createComponent();
  });
  afterEach(() => {
    component = null; // eslint-disable-line no-unused-vars
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should render a custom color gradient', () => {
    const gradientTop = '#ffffff';
    const gradientColor = '#eeeeee';
    const [component] = createComponent({ gradientColor, gradientTop });
    expect(component.colorTop).toEqual(getValidColor(gradientTop));
    expect(component.colorBottom).toEqual(getValidColor(gradientColor));
  });

  it('should render nothing if an invalid gradient color is provided', () => {
    const [component] = createComponent({ gradientColor: null });
    expect(component.texture).toBeNull();
  });
});
