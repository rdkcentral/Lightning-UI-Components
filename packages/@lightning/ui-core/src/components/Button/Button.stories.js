import lng from '@lightningjs/core';
import { default as ButtonComponent } from './index.js';
import { Icon, Checkbox } from '../index.js';
import mdx from './Button.mdx';
import lightning from '../../assets/images/ic_lightning_white_32.png';
import { createModeControl } from 'lightning-ui-docs/.storybook/utils';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[2]}/Button`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

function getCommponentArray(comps) {
  let arr = [];
  switch (comps) {
    case 'icon':
      arr = [{ type: Icon, icon: lightning }];
      break;
    case 'checkbox':
      arr = [{ type: Checkbox, checked: true }];
      break;
    case 'combo':
      arr = [
        { type: Icon, icon: lightning },
        { type: Checkbox, checked: true }
      ];
      break;
  }
  return arr;
}

export const Button = () =>
  class Button extends lng.Component {
    static _template() {
      return {
        Button: {
          type: ButtonComponent
        }
      };
    }
  };

const sharedArgTypes = {
  ...createModeControl({ defaultValue: 'focused' }),
  title: {
    defaultValue: 'Button',
    table: {
      defaultValue: { summary: '' }
    },
    control: 'text',
    description: 'Title text'
  },
  fixed: {
    control: 'boolean',
    defaultValue: false,
    description:
      'Stops the width from being calculated dynamically based on content and will instead use the`w` property',
    table: {
      defaultValue: { summary: 'false' }
    }
  },
  w: {
    defaultValue: 200,
    table: {
      defaultValue: { summary: 0 }
    },
    control: 'number',
    description:
      'Width of component can be changed only when fixed is set to true'
  },
  justify: {
    control: 'radio',
    defaultValue: 'center',
    options: ['left', 'center', 'right'],
    description: 'justification of button content',
    table: {
      defaultValue: { summary: 'center' }
    }
  },
  prefix: {
    control: 'radio',
    defaultValue: null,
    options: [null, 'icon', 'checkbox', 'combo'],
    description: 'Lightning components to be placed to the left of the title',
    table: {
      defaultValue: { summary: 'null' }
    }
  },
  suffix: {
    control: 'radio',
    defaultValue: null,
    options: [null, 'icon', 'checkbox', 'combo'],
    description: 'Lightning components to be placed to the right of the title',
    table: {
      defaultValue: { summary: 'null' }
    }
  }
};
const sharedArgActions = {
  prefix: (prefix, component) => {
    component.tag('Button').prefix = getCommponentArray(prefix);
  },
  suffix: (suffix, component) => {
    component.tag('Button').suffix = getCommponentArray(suffix);
  }
};

Button.argTypes = sharedArgTypes;
Button.parameters = { argActions: sharedArgActions };
