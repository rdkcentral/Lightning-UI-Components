import TestUtils from '../../test/lightning-test-utils';
import Checkbox from '.';

const createCheckbox = TestUtils.makeCreateComponent(Checkbox);

describe('Checkbox', () => {
  let checkbox, testRenderer;

  beforeEach(() => {
    [checkbox, testRenderer] = createCheckbox({ checked: false });
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should toggle the checkbox', () => {
    [checkbox, testRenderer] = createCheckbox({
      checked: false
    });

    checkbox._smooth = false;
    expect(checkbox.checked).toBe(false);
    expect(checkbox._Check.alpha).toBe(0);

    testRenderer.keyPress('Enter');
    checkbox._update();
    expect(checkbox.checked).toBe(true);
    expect(checkbox._Check.alpha).toBe(1);
  });

  it('should not toggle the checkbox when in disabled mode', () => {
    // NOTE: The checked status can be set before the mode is changed
    [checkbox, testRenderer] = createCheckbox({
      checked: false,
      mode: 'disabled'
    });
    expect(checkbox.checked).toBe(false);
    expect(checkbox._Check.alpha).toBe(0);
    testRenderer.keyPress('Enter');
    expect(checkbox.checked).toBe(false);
    expect(checkbox._Check.alpha).toBe(0);
  });
});
