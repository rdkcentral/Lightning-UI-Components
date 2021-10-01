import lng from '@lightningjs/core';
import Radio from '.';
import mdx from './Radio.mdx';

export default {
  title: 'Elements / Radio',
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
        Radio: {
          type: Radio
        }
      };
    }

    _getFocused() {
      return this.tag('Radio');
    }
  };
Basic.args = { checked: false };
Basic.argTypes = {
  checked: { control: 'boolean' }
};
Basic.parameters = {
  argActions: {
    checked: (_, component) => {
      component.tag('Radio').toggle();
    }
  }
};
