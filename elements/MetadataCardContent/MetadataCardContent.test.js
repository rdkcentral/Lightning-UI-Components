import TestUtils from '../../test/lightning-test-utils';
import MetadataCardContent from '.';
import xfinityProviderLogoSquare from '../../assets/images/Xfinity-Provider-Logo-Square.png';

const createComponent = TestUtils.makeCreateComponent(MetadataCardContent);

describe('MetadataCardContent', () => {
  let component, testRenderer;

  beforeEach(() => {
    [component, testRenderer] = createComponent(
      {
        provider: {
          visibleCount: 3,
          providers: Array(10).fill(xfinityProviderLogoSquare)
        }
      },
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

  it('updates the description', async () => {
    const description = 'description text';
    expect(component.description).toBe(undefined);
    component.description = description;
    await component.__updateSpyPromise;
    expect(component._Description.content).toBe(description);
  });

  it('updates the details', async () => {
    const details = 'details text';
    expect(component.details).toBe(undefined);
    component.details = details;
    await component.__updateSpyPromise;
    expect(component._Details.content).toBe(details);
  });

  it('creates provider', () => {
    expect(component._Provider._Row.items[3].tag('Text').content).toBe('+7');
    expect(component._Provider._Row._Items.h).toBe(
      component.style.providerStyle.itemSize
    );
  });
});
