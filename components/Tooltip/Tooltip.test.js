'use strict';

import TestUtils from '../lightning-test-utils';
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

      // set timeVisilbe
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

      [button, buttonRenderer] = createButton({ title: 'Button' });
      buttonRenderer.update();
    });
    it('should be horizontally centered', () => {});
    it('should default to 40px above parent', done => {
      tooltip._Text.on('txLoaded', () => {
        let buffer = 2;
        expect(tooltip.y).toEqual(-tooltip.finalH - 40 + buffer);

        done();
      });
    });

    it('should change when "bottomMargin" is set', done => {
      let closer_tooltip, closer_testRenderer;
      [closer_tooltip, closer_testRenderer] = createTooltip({
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
      tooltip._Text.on('txLoaded', () => {
        let textWidth = tooltip._Text.finalW;
        let textHeight = tooltip._Text.finalH;
        let diffW = Math.abs(tooltip._Text.finalW - textWidth);

        expect(diffW).toBeLessThan(5);
        expect(tooltip._DropShadow.finalW).toBeGreaterThan(textWidth);

        let diffH = Math.abs(tooltip.finalH - textHeight);
        expect(diffH).toBeLessThan(5);
        expect(tooltip._DropShadow.finalH).toBeGreaterThan(textHeight);

        done();
      });
    });

    it('should change width when hint message text changes', done => {
      let short_tooltip, short_testRenderer;
      [short_tooltip, short_testRenderer] = createTooltip({ title: 'Short' });
      short_tooltip._focus();

      let long_tooltip, long_testRenderer;
      [long_tooltip, long_testRenderer] = createTooltip({
        title: 'Long Tooltip'
      });
      long_tooltip._focus();

      tooltip._Text.on('txLoaded', () => {
        let controlW = tooltip.finalW;
        let controlShadowW = tooltip._DropShadow.finalW;

        short_tooltip._Text.on('txLoaded', () => {
          expect(short_tooltip.finalW).toBeLessThan(controlW);
          expect(short_tooltip._DropShadow.finalW).toBeLessThan(controlShadowW);

          long_tooltip._Text.on('txLoaded', () => {
            expect(long_tooltip.finalW).toBeGreaterThan(controlW);
            expect(long_tooltip._DropShadow.finalW).toBeGreaterThan(
              controlShadowW
            );

            done();
          });
        });
      });
    });

    it('should change height and wrap text when hint message is long', done => {
      let twoLine_tooltip, twoLine_testRenderer;
      [twoLine_tooltip, twoLine_testRenderer] = createTooltip({
        title:
          'This text should render in two lines...This text should render in two lines...This text should render in two lines...This text should render in two lines...This text should render in two lines...This text should render in two lines...This text should render in two lines...This text should render in two lines...This text should render in two lines...This text should render in two lines...This text should render in two lines...'
      });
      twoLine_tooltip._focus();

      tooltip._Text.on('txLoaded', () => {
        twoLine_tooltip._Text.on('txLoaded', () => {
          let textHeight = twoLine_tooltip._Text.finalH;
          let diffH = Math.abs(twoLine_tooltip.finalH - textHeight);
          expect(diffH).toBeLessThan(5);
          expect(twoLine_tooltip._DropShadow.finalH).toBeGreaterThan(
            textHeight
          );

          expect(twoLine_tooltip.finalH).toBeGreaterThan(tooltip.finalH);
          expect(twoLine_tooltip._Text.finalH).toBeGreaterThan(
            tooltip._Text.finalH
          );
          expect(twoLine_tooltip._DropShadow.finalH).toBeGreaterThan(
            tooltip._DropShadow.finalH
          );

          done();
        });
      });
    });
  });
});
