import lng from 'wpe-lightning';
import TestRenderer from '../components/lightning-test-renderer';
import { rgba2argb, RoundRect } from '.';

describe('rgba2argb', () => {
  it('converts rgba() format to a number', () => {
    expect(rgba2argb('rgba(0,0,0,0)')).toBe(0x00000000);
    expect(rgba2argb('rgba(255,255,255,1')).toBe(0xffffffff);
  });
});

describe('RoundRect', () => {
  const createComponent = (config = {}) => {
    const testRenderer = TestRenderer.create({
      Component: {
        ...config
      }
    });

    return [testRenderer.getInstance(), testRenderer];
  };

  const createRoundRect = (...args) =>
    createComponent({
      texture: lng.Tools.getRoundRect(...args)
    });

  describe('getWidth', () => {
    it('defaults to 0', () => {
      expect(RoundRect.getWidth()).toBe(0);
    });

    it('creates a round rect with the given width', () => {
      const expected = 100;
      const width = RoundRect.getWidth(expected);
      const [component, testRenderer] = createRoundRect(width, 100);
      testRenderer.update();
      expect(component.finalW).toBe(expected);
    });

    it('handles strokeWidth', () => {
      const expected = 100;
      const options = { strokeWidth: 5 };
      const width = RoundRect.getWidth(expected, options);
      const [component, testRenderer] = createRoundRect(
        width,
        100,
        0,
        options.strokeWidth
      );
      testRenderer.update();
      expect(component.finalW).toBe(expected);
    });

    it('handles padding', () => {
      const expected = 100;
      const options = { padding: 5 };
      let width = RoundRect.getWidth(expected, options);
      const [component, testRenderer] = createRoundRect(width, 100, 0);
      component.flex = {
        paddingLeft: options.padding,
        paddingRight: options.padding
      };
      testRenderer.update();
      expect(component.finalW).toBe(expected);

      // paddingLeft and paddingRight should override padding
      options.paddingLeft = 10;
      options.paddingRight = 6;
      component.flex = {
        paddingLeft: options.paddingLeft,
        paddingRight: options.paddingRight
      };
      width = RoundRect.getWidth(expected, options);
      component.texture = lng.Tools.getRoundRect(width, 100);
      testRenderer.update();
      expect(component.finalW).toBe(expected);
    });
  });

  describe('getHeight', () => {
    it('defaults to 0', () => {
      expect(RoundRect.getHeight()).toBe(0);
    });

    it('creates a round rect with the given height', () => {
      const expected = 100;
      const height = RoundRect.getHeight(expected);
      const [component, testRenderer] = createRoundRect(100, height);
      testRenderer.update();
      expect(component.finalH).toBe(expected);
    });

    it('handles strokeWidth', () => {
      const expected = 100;
      const options = { strokeWidth: 5 };
      const height = RoundRect.getHeight(expected, options);
      const [component, testRenderer] = createRoundRect(
        100,
        height,
        0,
        options.strokeWidth
      );
      testRenderer.update();
      expect(component.finalH).toBe(expected);
    });

    it('handles padding', () => {
      const expected = 100;
      const options = { padding: 5 };
      let height = RoundRect.getHeight(expected, options);
      const [component, testRenderer] = createRoundRect(100, height, 0);
      component.flex = {
        paddingBottom: options.padding,
        paddingTop: options.padding
      };
      testRenderer.update();
      expect(component.finalH).toBe(expected);

      // paddingLeft and paddingRight should override padding
      options.paddingBottom = 10;
      options.paddingTop = 6;
      component.flex = {
        paddingBottom: options.paddingBottom,
        paddingTop: options.paddingTop
      };
      height = RoundRect.getHeight(expected, options);
      component.texture = lng.Tools.getRoundRect(100, height);
      testRenderer.update();
      expect(component.finalH).toBe(expected);
    });
  });
});
