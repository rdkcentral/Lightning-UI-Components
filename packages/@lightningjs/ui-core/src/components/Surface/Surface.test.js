import { makeCreateComponent } from '@lightningjs/ui-test-utils';
import Surface from './index.js';

const createSurface = makeCreateComponent(Surface);

describe('Surface', () => {
  let surface, testRenderer;

  beforeEach(() => {
    [surface, testRenderer] = createSurface();
  });

  afterEach(() => {
    surface = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('has the correct static tags getter', () => {
    expect(surface.constructor.tags).toMatchObject(['Background']);
  });

  it('should update stateColor and layout ', () => {
    surface.disabled = false;
    surface._focus();
    testRenderer.forceAllUpdates();
    expect(surface._stateColor).toEqual(
      surface._componentStyle.backgroundColorFocused
    );
  });

  it('should update stateColor ', () => {
    surface.disabled = false;
    surface._unfocus();
    testRenderer.unfocus();
    expect(surface._stateColor).toEqual(
      surface._componentStyle.backgroundColorUnfocused
    );
  });

  it('should update stateColor ', () => {
    surface.disabled = true;
    testRenderer.forceAllUpdates();
    expect(surface._stateColor).toEqual(
      surface._componentStyle.backgroundColorDisabled
    );
  });
});
