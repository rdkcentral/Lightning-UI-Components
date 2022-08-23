import TestUtils from '../../test/lightning-test-utils';
import MetadataBase from '.';
import lightningbolt from '../../assets/images/ic_lightning_white_32.png';

const createComponent = TestUtils.makeCreateComponent(MetadataBase, {
  w: 400,
  h: 300
});

describe('MetadataBase', () => {
  let component, testRenderer;

  beforeEach(() => {
    [component, testRenderer] = createComponent(
      {},
      {
        spyOnMethods: ['_update']
      }
    );
  });
  afterEach(() => {
    component = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('updates the title', async () => {
    const title = 'title text';
    expect(component.title).toBe(undefined);
    component.title = title;
    await component.__updateSpyPromise;
    expect(component._Title.content).toBe(title);
  });

  it('updates the subtitle', async () => {
    const subtitle = 'subtitle text';
    expect(component.subtitle).toBe(undefined);
    expect(component._SubtitleWrapper.h).toBe(0);
    component.subtitle = subtitle;
    await component.__updateSpyPromise;
    expect(component._Subtitle.content).toBe(subtitle);
    expect(component._Subtitle.h).toBeGreaterThan(0);
    expect(component._SubtitleWrapper).toMatchObject({
      h: component._Subtitle.h,
      alpha: 1
    });
  });

  it('updates the description', async () => {
    const description = 'description text';
    expect(component.description).toBe(undefined);
    component.description = description;
    await component.__updateSpyPromise;
    expect(component._Description.content).toBe(description);
  });

  it('updates the Logo and its position', async () => {
    expect(component.logo).toBe(undefined);
    component.logo = lightningbolt;
    expect(component.logo).toBe(lightningbolt);

    const subtitle = 'secondLine text';
    component.subtitle = subtitle;
    await component.__updateSpyPromise;
    setTimeout(async () => {
      const logoX = component.w - component.logoWidth;
      expect(component._Logo.x).toBe(logoX);
      component.logoPosition = 'left';
      await component.__updateSpyPromise;
      expect(component._Logo.x).toBe(0);
      const secondLineX = component.logoWidth + component.style.logoPadding;
      expect(component._Subtitle.x).toBe(secondLineX);
    }, 1);
  });
});
