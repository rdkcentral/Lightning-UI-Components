import lng from 'wpe-lightning';
import { withKnobs, text } from '@storybook/addon-knobs';

import ActionButton from '.';
import mdx from './ActionButton.mdx';

export default {
  title: 'ActionButton',
  component: ActionButton,
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
        ActionButton: {
          type: ActionButton,
          title: text('Title', 'Type Something')
        }
      };
    }

    _getFocused() {
      return this.tag('ActionButton');
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

export const Focused = () =>
  class Focused extends lng.Component {
    static _template() {
      return {
        ActionButton: {
          type: ActionButton,
          title: text('Title', 'Type Something')
        }
      };
    }

    _init() {
      this._refocus();
    }
    _getFocused() {
      return this.tag('ActionButton');
    }
  };

export const Icon = () =>
  class Icon extends lng.Component {
    static _template() {
      return {
        ActionButton: {
          type: ActionButton,
          title: 'Button'
        }
      };
    }

    _init() {
      this.tag(
        'ActionButton'
      ).icon = `https://edge.myriad-gn.top.comcast.net/select/logo?entityId=6331252128022549239&width=48&ratio=1x1&trim=false&extent=true&rule=Icon%20Unfocused`;
    }

    _getFocused() {
      return this.tag('ActionButton');
    }
  };
