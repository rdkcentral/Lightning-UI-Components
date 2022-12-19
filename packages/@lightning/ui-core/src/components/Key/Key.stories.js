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
  size: 'sm'
};

Basic.argTypes = {
  ...createModeControl({ defaultValue: 'focused' }),
  size: {
    description: 'width of the Key',
    table: {
      defaultValue: { summary: 'sm' }
    },
    control: 'radio',
    options: ['sm', 'md', 'lg', 'xl']
  },
  title: {
    defaultValue: 'A',
    description: 'key character',
    table: {
      defaultValue: { summary: 'A' }
    },
    control: 'text'
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
KeyIcon.args = {};

KeyIcon.argTypes = {
  ...createModeControl({ defaultValue: 'focused' }),
  size: {
    description: 'width of the Key',
    table: {
      defaultValue: { summary: 'sm' }
    },
    control: 'radio',
    options: ['sm', 'md', 'lg', 'xl']
  }
};

KeyIcon.parameters = {};
