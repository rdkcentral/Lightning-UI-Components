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

import MarqueeComponent from '.';
import InlineContent from '../InlineContent/index.js';
import mdx from './Marquee.mdx';
import { context } from '../../globals';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[256]}/Marquee`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Marquee = args =>
  class Marquee extends lng.Component {
    static _template() {
      return {
        Marquee: {
          type: MarqueeComponent,
          w: 350,
          h: 180,
          title: {
            text: args.title,
            ...context.theme.typography.body1,
            maxLines: 1
          }
        }
      };
    }
  };

Marquee.args = {
  title: 'This is a scrolling Marquee component for long text',
  autoStart: true,
  centerAlign: false,
  repeat: -1,
  delay: 1.5
};

Marquee.argTypes = {
  title: {
    control: 'text',
    description: 'An object matching Lightning text object',
    table: { defaultValue: { summary: 'undefined' } }
  },
  autoStart: {
    control: 'boolean',
    description: 'Start scrolling on initiation',
    table: { defaultValue: { summary: false } }
  },
  color: {
    name: 'color',
    control: 'color',
    description: 'Set color of text',
    table: { defaultValue: { summary: 'theme.color.fillNeutral' } }
  },
  repeat: {
    control: { type: 'number', min: -1 },
    description: 'Number of times to repeat scrolling',
    table: { defaultValue: { summary: -1 } }
  },
  delay: {
    control: { type: 'number', min: 1.5 },
    description: 'Delay before scrolling starts',
    table: { defaultValue: { summary: 1.5 } }
  },
  centerAlign: {
    control: 'boolean',
    description:
      'Will center the entire texture if the width of the content is less than the container',
    table: { defaultValue: { summary: false } }
  }
};

Marquee.parameters = {
  argActions: {}
};

export const CenteredText = () =>
  class CenteredText extends lng.Component {
    static _template() {
      return {
        Marquee: {
          type: MarqueeComponent,
          w: 400,
          h: 50,
          title: {
            text: 'No scroll center',
            textAlign: 'center'
          },
          autoStart: true,
          delay: 1
        },
        InlineContent: {
          type: InlineContent,
          x: 200,
          alpha: 0.001,
          justify: 'flex-start',
          content: [
            'Centered',
            {
              icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',
              title: 'Rotten Tomatoes rating'
            },
            ' InlineContent'
          ],
          rtt: true
        },
        MarqueeInlineContent: {
          type: MarqueeComponent,
          y: 100,
          w: 400,
          h: 180,
          centerAlign: true,
          alpha: 0,
          autoStart: true,
          delay: 1
        }
      };
    }

    _init() {
      this.tag('MarqueeInlineContent').contentTexture =
        this.tag('InlineContent').getTexture();
      this.tag('MarqueeInlineContent').alpha = 1;
    }
  };

CenteredText.args = {};
CenteredText.argTypes = {};
CenteredText.parameters = {
  argActions: {}
};
