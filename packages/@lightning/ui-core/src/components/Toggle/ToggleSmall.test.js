import { ToggleSmall } from '.';
import { makeCreateComponent } from '@lightning/ui-test-utils';

const createToggleSmall = makeCreateComponent(ToggleSmall);

describe('ToggleSmall', () => {
  let toggle, testRenderer;

  beforeEach(() => {
    [toggle, testRenderer] = createToggleSmall(
      { title: 'ToggleSmall' },
      { spyOnMethods: ['_update'] }
    );
    testRenderer.update();
  });

  afterEach(() => {
    toggle = null;
    testRenderer = null;
  });

  it('should render', () => {
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the correct height', () => {
    expect(toggle.h).toBe(toggle._Container.h);
  });

  it('renders the correct width', () => {
    expect(toggle.w).toBe(toggle.style.w);
  });
});
