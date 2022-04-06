import lng from '@lightningjs/core';

import Knob from '.';
import mdx from './Knob.mdx';

export default {
  title: 'Elements / Knob',
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
        Knob: {
          type: Knob
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('Knob');
      }
    }
  };
Basic.args = {
  focused: true,
  disabled: false
};
Basic.argTypes = {
  focused: {
    control: 'boolean',
    description: 'Determines if component is in focused or unfocused state'
  },
  disabled: {
    control: 'boolean',
    description: 'Determines if component is disabled'
  }
};
Basic.parameters = {
  argActions: {
    focused: (isFocused, component) => {
      component._getFocused = isFocused
        ? () => component.tag('Knob')
        : () => {};
      component._refocus();
    },
    disabled: (isDisabled, component) => {
      component.tag('Knob').disabled = isDisabled;
    }
  }
};
