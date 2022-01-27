import lng from '@lightningjs/core';
import Radio from './index';

export const Basic = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Radio: {
          type: Radio
        }
      };
    }

    _getFocused() {
      return this.tag('Radio');
    }
  };
Basic.args = { checked: false, isInactive: false };
Basic.argTypes = {
  checked: {
    control: 'boolean',
    description: 'Toggles checked between on and off'
  },
  isInactive: {
    control: 'boolean',
    description: 'State where toggle cannot be changed'
  }
};
