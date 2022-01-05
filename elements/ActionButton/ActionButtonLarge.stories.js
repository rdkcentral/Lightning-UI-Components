import lng from '@lightningjs/core';

import { ActionButtonLarge } from '.';
import mdx from './ActionButtonLarge.mdx';
import icon from '../../assets/images/ic_lightning_white_32.png';

export default {
  title: 'Elements / ActionButtonLarge',
  parameters: {
    tag: 'ActionButton',
    docs: {
      page: mdx
    }
  }
};

export const Base = args =>
  class Base extends lng.Component {
    static _template() {
      return {
        ActionButton: {
          type: ActionButtonLarge,
          backgroundType: args.backgroundType,
          icon: args.icon ? icon : undefined,
          title: args.title,
          onEnter: args.onEnter,
          checkbox: {
            checked: args.checked,
            spacing: args.checkboxSpacing
          }
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('ActionButton');
      }
    }
  };
Base.args = {
  title: 'Action Button',
  backgroundType: 'stroke',
  checked: undefined
};
Base.argTypes = {
  backgroundType: {
    control: {
      type: 'radio',
      options: ['stroke', 'fill', 'float', 'ghost']
    }
  },
  focused: { control: 'boolean' },
  icon: { control: 'boolean' },
  onEnter: { action: 'onEnter' },
  title: { control: 'text' },
  checked: {
    control: {
      type: 'radio',
      options: [true, false, undefined]
    }
  },
  checkboxSpacing: { control: 'number' }
};
Base.parameters = {
  argActions: {
    focused: (isFocused, component) => {
      component._getFocused = isFocused
        ? () => component.tag('ActionButton')
        : () => {};
      component._refocus();
    },
    icon: (isIcon, component) => {
      component.tag('ActionButton').icon = isIcon ? icon : null;
    }
  }
};

export const Loading = () =>
  class Loading extends lng.Component {
    static _template() {
      return {
        ActionButton: {
          type: ActionButtonLarge
        }
      };
    }
  };

Loading.args = null;
