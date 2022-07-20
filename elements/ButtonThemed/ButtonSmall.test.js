import { ButtonSmall } from '.';
import TestUtils from '../../test/lightning-test-utils';
import { CheckboxSmall } from '../Checkbox';

const createButton = TestUtils.makeCreateComponent(
  ButtonSmall,
  {},
  { focused: false }
);

describe('Themed Button', () => {
  let component, testRenderer;
  beforeEach(() => {
    [component, testRenderer] = createButton({ title: 'Button' });
    testRenderer.update();
  });
  afterEach(() => {
    component = null;
    testRenderer = null;
  });

  it('should render', () => {
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should use the small checkbox version', () => {
    component.patch({
      checkbox: true
    });
    testRenderer.forceAllUpdates();

    expect(component._Checkbox instanceof CheckboxSmall).toBe(true);
  });
});
