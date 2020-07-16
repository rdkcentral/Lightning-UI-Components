import lng from 'wpe-lightning';
import { withKnobs, text } from '@storybook/addon-knobs';

import ActionButton from '.';
import mdx from './ActionButton.mdx';
import icon from '../../assets/images/ic_lightning_white_32.png';

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

export const Unfocused = () =>
  class Unfocused extends lng.Component {
    static _template() {
      return {
        ActionButton: {
          type: ActionButton,
          title: text('Title', 'Type Something')
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

export const IconUnfocused = () =>
  class IconUnfocused extends lng.Component {
    static _template() {
      return {
        ActionButton: {
          type: ActionButton,
          title: 'Button'
        }
      };
    }

    _init() {
      this.tag('ActionButton').icon = icon;
    }
  };

export const IconFocused = () =>
  class IconFocused extends lng.Component {
    static _template() {
      return {
        ActionButton: {
          type: ActionButton,
          title: 'Button'
        }
      };
    }

    _init() {
      this.tag('ActionButton').icon = icon;
      this._refocus();
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
