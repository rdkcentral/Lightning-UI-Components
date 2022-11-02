import lng from '@lightningjs/core';
import Radio from './RadioSmall.js';
import { createModeControl } from '../../../storybook/index.js';
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
RadioSmall.args = { checked: false };
RadioSmall.argTypes = {
  ...createModeControl(),
  checked: {
    control: 'boolean',
    description: 'Toggles checked between on and off'
  }
};

RadioSmall.storyName = 'RadioSmall';
