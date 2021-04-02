import lng from '@lightningjs/core';
import Keyboard, { KEYBOARD_FORMATS } from '../../patterns/Keyboard';
import Key from '.';
import KeyboardInput from '../../patterns/Keyboard/KeyboardInput';
import Row from '../../layout/Row';
import icon from '../../assets/images/ic_lightning_white_32.png';

// TODO: add mdx
// import mdx from './Key.mdx';

export default {
  title: 'Elements / Key',
  component: Key,
  args: {
    focused: false,
    char: 'A'
  },
  parameters: {
    docs: {
      // page: mdx
    }
  }
};

export const Basic = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Key: {
          type: Key,
          char: args.char
        }
      };
    }
    _getFocused() {
      if (args.focused) {
        return this.tag('Key');
      }
    }
  };

export const Icon = args =>
  class Icon extends lng.Component {
    static _template() {
      return {
        Key: {
          type: Key,
          icon: {
            src: icon
          }
        }
      };
    }
  };
