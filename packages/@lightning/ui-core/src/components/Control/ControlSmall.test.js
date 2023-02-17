import ControlSmall from './ControlSmall';
import { makeCreateComponent } from '@lightning/ui-test-utils';

import { base } from './ControlSmall.styles.js';
import baseTheme from '@suite-themes/base-lightning-tv';

const createControlSmall = makeCreateComponent(ControlSmall);

describe('ControlSmall', () => {
  let control, testRenderer;

  beforeEach(() => {
    [control, testRenderer] = createControlSmall(
      { title: 'ControlSmall' },
      { spyOnMethods: ['_update'] }
    );
    testRenderer.update();
  });

  afterEach(() => {
    control = null;
    testRenderer = null;
  });

  it('should render', () => {
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has a base theme', () => {
    expect(typeof base).toBe('function');
    expect(base(baseTheme)).toEqual(
      expect.objectContaining({
        h: expect.any(Number),
        logoStyle: expect.any(Object),
        prefixH: expect.any(Number),
        radius: expect.any(Number),
        textStyle: expect.any(Object),
        minWidth: expect.any(Number)
      })
    );
  });

  it('renders the correct height', async () => {
    expect(control.h).toBe(control.style.h);
  });

  it('renders the correct radius', async () => {
    expect(control.style.radius).toBe(
      Math.max(
        control.theme.radius.xl -
          (control.theme.spacer.md * 8 - control.style.h) / 2,
        0
      )
    );
  });

  it('renders the correct logo radius', async () => {
    expect(control.style.logoStyle.radius).toBe(
      Math.max(control.style.radius - control.theme.spacer.xl / 2, 0)
    );
  });
});
