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
  let toggle, styledToggle, testRenderer, styledTestRenderer;

  beforeEach(() => {
    [toggle, testRenderer] = createToggle();
    [styledToggle, styledTestRenderer] = createStyledToggle();
  });
  afterEach(() => {
    toggle = null;
    testRenderer = null;
    styledToggle = null;
    styledTestRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
    const styledTree = styledTestRenderer.toJSON(2);
    expect(styledTree).toMatchSnapshot();
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
        styledToggle._componentStyles.strokeWeight +
        styledToggle._componentStyles.knobPadding;
      const checkedPosition =
        styledToggle._componentStyles.w -
        styledToggle._componentStyles.strokeWeight -
        styledToggle._componentStyles.knobPadding -
        styledToggle._componentStyles.knobWidth;

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
        toggle._componentStyles.knobHeight +
        2 *
          (toggle._componentStyles.knobPadding +
            toggle._componentStyles.strokeWeight);
      const styledHeight =
        styledToggle._componentStyles.knobHeight +
        2 *
          (styledToggle._componentStyles.knobPadding +
            styledToggle._componentStyles.strokeWeight);

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
