import lng from '@lightningjs/core';

import Distractor from '.';
import mdx from './Distractor.mdx';

export default {
  title: 'Elements / Distractor',
  parameters: {
    docs: {
      page: mdx
    }
  },
  args: {
    circleSize: 100,
    color: 'rgba(256,256,256,1)'
  },
  argTypes: {
    color: { name: 'color', control: { type: 'color' } }
  }
};

export const Basic = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Distractor: {
          type: Distractor,
          circleSize: args.circleSize,
          color: args.color
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('Distractor');
      }
    }
  };
Basic.args = {};
Basic.argTypes = {};
Basic.parameters = {
  argActions: {}
};
