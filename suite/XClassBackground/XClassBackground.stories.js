import lng from '@lightningjs/core';

import XClassBackground from '.';
import mdx from './XClassBackground.mdx';

export default {
  title: 'suite/XClassBackground',
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
        XClassBackground: {
          type: XClassBackground,
          x: -80,
          y: -40,
          w: 1920,
          h: 1080
        }
      };
    }

    _getFocused() {
      return this.tag('XClassBackground');
    }
  };
Basic.args = {};
Basic.argTypes = {};
Basic.parameters = {
  argActions: {}
};
