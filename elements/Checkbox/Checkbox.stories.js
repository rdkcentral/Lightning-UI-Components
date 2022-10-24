import lng from '@lightningjs/core';

import Checkbox from '.';
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

export const Basic = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Checkbox: {
          type: Checkbox
        }
      };
    }
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
