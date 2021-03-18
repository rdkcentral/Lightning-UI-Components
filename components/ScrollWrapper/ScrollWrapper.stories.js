import lng from '@lightningjs/core';

import ScrollWrapper from '.';
import mdx from './ScrollWrapper.mdx';

export default {
  title: 'ScrollWrapper',
  parameters: {
    docs: {
      page: mdx
    },
    argActions: {
      focused: (isFocused, component) => {
        component._getFocused = isFocused
          ? () => component.tag('ScrollWrapper')
          : () => {};
        component._refocus();
      }
    }
  },
  args: {
    autoScroll: false,
    autoScrollDelay: 2000,
    autoScrollSpeed: 200,
    focused: true,
    scrollDuration: 0.2,
    scrollStep: 10,
    showScrollBar: true
  },
  argTypes: {
    autoScroll: { control: 'boolean' },
    autoScrollDelay: { control: 'number' },
    autoScrollSpeed: { control: 'number' },
    focused: { control: 'boolean' },
    scrollChanged: { action: 'scrollChanged' },
    scrollDuration: { control: 'number' },
    scrollStep: { control: 'number' },
    showScrollBar: { control: 'boolean' }
  }
};

export const Basic = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        ScrollWrapper: {
          type: ScrollWrapper,
          h: 450,
          w: 600,
          scrollStep: args.scrollStep,
          autoScroll: args.autoScroll,
          scrollDuration: args.scrollDuration,
          showScrollBar: args.showScrollBar,
          autoScrollDelay: args.autoScrollDelay,
          autoScrollSpeed: args.autoScrollSpeed,
          content:
            'By activating, you agree that you want to enable cloud DVR technology to ' +
            'your Xfinity TV subscription on additional supported devices like computers and ' +
            'tablets, as well as the TV connected to your set-top DVR via Comcast’s network. If ' +
            'subscribed to X1 DVR with cloud technology, your acceptance also confirms that when you ' +
            'record programs on your set-top DVR you also want to save and store them automatically ' +
            'in Comcast’s network in several formats to (1) enable you to play them back (and ' +
            'navigate within them) on additional supported devices like computers and tablets, as ' +
            'well as the TV connected to your set-top DVR, and (2) optimize the video and audio ' +
            'quality of your viewing experience during playback.',
          signals: {
            scrollChanged: true
          }
        }
      };
    }

    $scrollChanged(type) {
      args.scrollChanged(type);
    }

    _getFocused() {
      if (args.focused) return this.tag('ScrollWrapper');
    }
  };

export const ContentArray = args =>
  class ContentArray extends lng.Component {
    static _template() {
      return {
        ScrollWrapper: {
          type: ScrollWrapper,
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
              text:
                'By activating, you agree that you want to enable cloud DVR technology to ' +
                'your Xfinity TV subscription on additional supported devices like computers and ' +
                'tablets, as well as the TV connected to your set-top DVR via Comcast’s network. If ' +
                'subscribed to X1 DVR with cloud technology, your acceptance also confirms that when you ' +
                'record programs on your set-top DVR you also want to save and store them automatically ' +
                'in Comcast’s network in several formats to (1) enable you to play them back (and ' +
                'navigate within them) on additional supported devices like computers and tablets, as ' +
                'well as the TV connected to your set-top DVR, and (2) optimize the video and audio ' +
                'quality of your viewing experience during playback.',
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

    _getFocused() {
      if (args.focused) return this.tag('ScrollWrapper');
    }
  };
