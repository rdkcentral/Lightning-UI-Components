import lng from 'wpe-lightning';

import  from '.';
import mdx from './.mdx';

export default {
  title: '',
  component: ,
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
        : {
          type: 
        }
      };
    }

    _getFocused() {
      return this.tag('');
    }
  };
