import { makeCreateComponent } from '@lightning/ui-test-utils';
import CardContentVertical from './CardContentVertical';

const createComponent = makeCreateComponent(CardContentVertical);

describe('CardContentVertical', () => {
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

  it('sizes Metadata', () => {
    component.shouldCollapse = true;
    testRenderer.forceAllUpdates();
    const w = component.style.expandedW - 2 * component.style.paddingHorizontal;
    const h =
      component.style.expandedH -
      2 * component.style.paddingVertical -
      component.style.imageSize.h;
    expect(component._Metadata.w).toBe(w);
    expect(component._Metadata.h).toBe(h);
  });

  it('resizes based on collapse status', () => {
    component.mode = 'unfocused';

    component.shouldCollapse = false;
    component.collapseToMetadata = false;
    testRenderer.forceAllUpdates();
    expect(component.h).toBe(component.style.expandedH);

    component.shouldCollapse = true;
    component.collapseToMetadata = false;
    testRenderer.forceAllUpdates();
    expect(component.h).toBe(component.style.imageSize.h);

    component.collapseToMetadata = true;
    testRenderer.forceAllUpdates();
    expect(component.h).toBe(
      component.style.expandedH - component.style.imageSize.h
    );
  });
});
