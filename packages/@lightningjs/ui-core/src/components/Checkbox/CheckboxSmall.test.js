import { makeCreateComponent } from '@lightningjs/ui-test-utils';
import CheckboxSmall from './CheckboxSmall.js';

const createCheckboxSmall = makeCreateComponent(CheckboxSmall);

describe('CheckboxSmall', () => {
  let checkboxSmall, testRenderer;

  beforeEach(() => {
    [checkboxSmall, testRenderer] = createCheckboxSmall({ checked: false });
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('renders the correct height', () => {
    expect(checkboxSmall.h).toBe(checkboxSmall.style.h);
  });

  it('renders the correct weight', () => {
    expect(checkboxSmall.w).toBe(checkboxSmall.style.w);
  });
});
