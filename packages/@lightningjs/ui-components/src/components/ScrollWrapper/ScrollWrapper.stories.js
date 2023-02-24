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
import ScrollWrapperComponent from './index.js';
import Tile from '../Tile/index.js';
import mdx from './ScrollWrapper.mdx';
import { createModeControl } from 'lightning-ui-docs/.storybook/utils';
import { CATEGORIES } from 'lightning-ui-docs';
import TextBox from '../TextBox/TextBox.js';

const terms = `By activating, you agree that you want to enable cloud DVR technology to
'your Xfinity TV subscription on additional supported devices like computers and
'tablets, as well as the TV connected to your set-top DVR via Comcast's network. If
'subscribed to X1 DVR with cloud technology, your acceptance also confirms that when you
'record programs on your set-top DVR you also want to save and store them automatically
'in Comcast's network in several formats to (1) enable you to play them back (and
'navigate within them) on additional supported devices like computers and tablets, as
'well as the TV connected to your set-top DVR, and (2) optimize the video and audio
'quality of your viewing experience during playback.`;

export default {
  title: `${CATEGORIES[16]}/ScrollWrapper`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

const sharedArgs = {
  autoScroll: false,
  autoScrollDelay: 2000,
  autoScrollSpeed: 200,
  fadeContent: true,
  scrollDuration: 0.2,
  scrollStep: 10,
  showScrollBar: true,
  mode: 'focused'
};

const sharedArgTypes = {
  ...createModeControl({
    options: ['unfocused', 'focused'],
    summaryValue: false
  }),
  autoScroll: {
    control: 'boolean',
    description: 'Whether or not to auto scroll the content',
    type: 'boolean',
    table: {
      defaultValue: { summary: false }
    }
  },
  autoScrollDelay: {
    control: 'number',
    description: 'Delay, in ms, before auto scroll starts',
    type: 'number',
    table: {
      defaultValue: { summary: 2000 }
    }
  },
  autoScrollSpeed: {
    control: 'number',
    description: 'Time delay, in ms, before each scroll step',
    type: 'number',
    table: {
      defaultValue: { summary: 2000 }
    }
  },
  fadeContent: {
    control: 'boolean',
    description: 'Fade out content at the bottom of the ScrollWrapper',
    type: 'boolean',
    table: {
      defaultValue: { summary: true }
    }
  },
  scrollDuration: {
    control: 'number',
    description: 'Animation duration for the scroll',
    type: 'number',
    table: {
      defaultValue: { summary: 0.2 }
    }
  },
  scrollStep: {
    control: 'number',
    description: 'How many pixels to scroll by on every up/down keypress',
    type: 'number',
    table: {
      defaultValue: { summary: 10 }
    }
  },
  showScrollBar: {
    control: 'boolean',
    description: 'Show the scroll bar when focused ',
    type: 'boolean',
    table: {
      defaultValue: { summary: true }
    }
  }
};

export const Basic = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        ScrollWrapper: {
          type: ScrollWrapperComponent,
          h: 448,
          w: 796,
          content: terms,
          signals: {
            scrollChanged: true
          }
        }
      };
    }

    $scrollChanged(type) {
      args.scrollChanged(type);
    }
  };

Basic.args = sharedArgs;
Basic.argTypes = sharedArgTypes;

export const TextArray = args =>
  class TextArray extends lng.Component {
    static _template() {
      return {
        ScrollWrapper: {
          type: ScrollWrapperComponent,
          h: 450,
          w: 600,
          wordWrap: true,
          content: [
            {
              text: 'Text Heading',
              style: {
                fontFace: 'XfinityBrownBold',
                alignContent: 'center'
              }
            },
            {
              text: terms,
              style: {
                alignContent: 'left',
                fontSize: '30'
              }
            }
          ],
          signals: {
            scrollChanged: true
          }
        }
      };
    }

    $scrollChanged(type) {
      args.scrollChanged(type);
    }
  };

TextArray.args = sharedArgs;
TextArray.argTypes = sharedArgTypes;

export const ObjectArray = args =>
  class ObjectArray extends lng.Component {
    static _template() {
      return {
        ScrollWrapper: {
          type: ScrollWrapperComponent,
          h: 764,
          w: 1200,
          shouldWrap: true, // determines if items should wrap around ScrollContainer
          flexDirection: 'row', //determines the direction items are placed in flexContainer
          content: Array.from(Array(6)).map(() => ({
            shader: {
              type: lng.shaders.RoundedRectangle,
              radius: 16
            },
            type: Tile,
            rect: true,
            w: 308,
            h: 400,
            color: 0xf53e3e45,
            flexItem: {
              margin: 24
            },
            Text: {
              type: TextBox,
              x: 20,
              y: 10,
              content:
                'By activating, you agree that you want to enable cloud DVR technology to ' +
                'your Xfinity TV subscription on additional supported devices like computers and ' +
                "tablets, as well as the TV connected to your set-top DVR via Comcast's network.",
              style: {
                textStyle: {
                  fontSize: 27,
                  lineHeight: null,
                  maxLines: 0,
                  textAlign: 'left',
                  verticalAlign: 'middle',
                  wordWrapWidth: 270
                }
              },
              shader: {
                type: lng.shaders.RoundedRectangle,
                radius: 0
              }
            }
          })),
          signals: {
            scrollChanged: true
          }
        }
      };
    }

    $scrollChanged(type) {
      args.scrollChanged(type);
    }
  };

ObjectArray.args = sharedArgs;
ObjectArray.argTypes = sharedArgTypes;
