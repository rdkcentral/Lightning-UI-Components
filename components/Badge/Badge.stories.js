import lng from 'wpe-lightning';

import Badge from '.';
import mdx from './Badge.mdx';

export default {
  title: 'Badge',
  args: {
    title: 'HD'
  },
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
        Badge: {
          type: Badge,
          title: args.title
        }
      };
    }

    _getFocused() {
      return this.tag('Badge');
    }
  };
