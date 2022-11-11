import lng from '@lightningjs/core';
import KeyboardComponent, { KEYBOARD_FORMATS } from '.';
import KeyboardInput from './KeyboardInput';
import { Input as InputStory } from '../Input/Input.stories';
import {
  createModeControl,
  generateSubStory
} from '../../../storybook/index.js';
import mdx from './Keyboard.mdx';
import { context } from '../../globals/index.js';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[8]}/Keyboard`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

const sharedArgTypes = {
  ...createModeControl({ defaultValue: 'focused' }),
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
          type: KeyboardComponent,
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
          type: KeyboardComponent,
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
          type: KeyboardComponent,
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

// creates shared arg types for Keyboard Input stories
const sharedKeyboardArgTypes = {
  ...createModeControl({ options: ['focused'], defaultValue: 'focused' })
};

export const KeyboardWithInput = () =>
  class KeyboardWithInput extends lng.Component {
    static _template() {
      return {
        KeyboardInput: {
          type: KeyboardInput,
          input: {
            eyebrow: 'Search',
            helpText: 'Main'
          }
        }
      };
    }

    // example of center align of KeyboardInput
    $itemChanged() {
      this.tag('KeyboardInput').x =
        (1920 - this.tag('KeyboardInput').w) / 2 - context.theme.layout.marginX;
    }
  };

KeyboardWithInput.argTypes = {
  ...sharedKeyboardArgTypes
};

KeyboardWithInput.parameters = {
  tag: 'KeyboardInput'
};

generateSubStory('KeyboardInput', KeyboardWithInput, InputStory, 'input', [
  'eyebrow',
  'helpText',
  'listening' // removes control option from Story
]);

export const EmailWithInput = () =>
  class EmailWithInput extends lng.Component {
    static _template() {
      return {
        EmailInput: {
          type: KeyboardInput,
          keyboardFormats: KEYBOARD_FORMATS.email,
          input: {
            eyebrow: 'Email Address',
            helpText: 'Help Text'
          }
        }
      };
    }
  };

EmailWithInput.argTypes = { ...sharedKeyboardArgTypes };

EmailWithInput.parameters = {
  tag: 'EmailInput'
};
generateSubStory('EmailInput', EmailWithInput, InputStory, 'input', [
  'eyebrow',
  'helpText',
  'listening'
]);
