import lng from '@lightningjs/core';
import Gradient from '.';
import mdx from './Gradient.mdx';

export default {
  title: 'Elements / Gradient',
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
        Gradient: {
          type: Gradient,
          itemLayout: {
            ratioX: 16,
            ratioY: 9,
            upCount: 3
          }
        }
      };
    }
  };

Basic.args = {};
Basic.argTypes = {};
Basic.parameters = {
  argActions: {}
};
