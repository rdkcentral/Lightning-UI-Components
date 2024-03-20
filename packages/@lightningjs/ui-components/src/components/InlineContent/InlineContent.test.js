﻿/**
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

import {
  makeCreateComponent,
  nextTick,
  pathToDataURI
} from '@lightningjs/ui-components-test-utils';
import InlineContent from '.';
import { getHexColor } from '../../utils';
import { base } from './InlineContent.styles';
import baseTheme from '@lightningjs/ui-components-theme-base';
import context from '../../globals/context/index.js';
import { jest } from '@jest/globals';
const lightningIcon = pathToDataURI(
  'src/assets/images/ic_lightning_white_32.png'
);

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

jest.mock('./InlineContent.styles', () => {
  const originalDefaultModule = jest.requireActual(
    './InlineContent.styles'
  ).default;
  const originalBase = jest.requireActual('./InlineContent.styles').base;

  return {
    __esModule: true,
    default: jest
      .fn()
      .mockImplementation((...args) => originalDefaultModule(...args)),
    base: jest.fn().mockImplementation((...args) => originalBase(...args))
  };
});

const createInlineContent = makeCreateComponent(InlineContent);

describe('InlineContent', () => {
  let inlineContent, testRenderer;

  beforeEach(() => {
    context.setTheme(baseTheme);
    [inlineContent, testRenderer] = createInlineContent(
      {},
      { spyOnMethods: ['_update'] }
    );
  });

  afterEach(() => {
    inlineContent = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('has a base theme', () => {
    expect(typeof base).toBe('function');
    expect(base(baseTheme)).toEqual(
      expect.objectContaining({
        textY: expect.any(Number),
        iconWidth: expect.any(Number),
        iconHeight: expect.any(Number),
        contentSpacing: expect.any(Number),
        marginBottom: expect.any(Number),
        textStyle: expect.any(Object),
        maxLines: expect.any(Number),
        justify: expect.any(String)
      })
    );
  });

  it('updates to test theme text', async () => {
    context.setTheme(testTheme);
    inlineContent.content = 'This should be in testTheme font.';
    await inlineContent.__updateSpyPromise;
    expect(context.theme.name).toBe('Test');
    expect(inlineContent.style.textStyle).toEqual({
      ...context.theme.typography.body1,
      verticalAlign: 'bottom'
    });
  });

  it('should update the content array', () => {
    inlineContent.content = 'hi';
    expect(inlineContent.content).toBe('hi');
    expect(inlineContent._parsedContent[0]).toBe('hi');

    inlineContent.content = ['hello'];
    expect(inlineContent.content).toEqual(['hello']);
    expect(inlineContent._parsedContent[0]).toBe('hello');

    const str =
      'This is a{ICON:setting|http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false}and {BADGE:HD} badge test.';
    inlineContent.content = str;
    expect(inlineContent.content).toBe(str);
    expect(inlineContent._parsedContent).toEqual([
      'This ',
      'is ',
      'a',
      {
        title: 'setting',
        icon: 'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false'
      },
      'and ',
      { badge: 'HD' },
      ' badge ',
      'test.'
    ]);
  });

  it('should update the text properties', () => {
    const color = getHexColor('ffffff', 0.25);
    const textStyle = { color, textAlign: 'left' };
    inlineContent.textStyle = textStyle;
    expect(inlineContent.textStyle).toBe(textStyle);
    expect(inlineContent.textStyle.color).toBe(textStyle.color);
  });

  it('should update flexbox justification', () => {
    const justify = 'flex-end';
    inlineContent.justify = justify;
    expect(inlineContent.justify).toBe(justify);
  });

  it('should update icon size, position, and color', () => {
    const iconSize = 50;
    [inlineContent] = createInlineContent({
      content: [
        {
          title: 'setting',
          icon: 'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false',
          color: getHexColor('00ff00')
        }
      ],
      iconY: 10,
      iconWidth: iconSize,
      iconHeight: iconSize
    });
    expect(inlineContent.iconWidth).toBe(iconSize);
    expect(inlineContent.iconHeight).toBe(iconSize);
  });

  it('should update content spacing', () => {
    const padding = 50;
    inlineContent.contentSpacing = padding;
    expect(inlineContent.contentSpacing).toBe(padding);
  });

  it('should update item flex spacing', () => {
    const props = { marginBottom: 50 };
    inlineContent.contentProperties = props;
    expect(inlineContent.contentProperties).toBe(props);
  });

  it('should update badge styling', () => {
    const color = getHexColor('ffffff', 0.25);
    const badgeProperties = { background: { color } };
    const content = [{ badge: 'HD' }, { badge: 'CC' }];
    [inlineContent, testRenderer] = createInlineContent({
      badgeProperties,
      content
    });
    expect(inlineContent.badgeProperties).toBe(badgeProperties);
    expect(inlineContent.childList.getAt(0).background.color).toBe(color);
  });

  it('should vertically center a badge once it has loaded based on lineHeight', async () => {
    const content = [
      'This is a badge: ',
      {
        badge: 'HD',
        title: 'HD'
      }
    ];
    [inlineContent, testRenderer] = createInlineContent(
      {
        content,
        contentProperties: { marginBottom: -2 },
        textStyle: { lineHeight: 150 }
      },
      {
        spyOnMethods: ['_loadedBadge']
      }
    );
    testRenderer.forceAllUpdates();
    await inlineContent._loadedBadgeSpyPromise;
    await nextTick();
    expect(inlineContent.childList.last.y).toBeGreaterThan(0);
  });

  it('should render text with custom properties', () => {
    const color = getHexColor('ffffff', 0.25);
    const content = [
      {
        text: 'some test text',
        style: { textColor: color }
      }
    ];
    [inlineContent, testRenderer] = createInlineContent({ content });
    expect(inlineContent.childList.getAt(0).text.textColor).toBe(color);
  });

  it('should render icons', () => {
    const content = [
      {
        icon: lightningIcon,
        title: 'Lightning'
      }
    ];
    [inlineContent, testRenderer] = createInlineContent({ content });
    expect(inlineContent.childList.getAt(0).texture.src).toBe(content[0].icon);
  });

  it('should not render content that is not a string, icon, or badge', () => {
    const content = [{ test: 'blah' }, { fake: 'stuff' }];
    [inlineContent, testRenderer] = createInlineContent({ content });
    expect(inlineContent.childList.length).toBe(0);
  });

  it('should notifiy ancestors after content has loaded', async () => {
    [inlineContent, testRenderer] = createInlineContent(
      {},
      { spyOnMethods: ['_notifyAncestors'] }
    );
    await inlineContent.__notifyAncestorsSpyPromise;
    jest.spyOn(inlineContent, 'fireAncestors');
    jest.spyOn(inlineContent, 'signal');
    expect(inlineContent.fireAncestors).not.toHaveBeenCalled();
    inlineContent.content = [{ text: 'some text' }];
    await inlineContent.__notifyAncestorsSpyPromise;
    expect(inlineContent.fireAncestors).toHaveBeenCalled();
  });

  it('should build announce text from the content array', () => {
    const content = [
      'this is',
      { text: 'the', style: { textColor: 0xffffffff } },
      { badge: 'announce' },
      { fake: 'and this will not be read' },
      {
        icon: 'https://i.dlpng.com/static/png/425748_preview.png',
        title: 'content'
      }
    ];
    [inlineContent, testRenderer] = createInlineContent({ content });
    expect(inlineContent.announce).toBe('this is the announce content');
  });

  it('should take Y position overrides for each content type', () => {
    [inlineContent, testRenderer] = createInlineContent({
      iconY: 10,
      textY: 0,
      badgeY: 5
    });
    expect(inlineContent.iconY).toBe(10);
    expect(inlineContent.textY).toBe(0);
    expect(inlineContent.badgeY).toBe(5);
    inlineContent.iconY = inlineContent.textY = inlineContent.badgeY = 0;
    expect(inlineContent.iconY).toBe(0);
    expect(inlineContent.textY).toBe(0);
    expect(inlineContent.badgeY).toBe(0);
  });

  it('should update the flex box wrapping', async () => {
    [inlineContent, testRenderer] = createInlineContent(
      {
        content: 'hi',
        contentWrap: true
      },
      { spyOnMethods: ['_update'] }
    );
    await inlineContent.__updatePromiseSpy;
    testRenderer.update();

    expect(inlineContent.flex.wrap).toBe(true);
  });

  it('should create an empty item with full width to force a line break if a newline object is passed in', async () => {
    const width = 100;
    [inlineContent, testRenderer] = createInlineContent(
      {
        w: width,
        content: ['sentence', { newline: true }, 'with a linebreak'],
        contentWrap: true
      },
      { spyOnMethods: ['_update'] }
    );
    await inlineContent.__updatePromiseSpy;
    testRenderer.update();
    const newline = inlineContent.childList.getAt(1);
    expect(newline.w).toBe(width);
    expect(newline.h).toBe(0);
  });

  it('should use user entered customStyleMappings when specified for a text object', async () => {
    const color = getHexColor('ff0000');
    inlineContent.customStyleMappings = { red: { textColor: color } };
    inlineContent.content = [{ text: 'red text', style: 'red' }];

    [inlineContent, testRenderer] = createInlineContent(
      {
        customStyleMappings: { red: { textColor: color } },
        content: [{ text: 'red text', style: 'red' }]
      },
      { spyOnMethods: ['_update'] }
    );
    await inlineContent.__updatePromiseSpy;

    testRenderer.update();
    expect(inlineContent.childList.getAt(0).text.textColor).toBe(color);
  });

  it('should fire signals to parent components after content has loaded', async () => {
    [inlineContent, testRenderer] = createInlineContent(
      {},
      { spyOnMethods: ['_notifyAncestors'] }
    );

    await inlineContent.__notifyAncestorsPromiseSpy;

    jest.spyOn(inlineContent, 'fireAncestors');
    jest.spyOn(inlineContent, 'signal');
    inlineContent.patch({ content: [{ text: 'text' }] });
    testRenderer.forceAllUpdates();
    testRenderer.update();

    await nextTick(20);
    await inlineContent.__notifyAncestorsPromiseSpy;

    expect(inlineContent.finalW).toBeGreaterThan(0);
    expect(inlineContent.multiLineHeight).toBeGreaterThan(0);
    expect(inlineContent.fireAncestors).toHaveBeenCalledWith(
      '$loadedInlineContent',
      inlineContent
    );
    expect(inlineContent.signal).toHaveBeenCalledWith(
      'loadedInlineContent',
      inlineContent.finalW,
      inlineContent.multiLineHeight
    );
  });

  it('should truncate content that exceeds the defined max lines', async () => {
    const maxLinesSuffix = '...';
    [inlineContent, testRenderer] = createInlineContent(
      {
        w: 500,
        maxLines: 2,
        maxLinesSuffix: '...',
        contentWrap: true,
        content: Array.from({ length: 20 }).fill({
          text: 'this text is long and when repeated should exceed the max lines'
        })
      },
      { spyOnMethods: ['_renderMaxLines'] }
    );

    await inlineContent.__renderMaxLinesSpyPromise;

    const lastWordDisplayed = inlineContent.childList.last.text.text;
    expect(inlineContent.alpha).toBe(1);
    expect(lastWordDisplayed).toEqual(expect.stringContaining(maxLinesSuffix));
  });
});
