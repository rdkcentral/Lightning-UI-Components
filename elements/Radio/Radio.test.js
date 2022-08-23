import TestUtils from '../../test/lightning-test-utils';
import Radio from '.';

const createRadio = TestUtils.makeCreateComponent(Radio);

describe('Radio', () => {
  let radio, testRenderer;

  beforeEach(() => {
    [radio, testRenderer] = createRadio();
  });
  afterEach(() => {
    radio = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('toggles checked state on enter', () => {
    [radio, testRenderer] = createRadio({ checked: false });
    expect(radio.checked).toEqual(false);
    testRenderer.keyPress('Enter');
    expect(radio.checked).toEqual(true);
    testRenderer.keyPress('Enter');
    expect(radio.checked).toEqual(false);
  });

  it('stroke color should change when active', () => {
    [radio, testRenderer] = createRadio({
      isInactive: false
    });
    const strokeColor = radio.isInactive
      ? radio._componentStyle.strokeColorInactive
      : radio._componentStyle.strokeColor;
    expect(strokeColor).toBe(radio._componentStyle.strokeColor);
  });

  it('stroke color should change when inactive', () => {
    [radio, testRenderer] = createRadio({
      isInactive: true
    });
    const strokeColor = radio.isInactive
      ? radio._componentStyle.strokeColorInactive
      : radio._componentStyle.strokeColor;
    expect(strokeColor).toBe(radio._componentStyle.strokeColorInactive);
  });
});
