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

import lng from '@lightningjs/core';
import { default as InlineContentComponent } from '.';
import mdx from './InlineContent.mdx';
import lightningbolt from '../../assets/images/ic_lightning_white_32.png';
import { getHexColor } from '../../utils';

export default {
  title: 'Text/InlineContent',
  args: {
    contentWrap: false,
    justify: 'center',
    contentProperties: { marginBottom: -4 }
  },
  argTypes: {
    contentProperties: {
      control: 'object',
      description: 'Object setting flexItem props on all content items',
      type: 'object',
      table: {
        defaultValue: { summary: '{}' }
      }
    },
    contentWrap: {
      control: 'boolean',
      description:
        'Determines whether the containing flexbox should wrap the content onto the next line',
      type: 'boolean',
      table: {
        defaultValue: { summary: false }
      }
    },
    justify: {
      control: 'radio',
      options: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly'
      ],
      description: 'Alignment of first line flexbox content',
      type: 'string',
      table: {
        defaultValue: { summary: 'center' }
      }
    },
    maxLines: {
      control: 'number',
      description: 'maximum number of lines to render before truncation',
      type: 'number',
      table: {
        defaultValue: { summary: undefined }
      }
    },
    maxLinesSuffix: {
      control: 'text',
      description:
        'suffix appended to last line of content if it will exceed the maxLines',
      type: 'string',
      table: {
        defaultValue: { summary: '..' }
      }
    }
  },
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        InlineContent: {
          type: InlineContentComponent,
          x: 500,
          w: 200,
          contentWrap: args.contentWrap,
          contentProperties: args.contentProperties,
          justify: args.justify,
          customStyleMappings: {
            italic: {
              fontStyle: 'italic',
              textColor: getHexColor('00ff00')
            }
          },
          content: [
            'Text',
            {
              icon: lightningbolt,
              title: 'Green Lightning Bolt',
              style: { color: getHexColor('00ff00') }
            },
            'Wrapping Text',
            {
              icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',
              title: 'Rotten Tomatoes rating'
            },
            'and more text',
            {
              text: 'with some red ',
              style: { textColor: getHexColor('FF6194') }
            },
            'for fun',
            { badge: 'HD', title: 'HD' },
            { badge: 'SD', title: 'SD' },
            {
              text: 'make some text italic',
              style: 'italic'
            }
          ]
        }
      };
    }
  };

export const WithNewLines = args =>
  class WithNewLines extends lng.Component {
    static _template() {
      return {
        InlineContent: {
          type: InlineContentComponent,
          x: 500,
          w: 400,
          contentWrap: args.contentWrap,
          contentProperties: args.contentProperties,
          justify: args.justify,
          content: [
            'Example with multiple lines',
            {
              icon: lightningbolt,
              style: { color: getHexColor('00ff00') },
              title: 'Green Lightning Bolt'
            },
            { newline: true },
            'this line should break here',
            { newline: true },
            {
              icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',
              title: 'Rotten Tomatoes rating'
            },
            'another line break here',
            { newline: true },
            { badge: 'HD', title: 'HD' },
            { newline: true },
            { badge: 'SD', title: 'SD' }
          ]
        }
      };
    }
  };

export const WithParsing = args =>
  class WithParsing extends lng.Component {
    static _template() {
      return {
        InlineContent: {
          type: InlineContentComponent,
          x: 550,
          w: 400,
          contentWrap: args.contentWrap,
          contentProperties: args.contentProperties,
          justify: args.justify,
          customStyleMappings: {
            italic: {
              fontStyle: 'italic',
              textColor: getHexColor('FF6194')
            }
          },
          content:
            'This is an example of using custom markup {ICON:settings|https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png} with a linebreak{NEWLINE}{BADGE:HD} that includes all available types like {TEXT:styled text|italic}.'
        }
      };
    }
  };

export const WithTruncation = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        InlineContent: {
          type: InlineContentComponent,
          w: 500,
          content: [
            'Text',
            {
              icon: lightningbolt,
              title: 'Green Lightning Bolt',
              style: { color: getHexColor('00ff00') }
            },
            'Wrapping Text',
            {
              icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',
              title: 'Rotten Tomatoes rating'
            },
            'and more text',
            {
              text: 'with some red ',
              style: { textColor: getHexColor('FF6194') }
            },
            'for fun',
            { badge: 'HD', title: 'HD' },
            { badge: 'SD', title: 'SD' },
            ', and this should truncate before going on to a third line.'
          ],
          contentWrap: true
        }
      };
    }
  };
WithTruncation.args = {
  contentWrap: true,
  maxLines: 2,
  maxLinesSuffix: '...'
};
