import TestUtils from '../../test/lightning-test-utils';
import TextBox from '.';
import context from '../../context';
import { TYPOGRAPHY } from '../../Styles';
import { getValidColor } from '../../utils';
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

  describe('basic', () => {
    it('renders', () => {
      const tree = testRenderer.toJSON(2);
      expect(tree).toMatchSnapshot();
    });

    it('renders with content prop', async () => {
      element.content = 'Hello world';
      await element.__updateSpyPromise;
      expect(element._Text.text.text).toBe('Hello world');
    });

    it('should set Text and InlineContent to undefined if the content prop is invalid', () => {
      element.content = null;
      testRenderer.forceAllUpdates();
      expect(element._Text).toBeUndefined();
      expect(element._InlineContent).toBeUndefined();

      expect(element.w).toBe(0);
    });

    it('should set width and height to 0 if the content prop is invalid', () => {
      element.content = null;
      testRenderer.forceAllUpdates();

      expect(element.w).toBe(0);
      expect(element.h).toBe(0);
    });

    it('renders with a title that matches the content prop', async () => {
      element.content = 'Hello world';
      await element.__updateSpyPromise;
      expect(element.title).toBe('Hello world');
    });

    it('should log a warning if the user attempts to smooth any values to the TextBox', async () => {
      const warnMock = jest.fn();
      context.warn = warnMock;
      element.smooth = { w: 100 };
      expect(warnMock.mock.calls.length).toBe(1);
    });
  });

  describe('styling', () => {
    it('should fallback to "body1" object if the style prop is an invalid string', async () => {
      element.content = 'Hello world';
      element.textStyle = 'invalidstyle';
      await element.__updateSpyPromise;
      expect(element._Text).toEqual(
        expect.objectContaining({
          text: expect.objectContaining(XfinityTheme.typography.body1)
        })
      );
    });

    it('should set style to "body1" object if the style prop is null', async () => {
      element.content = 'Hello World';
      element.textStyle = null;
      await element.__updateSpyPromise;
      expect(element._Text).toEqual(
        expect.objectContaining({
          text: expect.objectContaining(XfinityTheme.typography.body1)
        })
      );
    });

    it('should set style to "body1" object if the style prop is not a string or object', async () => {
      element.content = 'Hello World';
      element.textStyle = () => {};
      await element.__updateSpyPromise;
      expect(element._Text).toEqual(
        expect.objectContaining({
          text: expect.objectContaining(XfinityTheme.typography.body1)
        })
      );
    });

    it('should allow the default textStyle to be set with componentStyle in the theme', async () => {
      context.updateTheme({
        componentStyle: {
          TextBox: {
            defaultTextStyle: 'headline1'
          }
        }
      });
      await element.__updateSpyPromise;
      element.content = 'Hello world';
      await element.__updateSpyPromise;
      expect(element._Text.text.fontSize).toBe(36);
    });

    it('should accept a hex color for the textColor prop', async () => {
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
    });

    it('should set textColor to white if the prop is invalid', async () => {
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
    });
  });

  describe('alignment and formatting', () => {
    it('should accept left, right, & center as options for textAlign', async () => {
      [element, testRenderer] = createElement({
        style: Object.keys(TYPOGRAPHY)[0]
      });
      await testOptions(element, 'textAlign', ['right', 'center', 'left']);
    });

    it('should fallback to default for textAlign if options are not supported in the text texture', async () => {
      await testOptions(
        element,
        'textAlign',
        ['justify', 100, -100, 0, 1, true, false],
        'left'
      );
    });

    it('should accept top, middle, & bottom as options for verticalAlign', async () => {
      await testOptions(element, 'verticalAlign', ['bottom', 'middle', 'top']);
    });

    it('should fallback to the default for verticalAlign if options are not supported in the text texture', async () => {
      const { verticalAlign: defaultVerticalAlign } = TYPOGRAPHY.body1;
      await testOptions(
        element,
        'verticalAlign',
        ['center', true, false, 0, 1, () => {}],
        defaultVerticalAlign
      );
    });

    it('should accept boolean value for wordWrap option', async () => {
      await testOptions(element, 'wordWrap', [false, true]);
    });

    it('should set default wordWrap value to true if boolean not passed as option', async () => {
      await testOptions(
        element,
        'wordWrap',
        [0, 1, 'true', () => {}, null, undefined],
        true
      );
    });

    it('should accept maxLines option', async () => {
      await testOptions(
        element,
        'maxLines',
        new Array(10).fill().map((v, i) => i + 1)
      );
    });

    it('should only accept maxLines option values that are positive numbers where n > 0', async () => {
      await testOptions(
        element,
        'maxLines',
        [-1, true, false, null, undefined, () => {}],
        0
      );
    });

    it('should accept wordWrapWidth option', async () => {
      await testOptions(
        element,
        'wordWrapWidth',
        Array(10)
          .fill()
          .map((v, i) => i + 100)
      );
    });

    it('should only accept wordWrapWidth option values that are positive numbers where n > 0', async () => {
      await testOptions(
        element,
        'wordWrapWidth',
        [-1, true, false, null, undefined, () => {}],
        0
      );
    });

    it('should accept maxLinesSuffix option of a string', async () => {
      await testOptions(element, 'maxLinesSuffix', ['...', '>>>', '???']);
    });

    it('should fallback to default for maxLinesSuffix if prop is anything other than a string', async () => {
      await testOptions(
        element,
        'maxLinesSuffix',
        [-1, true, false, null, undefined, () => {}],
        '...'
      );
    });
  });

  describe('inline content', () => {
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

  describe('marquee', () => {
    it('should create a Marquee element when marquee is true and content longer than wordWrapWidth', async () => {
      element.content = 'hello world';
      element.wordWrapWidth = 20;
      element.marquee = true;
      await element.__updateSpyPromise;
      expect(element._Marquee).toBeDefined();

      [element, testRenderer] = createElement(
        {
          content: [
            'Text',
            {
              icon: 'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false',
              title: 'Rotten Tomatoes rating'
            },
            { badge: 'HD', title: 'HD' },
            { badge: 'SD', title: 'SD' }
          ],
          wordWrapWidth: 20,
          marquee: true
        },
        { spyOnMethods: ['_update'] }
      );
      await element.__updateSpyPromise;
      expect(element._Marquee).toBeDefined();
    });

    it('should toggle alpha values of Marquee and Text components based on the marquee property', async () => {
      element.content = 'hello world';
      element.wordWrapWidth = 20;
      element.marquee = false;
      await element.__updateSpyPromise;
      expect(element._Marquee).toBe(undefined);
      expect(element._Text.alpha).toBe(1);

      element.marquee = true;
      await element.__updateSpyPromise;
      expect(element._Marquee.alpha).toBe(1);
      expect(element._Text.alpha).toBe(0.001);

      element.marquee = false;
      await element.__updateSpyPromise;
      expect(element._Marquee.alpha).toBe(0.001);
      expect(element._Text.alpha).toBe(1);
    });

    it('marquee component should only ever have maxLines of 1', async () => {
      element.content = 'hello world';
      element.maxLines = 3;
      element.wordWrapWidth = 20;
      element.marquee = true;
      await element.__updateSpyPromise;
      expect(element._Marquee.title.maxLines).toBe(1);
    });
  });
});
