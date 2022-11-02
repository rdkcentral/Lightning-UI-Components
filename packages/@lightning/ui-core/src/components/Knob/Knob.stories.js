import lng from '@lightningjs/core';

import { default as KnobComponent } from './index.js';
import mdx from './Knob.mdx';
import { createModeControl } from '../../../storybook/index.js';
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

Knob.argTypes = createModeControl();
