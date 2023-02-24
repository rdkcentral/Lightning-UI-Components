import lng from '@lightningjs/core';
import { default as CheckboxComponent } from './index.js';
import mdx from './Checkbox.mdx';
import { createModeControl } from 'lightning-ui-docs/.storybook/utils';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[512]}/Checkbox`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Checkbox = () =>
  class Checkbox extends lng.Component {
    static _template() {
      return {
        Checkbox: {
          type: CheckboxComponent
        }
      };
    }
  };

Checkbox.args = {
  checked: false,
  mode: 'focused'
};

Checkbox.argTypes = {
  ...createModeControl({ summaryValue: 'focused' }),
  checked: {
    control: 'boolean',
    description: 'Toggles checked between on and off',
    table: {
      defaultValue: { summary: false }
    }
  }
};