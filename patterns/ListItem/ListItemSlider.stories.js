import lng from '@lightningjs/core';

import { ListItemSlider } from '.';
import mdx from './ListItemSlider.mdx';

export default {
  title: 'Patterns/ListItemSlider',
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
        ListItemSlider: {
          type: ListItemSlider,
          backgroundType: args.backgroundType,
          max: args.max,
          min: args.min,
          step: args.step,
          title: args.title,
          value: args.value,
          size: args.size
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('ListItemSlider');
      }
    }
  };
Basic.args = {
  backgroundType: 'fill',
  focused: false,
  max: 100,
  min: 0,
  step: 1,
  title: 'List Item Slider',
  value: 50,
  size: 'small'
};
Basic.argTypes = {
  backgroundType: {
    control: { type: 'radio', options: ['fill', 'float', 'ghost'] }
  },
  focused: { control: 'boolean' },
  max: { control: 'number' },
  min: { control: 'number' },
  step: { control: 'number' },
  title: { control: 'text' },
  value: { control: 'number' },
  size: { control: { type: 'radio', options: ['small', 'large'] } }
};
Basic.parameters = {
  argActions: {
    focused: (isFocused, component) => {
      component._getFocused = isFocused
        ? () => component.tag('ListItemSlider')
        : () => {};
      component._refocus();
    }
  }
};

export const OnSliderChange = args =>
  class OnSliderChange extends lng.Component {
    static _template() {
      return {
        ListItemSlider: {
          type: ListItemSlider,
          title: 'List Item Slider',
          value: 0,
          signals: {
            onSliderChange: '_handleChange'
          }
        }
      };
    }

    _handleChange(value) {
      args.onSliderChange(value);
    }

    _getFocused() {
      return this.tag('ListItemSlider');
    }
  };
OnSliderChange.argTypes = {
  onSliderChange: { action: 'onSliderChange' }
};
