import lng from 'wpe-lightning';

import Input from '.';
import mdx from './Input.mdx';

export default {
  title: 'Input',
  parameters: {
    docs: {
      page: mdx
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
          password: args.password,
          mask: args.mask
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

Basic.args = {
  placeholder: 'Type something',
  password: false,
  mask: '•'
};
Basic.argTypes = {
  focused: { control: 'boolean' },
  listening: { control: 'boolean' },
  password: { control: 'boolean' },
  mask: { control: 'text' }
};
Basic.parameters = {
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
};
