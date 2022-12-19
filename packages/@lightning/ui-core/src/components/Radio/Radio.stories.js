import lng from '@lightningjs/core';
import { default as RadioComponent } from './index.js';
import mdx from './Radio.mdx';
import { createModeControl } from 'lightning-ui-docs/.storybook/utils';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[512]}/Radio`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Radio = () =>
  class Radio extends lng.Component {
    static _template() {
      return {
        Radio: {
          type: RadioComponent
        }
      };
    }
  };
Radio.args = { checked: false };
Radio.argTypes = {
  ...createModeControl(['disabled']),
  checked: {
    control: 'boolean',
    description: 'Toggles checked between on and off'
  }
};
