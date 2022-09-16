import TestUtils from '../../test/lightning-test-utils';
import MetadataTile from '.';

const createComponent = TestUtils.makeCreateComponent(MetadataTile, {
  w: 400,
  h: 300
});

describe('MetadataTile', () => {
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
    await component.__updateSpyPromise;
    expect(component._Subtitle.content).toBe(subtitle);
    expect(component._SubtitleWrapper.h).toBeGreaterThan(0);
    expect(component._SubtitleWrapper.alpha).toBe(1);
  });
});
