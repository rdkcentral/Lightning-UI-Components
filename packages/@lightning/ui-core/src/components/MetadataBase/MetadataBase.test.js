import { makeCreateComponent } from '@lightning/ui-test-utils';
import MetadataBase from './MetadataBase.js';
import { jest } from '@jest/globals';

const createComponent = makeCreateComponent(MetadataBase, {
  w: 400,
  h: 300
});

describe('MetadataBase', () => {
  let metadataBase, testRenderer;

  beforeEach(() => {
    [metadataBase, testRenderer] = createComponent(
      {},
      {
        spyOnMethods: ['_update']
      }
    );
  });

  afterEach(() => {
    metadataBase = null;
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
    metadataBase.patch({ title, subtitle, description, logoTitle });
    testRenderer.forceAllUpdates();
    expect(metadataBase.announce).toEqual([
      title,
      subtitle,
      description,
      logoTitle
    ]);
  });

  it('overrides the announce string', () => {
    const overrideString = 'Custom announce string';
    metadataBase.announce = overrideString;
    testRenderer.forceAllUpdates();
    expect(metadataBase.announce).toBe(overrideString);
  });

  it('updates the title', async () => {
    const title = 'title text';
    expect(metadataBase.title).toBe(undefined);
    metadataBase.title = title;
    await metadataBase.__updateSpyPromise;
    expect(metadataBase._Title.content).toBe(title);
  });

  it('updates the subtitle', async () => {
    const subtitle = 'subtitle text';
    expect(metadataBase.subtitle).toBe(undefined);
    expect(metadataBase._SubtitleWrapper.h).toBe(0);

    metadataBase.subtitle = subtitle;
    await metadataBase.__updateSpyPromise;
    testRenderer.update();

    expect(metadataBase._Subtitle.content).toBe(subtitle);
    expect(metadataBase._Subtitle.h).toBeGreaterThan(0);
    expect(metadataBase._SubtitleWrapper).toMatchObject({
      h: metadataBase._Subtitle.h,
      alpha: 1
    });
  });

  it('updates the description', async () => {
    const description = 'description text';
    expect(metadataBase.description).toBe(undefined);
    metadataBase.description = description;
    await metadataBase.__updateSpyPromise;
    expect(metadataBase._Description.content).toBe(description);
  });

  it('should allow marquee-ing title and description text', async () => {
    expect(metadataBase._Title.marquee).toBeUndefined();
    expect(metadataBase._Description.marquee).toBeUndefined();

    metadataBase.marquee = true;
    await metadataBase.__updateSpyPromise;

    expect(metadataBase._Title.marquee).toBe(true);
    expect(metadataBase._Description.marquee).toBe(true);
  });

  it('updates the Logo and its position', async () => {
    const logoPath = './path-to-logo';
    [metadataBase, testRenderer] = createComponent(
      {},
      {
        spyOnMethods: ['_update', '_subtitleLoaded']
      }
    );

    expect(metadataBase.logo).toBe(undefined);

    metadataBase.logo = logoPath;
    await metadataBase.__updateSpyPromise;
    expect(metadataBase.logo).toBe(logoPath);

    const subtitle = 'secondLine text';
    metadataBase.subtitle = subtitle;
    await metadataBase.__updateSpyPromise;
    await metadataBase.__subtitleLoadedSpyPromise;

    const logoX = metadataBase.w - metadataBase.logoWidth;
    expect(metadataBase._Logo.x).toBe(logoX);

    metadataBase.logoPosition = 'left';
    await metadataBase.__updateSpyPromise;
    testRenderer.update();
    expect(metadataBase._Logo.x).toBe(0);

    const secondLineX = metadataBase.logoWidth + metadataBase.style.logoPadding;
    expect(metadataBase._Text.x).toBe(secondLineX);
  });

  describe('resetMarquee', () => {
    beforeEach(() => {
      jest.spyOn(metadataBase._Title, 'toggleMarquee');
      jest.spyOn(metadataBase._Description, 'toggleMarquee');
    });
    it('should toggle the marquee animation for title', async () => {
      metadataBase.title = 'title';
      metadataBase.marquee = true;
      await metadataBase.__updateSpyPromise;

      expect(metadataBase._Title.toggleMarquee).not.toHaveBeenCalled();
      expect(metadataBase._Description.toggleMarquee).not.toHaveBeenCalled();

      metadataBase.resetMarquee();

      expect(metadataBase._Title.toggleMarquee).toHaveBeenCalled();
      expect(metadataBase._Description.toggleMarquee).not.toHaveBeenCalled();
    });
    it('should toggle the marquee animation for description', async () => {
      metadataBase.description = 'description';
      metadataBase.marquee = true;
      await metadataBase.__updateSpyPromise;

      expect(metadataBase._Title.toggleMarquee).not.toHaveBeenCalled();
      expect(metadataBase._Description.toggleMarquee).not.toHaveBeenCalled();

      metadataBase.resetMarquee();

      expect(metadataBase._Title.toggleMarquee).not.toHaveBeenCalled();
      expect(metadataBase._Description.toggleMarquee).toHaveBeenCalled();
    });
    it('should toggle the marquee animation if marquee is not enabled', async () => {
      metadataBase.title = 'title';
      metadataBase.description = 'description';
      metadataBase.marquee = false;
      await metadataBase.__updateSpyPromise;

      expect(metadataBase._Title.toggleMarquee).not.toHaveBeenCalled();
      expect(metadataBase._Description.toggleMarquee).not.toHaveBeenCalled();

      metadataBase.resetMarquee();

      expect(metadataBase._Title.toggleMarquee).not.toHaveBeenCalled();
      expect(metadataBase._Description.toggleMarquee).not.toHaveBeenCalled();
    });
  });

  // TODO test is timing out
  it.skip('should signal dimension updates when the height is changed', async () => {
    [metadataBase, testRenderer] = createComponent(
      {
        w: 400,
        h: 0,
        logoHeight: 0
      },
      {
        spyOnMethods: ['_titleLoaded']
      }
    );
    jest.spyOn(metadataBase, 'signal');
    await metadataBase.__titleLoadedSpyPromise;

    const initialH = metadataBase.h;
    expect(metadataBase.signal).not.toHaveBeenCalled();
    expect(metadataBase.h).toBe(initialH);

    metadataBase.title = 'text';

    await metadataBase.__titleLoadedSpyPromise;

    const updatedH = metadataBase.h;
    expect(metadataBase.signal).toHaveBeenCalledWith(
      'updateComponentDimensions'
    );
    expect(updatedH).toBeGreaterThan(initialH);
  });

  // TODO test is timing out
  it.skip('should not signal dimension updates when the height is not changed', async () => {
    [metadataBase, testRenderer] = createComponent(
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
    await metadataBase.__titleLoadedSpyPromise;
    jest.spyOn(metadataBase, 'signal');

    const initialH = metadataBase.h;
    expect(metadataBase.signal).not.toHaveBeenCalled();
    expect(metadataBase.h).toBe(initialH);

    // updated title ('text' backwards) that should be the same height as the initial title
    metadataBase.title = 'txet';

    await metadataBase.__titleLoadedSpyPromise;

    expect(metadataBase.signal).not.toHaveBeenCalled();
    expect(metadataBase.h).toBe(initialH);
  });
});