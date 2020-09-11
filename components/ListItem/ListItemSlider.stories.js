import lng from 'wpe-lightning';

import { ListItemSlider } from '.';
import mdx from './ListItemSlider.mdx';

export default {
  title: 'ListItemSlider',
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
          max: args.max,
          min: args.min,
          step: args.step,
          title: args.title,
          value: args.value
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
  focused: false,
  max: 100,
  min: 0,
  step: 1,
  title: 'List Item Slider',
  value: 50
};
Basic.argTypes = {
  focused: { control: 'boolean' },
  max: { control: 'number' },
  min: { control: 'number' },
  step: { control: 'number' },
  title: { control: 'text' },
  value: { control: 'number' }
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
