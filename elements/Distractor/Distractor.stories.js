import lng from '@lightningjs/core';
import Distractor from '.';
import mdx from './Distractor.mdx';

export default {
  title: 'Elements / Distractor',
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
        Distractor: {
          type: Distractor
        }
      };
    }
  };
Basic.args = {};
Basic.argTypes = {};
Basic.parameters = {
  argActions: {}
};
