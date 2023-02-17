import lng from '@lightningjs/core';
import mdx from './Keyboard.mdx';
import { CATEGORIES } from 'lightning-ui-docs';
import { context } from '../../globals';
import utils from '../../utils';
import { KeyboardEmail as KeyboardEmailComponent } from '@lightning/ui';
import { Keyboard } from './Keyboard.stories';

export default {
  title: `${CATEGORIES[8]}/KeyboardEmail`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const KeyboardEmail = () =>
  class KeyboardEmail extends lng.Component {
    static _template() {
      return {
        Keyboard: {
          type: KeyboardEmailComponent,
          defaultFormat: 'lowercase'
        },
        w: utils.getWidthByUpCount(context.theme, 1)
      };
    }
  };
KeyboardEmail.args = {
  centerKeyboard: false,
  centerKeys: false,
  mode: 'focused'
};
KeyboardEmail.storyName = 'KeyboardEmail';
KeyboardEmail.argTypes = Keyboard.sharedArgTypes;
KeyboardEmail.parameters = {};
