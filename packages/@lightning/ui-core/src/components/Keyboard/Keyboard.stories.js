import lng from '@lightningjs/core';
import { createModeControl } from 'lightning-ui-docs/.storybook/utils';
import { CATEGORIES } from 'lightning-ui-docs';
import { context } from '../../globals';
import mdx from './Keyboard.mdx';
import utils from '../../utils';

import { Keyboard as KeyboardComponent } from '@lightning/ui';

export default {
  title: `${CATEGORIES[8]}/Keyboard`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Keyboard = () =>
  class Keyboard extends lng.Component {
    static _template() {
      return {
        Keyboard: {
          type: KeyboardComponent,
          formats: {
            lowercase: [
              [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '0',
                {
                  title: 'Delete',
                  size: 'md',
                  keyId: 'delete',
                  announce: 'delete, button'
                }
              ],
              ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
              ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
              ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
              [
                {
                  title: 'Clear',
                  size: 'lg',
                  keyId: 'clear',
                  announce: 'clear, button'
                },
                {
                  title: 'Space',
                  size: 'xl',
                  keyId: 'space',
                  announce: 'space, button'
                },
                {
                  title: 'Done',
                  size: 'lg',
                  keyId: 'done',
                  announce: 'done, button'
                }
              ]
            ]
          }
        },
        w: utils.getWidthByUpCount(context.theme, 1)
      };
    }
  };

Keyboard.sharedArgTypes = {
  ...createModeControl({ defaultValue: 'focused' }),
  centerKeyboard: {
    defaultValue: false,
    description: "Center the keyboard within it's set width",
    control: 'boolean',
    table: {
      defaultValue: { summary: false }
    }
  },
  centerKeys: {
    defaultValue: true,
    description: "Center the keys within it's set width of keyboard",
    control: 'boolean',
    table: {
      defaultValue: { summary: false }
    }
  }
};

Keyboard.argTypes = Keyboard.sharedArgTypes;
Keyboard.parameters = {};
