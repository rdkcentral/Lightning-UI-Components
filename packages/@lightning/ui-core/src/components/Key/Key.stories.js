import lng from '@lightningjs/core';
import Key from './index.js';
import lightning from '../../assets/images/ic_lightning_white_32.png';
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

Basic.parameters = {};

export const KeyIcon = () =>
  class KeyIcon extends lng.Component {
    static _template() {
      return {
        Key: {
          type: Key
        }
      };
    }
  };
KeyIcon.args = {
  icon: lightning,
  size: 'sm'
};

const iconSet = {
  lightning: lightning,
  none: null
};

KeyIcon.argTypes = {
  ...createModeControl({ defaultValue: 'focused' }),
  size: {
    description: 'width of the Key',
    table: {
      defaultValue: { summary: 'sm' }
    },
    control: 'radio',
    options: ['sm', 'md', 'lg', 'xl']
  },
  icon: {
    control: 'radio',
    defaultValue: 'lightning',
    options: ['none', 'lightning'],
    description: 'Icon source',
    table: {
      defaultValue: { summary: 'none' }
    }
  }
};

KeyIcon.parameters = {
  argActions: {
    icon: (iconName, component) => {
      component.tag('Key').icon = iconSet[iconName];
    }
  }
};
