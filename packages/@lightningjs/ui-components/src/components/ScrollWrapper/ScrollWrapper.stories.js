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
import { default as ScrollWrapperComponent } from '.';
import Tile from '../Tile';
import mdx from './ScrollWrapper.mdx';
import { createModeControl } from '../../docs/utils';
import { CATEGORIES } from '../../docs/constants';
import TextBox from '../TextBox/TextBox.js';

const terms = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet risus feugiat in ante metus dictum. Pretium fusce id velit ut tortor pretium viverra suspendisse. Pharetra convallis posuere morbi leo urna. Nunc sed velit dignissim sodales. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Facilisis gravida neque convallis a cras semper auctor. Pellentesque pulvinar pellentesque habitant morbi tristique. Non tellus orci ac auctor augue mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Amet risus nullam eget felis eget nunc. Auctor urna nunc id cursus metus aliquam eleifend mi in. Integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Ac felis donec et odio pellentesque. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Sit amet risus nullam eget felis eget.

Mi proin sed libero enim sed faucibus. Arcu vitae elementum curabitur vitae nunc sed velit. Volutpat blandit aliquam etiam erat velit. In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Tristique risus nec feugiat in. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Eget est lorem ipsum dolor sit amet consectetur. At tellus at urna condimentum mattis pellentesque id. Maecenas accumsan lacus vel facilisis. Metus dictum at tempor commodo ullamcorper a lacus. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Tempor nec feugiat nisl pretium fusce id velit ut.`;

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
Basic.parameters = {
  storyDetails: 'The ScrollWrapper content property is set as a string.'
};

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
TextArray.parameters = {
  storyDetails:
    'The ScrollWrapper content property is set as an array of text objects. See the InlineContent documentation for more details on these types of objects.'
};

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
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet risus feugiat in ante metus dictum. Pretium fusce id velit ut tortor pretium viverra suspendisse. Pharetra convallis posuere morbi leo urna.',
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
ObjectArray.parameters = {
  storyDetails:
    'The ScrollWrapper content property is set as an array of Lightning elements.'
};
