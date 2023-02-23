import lng from '@lightningjs/core';
import Button from '../Button/index.js';
import { createModeControl } from 'lightning-ui-docs/.storybook/utils';
import mdx from './Tooltip.mdx';
import TooltipComponent from './index.js';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[512]}/Tooltip`,
  args: {
    title: 'Tooltip',
    delayVisible: 0,
    timeVisible: 0,
    mode: 'focused'
  },
  argTypes: {
    ...createModeControl({ options: ['focused'], summaryValue: 'focused' }),
    title: {
      control: 'text',
      description: 'Text content of tooltip',
      table: { defaultValue: { summary: 'undefined' } }
    },
    delayVisible: {
      control: 'number',
      description:
        'Start with unfocused mode and set the delay value in milliseconds, now change the mode to focused to see the required changes',
      table: { defaultValue: { summary: 'undefined' } }
    },
    timeVisible: {
      control: 'number',
      description:
        'Start with unfocused mode and set the time value in milliseconds, now change the mode to focused to see the required changes',
      table: { defaultValue: { summary: 'undefined' } }
    }
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
          type: TooltipComponent,
          x: 1280 / 2
        }
      };
    }
  };

export const LongTitle = Basic.bind({});
LongTitle.args = {
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
            type: TooltipComponent,
            title: args.title,
            delayVisible: args.delayVisible,
            timeVisible: args.timeVisible
          }
        }
      };
    }
  };

WithButton.args = {};

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
