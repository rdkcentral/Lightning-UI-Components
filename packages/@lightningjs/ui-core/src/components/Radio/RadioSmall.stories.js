import lng from '@lightningjs/core';
import Radio from './RadioSmall.js';
import { createModeControl } from 'lightning-ui-docs/.storybook/utils';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[512]}/RadioSmall`
};

export const RadioSmall = () =>
  class RadioSmall extends lng.Component {
    static _template() {
      return {
        Radio: {
          type: Radio
        }
      };
    }
  };
RadioSmall.args = { checked: false, mode: 'unfocused' };
RadioSmall.argTypes = {
  ...createModeControl({ summaryValue: RadioSmall.args.mode }),
  checked: {
    control: 'boolean',
    description: 'Toggles checked between on and off',
    table: { defaultValue: { summary: false } }
  }
};

RadioSmall.storyName = 'RadioSmall';
