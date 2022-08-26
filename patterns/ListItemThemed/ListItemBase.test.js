import TestUtils from '../../test/lightning-test-utils';
import ListItemBase from './ListItemBase';
import { measureTextWidth } from '../../utils';

const createComponent = TestUtils.makeCreateComponent(ListItemBase);

const icon = TestUtils.pathToDataURI('assets/images/ic_lightning_white_32.png');

describe('ListItemBase', () => {
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

  it('should have proper dimensions for Text wrapper with Title and Description', () => {
    const w = Math.max(
      measureTextWidth(component._Title._Text.text),
      measureTextWidth(component._Description._Text.text)
    );
    const h = component._Title.h + component._Description.h;
    expect(component._Text.w).toBe(w);
    expect(component._Text.h).toBe(h);
  });

  it('should center Prefix vertically based on Content height', () => {
    component.patch({ icon });
    testRenderer.forceAllUpdates();

    const y = component._Content.h / 2;
    expect(component._Prefix.y).toBe(y);
  });
});
