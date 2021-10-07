'use strict';

import TestUtils from '../../test/lightning-test-utils';
import Tooltip from '.';
import Button from '../Button';

const createTooltip = TestUtils.makeCreateComponent(
  Tooltip,
  {},
  { focused: false }
);
const createButton = TestUtils.makeCreateComponent(Button);

describe('Tooltip', () => {
  let tooltip, testRenderer;

  beforeEach(() => {
    [tooltip, testRenderer] = createTooltip({ title: 'Tooltip' });
  });
  afterEach(() => {
    tooltip = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  describe('visibility', () => {
    afterEach(() => {
      jest.clearAllTimers();
      jest.useRealTimers();
    });

    it('should be visible when focused', () => {
      tooltip._focus();
      testRenderer.update();
      expect(tooltip.alpha).toEqual(1);
    });

    it('should be hidden when unfocused', () => {
      tooltip._unfocus();
      testRenderer.update();
      expect(tooltip.alpha).toEqual(0);
    });

    it('should show after delay if delayVisible is set', () => {
      jest.useFakeTimers();
      expect(tooltip.alpha).toEqual(0);

      // set delayVisible
      tooltip.delayVisible = 5000;

      // should remain hidden
      tooltip._focus();
      testRenderer.update();
      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(tooltip.alpha).toEqual(0);

      // should show after timer runs
      jest.runAllTimers();
      testRenderer.update();
      expect(tooltip.alpha).toEqual(1);
    });

    it('should hide after timer ends if timeVisible is set', () => {
      jest.useFakeTimers();

      // timer not run unless focused
      expect(setTimeout).toHaveBeenCalledTimes(0);

      // show tooltip on focus
      tooltip._focus();
      testRenderer.update();
      expect(tooltip.alpha).toEqual(1);

      // check that no timer has been called and tooltip remains visible
      jest.runAllTimers();
      expect(setTimeout).toHaveBeenCalledTimes(0);
      testRenderer.update();
      expect(tooltip.alpha).toEqual(1);

      // set timeVisible
      tooltip.timeVisible = 5000;

      // timer not run unless focused
      expect(setTimeout).toHaveBeenCalledTimes(0);

      tooltip._focus();
      testRenderer.update();
      expect(tooltip.alpha).toEqual(1);

      // timer started on focus and hide after timer is called
      jest.runAllTimers();
      expect(setTimeout).toHaveBeenCalledTimes(1);
      testRenderer.update();
      expect(tooltip.alpha).toEqual(0);
    });
  });

  describe('position', () => {
    let button, buttonRenderer;
    beforeEach(() => {
      tooltip._focus();

      // eslint-disable-next-line no-unused-vars
      [button, buttonRenderer] = createButton({ title: 'Button' });
      buttonRenderer.update();
    });
    it('should be horizontally centered', () => {});
    it('should default to 40px above parent', done => {
      tooltip._Text.on('txLoaded', () => {
        const buffer = 2;
        expect(tooltip.y).toEqual(-tooltip._Background.finalH - 40 + buffer);

        done();
      });
    });

    it('should change when "bottomMargin" is set', done => {
      const [closer_tooltip] = createTooltip({
        title: 'Tooltip',
        bottomMargin: 20
      });
      closer_tooltip._focus();

      tooltip._Text.on('txLoaded', () => {
        closer_tooltip._Text.on('txLoaded', () => {
          expect(closer_tooltip.y).toEqual(tooltip.y + 20);
          done();
        });
      });
    });
  });

  describe('dimensions', () => {
    // NOTE: the font doesn't text size and calculated tooltip size is not accurate

    beforeEach(() => {
      tooltip._focus();
    });

    it('should be slightly larger than text dimensions', done => {
      testRenderer.update();

      setTimeout(() => {
        try {
          const textWidth = tooltip._Text.finalW;
          const textHeight = tooltip._Text.finalH;

          const diffW = Math.abs(tooltip._Text.finalW - textWidth);
          expect(diffW).toBeLessThan(5);
          expect(tooltip._Background.finalW).toBeGreaterThan(textWidth);

          const diffH = Math.abs(tooltip._Background.finalH - textHeight);
          expect(diffH).toBeLessThan(5);

          done();
        } catch (error) {
          done(error);
        }
      }, 1000);
    });

    it('should be narrower when the message text changes to a shorter message', done => {
      testRenderer.update();

      const controlW = tooltip.finalW;
      const controlBackgroundW = tooltip._Background.finalW;

      tooltip.title = 'short';

      tooltip._Text.loadTexture();
      tooltip._Background.loadTexture();
      testRenderer.update();

      setTimeout(() => {
        try {
          expect(tooltip.finalW).toBeLessThan(controlW);
          expect(tooltip._Background.finalW).toBeLessThan(controlBackgroundW);
          done();
        } catch (error) {
          done(error);
        }
      }, 1000);
    });

    it('should have a longer hint message when the text changes', done => {
      testRenderer.update();

      const controlW = tooltip.finalW;
      const controlBackgroundW = tooltip._Background.finalW;

      tooltip.title = 'a longer title';

      tooltip._Text.loadTexture();
      tooltip._Background.loadTexture();
      testRenderer.update();

      setTimeout(() => {
        try {
          expect(tooltip.finalW).toBeGreaterThan(controlW);
          expect(tooltip._Background.finalW).toBeGreaterThan(
            controlBackgroundW
          );
          done();
        } catch (error) {
          done(error);
        }
      }, 1000);
    });

    it('should change height and wrap text when hint message is long', done => {
      testRenderer.update();

      const controlH = tooltip._Text.finalH;
      const controlBackgroundH = tooltip._Background.finalH;

      tooltip.title =
        'This text should render in two lines...This text should render in two lines...This text should render in two lines...This text should render in two lines...This text should render in two lines...This text should render in two lines...This text should render in two lines...This text should render in two lines...This text should render in two lines...This text should render in two lines...This text should render in two lines...';

      tooltip._Text.loadTexture();
      tooltip._Background.loadTexture();
      testRenderer.update();

      setTimeout(() => {
        try {
          const textHeight = tooltip._Text.finalH;
          const backgroundHeight = tooltip._Background.finalH;

          const diffH = Math.abs(tooltip._Background.finalH - textHeight);

          expect(diffH).toBeLessThan(5);

          expect(textHeight).toBeGreaterThan(controlH);
          expect(backgroundHeight).toBeGreaterThan(controlBackgroundH);

          done();
        } catch (error) {
          done(error);
        }
      }, 1000);
    });
  });
});
