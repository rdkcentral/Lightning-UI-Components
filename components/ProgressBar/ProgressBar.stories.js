import lng from 'wpe-lightning';
import { rgba2argb } from '../../utils';
import ProgressBar from '.';
import mdx from './ProgressBar.mdx';

export default {
  title: 'ProgressBar',
  args: {
    progress: 0.5,
    width: 410,
    radius: 5,
    barColor: 'rgba(98,98,98,1)',
    progressColor: 'rgba(255,255,255,0.96)'
  },
  argTypes: {
    progress: {
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.01
      }
    },
    width: {
      control: {
        type: 'number',
        min: 0,
        step: 1
      }
    },
    radius: {
      control: {
        type: 'number',
        min: 0,
        step: 1
      }
    },
    barColor: { control: 'color' },
    progressColor: { control: 'color' }
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
          progress: args.progress,
          w: args.width,
          radius: args.radius,
          barColor: rgba2argb(args.barColor),
          progressColor: rgba2argb(args.progressColor)
        }
      };
    }

    _getFocused() {
      return this.tag('ProgressBar');
    }
  };
