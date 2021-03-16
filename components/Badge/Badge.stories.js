import lng from '@lightningjs/core';

import Badge from '.';
import mdx from './Badge.mdx';

import lightning from '../../assets/images/ic_lightning_white_32.png';
import circle from '../../assets/images/circle.svg';

export default {
  title: 'Badge',
  args: {
    title: 'HD',
    iconAlign: 'left'
  },
  argTypes: {
    iconAlign: {
      control: {
        type: 'select',
        options: ['left', 'right']
      }
    }
  },
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Text = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Badge: {
          type: Badge,
          title: args.title
        }
      };
    }

    _getFocused() {
      return this.tag('Badge');
    }
  };

export const Icon = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Badge: {
          type: Badge,
          icon: circle,
          iconWidth: 50,
          iconHeight: 50
        }
      };
    }

    _getFocused() {
      return this.tag('Badge');
    }
  };

export const TextWithIcon = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Badge: {
          type: Badge,
          title: args.title,
          icon: lightning,
          iconAlign: args.iconAlign
        }
      };
    }

    _getFocused() {
      return this.tag('Badge');
    }
  };
