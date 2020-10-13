import lng from 'wpe-lightning';
import Keyboard, { KEYBOARD_FORMATS } from '.';
import Key from './Key';
import KeyboardInput from './KeyboardInput';
import Row from '../Row';

import mdx from './Keyboard.mdx';

export default {
  title: 'Keyboard',
  component: Keyboard,
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
        Keyboard: {
          type: Keyboard,
          defaultFormat: 'lowercase',
          formats: KEYBOARD_FORMATS.qwerty
        }
      };
    }
    _getFocused() {
      return this.tag('Keyboard');
    }
  };

export const Inline = () =>
  class Inline extends lng.Component {
    static _template() {
      return {
        Keyboard: {
          type: Keyboard,
          inline: true,
          defaultFormat: 'numbers',
          formats: KEYBOARD_FORMATS.numbers
        }
      };
    }
    _getFocused() {
      return this.tag('Keyboard');
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

    _getFocused() {
      return this.tag('KeyboardInput');
    }
  };
