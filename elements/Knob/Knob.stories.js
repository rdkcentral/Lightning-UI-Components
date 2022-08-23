import lng from '@lightningjs/core';

import Knob from '.';
import mdx from './Knob.mdx';
import { createModeControl } from '../../.storybook/controls/argTypes';

export default {
  title: 'Elements / Knob',
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
        Knob: {
          type: Knob
        }
      };
    }
  };

Basic.argTypes = createModeControl();
