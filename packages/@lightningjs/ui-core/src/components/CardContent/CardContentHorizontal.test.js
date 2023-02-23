import { makeCreateComponent } from '@lightningjs/ui-test-utils';
import CardContentHorizontal from './CardContentHorizontal';

const createComponent = makeCreateComponent(CardContentHorizontal);

describe('CardContentHorizontal', () => {
  // eslint-disable-next-line no-unused-vars
  let cardContentHorizontal, testRenderer;

  beforeEach(() => {
    [cardContentHorizontal, testRenderer] = createComponent();
  });
  afterEach(() => {
    cardContentHorizontal = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('sizes Metadata in standard layout', () => {
    cardContentHorizontal.shouldCollapse = false;
    testRenderer.forceAllUpdates();
    const w =
      cardContentHorizontal.style.expandedW -
      2 * cardContentHorizontal.style.paddingHorizontal -
      cardContentHorizontal.style.imageSize.w;
    const h =
      cardContentHorizontal.style.expandedH -
      2 * cardContentHorizontal.style.paddingVertical;
    expect(cardContentHorizontal._Metadata.w).toBe(w);
    expect(cardContentHorizontal._Metadata.h).toBe(h);
  });

  it('resizes based on collapse status', () => {
    cardContentHorizontal.mode = 'unfocused';

    cardContentHorizontal.shouldCollapse = false;
    cardContentHorizontal.collapseToMetadata = false;
    testRenderer.forceAllUpdates();
    expect(cardContentHorizontal.w).toBe(cardContentHorizontal.style.expandedW);

    cardContentHorizontal.shouldCollapse = true;
    cardContentHorizontal.collapseToMetadata = false;
    testRenderer.forceAllUpdates();
    expect(cardContentHorizontal.w).toBe(
      cardContentHorizontal.style.imageSize.w
    );

    cardContentHorizontal.collapseToMetadata = true;
    testRenderer.forceAllUpdates();
    expect(cardContentHorizontal.w).toBe(
      cardContentHorizontal.style.expandedW -
        cardContentHorizontal.style.imageSize.w
    );
  });
});
