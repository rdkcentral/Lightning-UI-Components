import { ButtonSmall } from '.';
import { makeCreateComponent } from '@lightningjs/ui-test-utils';

const createButtonSmall = makeCreateComponent(
  ButtonSmall,
  {},
  { focused: false }
);

describe('ButtonSmall', () => {
  let buttonSmall, testRenderer;

  beforeEach(() => {
    [buttonSmall, testRenderer] = createButtonSmall(
      { title: 'ButtonSmall' },
      { spyOnMethods: ['_update'] }
    );
    testRenderer.update();
  });

  afterEach(() => {
    buttonSmall = null;
    testRenderer = null;
  });

  it('should render', () => {
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the correct height', () => {
    expect(buttonSmall.h).toBe(buttonSmall.style.h);
  });

  it('renders the correct width', () => {
    expect(buttonSmall.w).toBe(
      Math.max(
        buttonSmall._contentW + buttonSmall._paddingX,
        buttonSmall.style.minWidth
      )
    );
  });
});
