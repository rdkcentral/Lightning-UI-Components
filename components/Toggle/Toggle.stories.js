import lng from 'wpe-lightning';

import Toggle from '.';
import mdx from './Toggle.mdx';
import { action } from '@storybook/addon-actions';
import { boolean, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Toggle',
  component: Toggle,
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
        flex: { direction: 'column' },
        text: { fontSize: 24, text: 'Press Enter' },
        Toggle: {
          y: 40,
          type: Toggle,
          checked: boolean('Checked', false),
          onEnter: toggle => {
            action('onEnter')(toggle);
            toggle.toggle();
          }
        }
      };
    }

    _getFocused() {
      return this.tag('Toggle');
    }
  };
