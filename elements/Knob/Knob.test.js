import TestUtils from '../../test/lightning-test-utils';
import Knob from '.';

const createComponent = TestUtils.makeCreateComponent(Knob);

describe('Knob', () => {
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
  it('has the correct static tags getter', () => {
    expect(component.constructor.tags).toMatchObject(['Circle']);
  });
  it('has the correct width', () => {
    expect(component.w).toEqual(component._componentStyles.circleSize);
  });
  it('has the correct height', () => {
    expect(component.h).toEqual(component._componentStyles.circleSize);
  });
});
