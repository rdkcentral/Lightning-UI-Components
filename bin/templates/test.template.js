module.exports = name => {
  const camelCaseName = name.charAt(0).toLowerCase() + name.slice(1);;
  return `import { makeCreateComponent } from '@lightningjs/ui-test-utils';
import ${name} from '.';

const createComponent = makeCreateComponent(${name});

describe('${name}', () => {
  let ${camelCaseName}, testRenderer;

  beforeEach(() => {
    [${camelCaseName}, testRenderer] = createComponent();
  });

  afterEach(() => {
    ${camelCaseName} = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });
});
`;
};
