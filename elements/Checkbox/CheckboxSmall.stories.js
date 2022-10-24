import lng from '@lightningjs/core';

import CheckboxSmall from './CheckboxSmall';
import mdx from './Checkbox.mdx';
import { createModeControl } from '../../.storybook/controls/argTypes';

export default {
  title: 'Elements / Checkbox',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Small = () => {
  return class Small extends lng.Component {
    static _template() {
      return {
        Checkbox: {
          type: CheckboxSmall
        }
      };
    }
  };
};
Small.args = {
  checked: false
};
Small.argTypes = {
  ...createModeControl(),
  checked: {
    control: 'boolean',
    description: 'Toggles checked between on and off',
    table: {
      defaultValue: { summary: false }
    }
  }
};
