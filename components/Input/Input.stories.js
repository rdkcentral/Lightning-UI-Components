import lng from 'wpe-lightning';
import { withKnobs, text } from '@storybook/addon-knobs';

import Input from '.';
import mdx from './Input.mdx';

export default {
  title: 'Input',
  component: Input,
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Input: {
          w: 500,
          type: Input,
          placeholder: text('Placeholder', 'Type something')
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
