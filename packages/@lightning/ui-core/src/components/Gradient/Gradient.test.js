import { makeCreateComponent } from '../../../test/lightning-test-utils.js';
import Gradient from './index.js';

const createComponent = makeCreateComponent(Gradient);

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
});
