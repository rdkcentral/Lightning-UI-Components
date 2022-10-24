import TestUtils from '../../test/lightning-test-utils';
import Tooltip from '.';

const createTooltip = TestUtils.makeCreateComponent(
  Tooltip,
  {},
  { focused: false }
);

const completeAnimation = (element, transitionProperties = []) => {
  const props = Array.isArray(transitionProperties)
    ? transitionProperties
    : [transitionProperties];

  const transitions = props.map(prop => {
    return new Promise(resolve => {
      element._getTransition(prop).once('finish', () => {
        resolve();
      });
    });
  });

  return Promise.all(transitions);
};

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

describe('Tooltip', () => {
  let tooltip, testRenderer;

  beforeEach(() => {
    [tooltip, testRenderer] = createTooltip({ title: 'Tooltip' });
  });

  it('renders', async () => {
    testRenderer.focus();
    await completeAnimation(tooltip, ['alpha', 'scale']);
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it("sets the announce string to the tooltip's title", () => {
    const title = 'Helper text';
    tooltip.title = title;
    // need to focus to make the component render in, otherwise there is no TextBox rendered
    tooltip._focus();
    testRenderer.forceAllUpdates();
    expect(tooltip.announce).toBe(title);
  });

  it('overrides the announce string', () => {
    const overrideString = 'Custom announce string';
    tooltip.announce = overrideString;
    testRenderer.forceAllUpdates();
    expect(tooltip.announce).toBe(overrideString);
  });

  describe('visibility', () => {
    it('should be visible when focused', async () => {
      expect(tooltip.alpha).toEqual(0);
      expect(tooltip.scale).toBe(0.5);

      tooltip._focus();
      await completeAnimation(tooltip, ['alpha', 'scale']);

      expect(tooltip.alpha).toEqual(1);
      expect(tooltip.scale).toEqual(1);
    });

    it('should be hidden when unfocused', async () => {
      [tooltip, testRenderer] = createTooltip(
        { title: 'Tooltip' },
        { focused: true }
      );
      await completeAnimation(tooltip, ['alpha', 'scale']);

      expect(tooltip.alpha).toEqual(1);
      expect(tooltip.scale).toEqual(1);

      tooltip._unfocus();
      await completeAnimation(tooltip, ['alpha', 'scale']);

      expect(tooltip.alpha).toEqual(0);
      expect(tooltip.scale).toBe(0.5);
    });

    it('should show after delay if delayVisible is set', async () => {
      const delayVisible = 5000;
      [tooltip, testRenderer] = createTooltip({ delayVisible });

      expect(tooltip.alpha).toEqual(0);
      expect(tooltip.scale).toBe(0.5);
      expect(tooltip._showTimer).toBeUndefined();
      expect(setTimeout).not.toHaveBeenCalledWith(
        expect.any(Function),
        delayVisible
      );

      tooltip._focus();

      // should remain hidden
      expect(tooltip.alpha).toEqual(0);
      expect(tooltip.scale).toBe(0.5);
      expect(tooltip._showTimer).not.toBeUndefined();
      expect(setTimeout).toHaveBeenCalledWith(
        expect.any(Function),
        delayVisible
      );

      jest.advanceTimersByTime(delayVisible);
      await completeAnimation(tooltip, ['alpha', 'scale']);

      // should show after timer runs
      expect(tooltip.alpha).toEqual(1);
      expect(tooltip.scale).toEqual(1);
    });

    it('should hide after timer ends if timeVisible is set', async () => {
      const timeVisible = 5000;
      expect(tooltip._hideTimer).toBeUndefined();

      tooltip._focus();
      await completeAnimation(tooltip, ['alpha', 'scale']);

      expect(setTimeout).not.toHaveBeenCalled();
      expect(tooltip._hideTimer).toBeUndefined();
      expect(tooltip.alpha).toEqual(1);
      expect(tooltip.scale).toEqual(1);

      tooltip.timeVisible = timeVisible;

      expect(tooltip._hideTimer).toBeUndefined();

      tooltip._focus();
      await completeAnimation(tooltip, ['alpha', 'scale']);

      expect(setTimeout).toHaveBeenCalledWith(
        expect.any(Function),
        timeVisible
      );
      expect(tooltip._hideTimer).not.toBeUndefined();
      expect(tooltip.alpha).toEqual(1);
      expect(tooltip.scale).toEqual(1);

      // timer started on focus and hide after timer is called
      jest.advanceTimersByTime(timeVisible);
      await completeAnimation(tooltip, ['alpha', 'scale']);

      expect(tooltip.alpha).toEqual(0);
      expect(tooltip.scale).toBe(0.5);
    });
  });

  describe('dimensions', () => {
    beforeEach(async () => {
      tooltip._focus();
      await completeAnimation(tooltip, ['alpha', 'scale']);
    });

    it('should give the tooltip a margin bottom', () => {
      expect(tooltip.y).toBeLessThan(0);
    });

    it('should grow in width for longer text', () => {
      const initialW = tooltip._Background.w;
      tooltip.title = 'Longer Tooltip';
      jest.runAllTimers();
      testRenderer.update();
      expect(tooltip._Background.w).toBeGreaterThan(initialW);
    });
  });
});
