import lng from '@lightningjs/core';

import { default as KnobComponent } from './index.js';
import mdx from './Knob.mdx';
import { createModeControl } from 'lightning-ui-docs/.storybook/utils';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[512]}/Knob`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Knob = () =>
  class Knob extends lng.Component {
    static _template() {
      return {
        Knob: {
          type: KnobComponent
        }
      };
    }
  };
Knob.args = { mode: 'focused' };
Knob.argTypes = createModeControl({ summaryValue: 'focused' });