import lng from 'wpe-lightning';
import Keyboard, { KEYBOARD_FORMATS } from '.';
import Key from './Key';
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

export const FullScreen = () =>
  class Inline extends lng.Component {
    static _template() {
      return {
        Keyboard: {
          type: Keyboard,
          defaultFormat: 'letters',
          formats: KEYBOARD_FORMATS.fullscreen
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

export const Dialpad = args =>
  class Dialpad extends lng.Component {
    static _template() {
      return {
        Keyboard: {
          type: Keyboard,
          defaultFormat: args.defaultFormat,
          formats: KEYBOARD_FORMATS.numbers
        }
      };
    }
    _getFocused() {
      return this.tag('Keyboard');
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
