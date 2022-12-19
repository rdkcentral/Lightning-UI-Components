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
  mask: '•'
};
const sharedArgTypes = {
  ...createModeControl({ defaultValue: 'focused' }),
  eyebrow: { control: 'text', description: 'Text on the top of the button ' },
  helpText: {
    control: 'text',
    description: 'Text on the bottom of the button '
  },
  password: {
    control: 'boolean',
    description: 'when true the content will be masked to the user'
  },
  mask: {
    control: 'text',
    description: 'character to use as a mask when password is true'
  },
  listening: {
    control: 'boolean',
    description:
      ' when true cursor will be visible only in focused and unfocused mode and can edit the canvas'
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
    options: [null, 'icon', 'eye', 'eyeHide'],
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
