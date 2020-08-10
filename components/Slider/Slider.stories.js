import lng from 'wpe-lightning';
import { number, withKnobs } from '@storybook/addon-knobs';

import Slider from '.';
import mdx from './Slider.mdx';

export default {
  title: 'Slider',
  component: Slider,
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Slider: {
          type: Slider,
          min: number('Min', 0),
          max: number('Max', 100),
          value: number('Value', 50),
          step: number('Step', 1)
        }
      };
    }

    _getFocused() {
      return this.tag('Slider');
    }
  };

export const SignalHandling = () =>
  class SignalHandling extends lng.Component {
    static _template() {
      return {
        flex: { direction: 'column' },
        Text: {
          text: { text: 'Value: 0' }
        },
        Slider: {
          type: Slider,
          step: 10,
          signals: {
            onChange: true
          }
        }
      };
    }

    onChange(value) {
      this.tag('Text').text = `Value: ${value}`;
    }

    _getFocused() {
      return this.tag('Slider');
    }
  };
