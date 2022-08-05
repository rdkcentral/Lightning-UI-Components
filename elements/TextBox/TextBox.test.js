import TestUtils from '../../test/lightning-test-utils';
import TextBox from '.';
import context from '../../context';
import { TYPOGRAPHY, getValidColor } from '../../Styles';
import XfinityTheme from '../../themes/xfinity';
const createElement = TestUtils.makeCreateComponent(TextBox);

const testOptions = async (element, optionProp, optionsValues, match) => {
  for (const option of optionsValues) {
    await (() => {
      return new Promise(resolve => {
        element.content = 'Hello world';
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
          expect(element.tag('Text').text[optionProp]).toBe(expects);
          resolve();
        });
      });
    })();
  }
  return;
};

describe('TextBox', () => {
  let element, testRenderer;

  beforeEach(async () => {
    context.setTheme(XfinityTheme);
    [element, testRenderer] = createElement({}, { spyOnMethods: ['_update'] });
    await element.__updateSpyPromise;
  });

  afterEach(() => {
    element = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('renders with content prop', async done => {
    element.content = 'Hello world';
    await element.__updateSpyPromise;
    expect(element.tag('Text').text.text).toBe('Hello world');
    done();
  });

  it('should set content to an empty string if the content prop is invalid', async done => {
    element.content = null;
    await element.__updateSpyPromise;
    expect(element.tag('Text').text.text).toBe('');
    done();
  });

  it('renders with a title that matches the content prop', async done => {
    element.content = 'Hello world';
    await element.__updateSpyPromise;
    expect(element.title).toBe('Hello world');
    done();
  });

  it('should fallback to "body1" object if the style prop is an invalid string', async done => {
    element.content = 'Hello world';
    element.textStyle = 'invalidstyle';
    await element.__updateSpyPromise;
    expect(element._Text.text.fontFace).toBe(
      XfinityTheme.typography.body1.fontFace
    );
    expect(element._Text.text.fontSize).toBe(
      XfinityTheme.typography.body1.fontSize
    );
    expect(element._Text.text.fontWeight).toBe(
      XfinityTheme.typography.body1.fontWeight
    );
    expect(element._Text.text.lineHeight).toBe(
      XfinityTheme.typography.body1.lineHeight
    );
    expect(element._Text.text.verticalAlign).toBe(
      XfinityTheme.typography.body1.verticalAlign
    );
    done();
  });

  it('should set style to "body1" object if the style prop is null', async done => {
    element.content = 'Hello World';
    element.textStyle = null;
    await element.__updateSpyPromise;
    expect(element._Text.text.fontFace).toBe(
      XfinityTheme.typography.body1.fontFace
    );
    expect(element._Text.text.fontSize).toBe(
      XfinityTheme.typography.body1.fontSize
    );
    expect(element._Text.text.fontWeight).toBe(
      XfinityTheme.typography.body1.fontWeight
    );
    expect(element._Text.text.lineHeight).toBe(
      XfinityTheme.typography.body1.lineHeight
    );
    expect(element._Text.text.verticalAlign).toBe(
      XfinityTheme.typography.body1.verticalAlign
    );
    done();
  });

  it('should set style to "body1" object if the style prop is not a string or object', async done => {
    element.content = 'Hello World';
    element.textStyle = () => {};
    await element.__updateSpyPromise;
    expect(element._Text.text.fontFace).toBe(
      XfinityTheme.typography.body1.fontFace
    );
    expect(element._Text.text.fontSize).toBe(
      XfinityTheme.typography.body1.fontSize
    );
    expect(element._Text.text.fontWeight).toBe(
      XfinityTheme.typography.body1.fontWeight
    );
    expect(element._Text.text.lineHeight).toBe(
      XfinityTheme.typography.body1.lineHeight
    );
    expect(element._Text.text.verticalAlign).toBe(
      XfinityTheme.typography.body1.verticalAlign
    );
    done();
  });

  it('should allow the default textStyle to be set with componentStyles in the theme', async done => {
    context.updateTheme({
      componentStyles: {
        TextBox: {
          textStyle: context.theme.typography.headline1
        }
      }
    });
    await element.__updateSpyPromise;
    element.content = 'Hello world';
    await element.__updateSpyPromise;
    expect(element._Text.text.fontSize).toBe(36);
    done();
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

  it('should parse an array of content and render as InlineContent', async () => {
    const content = [
      'Text',
      {
        icon: 'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false',
        title: 'Rotten Tomatoes rating'
      },
      { badge: 'HD', title: 'HD' },
      { badge: 'SD', title: 'SD' }
    ];
    [element, testRenderer] = createElement(
      { content },
      { spyOnMethods: ['_update'] }
    );
    await element.__updateSpyPromise;
    expect(element._isInlineContent).toBe(true);
    expect(element._InlineContent.content).toBe(content);
  });

  it('should parse a string with markup and render as InlineContent', async () => {
    const content =
      'Example {ICON:settings|http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false} with a linebreak{NEWLINE}{BADGE:HD} that includes {TEXT:styled text|italic}.';
    [element, testRenderer] = createElement(
      { content },
      { spyOnMethods: ['_update'] }
    );
    await element.__updateSpyPromise;
    expect(element._isInlineContent).toBe(true);
    expect(element._InlineContent.content).toBe(content);
  });

  it('should announce its content', async () => {
    const content = 'Hello world';
    [element, testRenderer] = createElement({ content });
    expect(element.announce).toBe(content);
  });
});
