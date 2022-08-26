import lng from '@lightningjs/core';

import ListItemBase from './ListItemBase';
import mdx from './ListItemBase.mdx';
import xfinityIcon from '../../assets/images/Xfinity-Provider-Logo-Square.png';
import { createModeControl } from '../../.storybook/controls/argTypes';

export default {
  title: 'Patterns / ListItemThemed',
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
        ListItemBase: {
          type: ListItemBase
        }
      };
    }
  };

const sharedArgTypes = {
  title: {
    defaultValue: 'Title',
    table: {
      defaultValue: { summary: 'Title' }
    },
    control: 'text',
    description: 'Title text'
  },
  description: {
    defaultValue: 'Description',
    table: {
      defaultValue: { summary: 'Description' }
    },
    control: 'text',
    description: 'Description text'
  },
  justify: {
    defaultValue: 'center',
    control: 'radio',
    options: ['left', 'center', 'right'],
    description: 'justification of button content',
    table: {
      defaultValue: { summary: 'center' }
    }
  }
};

const iconSet = {
  xfinityIcon: xfinityIcon,
  none: null
};

const sharedArgActions = {
  argActions: {
    icon: (iconName, component) => {
      component.tag('ListItemBase').icon = iconSet[iconName];
    }
  }
};

Basic.args = {
  title: 'Title',
  description: 'Description',
  icon: 'none'
};

Basic.argTypes = {
  ...createModeControl(),
  ...sharedArgTypes,
  icon: {
    defaultValue: 'none',
    table: {
      defaultValue: { summary: 'undefined' }
    },
    control: 'radio',
    options: ['xfinityIcon', 'none'],
    description: 'Icon source'
  }
};

Basic.parameters = sharedArgActions;
