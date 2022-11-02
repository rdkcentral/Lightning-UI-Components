import lng from '@lightningjs/core';

import { createModeControl } from '../../../storybook/index.js';

import lngIcon from '../../assets/images/ic_lightning_white_32.png';

import { default as TabComponent } from './Tab';
import mdx from './Tab.mdx';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[16]}/Tab`,
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

export const Tab = () =>
  class Tab extends lng.Component {
    static _template() {
      return {
        Tab: {
          type: TabComponent
        }
      };
    }
  };
