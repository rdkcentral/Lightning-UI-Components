import lng from '@lightningjs/core';
import { default as ToggleComponent } from './index.js';
import mdx from './Toggle.mdx';
import { createModeControl } from 'lightning-ui-docs/.storybook/utils';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[512]}/Toggle`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Toggle = () =>
  class Toggle extends lng.Component {
    static _template() {
      return {
        flex: { direction: 'column' },
        Toggle: {
          type: ToggleComponent,
          onEnter: toggle => {
            alert('Sample onEnter override');
            toggle.toggle();
            return true;
          }
        }
      };
    }
  };
Toggle.args = {
  checked: false,
  mode: 'focused'
};

Toggle.argTypes = {
  ...createModeControl({ summaryValue: 'focused' }),
  checked: {
    control: 'boolean',
    description: 'The state of the toggle being checked',
    table: {
      defaultValue: { summary: true }
    }
  }
};