import lng from '@lightningjs/core';
import { ButtonSmall as ButtonSmallComponent } from './index.js';
import { Icon, Checkbox } from '../index.js';
import mdx from './Button.mdx';
import lightning from '../../assets/images/ic_lightning_white_32.png';
import { createModeControl } from 'lightning-ui-docs/.storybook/utils';
import { CATEGORIES } from 'lightning-ui-docs';
import { controlDescriptions } from '../../../../ui/src/StorybookConstants.js';

export default {
  title: `${CATEGORIES[2]}/ButtonSmall`,
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
    description: controlDescriptions.fixed,
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
      'When the fixed property is true, this will set the width of the component'
  },
  justify: {
    control: 'radio',
    defaultValue: 'center',
    options: ['left', 'center', 'right'],
    description: 'Justification of button content',
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

export const ButtonSmall = () =>
  class ButtonSmall extends lng.Component {
    static _template() {
      return {
        Button: {
          type: ButtonSmallComponent
        }
      };
    }
  };
ButtonSmall.storyName = 'ButtonSmall';
ButtonSmall.argTypes = sharedArgTypes;
ButtonSmall.parameters = { argActions: sharedArgActions };
