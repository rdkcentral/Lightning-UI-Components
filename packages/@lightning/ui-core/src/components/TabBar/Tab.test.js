import { makeCreateComponent } from '@lightning/ui-test-utils';
import Tab from './Tab.js';

const iconPath = '../../assets/images/ic_lightning_white_32.png';

const createComponent = makeCreateComponent(Tab);

describe('Tab', () => {
  let component, testRenderer;

  beforeEach(async () => {
    [component, testRenderer] = createComponent(
      {},
      { spyOnMethods: ['_update'] }
    );
    await component.__updateSpyPromise;
  });

  it('renders', async () => {
    [component, testRenderer] = createComponent(
      {
        title: 'Tab',
        icon: iconPath
      },
      {
        spyOnMethods: ['_update']
      }
    );

    await component.__updateSpyPromise;

    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('sets the announce string to the title string', () => {
    const title = 'Tab 1';
    component.title = title;
    testRenderer.forceAllUpdates();
    expect(component.announce).toBe(title);
  });

  it('overrides the announce string', () => {
    const overrideString = 'Custom announce string';
    component.announce = overrideString;
    testRenderer.forceAllUpdates();
    expect(component.announce).toBe(overrideString);
  });

  it('should render a tab with just an icon', async () => {
    expect(component._Icon).not.toBeDefined();

    component.icon = iconPath;
    await component.__updateSpyPromise;

    expect(component._Icon).toBeDefined();
  });

  it('should render a tab with just text', async () => {
    const title = 'Tab';
    expect(component._Text.content).toBeUndefined();

    component.title = title;
    await component.__updateSpyPromise;

    expect(component._Text.content).toBe(title);
    expect(component._Text.mountX).toBe(0.5);
  });

  it('should render a tab with an icon and text', async () => {
    const title = 'Tab';

    component.icon = iconPath;
    component.title = title;
    await component.__updateSpyPromise;

    expect(component._Icon).toBeDefined();
    expect(component._Text.content).toBe(title);
    expect(component._Text.mountX).toBe(0);
  });

  it('should remove icon and text from a tab when not defined', async () => {
    const title = 'Tab';

    component.icon = iconPath;
    component.title = title;
    await component.__updateSpyPromise;

    expect(component._Icon).toBeDefined();
    expect(component._Text.content).toBe(title);
    expect(component.w).toBeGreaterThan(0);
    expect(component.h).toBeGreaterThan(0);

    component.icon = undefined;
    component.title = undefined;
    await component.__updateSpyPromise;

    expect(component._Icon).toBeUndefined();
    expect(component._Text.content).toBe('');
    expect(component.w).toBe(0);
    expect(component.h).toBe(0);
  });
});
