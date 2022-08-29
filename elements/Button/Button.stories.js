import lng from '@lightningjs/core';
import Button, { ButtonSmall } from '.';
import Icon from '../Icon';
import mdx from './Button.mdx';
import lightning from '../../assets/images/ic_lightning_white_32.png';
import Checkbox from '../Checkbox';
import { createModeControl } from '../../.storybook/controls/argTypes';

export default {
  title: 'Elements / Button',
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

export const Basic = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Button: {
          type: Button
        }
      };
    }
  };

const sharedArgTypes = {
  ...createModeControl(),
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
      'stops the width from beingg calculated dynamically based on content and will instead use the`w` property',
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
    description: 'width of component'
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

Basic.argTypes = sharedArgTypes;
Basic.parameters = { argActions: sharedArgActions };

export const Small = () =>
  class Small extends lng.Component {
    static _template() {
      return {
        Button: {
          type: ButtonSmall
        }
      };
    }
  };

Small.argTypes = sharedArgTypes;
Small.parameters = { argActions: sharedArgActions };
