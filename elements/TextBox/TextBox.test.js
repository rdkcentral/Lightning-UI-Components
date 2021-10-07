import TestUtils from '../../test/lightning-test-utils';
import TextBox from '.';
import { TYPOGRAPHY, getValidColor } from '../../Styles';

const createElement = TestUtils.makeCreateComponent(TextBox);

const testOptions = async (element, optionProp, optionsValues, match) => {
  for (const option of optionsValues) {
    await (() => {
      return new Promise(resolve => {
        element[optionProp] = option;
        setTimeout(() => {
          let expects;
          switch (typeof match) {
            case 'function':
              expects = match(option);
              break;
            case 'undefined':
              expects = option;
              break;
            default:
              expects = match;
          }
          expect(element.text[optionProp]).toBe(expects);
          resolve();
        });
      });
    })();
  }
  return;
};

describe('TextBox', () => {
  let element, testRenderer;

  beforeEach(() => {
    [element, testRenderer] = createElement();
  });

  afterEach(() => {
    element = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('renders with content prop', done => {
    element.content = 'Hello world';
    setTimeout(() => {
      expect(element.text.text).toBe('Hello world');
      done();
    });
  });

  it('should set content to an empty string if the content prop is invalid', done => {
    element.content = null;
    setTimeout(() => {
      expect(element.text.text).toBe('');
      done();
    });
  });

  it('renders with a title that matches the content prop', done => {
    element.content = 'Hello world';
    setTimeout(() => {
      expect(element.title).toBe('Hello world');
      done();
    });
  });

  test.each(Object.keys(TYPOGRAPHY).map(style => [style]))(
    'should render the correct style prop for %s',
    style => {
      [element, testRenderer] = createElement({ style });
      const testObj = Object.keys(TYPOGRAPHY[style]).reduce((acc, curr) => {
        return {
          ...acc,
          [curr]: element.text[curr]
        };
      }, {});
      expect(testObj).toEqual(TYPOGRAPHY[style]);
    }
  );

  it('should set style to "body1" object if the style prop is an invalid string', () => {
    element.style = 'invalidstyle';
    expect(element._style).toEqual(TYPOGRAPHY.body1);
  });

  it('should set style to "body1" object if the style prop is null', () => {
    element.style = null;
    expect(element._style).toEqual(TYPOGRAPHY.body1);
  });

  it('should set style to "body1" object if the style prop is not a string or object', () => {
    element.style = () => {};
    expect(element._style).toEqual(TYPOGRAPHY.body1);
  });

  it('should accept an object for style prop', () => {
    const customStyle = {
      fontFace: 'XfinityBrownBold',
      fontSize: 56,
      fontWeight: 700,
      letterSpacing: -0.4,
      lineHeight: 72,
      verticalAlign: 'middle'
    };

    element.style = customStyle;
    expect(element._style).toEqual(customStyle);
    expect(element._style.fontSize).toBe(customStyle.fontSize);
  });

  it('should accept a hex color for the textColor prop', async done => {
    const validColors = [
      '#F44336',
      '#FFEBEE',
      '#FFCDD2',
      '#EF9A9A',
      '#E57373',
      '#EF5350',
      '#F44336',
      '#E53935',
      '#D32F2F',
      '#C62828'
    ];
    await testOptions(element, 'textColor', validColors, getValidColor);
    done();
  });

  it('should set textColor to white if the prop is invalid', async done => {
    const invalidColors = [
      'fff',
      true,
      false,
      () => {},
      undefined,
      null,
      'red'
    ];
    await testOptions(
      element,
      'textColor',
      invalidColors,
      getValidColor('#ffffff')
    );
    done();
  });

  it('should accept left, right, & center as options for textAlign', async done => {
    [element, testRenderer] = createElement({
      style: Object.keys(TYPOGRAPHY)[0]
    });
    await testOptions(element, 'textAlign', ['right', 'center', 'left']);
    done();
  });

  it('should fallback to default for textAlign if options are not supported in the text texture', async done => {
    await testOptions(
      element,
      'textAlign',
      ['justify', 100, -100, 0, 1, true, false],
      'left'
    );
    done();
  });

  it('should accept top, middle, & bottom as options for verticalAlign', async done => {
    await testOptions(element, 'verticalAlign', ['bottom', 'middle', 'top']);
    done();
  });

  it('should fallback to the default for verticalAlign if options are not supported in the text texture', async done => {
    const { verticalAlign: defaultVerticalAlign } = TYPOGRAPHY.body1;
    await testOptions(
      element,
      'verticalAlign',
      ['center', true, false, 0, 1, () => {}],
      defaultVerticalAlign
    );
    done();
  });

  it('should accept boolean value for wordWrap option', async done => {
    await testOptions(element, 'wordWrap', [false, true]);
    done();
  });

  it('should set default wordWrap value to true if boolean not passed as option', async done => {
    await testOptions(
      element,
      'wordWrap',
      [0, 1, 'true', () => {}, null, undefined],
      true
    );
    done();
  });

  it('should accept maxLines option', async done => {
    await testOptions(
      element,
      'maxLines',
      new Array(10).fill().map((v, i) => i + 1)
    );
    done();
  });

  it('should only accept maxLines option values that are positive numbers where n > 0', async done => {
    await testOptions(
      element,
      'maxLines',
      [-1, true, false, null, undefined, () => {}],
      0
    );
    done();
  });

  it('should accept wordWrapWidth option', async done => {
    await testOptions(
      element,
      'wordWrapWidth',
      Array(10)
        .fill()
        .map((v, i) => i + 100)
    );
    done();
  });

  it('should only accept wordWrapWidth option values that are positive numbers where n > 0', async done => {
    await testOptions(
      element,
      'wordWrapWidth',
      [-1, true, false, null, undefined, () => {}],
      0
    );
    done();
  });

  it('should accept maxLinesSuffix option of a string', async done => {
    await testOptions(element, 'maxLinesSuffix', ['...', '>>>', '???']);
    done();
  });

  it('should fallback to default for maxLinesSuffix if prop is anything other than a string', async done => {
    await testOptions(
      element,
      'maxLinesSuffix',
      [-1, true, false, null, undefined, () => {}],
      '...'
    );
    done();
  });
});
