import { makeCreateComponent } from '@lightning/ui-test-utils';
import MetadataCardContent from '.';
import xfinityProviderLogoSquare from '../../assets/images/Xfinity-Provider-Logo-Square.png';

const createComponent = makeCreateComponent(MetadataCardContent);

describe('MetadataCardContent', () => {
  let metadataCardContent, testRenderer;

  beforeEach(() => {
    [metadataCardContent, testRenderer] = createComponent(
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
    metadataCardContent = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('sets the announce string to the appropriate text content status', () => {
    const title = 'Title';
    const description = 'Description';
    const details = 'Details';
    const provider = { providers: [{ icon: 'test.png', announce: 'test' }] };
    metadataCardContent.patch({ title, description, details, provider });
    testRenderer.forceAllUpdates();
    expect(metadataCardContent.announce).toEqual([
      title,
      description,
      details,
      ['test']
    ]);
  });

  it('overrides the announce string', () => {
    const overrideString = 'Custom announce string';
    metadataCardContent.announce = overrideString;
    testRenderer.forceAllUpdates();
    expect(metadataCardContent.announce).toBe(overrideString);
  });

  it('updates the title', async () => {
    const title = 'title text';
    expect(metadataCardContent.title).toBe(undefined);
    metadataCardContent.title = title;
    await metadataCardContent.__updateSpyPromise;
    expect(metadataCardContent._Title.content).toBe(title);
  });

  it('updates the description', async () => {
    const description = 'description text';
    expect(metadataCardContent.description).toBe(undefined);
    metadataCardContent.description = description;
    await metadataCardContent.__updateSpyPromise;
    expect(metadataCardContent._Description.content).toBe(description);
  });

  it('updates the details', async () => {
    const details = 'details text';
    expect(metadataCardContent.details).toBe(undefined);
    metadataCardContent.details = details;
    await metadataCardContent.__updateSpyPromise;
    expect(metadataCardContent._Details.content).toBe(details);
  });

  it('creates provider', () => {
    expect(
      metadataCardContent._Provider._Row.items[3].tag('Text').content
    ).toBe('+7');
    expect(metadataCardContent._Provider._Row._Items.h).toBe(
      metadataCardContent.style.provider.itemSize
    );
  });
});
