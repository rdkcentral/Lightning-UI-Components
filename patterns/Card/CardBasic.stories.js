import lng from '@lightningjs/core';
import { CardBasic } from '.';

import circle from '../../assets/images/circle.svg';

export const Basic = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Card: {
          type: CardBasic,
          title: args.title,
          description: args.description,
          logo: args.showLogo ? circle : null,
          logoTitle: args.showLogo ? args.logoTitle : null
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('Card');
      }
    }
  };
Basic.args = {
  title: 'Title',
  description: 'Short Description',
  showLogo: true,
  logoTitle: 'Logo Title'
};
Basic.argTypes = {
  title: { content: 'text' },
  description: { content: 'text' },
  showLogo: { content: 'boolean' },
  focused: { control: 'boolean' },
  logoTitle: { control: 'text' }
};
