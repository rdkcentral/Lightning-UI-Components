import lng from '@lightningjs/core';
import { createModeControl } from 'lightning-ui-docs/.storybook/utils';
import lngIcon from '../../assets/images/ic_lightning_white_32.png';
import { default as TabComponent } from './Tab';
import mdx from './Tab.mdx';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[16]}/Tab`,
  parameters: {
    docs: {
      page: mdx
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

Tab.args = {
  icon: false,
  title: 'Tab',
  mode: 'focused'
};

Tab.argTypes = {
  ...createModeControl({
    options: ['focused', 'selected', 'disabled'],
    summaryValue: Tab.args.mode
  }),
  icon: {
    control: 'boolean',
    type: 'boolean',
    description: 'If true icon will be displayed',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  title: {
    control: 'text',
    type: 'string',
    description: 'Text content of tab',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  }
};
Tab.parameters = {
  argActions: {
    icon: (icon, component) => {
      component.tag('Tab').icon = icon ? lngIcon : undefined;
    }
  }
};
