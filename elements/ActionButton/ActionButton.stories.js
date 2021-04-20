import lng from '@lightningjs/core';

import ActionButton from '.';
import mdx from './ActionButton.mdx';
import icon from '../../assets/images/ic_lightning_white_32.png';

export default {
  title: 'Elements / ActionButton',
  parameters: {
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
          type: ActionButton,
          backgroundType: args.backgroundType,
          icon: args.icon ? icon : undefined,
          title: args.title,
          onEnter: args.onEnter,
          fixed: args.fixed,
          w: ActionButton.styles.minWidth
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('ActionButton');
      }
    }
  };
Base.args = { title: 'Action Button' };
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
  fixed: { control: 'boolean' }
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
          type: ActionButton
        }
      };
    }
  };

Loading.args = null;
