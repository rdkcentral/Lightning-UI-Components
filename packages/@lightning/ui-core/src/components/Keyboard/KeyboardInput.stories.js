import lng from '@lightningjs/core';
import {
  createModeControl,
  generateSubStory
} from 'lightning-ui-docs/.storybook/utils';
import mdx from './Keyboard.mdx';
import { CATEGORIES } from 'lightning-ui-docs';
import { context } from '../../globals';
import utils from '../../utils';
import {
  Icon,
  KeyboardInput as KeyboardInputComponent,
  KeyboardQwerty as KeyboardQwertyComponent,
  KeyboardEmail as KeyboardEmailComponent
} from '@lightning/ui';
import { Keyboard } from './Keyboard.stories';
import { Input as InputStory } from '../Input/Input.stories';
import lightning from '../../assets/images/ic_lightning_white_32.png';
import eye from '../../assets/images/ic_eye_white_48.png';
import eyeHide from '../../assets/images/ic_eyeHide_white_48.png';

export default {
  title: `${CATEGORIES[8]}/KeyboardInput`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

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

// creates shared arg types for Keyboard Input stories
const sharedKeyboardArgTypes = createModeControl({
  options: ['focused'],
  defaultValue: 'focused'
});

export const InputWithQwerty = () =>
  class InputWithQwerty extends lng.Component {
    static _template() {
      return {
        InputWithQwerty: {
          type: KeyboardInputComponent,
          keyboardType: KeyboardQwertyComponent,
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
InputWithQwerty.argTypes = {
  ...Keyboard.sharedArgTypes,
  ...sharedKeyboardArgTypes,
  ...sharedInputArgTypes
};

InputWithQwerty.parameters = {
  tag: 'InputWithQwerty'
};

InputWithQwerty.parameters.argActions = {
  prefix: (prefix, component) => {
    if (prefix == null) {
      component.tag('InputWithQwerty')._Input.prefix = [];
    } else {
      component.tag('InputWithQwerty')._Input.prefix =
        getCommponentArray(prefix);
    }
  },
  suffix: (suffix, component) => {
    if (suffix == null) {
      component.tag('InputWithQwerty')._Input.suffix = [];
    } else {
      component.tag('InputWithQwerty')._Input.suffix =
        getCommponentArray(suffix);
    }
  }
};

generateSubStory({
  componentName: 'InputWithQwerty',
  baseStory: InputWithQwerty,
  subStory: InputStory,
  targetProperty: 'input',
  include: ['password', 'mask']
});

export const InputWithEmail = () =>
  class InputWithEmail extends lng.Component {
    static _template() {
      return {
        InputWithEmail: {
          type: KeyboardInputComponent,
          keyboardType: KeyboardEmailComponent,
          input: {
            eyebrow: 'Email Address',
            helpText: 'Help Text'
          }
        },
        w: utils.getWidthByUpCount(context.theme, 1)
      };
    }
  };

InputWithEmail.argTypes = {
  ...Keyboard.sharedArgTypes,
  ...sharedKeyboardArgTypes,
  ...sharedInputArgTypes
};

InputWithEmail.parameters = {
  tag: 'InputWithEmail'
};

InputWithEmail.parameters.argActions = {
  prefix: (prefix, component) => {
    if (prefix == null) {
      component.tag('InputWithEmail')._Input.prefix = [];
    } else {
      component.tag('InputWithEmail')._Input.prefix =
        getCommponentArray(prefix);
    }
  },
  suffix: (suffix, component) => {
    if (suffix == null) {
      component.tag('InputWithEmail')._Input.suffix = [];
    } else {
      component.tag('InputWithEmail')._Input.suffix =
        getCommponentArray(suffix);
    }
  }
};

generateSubStory({
  componentName: 'InputWithEmail',
  baseStory: InputWithEmail,
  subStory: InputStory,
  targetProperty: 'input',
  include: ['password', 'mask']
});
