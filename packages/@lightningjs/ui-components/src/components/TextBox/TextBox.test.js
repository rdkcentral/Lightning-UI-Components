/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { jest } from '@jest/globals';
import { makeCreateComponent } from '@lightningjs/ui-components-test-utils';
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
    it('renders', async () => {
      const tree = testRenderer.toJSON(2);
      await textBox.__updateSpyPromise;
      expect(tree).toMatchSnapshot();
    });

    it('renders with content prop', async () => {
      textBox.content = 'Hello world';
      await textBox.__updateSpyPromise;
      expect(textBox._Text.text.text).toBe('Hello world');
    });

    it('sets the announce string to the content or InlineContent announce', () => {
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

    it('should set text styles to the defaultTextStyle if textStyle is not provided', async () => {
      textBox.content = 'Hello world';
      textBox.style.defaultTextStyle = 'headline1';
      textBox.style.textStyle = null;
      testRenderer.forceAllUpdates();
      expect(textBox._Text.text.fontSize).toBe(
        textBox.style.typography[textBox.style.defaultTextStyle].fontSize
      );
      expect(textBox._Text.text.fontWeight).toBe(
        textBox.style.typography[textBox.style.defaultTextStyle].fontWeight
      );
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

    it('should get TextDefaults when switching themes', async () => {
      const testTheme = {
        name: 'Test',
        typography: {
          display1: {
            fontFace: 'TestFont1',
            fontSize: 35,
            fontWeight: 500,
            letterSpacing: 1,
            lineHeight: 100,
            verticalAlign: 'middle'
          },
          body1: {
            fontFace: 'TestFont2',
            fontSize: 15,
            fontWeight: 250,
            letterSpacing: 0,
            lineHeight: 50,
            verticalAlign: 'middle'
          }
        }
      };
      context.setTheme(testTheme);
      textBox.base = context.theme;
      textBox.content = 'Hello Text Defaults';
      await textBox.__updateSpyPromise;
      expect(context.theme.name).toBe('Test');
    });
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
      expect(textBox._Text.text.maxLinesSuffix).toBe('..');
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
          icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',
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
        'Example {ICON:settings|https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png} with a linebreak{NEWLINE}{BADGE:HD} that includes {TEXT:styled text|italic}.';
      [textBox, testRenderer] = createTextBox(
        { content },
        { spyOnMethods: ['_update'] }
      );
      await textBox.__updateSpyPromise;
      expect(textBox._isInlineContent).toBe(true);
      expect(textBox._InlineContent.content).toBe(content);
    });

    it('should update width of InlineContent equal to wordWrapWidth when value is greater than 0', async () => {
      const content = [
        'Text',
        {
          icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',
          title: 'Rotten Tomatoes rating'
        },
        { badge: 'HD', title: 'HD' },
        { badge: 'SD', title: 'SD' }
      ];
      [textBox, testRenderer] = createTextBox(
        { content },
        { spyOnMethods: ['_update'] }
      );
      textBox.style.textStyle.wordWrapWidth = 100;
      await textBox.__updateSpyPromise;
      testRenderer.forceAllUpdates();
      expect(textBox._InlineContent.w).toEqual(100);
      expect(textBox._InlineContent.rtt).toEqual(true);
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
              icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',
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

    it('should provde a public method to toggle Marquee display and animations', async () => {
      textBox.content = 'hello world'.repeat(30);
      textBox.wordWrapWidth = 20;
      textBox.marquee = true;
      await textBox.__updateSpyPromise;

      jest.spyOn(textBox._Marquee, 'startScrolling');
      expect(textBox._Marquee.alpha).toBe(1);
      expect(textBox._Marquee.startScrolling).not.toHaveBeenCalled();

      textBox.toggleMarquee();
      expect(textBox._Marquee.startScrolling).toHaveBeenCalled();
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

  describe('updates to the component dimensions', () => {
    beforeEach(async () => {
      [textBox, testRenderer] = createTextBox(
        { content: 'abc' },
        { spyOnMethods: ['_setDimensions'] }
      );
      jest.spyOn(textBox, '_setDimensions');
      jest.spyOn(textBox, 'fireAncestors');
      jest.spyOn(textBox, 'signal');

      await textBox.__setDimensionsSpyPromise;
    });

    const expectSignalsFired = textBox => {
      expect(textBox._setDimensions).toHaveBeenCalled();
      expect(textBox.fireAncestors).toHaveBeenCalledWith('$itemChanged');
      expect(textBox.signal).toHaveBeenCalledWith('textBoxChanged', {
        w: textBox.w,
        h: textBox.h
      });
    };
    const expectSignalsNotFired = textBox => {
      expect(textBox._setDimensions).not.toHaveBeenCalled();
      expect(textBox.fireAncestors).not.toHaveBeenCalled();
      expect(textBox.signal).not.toHaveBeenCalled();
    };

    it('should emit signals when the width or height change', async () => {
      expectSignalsFired(textBox);

      jest.clearAllMocks();
      expectSignalsNotFired(textBox);

      textBox.content = 'abc def';
      await textBox.__setDimensionsSpyPromise;

      expectSignalsFired(textBox);
    });

    it('should not emit signals when a property that is not width or height changes', async () => {
      expectSignalsFired(textBox);

      jest.clearAllMocks();
      expectSignalsNotFired(textBox);

      textBox.marquee = true;

      expectSignalsNotFired(textBox);
    });
  });
});
