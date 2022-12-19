import lng from '@lightningjs/core';

import { ToggleSmall as ToggleSmallComponent } from '.';
import mdx from './Toggle.mdx';
import { createModeControl } from 'lightning-ui-docs/.storybook/utils';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[512]}/ToggleSmall`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const ToggleSmall = () =>
  class ToggleSmall extends lng.Component {
    static _template() {
      return {
        flex: { direction: 'column' },
        ToggleSmall: {
          type: ToggleSmallComponent,
          onEnter: toggle => {
            alert('Sample onEnter override');
            toggle.toggle();
            return true;
          }
        }
      };
    }
  };
ToggleSmall.storyName = 'ToggleSmall';
ToggleSmall.args = {
  checked: false
};
ToggleSmall.argTypes = {
  ...createModeControl(),
  checked: {
    control: 'boolean',
    description: 'the state of the toggle being checked'
  }
};
