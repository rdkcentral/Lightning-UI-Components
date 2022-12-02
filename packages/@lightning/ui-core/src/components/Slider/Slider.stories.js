import lng from '@lightningjs/core';
import { createModeControl } from '../../../storybook/index.js';
import TextBox from '../TextBox/index.js';
import mdx from './Slider.mdx';
import Slider from '.';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[512]}/Slider`,
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
          type: Slider
        }
      };
    }
  };

Basic.args = {
  min: 0,
  max: 100,
  value: 50,
  step: 1,
  vertical: false
};
Basic.argTypes = {
  ...createModeControl({ defaultValue: 'focused' }),
  min: { control: 'number', description: 'lower bound of value' },
  max: { control: 'number', description: 'upper bound of value' },
  value: { control: 'number', description: 'current value' },
  step: { control: 'number', description: '+/- value on change' },
  vertical: {
    control: 'boolean',
    description: 'If true, the slider is displayed vertically'
  }
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

SignalHandling.argTypes = createModeControl({ defaultValue: 'focused' });
