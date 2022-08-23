import lng from '@lightningjs/core';

import Slider from '.';
import mdx from './Slider.mdx';
import { createModeControl } from '../../.storybook/controls/argTypes';
import TextBox from '../TextBox';

export default {
  title: 'Elements / Slider',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const BasicSlider = () =>
  class BasicSlider extends lng.Component {
    static _template() {
      return {
        Slider: {
          type: Slider
        }
      };
    }
  };

BasicSlider.args = {
  min: 0,
  max: 100,
  value: 50,
  step: 1
};
BasicSlider.argTypes = {
  ...createModeControl(),
  min: { control: 'number', description: 'lower bound of value' },
  max: { control: 'number', description: 'upper bound of value' },
  value: { control: 'number', description: 'current value' },
  step: { control: 'number', description: '+/- value on change' }
};

export const SignalHandling = () =>
  class SignalHandling extends lng.Component {
    static _template() {
      return {
        flex: { direction: 'column' },
        Slider: {
          type: Slider,
          step: 10,
          y: 15,
          w: 328,
          signals: {
            onChange: true
          }
        },
        Text: {
          y: 60,
          type: TextBox
        }
      };
    }

    onChange(value) {
      this.tag('Text').content = `Value: ${value}`;
    }
  };

SignalHandling.argTypes = createModeControl();
