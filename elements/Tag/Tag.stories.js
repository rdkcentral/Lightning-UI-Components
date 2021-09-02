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
          backgroundColor: args.backgroundColor,
          gradientColor: args.gradientColor,
          title: args.title,
          titleColor: args.titleColor
        }
      };
    }

    _getFocused() {
      return this.tag('Tag');
    }
  };
Basic.args = {
  backgroundColor: '#f6a50a',
  gradientColor: undefined,
  title: 'Tag',
  titleColor: '#ffffff'
};
Basic.argTypes = {
  backgroundColor: { control: 'color' },
  gradientColor: { control: 'color' },
  titleColor: { control: 'color' }
};
