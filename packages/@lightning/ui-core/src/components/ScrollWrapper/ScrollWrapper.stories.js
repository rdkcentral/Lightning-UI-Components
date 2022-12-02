import lng from '@lightningjs/core';
import ScrollWrapperComponent from './index.js';
import Tile from '../Tile/index.js';
import mdx from './ScrollWrapper.mdx';
import { createModeControl } from '../../../storybook/index.js';
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

const modes = createModeControl({
  options: ['unfocused', 'focused'],
  defaultValue: 'focused'
});

export default {
  title: `${CATEGORIES[16]}/ScrollWrapper`,
  parameters: {
    docs: {
      page: mdx
    }
  },
  args: {
    autoScroll: false,
    autoScrollDelay: 2000,
    autoScrollSpeed: 200,
    fadeContent: true,
    scrollDuration: 0.2,
    scrollStep: 10,
    showScrollBar: true
  },
  argTypes: {
    ...modes,
    autoScroll: {
      control: 'boolean',
      defaulValue: false,
      description: 'whether or not to auto scroll the content',
      type: 'boolean',
      table: {
        defaultValue: { summary: false }
      }
    },
    autoScrollDelay: {
      control: 'number',
      defaulValue: 2000,
      description: 'delay, in ms, before auto scroll starts',
      type: 'number',
      table: {
        defaultValue: { summary: 2000 }
      }
    },
    autoScrollSpeed: {
      control: 'number',
      defaulValue: 200,
      description: 'time delay, in ms, before each scroll step',
      type: 'number',
      table: {
        defaultValue: { summary: 200 }
      }
    },
    fadeContent: {
      control: 'boolean',
      defaulValue: true,
      description: 'fade out content at the bottom of the ScrollWrapper',
      type: 'boolean',
      table: {
        defaultValue: { summary: true }
      }
    },
    scrollChanged: {
      action: 'scrollChanged',
      defaulValue: '',
      description:
        'Event fired via `fireAncestors`, is triggered when scroll reaches the top or bottom of the scroll boundaries.',
      type: 'function',
      table: {
        defaultValue: { summary: '' }
      }
    },
    scrollDuration: {
      control: 'number',
      defaulValue: 0.2,
      description: 'animation duration for the scroll',
      type: 'number',
      table: {
        defaultValue: { summary: 0.2 }
      }
    },
    scrollStep: {
      control: 'number',
      defaulValue: 10,
      description: 'how many pixels to scroll by on every up/down keypress',
      type: 'number',
      table: {
        defaultValue: { summary: 10 }
      }
    },
    showScrollBar: {
      control: 'boolean',
      defaulValue: true,
      description: 'show the scroll bar when focused ',
      type: 'boolean',
      table: {
        defaultValue: { summary: true }
      }
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
          scrollStep: args.scrollStep,
          autoScroll: args.autoScroll,
          fadeContent: args.fadeContent,
          scrollDuration: args.scrollDuration,
          showScrollBar: args.showScrollBar,
          autoScrollDelay: args.autoScrollDelay,
          autoScrollSpeed: args.autoScrollSpeed,
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

export const TextArray = args =>
  class TextArray extends lng.Component {
    static _template() {
      return {
        ScrollWrapper: {
          type: ScrollWrapperComponent,
          h: 450,
          w: 600,
          wordWrap: true,
          scrollStep: args.scrollStep,
          autoScroll: args.autoScroll,
          scrollDuration: args.scrollDuration,
          showScrollBar: args.showScrollBar,
          autoScrollDelay: args.autoScrollDelay,
          autoScrollSpeed: args.autoScrollSpeed,
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
          scrollStep: args.scrollStep,
          autoScroll: args.autoScroll,
          scrollDuration: args.scrollDuration,
          showScrollBar: args.showScrollBar,
          autoScrollDelay: args.autoScrollDelay,
          autoScrollSpeed: args.autoScrollSpeed,
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
