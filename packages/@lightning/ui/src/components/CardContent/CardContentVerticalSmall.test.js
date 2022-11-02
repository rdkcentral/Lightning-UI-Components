import TestUtils from '@lightning/ui-core/test';
import CardContentVerticalSmall from './CardContentVerticalSmall';

const createComponent = TestUtils.makeCreateComponent(CardContentVerticalSmall);

describe('CardContentVerticalSmall', () => {
  // eslint-disable-next-line no-unused-vars
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

  it('does not use details or provider in metadata', () => {
    component.metadata = {
      title: 'Title',
      description: 'Description',
      details: 'Details',
      provider: ['image1', 'image2']
    };
    expect(component.metadata.details).toBeUndefined();
    expect(component.metadata.provider).toBeUndefined();
  });
});
