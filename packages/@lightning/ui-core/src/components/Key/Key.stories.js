import lng from '@lightningjs/core';
import Key from './index.js';
import icon from '../../assets/images/ic_lightning_white_32.png';
import mdx from './Key.mdx';
import { createModeControl } from '../../../storybook/index.js';
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
          type: Key
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
  ...createModeControl(),
  title: {
    defaultValue: 'A',
    description: 'key character',
    table: {
      defaultValue: { summary: 'A' }
    },
    control: 'text'
  },
  size: {
    description: 'width of the Key',
    table: {
      defaultValue: { summary: 'sm' }
    },
    control: 'radio',
    options: ['sm', 'md', 'lg', 'xl']
  }
};

export const Icon = () =>
  class Icon extends lng.Component {
    static _template() {
      return {
        Key: {
          type: Key
        }
      };
    }
  };
Icon.args = {
  icon: icon,
  size: 'sm'
};

Icon.argTypes = {
  ...createModeControl(),
  icon: {
    description: 'Icon source',
    table: {
      defaultValue: { summary: 'none' }
    },
    control: 'radio',
    options: [icon, 'none']
  },
  size: {
    description: 'width of the Key',
    table: {
      defaultValue: { summary: 'sm' }
    },
    control: 'radio',
    options: ['sm', 'md', 'lg', 'xl']
  }
};

Icon.parameters = {};
