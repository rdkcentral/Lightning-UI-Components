import { makeCreateComponent } from '@lightningjs/ui-test-utils';
import Radio from './index.js';
import { jest } from '@jest/globals';

const createRadio = makeCreateComponent(Radio);

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

  it('sets the announce string to the checked status', () => {
    radio.checked = true;
    testRenderer.forceAllUpdates();
    expect(radio.announce).toBe('Checked');
    radio.checked = false;
    testRenderer.forceAllUpdates();
    expect(radio.announce).toBe('Unchecked');
  });

  it('overrides the announce string', () => {
    const overrideString = 'Custom announce string';
    radio.announce = overrideString;
    testRenderer.forceAllUpdates();
    expect(radio.announce).toBe(overrideString);
  });

  it('reannounces on checked status change', () => {
    radio.fireAncestors = jest.fn();
    radio.checked = true;
    testRenderer.forceAllUpdates();
    expect(radio.fireAncestors).toHaveBeenCalledWith('$announce', 'Checked');
  });

  it('toggles checked state on enter', () => {
    [radio, testRenderer] = createRadio({ checked: false });
    expect(radio.checked).toEqual(false);
    testRenderer.keyPress('Enter');
    expect(radio.checked).toEqual(true);
    testRenderer.keyPress('Enter');
    expect(radio.checked).toEqual(false);
  });

  it('should not toggle the radio when in disabled mode', () => {
    // NOTE: The checked status can be set before the mode is changed
    [radio, testRenderer] = createRadio({ checked: false, mode: 'disabled' });
    expect(radio.checked).toBe(false);
    expect(radio._Knob.alpha).toBe(0);
    testRenderer.forceAllUpdates();
    testRenderer.keyPress('Enter');
    expect(radio.checked).toBe(false);
    expect(radio._Knob.alpha).toBe(0);
  });
});
