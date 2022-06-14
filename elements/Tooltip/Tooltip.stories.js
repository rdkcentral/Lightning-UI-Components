import lng from '@lightningjs/core';

import Tooltip from '.';
import mdx from './Tooltip.mdx';
import ActionButton from '../ActionButton';

export default {
  title: 'Elements / Tooltip',
  args: {
    focused: true,
    title: 'Tooltip',
    delayVisible: 0,
    timeVisible: 0
  },
  argTypes: {
    focused: { control: 'boolean' },
    title: { control: 'text' },
    delayVisible: { control: 'number' },
    timeVisible: { control: 'number' }
  },
  parameters: {
    argActions: {
      focused: (isFocused, component) => {
        component._getFocused = isFocused
          ? () => component.tag('Tooltip')
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
        Tooltip: {
          type: Tooltip
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('Tooltip');
      }
    }
  };

export const LongTitle = Basic.bind({});
LongTitle.args = {
  x: 1280 / 2,
  title:
    'This is a long message. Text will remain on a single line and does not have a maximum width'
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

WithActionButton.parameters = {
  argActions: {
    focused: (isFocused, component) => {
      component._getFocused = isFocused
        ? () => component.tag('Button.Tooltip')
        : () => {};
      component._refocus();
    },
    title: (title, component) => {
      component.tag('Button.Tooltip').title = title;
    },
    delayVisible: (delayVisible, component) => {
      component.tag('Button.Tooltip').delayVisible = delayVisible;
    },
    timeVisible: (timeVisible, component) => {
      component.tag('Button.Tooltip').timeVisible = timeVisible;
    }
  }
};
