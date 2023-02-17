import { makeCreateComponent } from '@lightning/ui-test-utils';
import CardContentVertical from './CardContentVertical';

const createComponent = makeCreateComponent(CardContentVertical);

describe('CardContentVertical', () => {
  // eslint-disable-next-line no-unused-vars
  let cardContentVertical, testRenderer;

  beforeEach(() => {
    [cardContentVertical, testRenderer] = createComponent();
  });
  afterEach(() => {
    cardContentVertical = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('sizes Metadata', () => {
    cardContentVertical.shouldCollapse = true;
    testRenderer.forceAllUpdates();
    const w =
      cardContentVertical.style.expandedW -
      2 * cardContentVertical.style.paddingHorizontal;
    const h =
      cardContentVertical.style.expandedH -
      2 * cardContentVertical.style.paddingVertical -
      cardContentVertical.style.imageSize.h;
    expect(cardContentVertical._Metadata.w).toBe(w);
    expect(cardContentVertical._Metadata.h).toBe(h);
  });

  it('resizes based on collapse status', () => {
    cardContentVertical.mode = 'unfocused';

    cardContentVertical.shouldCollapse = false;
    cardContentVertical.collapseToMetadata = false;
    testRenderer.forceAllUpdates();
    expect(cardContentVertical.h).toBe(cardContentVertical.style.expandedH);

    cardContentVertical.shouldCollapse = true;
    cardContentVertical.collapseToMetadata = false;
    testRenderer.forceAllUpdates();
    expect(cardContentVertical.h).toBe(cardContentVertical.style.imageSize.h);

    cardContentVertical.collapseToMetadata = true;
    testRenderer.forceAllUpdates();
    expect(cardContentVertical.h).toBe(
      cardContentVertical.style.expandedH -
        cardContentVertical.style.imageSize.h
    );
  });
});
