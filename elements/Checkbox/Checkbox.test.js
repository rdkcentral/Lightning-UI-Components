import lng from '@lightningjs/core';
import TestUtils from '../../test/lightning-test-utils';
import Checkbox from '.';

const createCheckbox = TestUtils.makeCreateComponent(Checkbox);

const getRoundRectPatchArgs = getRoundRectSpy => {
  const mappedArgs = getRoundRectSpy.mock.calls.map(call => ({
    w: call[0],
    h: call[1],
    radius: call[2],
    strokeWidth: call[3],
    strokeColor: call[4],
    fill: call[5],
    fillColor: call[6]
  }));
  return { args: mappedArgs, last: mappedArgs[mappedArgs.length - 1] };
};

describe('Checkbox', () => {
  let checkbox, testRenderer;
  const getRoundRect = jest.spyOn(lng.Tools, 'getRoundRect');

  beforeEach(() => {
    [checkbox, testRenderer] = createCheckbox({ checked: false });
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should toggle the checkbox', () => {
    let roundRectPatchArgs;
    [checkbox, testRenderer] = createCheckbox({
      checked: false
    });

    roundRectPatchArgs = getRoundRectPatchArgs(getRoundRect);
    expect(checkbox.checked).toBe(false);
    expect(checkbox._Check.alpha).toBe(0);
    expect(roundRectPatchArgs.last).toMatchObject({
      fillColor: checkbox._componentStyles.uncheckedBackgroundColor,
      strokeColor: checkbox._componentStyles.strokeColor
    });

    testRenderer.keyPress('Enter');

    roundRectPatchArgs = getRoundRectPatchArgs(getRoundRect);
    expect(checkbox.checked).toBe(true);
    expect(checkbox._Check.alpha).toBe(1);
    expect(roundRectPatchArgs.last).toMatchObject({
      fillColor: checkbox._componentStyles.checkedBackgroundColor,
      strokeColor: checkbox._componentStyles.strokeColor
    });
  });

  it('should not toggle the checkbox when disabled', () => {
    let roundRectPatchArgs;
    [checkbox, testRenderer] = createCheckbox({
      checked: false,
      disabled: true
    });

    roundRectPatchArgs = getRoundRectPatchArgs(getRoundRect);
    expect(checkbox.checked).toBe(false);
    expect(checkbox._Check.alpha).toBe(0);
    expect(roundRectPatchArgs.last).toMatchObject({
      fillColor: checkbox._componentStyles.disabledBackgroundColor,
      strokeColor: checkbox._componentStyles.disabledStrokeColor
    });

    testRenderer.keyPress('Enter');

    roundRectPatchArgs = getRoundRectPatchArgs(getRoundRect);
    expect(checkbox.checked).toBe(false);
    expect(checkbox._Check.alpha).toBe(0);
    expect(roundRectPatchArgs.last).toMatchObject({
      fillColor: checkbox._componentStyles.disabledBackgroundColor,
      strokeColor: checkbox._componentStyles.disabledStrokeColor
    });
  });
});
