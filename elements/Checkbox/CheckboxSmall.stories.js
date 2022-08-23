import lng from '@lightningjs/core';

import CheckboxSmall from './CheckboxSmall';
import mdx from './Checkbox.mdx';
import { createModeControl } from '../../.storybook/controls/argTypes';

export default {
  title: 'Elements / CheckboxSmall',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = () => {
  return class Basic extends lng.Component {
    static _template() {
      return {
        Checkbox: {
          type: CheckboxSmall
        }
      };
    }
  };
};
Basic.args = {
  checked: false
};
Basic.argTypes = {
  ...createModeControl(),
  checked: {
    control: 'boolean',
    description: 'Toggles checked between on and off',
    table: {
      defaultValue: { summary: false }
    }
  }
};
