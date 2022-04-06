import lng from '@lightningjs/core';
import Slider from './SliderLarge';
import mdx from './Slider.mdx';

export default {
  title: 'Elements / Slider',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const SliderLarge = args =>
  class SliderLarge extends lng.Component {
    static _template() {
      return {
        Slider: {
          type: Slider,
          min: args.min,
          max: args.max,
          value: args.value,
          step: args.step,
          focused: args.focused,
          w: 328
        }
      };
    }

    _getFocused() {
      return this.tag('Slider');
    }
  };
SliderLarge.args = {
  min: 0,
  max: 100,
  value: 50,
  step: 1,
  focused: true,
  disabled: false
};
SliderLarge.argTypes = {
  min: {
    control: 'number',
    description: 'lower bound of value'
  },
  max: {
    control: 'number',
    description: 'upper bound of value'
  },
  value: {
    control: 'number',
    description: 'current value'
  },
  step: {
    control: 'number',
    description: '+/- value on change'
  },
  focused: {
    control: 'boolean',
    description: 'focused state of slider where knob is not shown'
  },
  disabled: {
    control: 'boolean',
    description: 'disabled state where arrows are not shown'
  }
};
SliderLarge.parameters = {
  argActions: {
    focused: (isFocused, component) => {
      component._getFocused = isFocused
        ? () => component.tag('Slider')
        : () => {};
      component._getFocused = isFocused
        ? () => component.tag('Slider')._Circle
        : () => {};
      component._refocus();
      component._refocus();
    }
  }
};

export const SignalHandlingLarge = () =>
  class SignalHandling extends lng.Component {
    static _template() {
      return {
        flex: { direction: 'column' },
        Text: {
          text: { text: 'Value: 0' }
        },
        Slider: {
          type: Slider,
          y: 20,
          step: 10,
          value: 30,
          w: 328,
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
