import lng from '@lightningjs/core';

import Label from '.';
import mdx from './Label.mdx';

export default {
  title: 'Elements / Label',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Label: {
          type: Label,
          title: args.title
        }
      };
    }

    _getFocused() {
      return this.tag('Label');
    }
  };
Basic.args = {
  title: 'Label'
};
Basic.argTypes = {
  title: {
    control: {
      type: 'text'
    },
    description: 'Text to display in tag'
  }
};
