import lng from '@lightningjs/core';
import Keyboard, { KEYBOARD_FORMATS } from '.';
import Key from '../../elements/Key';
import KeyboardInput from './KeyboardInput';
import Row from '../../layout/Row';

import mdx from './Keyboard.mdx';

export default {
  title: 'Patterns / Keyboard',
  component: Keyboard,
  parameters: {
    docs: {
      page: mdx
    },
    argActions: {
      focused: (isFocused, component) => {
        component._getFocused = isFocused
          ? () => component.tag('Keyboard')
          : () => {};
      }
    }
  },
  args: {
    centerAlign: false,
    width: 900,
    focused: true
  },
  argTypes: {
    centerAlign: { control: 'boolean' },
    width: { control: 'number', min: 0 },
    focused: { control: 'boolean' }
  }
};

export const Basic = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Keyboard: {
          type: Keyboard,
          defaultFormat: 'lowercase',
          formats: KEYBOARD_FORMATS.qwerty,
          w: args.width,
          centerAlign: args.centerAlign
        }
      };
    }
    _getFocused() {
      if (args.focused) {
        return this.tag('Keyboard');
      }
    }
  };

export const FullScreen = args =>
  class FullScreen extends lng.Component {
    static _template() {
      return {
        Keyboard: {
          type: Keyboard,
          defaultFormat: 'letters',
          formats: KEYBOARD_FORMATS.fullscreen,
          w: args.width,
          centerAlign: args.centerAlign
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

    _getFocused() {
      if (args.focused) {
        return this.tag('Keyboard');
      }
    }
  };

export const Dialpad = args =>
  class Dialpad extends lng.Component {
    static _template() {
      return {
        Keyboard: {
          type: Keyboard,
          defaultFormat: args.defaultFormat,
          formats: KEYBOARD_FORMATS.numbers,
          w: args.width,
          centerAlign: args.centerAlign
        }
      };
    }
    _getFocused() {
      if (args.focused) {
        return this.tag('Keyboard');
      }
    }
  };

Dialpad.args = {
  defaultFormat: 'dialpad'
};
Dialpad.argTypes = {
  defaultFormat: {
    control: {
      type: 'radio',
      options: ['dialpad', 'dialpadExtended']
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

export const Keys = () =>
  class Keys extends lng.Component {
    static _template() {
      return {
        Keys: {
          type: Row,
          itemSpacing: 20,
          items: [
            {
              type: Key,
              title: 'a'
            },
            {
              type: Key,
              size: 'medium',
              title: 'Shift'
            },
            {
              type: Key,
              size: 'large',
              title: 'Done'
            },
            {
              type: Key,
              size: 'xlarge',
              title: 'Space'
            }
          ]
        }
      };
    }
    _getFocused() {
      return this.tag('Keys');
    }
  };

export const KeyboardWithInput = args =>
  class KeyboardWithInput extends lng.Component {
    static _template() {
      return {
        KeyboardInput: {
          type: KeyboardInput,
          inputPlaceholder: 'Search',
          password: args.password,
          mask: args.mask,
          w: args.width,
          centerAlign: args.centerAlign
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('KeyboardInput');
      }
    }
  };

KeyboardWithInput.args = {
  password: false,
  mask: '•'
};
KeyboardWithInput.argTypes = {
  password: { control: 'boolean' },
  mask: { control: 'text' }
};
KeyboardWithInput.parameters = {
  tag: 'KeyboardInput',
  argActions: {
    focused: (isFocused, component) => {
      component._getFocused = isFocused
        ? () => component.tag('KeyboardInput')
        : () => {};
    },
    password: (isPassword, component) => {
      component.tag('KeyboardInput').password = isPassword;
    }
  }
};

export const EmailWithInput = args =>
  class EmailWithInput extends lng.Component {
    static _template() {
      return {
        EmailInput: {
          type: KeyboardInput,
          inputPlaceholder: 'Email address',
          password: args.password,
          mask: args.mask,
          w: args.width,
          centerAlign: args.centerAlign,
          keyboardFormats: KEYBOARD_FORMATS.email
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('EmailInput');
      }
    }
  };

EmailWithInput.args = {
  password: false,
  mask: '•'
};
EmailWithInput.argTypes = {
  password: { control: 'boolean' },
  mask: { control: 'text' }
};
EmailWithInput.parameters = {
  tag: 'EmailInput',
  argActions: {
    focused: (isFocused, component) => {
      component._getFocused = isFocused
        ? () => component.tag('EmailInput')
        : () => {};
    },
    password: (isPassword, component) => {
      component.tag('EmailInput').password = isPassword;
    }
  }
};
