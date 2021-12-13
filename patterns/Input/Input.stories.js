import lng from '@lightningjs/core';

import Input from '.';
import mdx from './Input.mdx';
import eye from '../../assets/images/ic_eye_white_48.png';
import eyeHide from '../../assets/images/ic_eyeHide_white_48.png';
import { rgba2argb } from '../../utils';

export default {
  title: 'Patterns/Input',
  args: {
    placeholder: 'Type something',
    focused: false,
    listening: false
  },
  argTypes: {
    placeholder: { control: 'text' },
    focused: { control: 'boolean' },
    listening: { control: 'boolean' }
  },
  parameters: {
    tag: 'Input',
    docs: {
      page: mdx
    },
    argActions: {
      focused: (isFocused, component) => {
        component._getFocused = isFocused
          ? () => component.tag('Input')
          : () => {};
        component._refocus();
      },
      listening: (isListening, component) => {
        component.tag('Input').listening = isListening;
      }
    }
  }
};

export const Basic = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Input: {
          w: 500,
          type: Input,
          placeholder: args.placeholder,
          listening: args.listening
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

    _getFocused() {
      if (args.focused) {
        return this.tag('Input');
      }
    }
  };

export const Caption = args =>
  class Caption extends lng.Component {
    static _template() {
      return {
        Input: {
          w: 500,
          type: Input,
          placeholder: args.placeholder,
          caption: [
            'This is a caption using an array',
            {
              icon: 'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false',
              title: 'Rotten Tomatoes rating'
            },
            'with an image'
          ],
          listening: args.listening
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

    _getFocused() {
      if (args.focused) {
        return this.tag('Input');
      }
    }
  };

export const Icon = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Input: {
          w: 500,
          type: Input,
          placeholder: args.placeholder,
          icon: eye,
          iconColor: rgba2argb(args.iconColor),
          iconFocusColor: rgba2argb(args.iconFocusColor),
          listening: args.listening
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

    _getFocused() {
      if (args.focused) {
        return this.tag('Input');
      }
    }
  };

Icon.args = {
  iconColor: 'rgba(98,98,98,1)',
  iconFocusColor: 'rgba(13,13,15,1)'
};
Icon.argTypes = {
  iconColor: { control: 'color' },
  iconFocusColor: { control: 'color' }
};
Icon.parameters = {
  argActions: {
    iconColor: (iconColor, component) => {
      component.tag('Input').iconColor = rgba2argb(iconColor);
    },
    iconFocusColor: (iconFocusColor, component) => {
      component.tag('Input').iconFocusColor = rgba2argb(iconFocusColor);
    }
  }
};

export const Password = args =>
  class Password extends lng.Component {
    static _template() {
      return {
        Input: {
          w: 500,
          type: Input,
          placeholder: args.placeholder,
          password: args.password,
          mask: args.mask,
          listening: args.listening
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

    _getFocused() {
      if (args.focused) {
        return this.tag('Input');
      }
    }
  };

Password.args = {
  password: false,
  mask: '•'
};
Password.argTypes = {
  password: { control: 'boolean' },
  mask: { control: 'text' }
};
Password.parameters = {
  argActions: {
    password: (isPassword, component) => {
      component.tag('Input').password = isPassword;
    }
  }
};

export const PasswordWithIcon = args =>
  class PasswordWithIcon extends lng.Component {
    static _template() {
      return {
        Input: {
          w: 500,
          type: Input,
          placeholder: args.placeholder,
          password: args.password,
          mask: args.mask,
          icon: eye,
          iconColor: rgba2argb(args.iconColor),
          iconFocusColor: rgba2argb(args.iconFocusColor),
          listening: args.listening
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

    _getFocused() {
      if (args.focused) {
        return this.tag('Input');
      }
    }
  };

PasswordWithIcon.args = {
  password: false,
  mask: '•',
  iconColor: 'rgba(98,98,98,1)',
  iconFocusColor: 'rgba(13,13,15,1)'
};
PasswordWithIcon.argTypes = {
  password: { control: 'boolean' },
  mask: { control: 'text' },
  iconColor: { control: 'color' },
  iconFocusColor: { control: 'color' }
};
PasswordWithIcon.parameters = {
  argActions: {
    password: (isPassword, component) => {
      component.tag('Input').password = isPassword;
      component.tag('Input').icon = isPassword ? eyeHide : eye;
    },
    iconColor: (iconColor, component) => {
      component.tag('Input').iconColor = rgba2argb(iconColor);
    },
    iconFocusColor: (iconFocusColor, component) => {
      component.tag('Input').iconFocusColor = rgba2argb(iconFocusColor);
    }
  }
};
