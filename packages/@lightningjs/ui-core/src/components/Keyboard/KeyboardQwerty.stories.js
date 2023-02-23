import lng from '@lightningjs/core';
import mdx from './Keyboard.mdx';
import { CATEGORIES } from 'lightning-ui-docs';
import { context } from '../../globals';
import utils from '../../utils';
import { default as KeyboardQwertyComponent } from './KeyboardQwerty';
import { Keyboard } from './Keyboard.stories';

export default {
  title: `${CATEGORIES[8]}/KeyboardQwerty`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const KeyboardQwerty = () =>
  class KeyboardQwerty extends lng.Component {
    static _template() {
      return {
        Keyboard: {
          type: KeyboardQwertyComponent,
          defaultFormat: 'lowercase'
        },
        w: utils.getWidthByUpCount(context.theme, 1)
      };
    }
  };

KeyboardQwerty.storyName = 'KeyboardQwerty';

KeyboardQwerty.args = {
  centerKeyboard: false,
  centerKeys: false,
  mode: 'focused'
};

KeyboardQwerty.argTypes = Keyboard.sharedArgTypes;
KeyboardQwerty.parameters = {};
