import {
  makeCreateComponent,
  completeAnimation
} from '@lightning/ui-test-utils';
import Tooltip from './index.js';
import { jest } from '@jest/globals';

const createTooltip = makeCreateComponent(Tooltip, {}, { focused: false });

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
      jest.useFakeTimers();
      jest.spyOn(global, 'setTimeout');

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
      testRenderer.update();

      // should show after timer runs
      expect(tooltip.transition('alpha').targetValue).toEqual(1);
      expect(tooltip.transition('scale').targetValue).toEqual(1);
    });

    it('should hide after timer ends if timeVisible is set', async () => {
      jest.useFakeTimers();
      jest.spyOn(global, 'setTimeout');

      const timeVisible = 5000;
      expect(tooltip._hideTimer).toBeUndefined();

      tooltip._focus();
      testRenderer.update();

      expect(setTimeout).not.toHaveBeenCalled();
      expect(tooltip._hideTimer).toBeUndefined();
      expect(tooltip.transition('alpha').targetValue).toEqual(1);
      expect(tooltip.transition('scale').targetValue).toEqual(1);

      tooltip.timeVisible = timeVisible;

      expect(tooltip._hideTimer).toBeUndefined();

      tooltip._focus();
      testRenderer.update();

      expect(setTimeout).toHaveBeenCalledWith(
        expect.any(Function),
        timeVisible
      );
      expect(tooltip._hideTimer).not.toBeUndefined();
      expect(tooltip.transition('alpha').targetValue).toEqual(1);
      expect(tooltip.transition('scale').targetValue).toEqual(1);

      // timer started on focus and hide after timer is called
      jest.advanceTimersByTime(timeVisible);
      testRenderer.update();

      expect(tooltip.transition('alpha').targetValue).toEqual(0);
      expect(tooltip.transition('scale').targetValue).toEqual(0.5);
    });
  });

  describe('dimensions', () => {
    beforeEach(async () => {
      jest.useFakeTimers();
      jest.spyOn(global, 'setTimeout');

      tooltip._focus();
      testRenderer.update();
    });

    it('should give the tooltip a margin bottom', () => {
      expect(tooltip.y).toBeLessThan(0);
    });

    it('should grow in width for longer text', () => {
      const initialW = tooltip._Background.w;
      tooltip.title = 'Longer Tooltip';

      testRenderer.forceAllUpdates();
      jest.runAllTimers();
      testRenderer.update();

      expect(tooltip._Background.w).toBeGreaterThan(initialW);
    });
  });
});
