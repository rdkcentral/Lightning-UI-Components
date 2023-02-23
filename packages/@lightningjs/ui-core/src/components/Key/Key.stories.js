import lng from '@lightningjs/core';
import KeyComponent from './index.js';
import lightning from '../../assets/images/ic_lightning_white_32.png';
import mdx from './Key.mdx';
import { createModeControl } from 'lightning-ui-docs/.storybook/utils';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[8]}/Key`,
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
        Key: {
          type: KeyComponent
        }
      };
    }
  };

Basic.parameters = {};
Basic.args = {
  title: 'A',
  size: 'sm',
  mode: 'focused'
};

Basic.argTypes = {
  ...createModeControl({ summaryValue: 'focused' }),
  size: {
    control: 'select',
    options: ['sm', 'md', 'lg', 'xl'],
    description: 'Width of the Key',
    table: {
      defaultValue: { summary: 'sm' }
    }
  },
  title: {
    control: 'text',
    description: 'Key character',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  }
};

export const KeyIcon = () =>
  class KeyIcon extends lng.Component {
    static _template() {
      return {
        Key: {
          type: KeyComponent,
          icon: lightning
        }
      };
    }
  };
KeyIcon.args = {
  size: 'sm',
  mode: 'focused'
};

KeyIcon.argTypes = {
  ...createModeControl({ summaryValue: 'focused' }),
  size: {
    control: 'select',
    options: ['sm', 'md', 'lg', 'xl'],
    description: 'Width of the Key',
    table: {
      defaultValue: { summary: 'sm' }
    }
  }
};

KeyIcon.parameters = {};
