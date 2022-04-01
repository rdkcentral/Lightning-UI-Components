import lng from '@lightningjs/core';

import Surface from '.';
import mdx from './Surface.mdx';

export default {
  title: 'Elements / Surface',
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
        Surface: {
          type: Surface,
          itemLayout: {
            ratioX: 16,
            ratioY: 9,
            upCount: 3
          }
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('Surface');
      }
    }
  };

Basic.args = { focused: true, disabled: false };

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
        ? () => component.tag('Surface')
        : () => {};
      component._refocus();
    },
    disabled: (isDisabled, component) => {
      component.tag('Surface').disabled = isDisabled;
    }
  }
};
