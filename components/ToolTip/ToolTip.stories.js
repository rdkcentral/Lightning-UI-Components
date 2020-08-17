import lng from 'wpe-lightning';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import ToolTip from '.';
import mdx from './ToolTip.mdx';
import Button from '../Button';
import { default as ActionButton, ACTION_BUTTON_THEME } from '../ActionButton';

export default {
  title: 'ToolTip',
  component: ToolTip,
  decorators: [withKnobs],
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
        Button: {
          type: Button,
          x: 300,
          y: 100,
          title: 'Button',
          ToolTip: {
            type: ToolTip,
            title: text('Custom Hint Message', 'Type Something'),
            bottomMargin: number('Bottom Margin', ''),
            delayVisible: number('Delay Time (in ms) Before Visible', ''),
            timeVisible: number('Time (in ms) Visible', '')
          }
        }
      };
    }

    _getFocused() {
      if (boolean('Focused', true)) {
        return this.tag('Button.ToolTip');
      }
    }
  };

export const LongTitle = () =>
  class LongTitle extends lng.Component {
    static _template() {
      return {
        Button: {
          type: Button,
          x: 300,
          y: 100,
          title: 'Button',
          ToolTip: {
            type: ToolTip,
            title: text(
              'Custom Hint Message',
              'Type something with a long message here...'
            ),
            bottomMargin: number('Bottom Margin', ''),
            delayVisible: number('Delay Time (in ms) Before Visible', ''),
            timeVisible: number('Time (in ms) Visible', '')
          }
        }
      };
    }

    _getFocused() {
      if (boolean('Focused', true)) {
        return this.tag('Button.ToolTip');
      }
    }
  };

export const WithActionButton = () =>
  class WithActionButton extends lng.Component {
    static _template() {
      return {
        Button: {
          type: ActionButton,
          x: 200,
          y: 100,
          w: ACTION_BUTTON_THEME.w,
          title: 'Button',
          background: 'stroke',
          ToolTip: {
            type: ToolTip,
            title: text('Custom Hint Message', 'Type something'),
            bottomMargin: number('Bottom Margin', 24),
            delayVisible: number('Delay Time (in ms) Before Visible', ''),
            timeVisible: number('Time (in ms) Visible', '')
          }
        }
      };
    }

    _getFocused() {
      if (boolean('Focused', true)) {
        return this.tag('Button.ToolTip');
      }
    }
  };
