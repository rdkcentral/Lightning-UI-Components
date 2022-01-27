import lng from '@lightningjs/core';
import Radio from './RadioSmall';

export const RadioSmall = () =>
  class RadioSmall extends lng.Component {
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
RadioSmall.args = { checked: false, isInactive: false };
RadioSmall.argTypes = {
  checked: {
    control: 'boolean',
    description: 'Toggles checked between on and off'
  },
  isInactive: {
    control: 'boolean',
    description: 'State where toggle cannot be changed'
  }
};
