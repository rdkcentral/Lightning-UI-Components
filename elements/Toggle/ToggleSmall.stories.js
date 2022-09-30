import lng from '@lightningjs/core';

import { ToggleSmall } from '.';
import mdx from './Toggle.mdx';
import { createModeControl } from '../../.storybook/controls/argTypes';

export default {
  title: 'Elements / ToggleSmall',
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
        flex: { direction: 'column' },
        ToggleSmall: {
          type: ToggleSmall,
          onEnter: toggle => {
            alert('Sample onEnter override');
            toggle.toggle();
            return true;
          }
        }
      };
    }
  };
Basic.args = {
  checked: false
};
Basic.argTypes = {
  ...createModeControl(['disabled']),
  checked: {
    control: 'boolean',
    description: 'the state of the toggle being checked'
  }
};
