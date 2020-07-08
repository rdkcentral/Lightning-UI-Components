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
          h: 72,
          w: 410,
          title: 'My Button'
        }
      };
    }

    _getFocused() {
      return this.tag('ActionButton');
    }
  };

export const Focused = () =>
  class Focused extends lng.Component {
    static _template() {
      return {
        ActionButton: {
          type: ActionButton,
          h: 72,
          w: 410,
          title: 'My Button'
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

export const Title = () =>
  class Title extends lng.Component {
    static _template() {
      return {
        ActionButton: {
          type: ActionButton,
          h: 72,
          w: 410,
          title: text('Title', 'Button Text')
        }
      };
    }
  };

export const UnfocusIconUrl = () =>
  class UnfocusIconUrl extends lng.Component {
    static _template() {
      return {
        ActionButton: {
          type: ActionButton,
          h: 72,
          w: 410,
          title: 'Button'
        }
      };
    }

    _init() {
      this.tag(
        'ActionButton'
      ).unfocusIconUrl = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMAQMAAABsu86kAAAABlBMVEUAAAD+qAB849H0AAAAAXRSTlMAQObYZgAAAAxJREFUCNdjSEsgiACnWAlJEDYe/gAAAABJRU5ErkJggg==`;
    }

    _getFocused() {
      return this.tag('ActionButton');
    }
  };
