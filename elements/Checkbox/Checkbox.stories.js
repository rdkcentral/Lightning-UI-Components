import lng from '@lightningjs/core';

import Checkbox from '.';
import mdx from './Checkbox.mdx';

export default {
  title: 'Elements / Checkbox',
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
        Checkbox: {
          type: Checkbox,
          checked: args.checked,
          disabled: args.disabled
        }
      };
    }

    _getFocused() {
      return this.tag('Checkbox');
    }
  };
Basic.args = {
  checked: false,
  disabled: false
};
Basic.argTypes = {
  checked: {
    control: 'boolean',
    description: 'Toggles checked between on and off',
    table: {
      defaultValue: { summary: false }
    }
  },
  disabled: {
    control: 'boolean',
    defaultValue: false,
    description: 'State where toggle cannot be changed',
    table: {
      defaultValue: { summary: false }
    }
  }
};
