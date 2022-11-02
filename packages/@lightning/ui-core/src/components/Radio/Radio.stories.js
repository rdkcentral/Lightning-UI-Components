import lng from '@lightningjs/core';
import { default as RadioComponent } from './index.js';
import { createModeControl } from '../../../storybook/index.js';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[512]}/Radio`
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
