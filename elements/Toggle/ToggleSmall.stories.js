import lng from '@lightningjs/core';

import { ToggleSmall } from '.';
import mdx from './Toggle.mdx';

export default {
  title: 'Elements / ToggleSmall',
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
        flex: { direction: 'column' },
        text: { fontSize: 24, text: 'Press Enter' },
        ToggleSmall: {
          y: 40,
          type: ToggleSmall,
          checked: args.checked,
          disabled: args.disabled,
          onEnter: toggle => {
            alert('Sample onEnter override');
            toggle.toggle();
            return true;
          }
        }
      };
    }

    _getFocused() {
      return this.tag('ToggleSmall');
    }
  };
Basic.args = {
  checked: false,
  disabled: false
};
Basic.argTypes = {
  checked: {
    control: 'boolean',
    description: 'the state of the toggle being checked'
  },
  disabled: {
    control: 'boolean',
    description: 'the state of the component being able to toggle'
  }
};
