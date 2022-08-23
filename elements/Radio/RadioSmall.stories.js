import lng from '@lightningjs/core';
import Radio from './RadioSmall';
import { createModeControl } from '../../.storybook/controls/argTypes';

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
  ...createModeControl(['disabled']),
  checked: {
    control: 'boolean',
    description: 'Toggles checked between on and off'
  }
};
