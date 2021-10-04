import lng from '@lightningjs/core';

import Checkbox from '.';
import mdx from './Checkbox.mdx';

export default {
  title: 'Elements / Checkbox',
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
        Checkbox: {
          type: Checkbox,
          checked: args.checked
        }
      };
    }

    _getFocused() {
      return this.tag('Checkbox');
    }
  };
Basic.args = { checked: false };
Basic.argTypes = {
  checked: { control: 'boolean' }
};
Basic.parameters = {
  argActions: {
    checked: (_, component) => {
      component.tag('Checkbox').toggle();
    }
  }
};
