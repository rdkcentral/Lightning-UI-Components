module.exports = name => `import TestUtils from '../../../test/lightning-test-utils';
import ${name} from '.';

const createComponent = TestUtils.makeCreateComponent(${name});

describe('${name}', () => {
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
});
`;
