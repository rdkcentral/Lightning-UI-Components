import { jest } from '@jest/globals';
import { makeCreateComponent } from '../../../test/lightning-test-utils.js';
import TextBox from '.';
import { context } from '../../globals';

import { getValidColor } from '../../utils';
import XfinityTheme from '@suite-themes/xfinity-lightning-tv/index.js';

it('should run', () => {
  expect(true).toBe(true);
});

const createtextBox = makeCreateComponent(TextBox);

const testOptions = async (textBox, optionProp, optionsValues, match) => {
  for (const option of optionsValues) {
    await (() => {
      return new Promise(resolve => {
        textBox.content = 'Hello world';
        textBox[optionProp] = option;
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
          expect(textBox.tag('Text').text[optionProp]).toBe(expects);
          resolve();
        });
      });
    })();
  }
  return;
};

describe('TextBox', () => {
  let textBox, testRenderer;

  beforeEach(async () => {
    context.setTheme(XfinityTheme);
    [textBox, testRenderer] = createtextBox({}, { spyOnMethods: ['_update'] });
    await textBox.__updateSpyPromise;
  });

  afterEach(() => {
    textBox = null;
    testRenderer = null;
  });

  describe('basic', () => {
    // TODO: test fails after not ignoring TextBox tests, resolve when support for all package scripts are added back
    xit('renders', () => {
      const tree = testRenderer.toJSON(2);
      expect(tree).toMatchSnapshot();
    });

    it('renders with content prop', async () => {
      textBox.content = 'Hello world';
      await textBox.__updateSpyPromise;
      expect(textBox._Text.text.text).toBe('Hello world');
    });

    // TODO: test fails after not ignoring TextBox tests, resolve when support for all package scripts are added back
    xit('sets the announce string to the content or InlineContent announce', () => {
      const content = 'Hello world';
      textBox.content = content;
      testRenderer.forceAllUpdates();
      expect(textBox.announce).toBe(content);

      const inlineContent = [
        'Hello world',
        { icon: 'test.png', announce: 'this is an icon' }
      ];
      textBox.content = inlineContent;
      testRenderer.forceAllUpdates();
      expect(textBox.announce).toBe('Hello world this is an icon');
    });

    it('overrides the announce string', () => {
      const overrideString = 'Custom announce string';
      textBox.announce = overrideString;
      testRenderer.forceAllUpdates();
      expect(textBox.announce).toBe(overrideString);
    });

    it('should set Text and InlineContent to undefined if the content prop is invalid', () => {
      textBox.content = null;
      testRenderer.forceAllUpdates();
      expect(textBox._Text).toBeUndefined();
      expect(textBox._InlineContent).toBeUndefined();

      expect(textBox.w).toBe(0);
    });

    it('should set width and height to 0 if the content prop is invalid', () => {
      textBox.content = null;
      testRenderer.forceAllUpdates();

      expect(textBox.w).toBe(0);
      expect(textBox.h).toBe(0);
    });

    it('renders with a title that matches the content prop', async () => {
      textBox.content = 'Hello world';
      await textBox.__updateSpyPromise;
      expect(textBox.title).toBe('Hello world');
    });

    it('should log a warning if the user attempts to smooth any values to the TextBox', async () => {
      const warnMock = jest.fn();
      context.warn = warnMock;
      textBox.smooth = { w: 100 };
      expect(warnMock.mock.calls.length).toBe(1);
    });
  });

  describe('styling', () => {
    it('should fallback to "body1" object if the style prop is an invalid string', async () => {
      textBox.content = 'Hello world';
      textBox.textStyle = 'invalidstyle';
      await textBox.__updateSpyPromise;
      expect(textBox._Text).toEqual(
        expect.objectContaining({
          text: expect.objectContaining(XfinityTheme.typography.body1)
        })
      );
    });

    it('should set style to "body1" object if the style prop is null', async () => {
      textBox.content = 'Hello World';
      textBox.textStyle = null;
      await textBox.__updateSpyPromise;
      expect(textBox._Text).toEqual(
        expect.objectContaining({
          text: expect.objectContaining(XfinityTheme.typography.body1)
        })
      );
    });

    it('should set style to "body1" object if the style prop is not a string or object', async () => {
      textBox.content = 'Hello World';
      textBox.textStyle = () => {};
      await textBox.__updateSpyPromise;
      expect(textBox._Text).toEqual(
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
      await textBox.__updateSpyPromise;
      textBox.content = 'Hello world';
      await textBox.__updateSpyPromise;
      expect(textBox._Text.text.fontSize).toBe(36);
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
      await testOptions(textBox, 'textColor', validColors, getValidColor);
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
        textBox,
        'textColor',
        invalidColors,
        getValidColor('#ffffff')
      );
    });

    // TODO: Fix reference to Base
    // it('should get TextDefaults when switching themes', async () => {
    //   context.setTheme(Base);
    //   textBox.base = context.theme;
    //   textBox.content = 'Hello Text Defaults';
    //   await textBox.__updateSpyPromise;
    //   expect(textBox._Text.text.maxLinesSuffix).toBe('..');
    // });
  });

  describe('alignment and formatting', () => {
    it('should fallback to default for textAlign if options are not supported in the text texture', async () => {
      await testOptions(
        textBox,
        'textAlign',
        ['justify', 100, -100, 0, 1, true, false],
        'left'
      );
    });

    it('should accept top, middle, & bottom as options for verticalAlign', async () => {
      await testOptions(textBox, 'verticalAlign', ['bottom', 'middle', 'top']);
    });

    it('should accept boolean value for wordWrap option', async () => {
      await testOptions(textBox, 'wordWrap', [false, true]);
    });

    it('should set default wordWrap value to true if boolean not passed as option', async () => {
      await testOptions(
        textBox,
        'wordWrap',
        [0, 1, 'true', () => {}, null, undefined],
        true
      );
    });

    it('should accept maxLines option', async () => {
      await testOptions(
        textBox,
        'maxLines',
        new Array(10).fill().map((v, i) => i + 1)
      );
    });

    it('should only accept maxLines option values that are positive numbers where n > 0', async () => {
      await testOptions(
        textBox,
        'maxLines',
        [-1, true, false, null, undefined, () => {}],
        0
      );
    });

    it('should accept wordWrapWidth option', async () => {
      await testOptions(
        textBox,
        'wordWrapWidth',
        Array(10)
          .fill()
          .map((v, i) => i + 100)
      );
    });

    it('should only accept wordWrapWidth option values that are positive numbers where n > 0', async () => {
      await testOptions(
        textBox,
        'wordWrapWidth',
        [-1, true, false, null, undefined, () => {}],
        0
      );
    });

    it('should accept maxLinesSuffix option of a string', async () => {
      await testOptions(textBox, 'maxLinesSuffix', ['...', '>>>', '???']);
    });

    it('should fallback to default for maxLinesSuffix if prop is anything other than a string', async () => {
      await testOptions(
        textBox,
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
      [textBox, testRenderer] = createtextBox(
        { content },
        { spyOnMethods: ['_update'] }
      );
      await textBox.__updateSpyPromise;
      expect(textBox._isInlineContent).toBe(true);
      expect(textBox._InlineContent.content).toBe(content);
    });

    it('should parse a string with markup and render as InlineContent', async () => {
      const content =
        'Example {ICON:settings|http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false} with a linebreak{NEWLINE}{BADGE:HD} that includes {TEXT:styled text|italic}.';
      [textBox, testRenderer] = createtextBox(
        { content },
        { spyOnMethods: ['_update'] }
      );
      await textBox.__updateSpyPromise;
      expect(textBox._isInlineContent).toBe(true);
      expect(textBox._InlineContent.content).toBe(content);
    });

    it('should announce its content', async () => {
      const content = 'Hello world';
      [textBox, testRenderer] = createtextBox({ content });
      expect(textBox.announce).toBe(content);
    });

    it('should update the textbox dimensions after rendering', async () => {
      [textBox, testRenderer] = createtextBox(
        {},
        { spyOnMethods: ['_notifyAncestors'] }
      );
      jest.spyOn(textBox, 'signal');
      testRenderer.forceAllUpdates();
      await textBox.__notifyAncestorsSpyPromise;

      expect(textBox.signal).toHaveBeenCalledWith('textBoxChanged', {
        w: 0,
        h: 0
      });

      textBox.signal.mockClear();
      textBox.content = ['inline', { badge: 'content' }];
      testRenderer.forceAllUpdates();
      await textBox.__notifyAncestorsSpyPromise;

      expect(textBox.signal).toHaveBeenCalledWith('textBoxChanged', {
        w: textBox._InlineContent.finalW,
        h: textBox._InlineContent.multiLineHeight
      });
    });
  });

  describe('marquee', () => {
    it('should create a Marquee textBox when marquee is true and content longer than wordWrapWidth', async () => {
      textBox.content = 'hello world';
      textBox.wordWrapWidth = 20;
      textBox.marquee = true;
      await textBox.__updateSpyPromise;
      expect(textBox._Marquee).toBeDefined();

      [textBox, testRenderer] = createtextBox(
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
      await textBox.__updateSpyPromise;
      expect(textBox._Marquee).toBeDefined();
    });

    it('should toggle alpha values of Marquee and Text components based on the marquee property', async () => {
      textBox.content = 'hello world';
      textBox.wordWrapWidth = 20;
      textBox.marquee = false;
      await textBox.__updateSpyPromise;
      expect(textBox._Marquee).toBe(undefined);
      expect(textBox._Text.alpha).toBe(1);

      textBox.marquee = true;
      await textBox.__updateSpyPromise;
      expect(textBox._Marquee.alpha).toBe(1);
      expect(textBox._Text.alpha).toBe(0.001);

      textBox.marquee = false;
      await textBox.__updateSpyPromise;
      expect(textBox._Marquee.alpha).toBe(0.001);
      expect(textBox._Text.alpha).toBe(1);
    });

    it('marquee component should only ever have maxLines of 1', async () => {
      textBox.content = 'hello world';
      textBox.maxLines = 3;
      textBox.wordWrapWidth = 20;
      textBox.marquee = true;
      await textBox.__updateSpyPromise;
      expect(textBox._Marquee.title.maxLines).toBe(1);
    });
  });
});
