import TestUtils from '../../test/lightning-test-utils';
import CardContentHorizontal from './CardContentHorizontal';

const createComponent = TestUtils.makeCreateComponent(CardContentHorizontal);

describe('CardContentHorizontal', () => {
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

  it('sizes Metadata in standard layout', () => {
    component.shouldCollapse = false;
    testRenderer.forceAllUpdates();
    const w =
      component.style.expandedW -
      2 * component.style.paddingHorizontal -
      component.style.imageSize.w;
    const h = component.style.expandedH - 2 * component.style.paddingVertical;
    expect(component._Metadata.w).toBe(w);
    expect(component._Metadata.h).toBe(h);
  });

  it('resizes based on collapse status', () => {
    component.mode = 'unfocused';

    component.shouldCollapse = false;
    component.collapseToMetadata = false;
    testRenderer.forceAllUpdates();
    expect(component.w).toBe(component.style.expandedW);

    component.shouldCollapse = true;
    component.collapseToMetadata = false;
    testRenderer.forceAllUpdates();
    expect(component.w).toBe(component.style.imageSize.w);

    component.collapseToMetadata = true;
    testRenderer.forceAllUpdates();
    expect(component.w).toBe(
      component.style.expandedW - component.style.imageSize.w
    );
  });
});
