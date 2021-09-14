import TestUtils from '../../test/lightning-test-utils';
import Control, { ControlSmall } from '.';
import { iconMediumStyles, iconSmallStyles } from '../ActionButton';
const createComponent = TestUtils.makeCreateComponent(Control);
const createSmallComponent = TestUtils.makeCreateComponent(ControlSmall);
describe('Control', () => {
  let component, testRenderer;

  beforeEach(() => {
    [component, testRenderer] = createComponent();
  });
  afterEach(() => {
    component = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });
  it('should have correct radius', () => {
    const expectedRadius = iconMediumStyles().w / 2;
    expect(component.radius).toBe(expectedRadius);
  });
  it('should have correct radius', () => {
    [component, testRenderer] = createSmallComponent();
    const expectedRadius = iconSmallStyles().w / 2;
    expect(component.radius).toBe(expectedRadius);
  });
});
