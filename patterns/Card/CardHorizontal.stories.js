import lng from '@lightningjs/core';
import { CardHorizontal, CardHorizontalLarge } from '.';

import circle from '../../assets/images/circle.svg';
import pets from '../../assets/images/The_Secret_Life_of_Pets_16x9.jpg';

export const Horizontal = args =>
  class Horizontal extends lng.Component {
    static _template() {
      return {
        Card: {
          type: CardHorizontal,
          backgroundColorFocus: args.backgroundColorFocus,
          src: pets,
          circleImage: args.circleImage,
          title: args.title,
          description: args.description,
          data: args.showData
            ? [
                '86%',
                {
                  icon: 'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false',
                  title: 'Rotten Tomatoes rating'
                }
              ]
            : null,
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
Horizontal.args = {
  title: 'Title',
  description: 'Short Description',
  showData: true,
  showLogo: true,
  logoTitle: 'Logo Title',
  focused: false,
  circleImage: false
};
Horizontal.argTypes = {
  title: { content: 'text' },
  description: { content: 'text' },
  showData: { content: 'boolean' },
  showLogo: { content: 'boolean' },
  focused: { control: 'boolean' },
  circleImage: { control: 'boolean' },
  logoTitle: { control: 'text' },
  backgroundColorFocus: { control: 'color' }
};

export const HorizontalLarge = args =>
  class HorizontalLarge extends lng.Component {
    static _template() {
      return {
        Card: {
          type: CardHorizontalLarge,
          backgroundColorFocus: args.backgroundColorFocus,
          src: pets,
          title: 'Title',
          description: 'Short Description',
          circleImage: args.circleImage,
          data: args.showData
            ? [
                '86%',
                {
                  icon: 'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false',
                  title: 'Rotten Tomatoes rating'
                }
              ]
            : undefined,
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
HorizontalLarge.args = {
  title: 'Title',
  description: 'Short Description',
  showData: true,
  showLogo: true,
  logoTitle: 'Logo Title',
  focused: false,
  circleImage: false
};
HorizontalLarge.argTypes = {
  title: { content: 'text' },
  description: { content: 'text' },
  showData: { content: 'boolean' },
  showLogo: { content: 'boolean' },
  focused: { control: 'boolean' },
  circleImage: { control: 'boolean' },
  logoTitle: { control: 'text' },
  backgroundColorFocus: { control: 'color' }
};
