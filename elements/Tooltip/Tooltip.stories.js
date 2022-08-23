import lng from '@lightningjs/core';

import Tooltip from '.';
import mdx from './Tooltip.mdx';
import Button from '../Button';
import { createModeControl } from '../../.storybook/controls/argTypes';

export default {
  title: 'Elements / Tooltip',
  args: {
    title: 'Tooltip',
    delayVisible: 0,
    timeVisible: 0
  },
  argTypes: {
    ...createModeControl(['focused'], 'focused'),
    title: { control: 'text' },
    delayVisible: { control: 'number' },
    timeVisible: { control: 'number' }
  },
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
        Tooltip: {
          type: Tooltip
        }
      };
    }
  };

export const LongTitle = Basic.bind({});
LongTitle.args = {
  x: 1280 / 2,
  title:
    'This is a long message. Text will remain on a single line and does not have a maximum width'
};

export const WithButton = args =>
  class WithButton extends lng.Component {
    static _template() {
      return {
        Button: {
          type: class extends Button {
            _getFocused() {
              return this.childList.getByRef('Tooltip');
            }
          },
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
  };

WithButton.args = {
  bottomMargin: 24
};

WithButton.parameters = {
  argActions: {
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
