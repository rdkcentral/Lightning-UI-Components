import { makeCreateComponent } from '@lightningjs/ui-test-utils';
import RadioSmall from './RadioSmall.js';

const createRadio = makeCreateComponent(RadioSmall);

describe('RadioSmall', () => {
  let radioSmall, testRenderer;

  beforeEach(() => {
    [radioSmall, testRenderer] = createRadio();
  });

  afterEach(() => {
    radioSmall = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('toggles checked state on enter', () => {
    [radioSmall, testRenderer] = createRadio({ checked: false });
    expect(radioSmall.checked).toEqual(false);
    testRenderer.keyPress('Enter');
    expect(radioSmall.checked).toEqual(true);
    testRenderer.keyPress('Enter');
    expect(radioSmall.checked).toEqual(false);
  });
});
