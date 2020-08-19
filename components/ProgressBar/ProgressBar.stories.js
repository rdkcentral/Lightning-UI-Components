import lng from 'wpe-lightning';
import { withKnobs, number } from '@storybook/addon-knobs';
import ProgressBar from '.';
import mdx from './ProgressBar.mdx';

export default {
  title: 'ProgressBar',
  component: ProgressBar,
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: mdx
    }
  }
};

const progressOptions = {
  range: true,
  min: 0,
  max: 1,
  step: 0.01
};

export const Basic = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        ProgressBar: {
          type: ProgressBar,
          progress: number('progress', 0.5, progressOptions)
        }
      };
    }

    _getFocused() {
      return this.tag('ProgressBar');
    }
  };
