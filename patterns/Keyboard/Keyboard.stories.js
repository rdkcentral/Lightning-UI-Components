import lng from '@lightningjs/core';
import Keyboard, { KEYBOARD_FORMATS } from '.';
import KeyboardInput from './KeyboardInput';
import { createModeControl } from '../../.storybook/controls/argTypes';
import mdx from './Keyboard.mdx';
import context from '../../context';

export default {
  title: 'Patterns / Keyboard',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

const sharedArgTypes = {
  ...createModeControl(),
  centerAlign: {
    defaultValue: false,
    description: "center the keyboard within it's set width",
    control: 'boolean',
    table: {
      defaultValue: { summary: false }
    }
  }
};

export const Basic = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Keyboard: {
          type: Keyboard,
          defaultFormat: 'lowercase',
          formats: KEYBOARD_FORMATS.qwerty
        }
      };
    }

    $itemChanged() {
      // example of centering the keyboard on the screen using the calculated width
      this.tag('Keyboard').x =
        (1920 - this.tag('Keyboard').w) / 2 - context.theme.layout.marginX;
    }
  };

Basic.argTypes = sharedArgTypes;
Basic.parameters = {};

export const FullScreen = () =>
  class FullScreen extends lng.Component {
    static _template() {
      return {
        Keyboard: {
          type: Keyboard,
          defaultFormat: 'letters',
          formats: KEYBOARD_FORMATS.fullscreen
        }
      };
    }

    _init() {
      this.tag('Keyboard')._whenEnabled.then(() => {
        this.tag('Keyboard').selectKeyOn(this.tag('Keyboard').tag('Letters'), {
          row: 1,
          column: 0
        });
      });
    }
  };

FullScreen.parameters = {};

FullScreen.argTypes = sharedArgTypes;

export const Dialpad = () =>
  class Dialpad extends lng.Component {
    static _template() {
      return {
        Keyboard: {
          type: Keyboard,
          defaultFormat: 'dialpad',
          formats: KEYBOARD_FORMATS.numbers
        }
      };
    }
  };

Dialpad.argTypes = {
  ...sharedArgTypes,
  defaultFormat: {
    defaultValue: 'dialpad',
    description: 'Select the format of dialpad',
    control: 'radio',
    options: ['dialpad', 'dialpadExtended'],
    table: {
      defaultValue: { summary: 'dialpad' }
    }
  }
};

Dialpad.parameters = {
  argActions: {
    defaultFormat: (format, component) => {
      component.tag('Keyboard').$toggleKeyboard(format);
      component._refocus();
    }
  }
};

const sharedKeyInputArgTypes = {
  ...sharedArgTypes,
  password: {
    defaultValue: false,
    description: 'need description',
    control: 'boolean',
    table: {
      defaultValue: { summary: false }
    }
  },
  mask: {
    defaultValue: '•',
    description: 'need description',
    control: 'text',
    table: {
      defaultValue: { summary: '•' }
    }
  }
};
export const KeyboardWithInput = () =>
  class KeyboardWithInput extends lng.Component {
    static _template() {
      return {
        KeyboardInput: {
          type: KeyboardInput,
          inputPlaceholder: 'Search'
        }
      };
    }
  };

KeyboardWithInput.argTypes = sharedKeyInputArgTypes;

KeyboardWithInput.parameters = {
  tag: 'KeyboardInput',
  argActions: {
    password: (isPassword, component) => {
      component.tag('KeyboardInput').password = isPassword;
    }
  }
};

export const EmailWithInput = () =>
  class EmailWithInput extends lng.Component {
    static _template() {
      return {
        EmailInput: {
          type: KeyboardInput,
          inputPlaceholder: 'Email address',
          keyboardFormats: KEYBOARD_FORMATS.email
        }
      };
    }
  };

EmailWithInput.argTypes = sharedKeyInputArgTypes;

EmailWithInput.parameters = {
  tag: 'EmailInput',
  argActions: {
    password: (isPassword, component) => {
      component.tag('EmailInput').password = isPassword;
    }
  }
};
