import lng from '@lightningjs/core';

import Tooltip from '.';
import mdx from './Tooltip.mdx';
import Button from '../Button';
import ActionButton, { styles as ACTION_BUTTON_STYLES } from '../ActionButton';

export default {
  title: 'Tooltip',
  args: {
    focused: false,
    title: 'Type Something',
    bottomMargin: 0,
    delayVisible: 0,
    timeVisible: 0
  },
  argTypes: {
    focused: { control: 'boolean' },
    title: { control: 'text' },
    bottomMargin: { control: 'number' },
    delayVisible: { control: 'number' },
    timeVisible: { control: 'number' }
  },
  parameters: {
    tag: 'Button.Tooltip',
    argActions: {
      focused: (isFocused, component) => {
        component._getFocused = isFocused
          ? () => component.tag('Button.Tooltip')
          : () => {};
        component._refocus();
      }
    },
    docs: {
      page: mdx
    }
  }
};

export const Basic = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Button: {
          type: Button,
          x: 300,
          y: 100,
          title: 'Button',
          Tooltip: {
            type: Tooltip,
            title: args.title,
            bottomMargin: args.bottomMargin,
            delayVisible: args.delayVisible,
            timeVisible: args.timeVisible
          }
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('Button.Tooltip');
      }
    }
  };

export const LongTitle = Basic.bind({});
LongTitle.args = {
  title: 'Type something with a long message here...'
};

export const WithActionButton = args =>
  class WithActionButton extends lng.Component {
    static _template() {
      return {
        Button: {
          type: ActionButton,
          x: 200,
          y: 100,
          title: 'Button',
          backgroundType: 'stroke',
          Tooltip: {
            type: Tooltip,
            title: args.title,
            bottomMargin: args.bottomMargin,
            delayVisible: args.delayVisible,
            timeVisible: args.timeVisible
          }
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('Button.Tooltip');
      }
    }
  };
WithActionButton.args = {
  bottomMargin: 24
};
