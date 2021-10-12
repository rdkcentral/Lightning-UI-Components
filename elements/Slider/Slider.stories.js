import lng from '@lightningjs/core';

import Slider from '.';
import mdx from './Slider.mdx';

export default {
  title: 'Elements / Slider',
  parameters: {
    docs: {
      page: mdx
    },
    stage: {
      clearColor: 0xffffffff
    }
  }
};

export const Basic = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Slider: {
          type: Slider,
          min: args.min,
          max: args.max,
          value: args.value,
          step: args.step
        }
      };
    }

    _getFocused() {
      return this.tag('Slider');
    }
  };
Basic.args = {
  min: 0,
  max: 100,
  value: 50,
  step: 1
};
Basic.argTypes = {
  min: { control: 'number' },
  max: { control: 'number' },
  value: { control: 'number' },
  step: { control: 'number' }
};

export const SignalHandling = () =>
  class SignalHandling extends lng.Component {
    static _template() {
      return {
        flex: { direction: 'column' },
        Text: {
          text: {
            text: 'Value: 0',
            textColor: 0xff000000
          }
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
