import lng from '@lightningjs/core';

import Toggle from '.';
import mdx from './Toggle.mdx';

export default {
  title: 'Elements / Toggle',
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
        flex: { direction: 'column' },
        text: { fontSize: 24, text: 'Press Enter' },
        Toggle: {
          y: 40,
          type: Toggle,
          checked: args.checked,
          onEnter: toggle => {
            alert('Sample onEnter override');
            toggle.toggle();
            return true;
          }
        }
      };
    }

    _getFocused() {
      return this.tag('Toggle');
    }
  };
Basic.args = {
  checked: false
};
Basic.argTypes = {
  checked: { control: 'boolean' },
  onEnter: { action: 'onEnter' }
};
