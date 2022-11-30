import { makeCreateComponent } from '@lightning/ui-test-utils';
import CheckboxSmall from './CheckboxSmall.js';

const createCheckboxSmall = makeCreateComponent(CheckboxSmall);

describe('CheckboxSmall', () => {
  let checkbox, testRenderer;

  beforeEach(() => {
    [checkbox, testRenderer] = createCheckboxSmall({ checked: false });
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('renders the correct height', () => {
    expect(checkbox.h).toBe(20);
  });

  it('renders the correct weight', () => {
    expect(checkbox.w).toBe(20);
  });
});
