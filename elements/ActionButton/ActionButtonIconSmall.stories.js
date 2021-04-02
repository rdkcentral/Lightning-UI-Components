import lng from '@lightningjs/core';

import { ActionButtonIconSmall } from '.';
import mdx from './ActionButtonIconSmall.mdx';
import icon from '../../assets/images/ic_lightning_white_32.png';

export default {
  title: 'Elements / ActionButtonIconSmall',
  parameters: {
    tag: 'ActionButton',
    docs: {
      page: mdx
    }
  }
};

const args = { icon };
const argTypes = {
  backgroundType: {
    control: {
      type: 'radio',
      options: ['stroke', 'fill', 'float', 'ghost']
    }
  },
  focused: { control: 'boolean' },
  onEnter: { action: 'onEnter' }
};
const parameters = {
  argActions: {
    focused: (isFocused, component) => {
      component._getFocused = isFocused
        ? () => component.tag('ActionButton')
        : () => {};
      component._refocus();
    }
  }
};

export const Base = args =>
  class Base extends lng.Component {
    static _template() {
      return {
        ActionButton: {
          type: ActionButtonIconSmall,
          icon: args.icon,
          backgroundType: args.backgroundType,
          onEnter: args.onEnter
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('ActionButton');
      }
    }
  };
Base.args = args;
Base.argTypes = argTypes;
Base.parameters = parameters;

export const Loading = () =>
  class Loading extends lng.Component {
    static _template() {
      return {
        ActionButton: {
          type: ActionButtonIconSmall
        }
      };
    }
  };

Loading.args = null;
