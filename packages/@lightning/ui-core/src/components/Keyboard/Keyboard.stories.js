import lng from '@lightningjs/core';
import KeyboardComponent, { KEYBOARD_FORMATS } from '.';
import KeyboardInput from './KeyboardInput';
import { Input as InputStory } from '../Input/Input.stories';
import { Icon } from '../index.js';
import {
  createModeControl,
  generateSubStory
} from 'lightning-ui-docs/.storybook/utils';
import mdx from './Keyboard.mdx';
import { CATEGORIES } from 'lightning-ui-docs';
import lightning from '../../assets/images/ic_lightning_white_32.png';
import eye from '../../assets/images/ic_eye_white_48.png';
import eyeHide from '../../assets/images/ic_eyeHide_white_48.png';
import { context, utils } from '@lightning/ui-core';

function getCommponentArray(comps) {
  let arr = [];
  switch (comps) {
    case 'icon':
      arr = [{ type: Icon, icon: lightning }];
      break;
    case 'eye':
      arr = [{ type: Icon, icon: eye, w: 30, h: 30 }];
      break;
    case 'eyeHide':
      arr = [{ type: Icon, icon: eyeHide, w: 30, h: 30 }];
      break;
  }
  return arr;
}

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
  centerKeyboard: {
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
        },
        w: utils.getWidthByUpCount(context.theme, 1)
      };
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
        },
        w: utils.getWidthByUpCount(context.theme, 1)
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

FullScreen.argTypes = {
  ...sharedArgTypes,
  centerKeys: {
    defaultValue: false,
    description: "center the keys within it's set width of keyboard",
    control: 'boolean',
    table: {
      defaultValue: { summary: false }
    }
  }
};

export const Dialpad = () =>
  class Dialpad extends lng.Component {
    static _template() {
      return {
        Keyboard: {
          type: KeyboardComponent,
          defaultFormat: 'dialpad',
          formats: KEYBOARD_FORMATS.numbers
        },
        w: utils.getWidthByUpCount(context.theme, 1)
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
  },
  centerKeys: {
    defaultValue: false,
    description: "center the keys within it's set width of keyboard",
    control: 'boolean',
    table: {
      defaultValue: { summary: false }
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
        },
        w: utils.getWidthByUpCount(context.theme, 1)
      };
    }
  };
const sharedInputArgTypes = {
  prefix: {
    control: 'radio',
    defaultValue: null,
    options: [null, 'icon'],
    description: 'Lightning components to be placed to the left of the title',
    table: {
      defaultValue: { summary: 'null' }
    }
  },
  suffix: {
    control: 'radio',
    defaultValue: null,
    options: [null, 'icon', 'eye', 'eyeHide'],
    description: 'Lightning components to be placed to the right of the title',
    table: {
      defaultValue: { summary: 'null' }
    }
  }
};
KeyboardWithInput.argTypes = {
  ...sharedArgTypes,
  ...sharedKeyboardArgTypes,
  ...sharedInputArgTypes
};

KeyboardWithInput.parameters = {
  tag: 'KeyboardInput'
};

KeyboardWithInput.parameters.argActions = {
  prefix: (prefix, component) => {
    if (prefix == null) {
      component.tag('KeyboardInput')._Input.prefix = [];
    } else {
      component.tag('KeyboardInput')._Input.prefix = getCommponentArray(prefix);
    }
  },
  suffix: (suffix, component) => {
    if (suffix == null) {
      component.tag('KeyboardInput')._Input.suffix = [];
    } else {
      component.tag('KeyboardInput')._Input.suffix = getCommponentArray(suffix);
    }
  }
};

generateSubStory({
  componentName: 'KeyboardInput',
  baseStory: KeyboardWithInput,
  subStory: InputStory,
  targetProperty: 'input',
  include: ['password', 'mask']
});

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
        },
        w: utils.getWidthByUpCount(context.theme, 1)
      };
    }
  };

EmailWithInput.argTypes = {
  ...sharedArgTypes,
  ...sharedKeyboardArgTypes,
  ...sharedInputArgTypes
};

EmailWithInput.parameters = {
  tag: 'EmailInput'
};

EmailWithInput.parameters.argActions = {
  prefix: (prefix, component) => {
    if (prefix == null) {
      component.tag('EmailInput')._Input.prefix = [];
    } else {
      component.tag('EmailInput')._Input.prefix = getCommponentArray(prefix);
    }
  },
  suffix: (suffix, component) => {
    if (suffix == null) {
      component.tag('EmailInput')._Input.suffix = [];
    } else {
      component.tag('EmailInput')._Input.suffix = getCommponentArray(suffix);
    }
  }
};

generateSubStory({
  componentName: 'EmailInput',
  baseStory: EmailWithInput,
  subStory: InputStory,
  targetProperty: 'input',
  include: ['password', 'mask']
});
