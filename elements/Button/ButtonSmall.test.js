import { ButtonSmall } from '.';
import TestUtils from '../../test/lightning-test-utils';

const createButtonSmall = TestUtils.makeCreateComponent(
  ButtonSmall,
  {},
  { focused: false }
);

describe('ButtonSmall', () => {
  let component, testRenderer;
  beforeEach(() => {
    [component, testRenderer] = createButtonSmall(
      { title: 'ButtonSmall' },
      { spyOnMethods: ['_update'] }
    );
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

  it('renders the correct height', () => {
    expect(component.h).toBe(64);
  });
});
