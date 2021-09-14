import lng from '@lightningjs/core';

import { ControlMedium } from '.';
import mdx from './Control.mdx';
import lightningBolt from '../../assets/images/ic_lightning_white_32.png';

export default {
  title: 'elements/ControlMedium',
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
        Control: {
          type: ControlMedium,
          icon: lightningBolt,
          backgroundType: args.backgroundType
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('Control');
      }
    }
  };
Basic.args = { backgroundType: 'fill', focused: false };
Basic.argTypes = {
  backgroundType: {
    control: {
      type: 'radio',
      options: ['stroke', 'fill', 'float', 'ghost']
    }
  },
  focused: { control: 'boolean' }
};
Basic.parameters = {
  argActions: {
    focused: (isFocused, component) => {
      component._getFocused = isFocused
        ? () => component.tag('Control')
        : () => {};
      component._refocus();
    }
  }
};
