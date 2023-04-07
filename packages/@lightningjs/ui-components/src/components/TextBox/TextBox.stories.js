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

import lng from '@lightningjs/core';
import TextBox from '.';
import mdx from './TextBox.mdx';
import lightningbolt from '../../assets/images/ic_lightning_white_32.png';
import { getHexColor } from '../../utils';
import inlineContentStory from '../InlineContent/InlineContent.stories';
import { CATEGORIES } from '../../docs/constants';

export default {
  title: `${CATEGORIES[256]}/TextBox`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

const { args: inlineContentArgs, argTypes: inlineContentArgTypes } =
  inlineContentStory;

const lorum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales est eu eleifend interdum. Vivamus egestas maximus elementum. Sed condimentum ligula justo, non sollicitudin lectus rutrum vel. Integer iaculis vitae nisl quis tincidunt. Sed quis dui vehicula, vehicula felis a, tempor leo. Fusce tincidunt, ante eget pretium efficitur, libero elit volutpat quam, sit amet porta tortor odio non ligula. Ut sed dolor eleifend massa auctor porttitor eget ut lectus. Vivamus elementum lorem mauris, eu luctus tortor posuere sit amet. Nunc a interdum metus.';

export const Basic = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        TextBox: {
          type: TextBox,
          fixed: true,
          w: 600,
          style: { textStyle: { maxLines: 3 } }
        }
      };
    }
  };

Basic.args = {
  content: lorum,
  marquee: false,
  fixed: true,
  w: 600
};

Basic.argTypes = {
  content: {
    control: 'text',
    description: 'Text to be displayed in element',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  marquee: {
    control: 'boolean',
    description:
      "Scrolls text when a single line of text is longer than the textbox's width",
    table: {
      defaultValue: { summary: false }
    }
  },
  fixed: {
    control: 'boolean',
    description:
      'Flag that when set to `true`, allows the width of the component to be set with `w`',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  w: {
    control: 'number',
    description:
      'When the `fixed` property is `true`, this will set the width of the component',
    table: {
      defaultValue: { summary: 0 }
    }
  }
};

export const WithInlineContentArray = () =>
  class WithInlineContentArray extends lng.Component {
    static _template() {
      return {
        TextBox: {
          type: TextBox,
          x: 200,
          w: 400,
          content: [
            'Text',
            {
              icon: lightningbolt,
              style: { color: getHexColor('00ff00') },
              title: 'Green Lightning Bolt'
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
            { badge: 'SD', title: 'SD' }
          ]
        }
      };
    }
  };

WithInlineContentArray.args = inlineContentArgs;
WithInlineContentArray.argTypes = inlineContentArgTypes;

export const WithInlineContentString = () =>
  class WithInlineContentArray extends lng.Component {
    static _template() {
      return {
        TextBox: {
          type: TextBox,
          w: 400,
          content:
            'This is an example of using custom markup {ICON:settings|https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png} with a linebreak{NEWLINE}{BADGE:HD} that includes all available types like {TEXT:styled text|italic}.',
          customStyleMappings: {
            italic: {
              fontStyle: 'italic',
              textColor: getHexColor('FF6194')
            }
          }
        }
      };
    }
  };

WithInlineContentString.args = inlineContentArgs;
WithInlineContentString.argTypes = inlineContentArgTypes;
