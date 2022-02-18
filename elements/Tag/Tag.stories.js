import lng from '@lightningjs/core';

import Tag from '.';
import mdx from './Tag.mdx';

export default {
  title: 'Elements / Tag',
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
        Tag: {
          type: Tag,
          title: args.title
        }
      };
    }

    _getFocused() {
      return this.tag('Tag');
    }
  };
Basic.args = {
  title: 'Tag'
};
Basic.argTypes = {
  title: {
    control: {
      type: 'text'
    },
    description: 'Text to display in tag'
  }
};
