import lng from 'wpe-lightning';

import Toggle from '.';
import mdx from './Toggle.mdx';

export default {
  title: 'Toggle',
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
            args.onEnter(toggle);
            toggle.toggle();
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
