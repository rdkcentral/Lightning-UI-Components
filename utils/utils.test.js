import lng from '@lightningjs/core';
import TestRenderer from '../test/lightning-test-renderer';
import TestUtils from '../test/lightning-test-utils';
import {
  rgba2argb,
  RoundRect,
  clone,
  getFirstNumber,
  parseInlineContent,
  getDimension,
  flatten
} from '.';

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
        type: lng.Component,
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
      expect(component.finalW).toBe(expected + 2);
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
      expect(component.finalW).toBe(expected + 2);
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
      expect(component.finalW).toBe(expected + 2);

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
      expect(component.finalW).toBe(expected + 2);
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
      expect(component.finalH).toBe(expected + 2);
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
      expect(component.finalH).toBe(expected + 2);
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
      expect(component.finalH).toBe(expected + 2);

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
      expect(component.finalH).toBe(expected + 2);
    });
  });
});

describe('clone', () => {
  it('returns a copy of a target object', () => {
    const obj = { foo: 'bar' };
    const result = clone(obj);
    expect(obj === result).not.toBeTrue;
    expect(result.foo).toEqual(obj.foo);
  });

  it('merges simple objects', () => {
    const target = { foo: 'bar', number: 3, bool: false };
    const object = { number: 5, bool: true, extra: null };
    const expected = { foo: 'bar', number: 5, bool: true, extra: null };
    const result = clone(target, object);

    expect(result).toEqual(expected);
  });

  it('replaces arrays', () => {
    const target = { arr: [1, 2, 3] };
    const object = { arr: ['one', 'two', 'three'] };
    const result = clone(target, object);
    expect(result).toEqual(object);
  });

  it('deep merges complex objects', () => {
    const target = {
      level: 1,
      nested: {
        level: 2,
        nested: {
          foo: 'bar',
          level: 3
        }
      }
    };
    const object = {
      nested: {
        nested: {
          foo: 'baz'
        }
      }
    };
    const expected = {
      level: 1,
      nested: {
        level: 2,
        nested: {
          foo: 'baz',
          level: 3
        }
      }
    };
    const result = clone(target, object);
    expect(result).toEqual(expected);
  });
});

describe('getFirstNumber', () => {
  it('returns the first number in a list', () => {
    expect(getFirstNumber(0, 100)).toBe(0);
    expect(getFirstNumber(true, undefined, null, '10', 12)).toBe(12);
    expect(getFirstNumber([], {}, function () {}, 1)).toBe(1);
  });

  it('returns undefined if a number does not exist', () => {
    expect(getFirstNumber(true)).toBe(undefined);
  });
});

describe('parseInlineContent', () => {
  it('separates text, icons, and badges into an array from a string', () => {
    const str =
      'This is a {ICON:setting|http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false} and {BADGE:HD} badge test.';
    const response = parseInlineContent(str);
    expect(response).toEqual([
      'This is a ',
      {
        title: 'setting',
        icon:
          'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false'
      },
      ' and ',
      { badge: 'HD' },
      ' badge test.'
    ]);
  });

  it('separates text, icons, and badges into an array from a text object', () => {
    const str = {
      text:
        'This is a {ICON:setting|http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false} and {BADGE:HD} badge test.'
    };

    const response = parseInlineContent(str);
    expect(response).toEqual([
      'This is a ',
      {
        title: 'setting',
        icon:
          'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false'
      },
      ' and ',
      { badge: 'HD' },
      ' badge test.'
    ]);
  });
});

describe('getDimension', () => {
  it('with no component, returns 0', () => {
    expect(getDimension('x')).toBe(0);
  });
  it('returns the dimension of the component', () => {
    const [component] = TestUtils.makeCreateComponent(lng.Component)({
      x: 12
    });
    expect(getDimension('x', component)).toBe(12);
  });
  it('returns the target value of a transitioning component', () => {
    const [component] = TestUtils.makeCreateComponent(lng.Component)({
      y: 10
    });
    component.setSmooth('y', 20);
    expect(getDimension('y', component)).toBe(20);
  });
});
describe('flatten', () => {
  it('should create a new array with all sub-array elements concatenated into it', () => {
    const arr = [0, 1, 2, [3, 4]];
    expect(flatten(arr)).toEqual([0, 1, 2, 3, 4]);
  });
});
