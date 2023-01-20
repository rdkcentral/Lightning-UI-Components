import { jest } from '@jest/globals';
import { makeCreateComponent } from '@lightning/ui-test-utils';
import TextBox from '.';
import { context } from '../../globals';

import { getValidColor } from '../../utils';

it('should run', () => {
  expect(true).toBe(true);
});

const createTextBox = makeCreateComponent(TextBox);

describe('TextBox', () => {
  let textBox, testRenderer;

  beforeEach(async () => {
    [textBox, testRenderer] = createTextBox({}, { spyOnMethods: ['_update'] });
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
      textBox.style.textStyle = 'invalidstyle';
      await textBox.__updateSpyPromise;
      expect(textBox._Text).toEqual(
        expect.objectContaining({
          text: expect.objectContaining(textBox.theme.typography.body1)
        })
      );
    });

    it('should set style to "body1" object if the style prop is null', async () => {
      textBox.content = 'Hello World';
      textBox.style.textStyle = null;
      await textBox.__updateSpyPromise;
      expect(textBox._Text).toEqual(
        expect.objectContaining({
          text: expect.objectContaining(textBox.theme.typography.body1)
        })
      );
    });

    it('should set style to "body1" object if the style prop is not a string or object', async () => {
      textBox.content = 'Hello World';
      textBox.style.textStyle = () => {};
      await textBox.__updateSpyPromise;
      expect(textBox._Text).toEqual(
        expect.objectContaining({
          text: expect.objectContaining(textBox.theme.typography.body1)
        })
      );
    });

    it('should set text styles to the defaultTextStyle if textStyle is not provided', () => {
      textBox.content = 'Hello world';
      textBox.style.defaultTextStyle = 'headline1';
      textBox.style.textStyle = null;
      testRenderer.forceAllUpdates();
      expect(textBox._Text.text.fontSize).toBe(36);
      expect(textBox._Text.text.fontWeight).toBe(700);
    });

    it('should set textColor to the default white if no textColor is provided', () => {
      textBox.content = 'Hello World!';
      testRenderer.forceAllUpdates();
      expect(textBox._Text.text.textColor).toBe(getValidColor('#FFFFFF'));
    });

    it('should set textColor to the provided textColor value if defined', () => {
      textBox.content = 'Hello World!';
      textBox.style.textStyle.textColor = getValidColor('#000000');
      testRenderer.forceAllUpdates();
      expect(textBox._Text.text.textColor).toBe(getValidColor('#000000'));
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
    it('should fallback to default for textAlign if no textAlign style value is provided', () => {
      textBox.content = 'Hello World!';
      testRenderer.forceAllUpdates();
      expect(textBox._Text.text.textAlign).toBe('left');
    });

    it('should set textAlign to the provided value if defined', () => {
      textBox.content = 'Hello World!';
      textBox.style.textStyle.textAlign = 'center';
      testRenderer.forceAllUpdates();
      expect(textBox._Text.text.textAlign).toBe('center');
    });

    it('should fallback to default for verticalAlign if no verticalAlign style value is provided', () => {
      textBox.content = 'Hello World!';
      testRenderer.forceAllUpdates();
      expect(textBox._Text.text.verticalAlign).toBe('middle');
    });

    it('should set verticalAlign to the provided value if defined', () => {
      textBox.content = 'Hello World!';
      textBox.style.textStyle.verticalAlign = 'top';
      testRenderer.forceAllUpdates();
      expect(textBox._Text.text.verticalAlign).toBe('top');
    });

    it('should fallback to default for wordWrap if no wordWrap style value is provided', async () => {
      textBox.content = 'Hello World!';
      testRenderer.forceAllUpdates();
      expect(textBox._Text.text.wordWrap).toBe(true);
    });

    it('should set wordWrap to the provided value if defined', () => {
      textBox.content = 'Hello World!';
      textBox.style.textStyle.wordWrap = false;
      testRenderer.forceAllUpdates();
      expect(textBox._Text.text.wordWrap).toBe(false);
    });

    it('should fallback to default for wordWrapWidth if value is not provided', async () => {
      textBox.content = 'Hello World!';
      testRenderer.forceAllUpdates();
      expect(textBox._Text.text.wordWrapWidth).toBe(0);
    });

    it('should set wordWrapWidth to the provided value if defined', () => {
      textBox.content = 'Hello World!';
      textBox.style.textStyle.wordWrapWidth = 600;
      testRenderer.forceAllUpdates();
      expect(textBox._Text.text.wordWrapWidth).toBe(600);
    });

    it('should fallback to default for maxLines if value is not provided', async () => {
      textBox.content = 'Hello World!';
      testRenderer.forceAllUpdates();
      expect(textBox._Text.text.maxLines).toBe(0);
    });

    it('should set maxLines to the provided value if defined', () => {
      textBox.content = 'Hello World!';
      textBox.style.textStyle.maxLines = 3;
      testRenderer.forceAllUpdates();
      expect(textBox._Text.text.maxLines).toBe(3);
    });

    it('should fallback to default for maxLinesSuffix if value is not provided', async () => {
      textBox.content = 'Hello World!';
      testRenderer.forceAllUpdates();
      expect(textBox._Text.text.maxLinesSuffix).toBe('...');
    });

    it('should set maxLinesSuffix to the provided value if defined', () => {
      textBox.content = 'Hello World!';
      textBox.style.textStyle.maxLinesSuffix = '???';
      testRenderer.forceAllUpdates();
      expect(textBox._Text.text.maxLinesSuffix).toBe('???');
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
      [textBox, testRenderer] = createTextBox(
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
      [textBox, testRenderer] = createTextBox(
        { content },
        { spyOnMethods: ['_update'] }
      );
      await textBox.__updateSpyPromise;
      expect(textBox._isInlineContent).toBe(true);
      expect(textBox._InlineContent.content).toBe(content);
    });

    it('should announce its content', async () => {
      const content = 'Hello world';
      [textBox, testRenderer] = createTextBox({ content });
      expect(textBox.announce).toBe(content);
    });

    it('should update the textbox dimensions after rendering', async () => {
      [textBox, testRenderer] = createTextBox(
        { content: undefined },
        { spyOnMethods: ['_notifyAncestors'] }
      );
      jest.spyOn(textBox, 'signal');
      testRenderer.forceAllUpdates();

      // since content is undefined and Text is not defined notifyAncestors should not be called
      expect(textBox.signal).not.toHaveBeenCalled();

      textBox.signal.mockClear();
      textBox.content = ['inline', { badge: 'content' }];
      testRenderer.forceAllUpdates();
      await textBox.__notifyAncestorsSpyPromise;

      expect(textBox.signal).toHaveBeenCalledWith('textBoxChanged', {
        w: textBox._InlineContent.finalW,
        h: textBox._InlineContent.multiLineHeight
      });

      textBox.content = undefined;
      testRenderer.forceAllUpdates();
      await textBox.__notifyAncestorsSpyPromise;
      expect(textBox.signal).toHaveBeenCalledWith('textBoxChanged', {
        w: 0,
        h: 0
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

      [textBox, testRenderer] = createTextBox(
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
