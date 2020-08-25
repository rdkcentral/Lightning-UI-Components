import lng from 'wpe-lightning';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import Tooltip from '.';
import mdx from './Tooltip.mdx';
import Button from '../Button';
import ActionButton, { styles as ACTION_BUTTON_STYLES } from '../ActionButton';

export default {
  title: 'Tooltip',
  component: Tooltip,
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
          Tooltip: {
            type: Tooltip,
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
        return this.tag('Button.Tooltip');
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
          Tooltip: {
            type: Tooltip,
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
        return this.tag('Button.Tooltip');
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
          w: ACTION_BUTTON_STYLES.w,
          title: 'Button',
          background: 'stroke',
          Tooltip: {
            type: Tooltip,
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
        return this.tag('Button.Tooltip');
      }
    }
  };
