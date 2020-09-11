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
          placeholder: args.placeholder
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
      return this.tag('Input');
    }
  };
Basic.args = {
  placeholder: 'Type something'
};
