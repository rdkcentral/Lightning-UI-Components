import TestUtils from '../../test/lightning-test-utils';
import MetadataHero from '.';

const createComponent = TestUtils.makeCreateComponent(MetadataHero);

describe('MetadataHero', () => {
  let component, testRenderer;

  beforeEach(() => {
    [component, testRenderer] = createComponent();
  });
  afterEach(() => {
    component = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('updates the Title', () => {
    const title = 'title text';
    expect(component.title).toBe(undefined);
    component.title = title;
    expect(component.title).toBe(title);
  });

  it('updates the Subtitle', () => {
    const subtitle = 'subtitle text';
    expect(component.subtitle).toBe(undefined);
    component.subtitle = subtitle;
    expect(component.subtitle).toBe(subtitle);
  });

  it('updates the Description', () => {
    const description = 'description text';
    expect(component.description).toBe(undefined);
    component.description = description;
    expect(component.description).toBe(description);
  });

  it('updates the Data', () => {
    const dataText = 'data text';
    expect(component.data).toBe(undefined);
    component.data = dataText;
    expect(component.data).toBe(dataText);
  });
});
