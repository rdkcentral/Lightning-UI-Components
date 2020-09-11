import lng from 'wpe-lightning';
import ProgressBar from '.';
import mdx from './ProgressBar.mdx';

export default {
  title: 'ProgressBar',
  args: {
    progress: 0.5
  },
  argTypes: {
    progress: {
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.01
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
        ProgressBar: {
          type: ProgressBar,
          progress: args.progress
        }
      };
    }

    _getFocused() {
      return this.tag('ProgressBar');
    }
  };
