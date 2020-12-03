import lng from 'wpe-lightning';

import ScrollWrapper from '.';
import mdx from './ScrollWrapper.mdx';

export default {
  title: 'ScrollWrapper',
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
        ScrollWrapper: {
          type: ScrollWrapper,
          h: 450,
          w: 600,
          scrollStep: args.scrollStep,
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
Basic.args = {
  focused: true,
  scrollStep: 10
};
Basic.argTypes = {
  focused: { control: 'boolean' },
  scrollChanged: { action: 'scrollChanged' },
  scrollStep: { control: 'number' }
};
Basic.parameters = {
  argActions: {
    focused: (isFocused, component) => {
      component._getFocused = isFocused
        ? () => component.tag('ScrollWrapper')
        : () => {};
      component._refocus();
    }
  }
};
