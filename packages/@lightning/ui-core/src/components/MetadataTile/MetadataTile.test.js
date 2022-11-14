import { makeCreateComponent } from '../../../test/lightning-test-utils.js';
import MetadataTile from './index.js';

const createComponent = makeCreateComponent(MetadataTile, {
  w: 400,
  h: 300
});

describe('MetadataTile', () => {
  let component, testRenderer;

  beforeEach(() => {
    [component, testRenderer] = createComponent(
      {},
      {
        spyOnMethods: ['_update', '_subtitleLoaded']
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
    component.patch({ title, subtitle, logoTitle });
    testRenderer.forceAllUpdates();
    expect(component.announce).toEqual([title, subtitle, logoTitle]);
    component.patch({ title, subtitle: undefined, description, logoTitle });
    testRenderer.forceAllUpdates();
    expect(component.announce).toEqual([title, description, logoTitle]);
  });

  it('overrides the announce string', () => {
    const overrideString = 'Custom announce string';
    component.announce = overrideString;
    testRenderer.forceAllUpdates();
    expect(component.announce).toBe(overrideString);
  });

  it('hides subtitle if description is provided', async () => {
    component.subtitle = 'subtitle';
    await component.__updateSpyPromise;
    expect(component._Subtitle.alpha).toBe(1);
    expect(component._Subtitle.visible).toBe(true);
    component.description = 'description';
    await component.__updateSpyPromise;
    expect(component._Subtitle.alpha).toBe(0);
    expect(component._Subtitle.visible).toBe(false);
    expect(component._SubtitleWrapper.h).toBe(0);
  });

  it('should render a subtitle', async () => {
    const subtitle = 'subtitle text';
    expect(component._SubtitleWrapper.h).toBe(0);
    component.subtitle = subtitle;
    await component.__subtitleLoadedSpyPromise;
    testRenderer.forceAllUpdates();
    expect(component._Subtitle.content).toBe(subtitle);
    expect(component._SubtitleWrapper.h).toBeGreaterThan(0);
    expect(component._SubtitleWrapper.alpha).toBe(1);
  });
});
