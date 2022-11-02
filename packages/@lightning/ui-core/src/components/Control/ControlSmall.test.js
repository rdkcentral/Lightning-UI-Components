import ControlSmall from './ControlSmall';
import { makeCreateComponent } from '../../../test/lightning-test-utils.js';

import { base } from './ControlSmall.styles.js';
import baseTheme from '@suite-themes/base-lightning-tv/index.js';

const createControlSmall = makeCreateComponent(ControlSmall);

describe('ControlSmall', () => {
  let component, testRenderer;

  beforeEach(() => {
    [component, testRenderer] = createControlSmall(
      { title: 'ControlSmall' },
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

  it('has a base theme', () => {
    expect(typeof base).toBe('function');
    expect(base(baseTheme)).toEqual(
      expect.objectContaining({
        h: expect.any(Number),
        logoStyles: expect.any(Object),
        prefixH: expect.any(Number),
        radius: expect.any(Number),
        textStyle: expect.any(Object),
        minWidth: expect.any(Number)
      })
    );
  });

  it('renders the correct height', async () => {
    expect(component.h).toBe(56);
  });

  it('renders the correct radius', async () => {
    // parent/surface radius is 32
    // offset calculation should return 4
    expect(component.style.radius).toBe(28);
  });

  it('renders the correct logo radius', async () => {
    // parent Control paddingX = 16
    expect(component.style.logoStyles.radius).toBe(20);
  });
});
