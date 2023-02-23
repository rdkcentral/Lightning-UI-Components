import lng from '@lightningjs/core';
import mdx from './Keyboard.mdx';
import { CATEGORIES } from 'lightning-ui-docs';
import { context } from '../../globals';
import utils from '../../utils';
import { default as KeyboardNumbersComponent } from './KeyboardNumbers';
import { Keyboard } from './Keyboard.stories';

export default {
  title: `${CATEGORIES[8]}/KeyboardNumbers`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const KeyboardNumbers = () =>
  class KeyboardNumbers extends lng.Component {
    static _template() {
      return {
        Keyboard: {
          type: KeyboardNumbersComponent,
          defaultFormat: 'dialpad'
        },
        w: utils.getWidthByUpCount(context.theme, 1)
      };
    }
  };

KeyboardNumbers.storyName = 'KeyboardNumbers';

KeyboardNumbers.args = {
  centerKeyboard: false,
  centerKeys: false,
  defaultFormat: 'dialpad',
  mode: 'focused'
};

KeyboardNumbers.argTypes = {
  ...Keyboard.sharedArgTypes,
  defaultFormat: {
    description: 'Select the format of dialpad',
    control: 'radio',
    options: ['dialpad', 'dialpadExtended'],
    table: {
      defaultValue: { summary: 'undefined' }
    }
  }
};

KeyboardNumbers.parameters = {
  argActions: {
    defaultFormat: (format, component) => {
      component.tag('Keyboard').$toggleKeyboard(format);
      component._refocus();
    }
  }
};
