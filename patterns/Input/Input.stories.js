import lng from '@lightningjs/core';
import Input from '.';
import Icon from '../../elements/Icon';
import { createModeControl } from '../../.storybook/controls/argTypes';
import lightning from '../../assets/images/ic_lightning_white_32.png';
import mdx from './Input.mdx';

export default {
  title: 'Patterns / Input',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

const iconComponent = {
  type: Icon,
  icon: lightning
};

export const Basic = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Input: {
          type: Input
        }
      };
    }

    _handleKey(event) {
      const { key } = event;
      if (key.length === 1) {
        this.tag('Input').insert(key);
      }
      if (key === 'Backspace') {
        this.tag('Input').backspace();
      }
    }
  };

Basic.args = {
  eyebrow: 'Eyebrow',
  helpText: 'Help Text',
  listening: false
};
const sharedArgTypes = {
  ...createModeControl(),
  eyebrow: { control: 'text', description: 'Text on the top of the button ' },
  helpText: {
    control: 'text',
    description: 'Text on the bottom of the button '
  },
  listening: {
    control: 'boolean',
    description:
      ' when true cursor will be visible only in focused mode and can edit the canvas'
  },
  prefix: {
    control: 'radio',
    defaultValue: null,
    options: [null, 'icon'],
    description: 'Lightning components to be placed to the left of the title',
    table: {
      defaultValue: { summary: 'null' }
    }
  },
  suffix: {
    control: 'radio',
    defaultValue: null,
    options: [null, 'icon'],
    description: 'Lightning components to be placed to the right of the title',
    table: {
      defaultValue: { summary: 'null' }
    }
  }
};

const sharedArgActions = {
  listening: (isListening, component) => {
    component.tag('Input').listening = isListening;
  },
  prefix: (prefix, component) => {
    if (prefix == null) {
      component.tag('Input').prefix = [];
    } else {
      component.tag('Input').prefix = iconComponent;
    }
  },
  suffix: (suffix, component) => {
    if (suffix == null) {
      component.tag('Input').suffix = [];
    } else {
      component.tag('Input').suffix = iconComponent;
    }
  }
};

Basic.argTypes = sharedArgTypes;
Basic.parameters = { argActions: sharedArgActions };
