import { ButtonSmall } from '.';
import { makeCreateComponent } from '@lightning/ui-test-utils';

const createButtonSmall = makeCreateComponent(
  ButtonSmall,
  {},
  { focused: false }
);

describe('ButtonSmall', () => {
  let button, testRenderer;

  beforeEach(() => {
    [button, testRenderer] = createButtonSmall(
      { title: 'ButtonSmall' },
      { spyOnMethods: ['_update'] }
    );
    testRenderer.update();
  });

  afterEach(() => {
    button = null;
    testRenderer = null;
  });

  it('should render', () => {
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the correct height', () => {
    expect(button.h).toBe(button.style.h);
  });

  it('renders the correct width', () => {
    expect(button.w).toBe(
      Math.max(button._contentW + button._paddingX, button.style.minWidth)
    );
  });
});
