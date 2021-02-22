import TestUtils from '../lightning-test-utils';
import Checkbox from '.';

const createCheckbox = TestUtils.makeCreateComponent(Checkbox);

describe('Checkbox', () => {
  let checkBox, testRenderer;

  beforeEach(() => {
    [checkBox, testRenderer] = createCheckbox({ checked: false });
  });
  afterEach(() => {
    checkBox = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('toggles checked state on enter', () => {
    expect(checkBox.checked).toEqual(false);
    testRenderer.keyPress('Enter');
    expect(checkBox.checked).toEqual(true);
    testRenderer.keyPress('Enter');
    expect(checkBox.checked).toEqual(false);
  });

  it('toggles check alpha on enter', () => {
    expect(checkBox._Check.alpha).toEqual(0);
    testRenderer.keyPress('Enter');
    expect(checkBox._Check.alpha).toEqual(1);
    testRenderer.keyPress('Enter');
    expect(checkBox._Check.alpha).toEqual(0);
  });
});
