import { makeCreateComponent } from '@lightningjs/ui-test-utils';
import CardContentVerticalSmall from './CardContentVerticalSmall';

const createComponent = makeCreateComponent(CardContentVerticalSmall);

describe('CardContentVerticalSmall', () => {
  // eslint-disable-next-line no-unused-vars
  let cardContentVerticalSmall, testRenderer;

  beforeEach(() => {
    [cardContentVerticalSmall, testRenderer] = createComponent();
  });
  afterEach(() => {
    cardContentVerticalSmall = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('does not use details or provider in metadata', () => {
    cardContentVerticalSmall.metadata = {
      title: 'Title',
      description: 'Description',
      details: 'Details',
      provider: ['image1', 'image2']
    };
    expect(cardContentVerticalSmall.metadata.details).toBeUndefined();
    expect(cardContentVerticalSmall.metadata.provider).toBeUndefined();
  });
});
