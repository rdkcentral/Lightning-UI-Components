import { makeCreateComponent } from '@lightning/ui-test-utils';
import MetadataBase from './MetadataBase.js';
import { jest } from '@jest/globals';

const createComponent = makeCreateComponent(MetadataBase, {
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

  it('sets the announce string to the appropriate text content status', () => {
    const title = 'Title';
    const subtitle = 'Subtitle';
    const description = 'Description';
    const logoTitle = 'Logo Title';
    component.patch({ title, subtitle, description, logoTitle });
    testRenderer.forceAllUpdates();
    expect(component.announce).toEqual([
      title,
      subtitle,
      description,
      logoTitle
    ]);
  });

  it('overrides the announce string', () => {
    const overrideString = 'Custom announce string';
    component.announce = overrideString;
    testRenderer.forceAllUpdates();
    expect(component.announce).toBe(overrideString);
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
    testRenderer.update();

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
    const logoPath = './path-to-logo';
    [component, testRenderer] = createComponent(
      {},
      {
        spyOnMethods: ['_update', '_subtitleLoaded']
      }
    );

    expect(component.logo).toBe(undefined);

    component.logo = logoPath;
    await component.__updateSpyPromise;

    expect(component.logo).toBe(logoPath);

    const subtitle = 'secondLine text';
    component.subtitle = subtitle;
    await component.__updateSpyPromise;
    await component.__subtitleLoadedSpyPromise;

    const logoX = component.w - component.logoWidth;
    expect(component._Logo.x).toBe(logoX);

    component.logoPosition = 'left';
    await component.__updateSpyPromise;
    testRenderer.update();

    expect(component._Logo.x).toBe(0);
    const secondLineX = component.logoWidth + component.style.logoPadding;
    expect(component._Text.x).toBe(secondLineX);
  });

  // TODO test is timing out
  it.skip('should signal dimension updates when the height is changed', async () => {
    [component, testRenderer] = createComponent(
      {
        w: 400,
        h: 0,
        logoHeight: 0
      },
      {
        spyOnMethods: ['_titleLoaded']
      }
    );
    jest.spyOn(component, 'signal');
    await component.__titleLoadedSpyPromise;

    const initialH = component.h;
    expect(component.signal).not.toHaveBeenCalled();
    expect(component.h).toBe(initialH);

    component.title = 'text';

    await component.__titleLoadedSpyPromise;

    const updatedH = component.h;
    expect(component.signal).toHaveBeenCalledWith('updateComponentDimensions');
    expect(updatedH).toBeGreaterThan(initialH);
  });

  // TODO test is timing out
  it.skip('should not signal dimension updates when the height is not changed', async () => {
    [component, testRenderer] = createComponent(
      {
        w: 400,
        h: 0,
        logoHeight: 0,
        title: 'text'
      },
      {
        spyOnMethods: ['_titleLoaded']
      }
    );
    await component.__titleLoadedSpyPromise;
    jest.spyOn(component, 'signal');

    const initialH = component.h;
    expect(component.signal).not.toHaveBeenCalled();
    expect(component.h).toBe(initialH);

    // updated title ('text' backwards) that should be the same height as the initial title
    component.title = 'txet';

    await component.__titleLoadedSpyPromise;

    expect(component.signal).not.toHaveBeenCalled();
    expect(component.h).toBe(initialH);
  });
});
