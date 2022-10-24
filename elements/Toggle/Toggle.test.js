import TestUtils from '../../test/lightning-test-utils';
import Toggle from '.';
import withStyles from '../../mixins/withThemeStyles';

const createToggle = TestUtils.makeCreateComponent(Toggle);

const styles = {
  w: 96,
  strokeRadius: 20,
  strokeWeight: 2,
  knobWidth: 36,
  knobHeight: 30,
  knobRadius: 16,
  knobPadding: 2
};
const createStyledToggle = TestUtils.makeCreateComponent(
  withStyles(Toggle, styles)
);

describe('Toggle', () => {
  let toggle, styledToggle, testRenderer;

  beforeEach(() => {
    [toggle, testRenderer] = createToggle();
    [styledToggle] = createStyledToggle();
  });

  afterEach(() => {
    toggle = null;
    testRenderer = null;
    styledToggle = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('sets the announce string to the checked status', () => {
    toggle.checked = true;
    testRenderer.forceAllUpdates();
    expect(toggle.announce).toBe('Checked');
    toggle.checked = false;
    testRenderer.forceAllUpdates();
    expect(toggle.announce).toBe('Unchecked');
  });

  it('overrides the announce string', () => {
    const overrideString = 'Custom announce string';
    toggle.announce = overrideString;
    testRenderer.forceAllUpdates();
    expect(toggle.announce).toBe(overrideString);
  });

  it('reannounces on checked status change', () => {
    toggle.fireAncestors = jest.fn();
    toggle.checked = true;
    testRenderer.forceAllUpdates();
    expect(toggle.fireAncestors).toHaveBeenCalledWith('$announce', 'Checked');
  });

  describe('#toggle', () => {
    it('changes checked state', () => {
      expect(toggle.checked).toEqual(false);

      toggle.toggle();
      expect(toggle.checked).toEqual(true);

      toggle.toggle();
      expect(toggle.checked).toEqual(false);
    });

    it('renders checked state', () => {
      toggle.toggle();
      testRenderer.update();
      const tree = testRenderer.toJSON(2);
      expect(tree).toMatchSnapshot();
    });

    it('calculates unchecked position if not specified', async () => {
      const uncheckedPosition =
        styledToggle._componentStyle.strokeWeight +
        styledToggle._componentStyle.knobPadding;
      const checkedPosition =
        styledToggle._componentStyle.w -
        styledToggle._componentStyle.strokeWeight -
        styledToggle._componentStyle.knobPadding -
        styledToggle._componentStyle.knobWidth;

      expect(styledToggle.checked).toBe(false);
      expect(styledToggle._Knob.x).toBe(uncheckedPosition);

      styledToggle.toggle();
      setTimeout(() => {
        expect(styledToggle.checked).toBe(true);
        expect(styledToggle._Knob.x).toBe(checkedPosition);
      }, 1);
    });

    it('calculates correct stroke height', () => {
      const height =
        toggle._componentStyle.knobHeight +
        2 *
          (toggle._componentStyle.knobPadding +
            toggle._componentStyle.strokeWeight);
      const styledHeight =
        styledToggle._componentStyle.knobHeight +
        2 *
          (styledToggle._componentStyle.knobPadding +
            styledToggle._componentStyle.strokeWeight);

      expect(toggle._Stroke.h).toBe(height);
      expect(styledToggle._Stroke.h).toBe(styledHeight);
    });
  });

  describe('Key handling', () => {
    it('Enter press toggles', async () => {
      [toggle, testRenderer] = createToggle(
        {},
        { spyOnMethods: ['_handleEnter'] }
      );
      const spy = jest.spyOn(toggle, 'toggle');

      testRenderer.keyPress('Enter');
      await toggle.__handleEnterPromiseSpy;
      expect(spy).toBeCalled();
    });
  });
});
