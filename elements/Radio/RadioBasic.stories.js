import lng from '@lightningjs/core';
import Radio from './index';
import { createModeControl } from '../../.storybook/controls/argTypes';

export const Basic = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Radio: {
          type: Radio
        }
      };
    }
  };
Basic.args = { checked: false };
Basic.argTypes = {
  ...createModeControl(),
  checked: {
    control: 'boolean',
    description: 'Toggles checked between on and off'
  }
};
