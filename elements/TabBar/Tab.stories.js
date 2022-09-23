import lng from '@lightningjs/core';

import { createModeControl } from '../../.storybook/controls/argTypes';

import lngIcon from '../../assets/images/ic_lightning_white_32.png';

import Tab from './Tab';
import mdx from './Tab.mdx';

export default {
  title: 'Elements / Tab',
  argTypes: {
    ...createModeControl(['focused', 'selected', 'disabled']),
    icon: {
      control: 'boolean',
      type: 'boolean',
      defaultValue: false,
      description: 'whether or not an icon should be displayed',
      table: {
        defaultValue: { summary: 'false' }
      }
    },
    title: {
      control: 'text',
      type: 'string',
      defaultValue: 'Tab',
      description: 'text content of tab',
      table: {
        defaultValue: { summary: 'Tab' }
      }
    }
  },
  parameters: {
    docs: { page: mdx },
    argActions: {
      icon: (icon, component) => {
        component.tag('Tab').icon = icon ? lngIcon : undefined;
      }
    }
  }
};

export const Basic = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Tab: {
          type: Tab
        }
      };
    }
  };
