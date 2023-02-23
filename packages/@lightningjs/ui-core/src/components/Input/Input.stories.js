import lng from '@lightningjs/core';
import { default as InputComponent } from './Input.js';
import { Icon } from '../index.js';
import { createModeControl } from 'lightning-ui-docs/.storybook/utils';
import lightning from '../../assets/images/ic_lightning_white_32.png';
import mdx from './Input.mdx';
import eye from '../../assets/images/ic_eye_white_48.png';
import eyeHide from '../../assets/images/ic_eyeHide_white_48.png';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[8]}/Input`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

function getComponentArray(comps) {
  let arr = [];
  switch (comps) {
    case 'icon':
      arr = [{ type: Icon, icon: lightning }];
      break;
    case 'eye':
      arr = [{ type: Icon, icon: eye, w: 30, h: 30 }];
      break;
    case 'eyeHide':
      arr = [{ type: Icon, icon: eyeHide, w: 30, h: 30 }];
      break;
  }
  return arr;
}

export const Input = () =>
  class Input extends lng.Component {
    static _template() {
      return {
        Input: {
          type: InputComponent
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

const sharedArgs = {
  eyebrow: 'Eyebrow',
  helpText: 'Help Text',
  listening: false,
  password: false,
  mask: '•',
  prefix: null,
  suffix: null,
  mode: 'focused'
};
const sharedArgTypes = {
  ...createModeControl({ summaryValue: sharedArgs.mode }),
  eyebrow: {
    control: 'text',
    description: 'Text on the top of the button ',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  helpText: {
    control: 'text',
    description: 'Text on the bottom of the button ',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  password: {
    control: 'boolean',
    description: 'When true the content will be masked to the user',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  mask: {
    control: 'text',
    description: 'Character to use as a mask when password is true',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  listening: {
    control: 'boolean',
    description:
      'When true cursor will be visible only in focused and unfocused mode and can edit the canvas',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  prefix: {
    control: 'radio',
    options: [null, 'icon'],
    description: 'Lightning components to be placed to the left of the title',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  suffix: {
    control: 'radio',
    options: [null, 'icon', 'eye', 'eyeHide'],
    description: 'Lightning components to be placed to the right of the title',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  }
};

const sharedArgActions = {
  listening: (isListening, component) => {
    component.tag('Input').listening = isListening;
  },
  password: (isPassword, component) => {
    component.tag('Input').password = isPassword;
  },
  prefix: (prefix, component) => {
    if (prefix == null) {
      component.tag('Input').prefix = [];
    } else {
      component.tag('Input').prefix = getComponentArray(prefix);
    }
  },
  suffix: (suffix, component) => {
    if (suffix == null) {
      component.tag('Input').suffix = [];
    } else {
      component.tag('Input').suffix = getComponentArray(suffix);
    }
  }
};
Input.args = sharedArgs;
Input.argTypes = sharedArgTypes;
Input.parameters = { argActions: sharedArgActions };
