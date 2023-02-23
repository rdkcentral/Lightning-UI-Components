import { makeCreateComponent } from '@lightningjs/ui-test-utils';
import Gradient from './index.js';

const createComponent = makeCreateComponent(Gradient);

describe('Gradient', () => {
  // eslint-disable-next-line no-unused-vars
  let gradient, testRenderer;

  beforeEach(() => {
    [gradient, testRenderer] = createComponent();
  });
  afterEach(() => {
    gradient = null; // eslint-disable-line no-unused-vars
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });
});
