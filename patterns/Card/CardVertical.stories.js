import lng from '@lightningjs/core';
import { CardVertical, CardVerticalLarge } from '.';
import circle from '../../assets/images/circle.svg';
import pets from '../../assets/images/The_Secret_Life_of_Pets_16x9.jpg';

export const Vertical = args =>
  class Vertical extends lng.Component {
    static _template() {
      return {
        Card: {
          type: CardVertical,
          backgroundColorFocus: args.backgroundColorFocus,
          circleImage: args.circleImage,
          src: pets,
          title: args.title,
          description: args.description
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('Card');
      }
    }
  };
Vertical.args = {
  title: 'Title',
  description: 'Short Description',
  focused: false,
  circleImage: false
};
Vertical.argTypes = {
  title: { content: 'text' },
  description: { content: 'text' },
  focused: { control: 'boolean' },
  circleImage: { control: 'boolean' },
  backgroundColorFocus: { control: 'color' }
};

export const VerticalLarge = args =>
  class VerticalLarge extends lng.Component {
    static _template() {
      return {
        Card: {
          type: CardVerticalLarge,
          backgroundColorFocus: args.backgroundColorFocus,
          src: pets,
          title: args.title,
          circleImage: args.circleImage,
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
VerticalLarge.args = {
  title: 'Title',
  description: 'Short Description',
  showData: true,
  showLogo: true,
  logoTitle: 'Logo Title',
  focused: false,
  circleImage: false
};
VerticalLarge.argTypes = {
  title: { content: 'text' },
  description: { content: 'text' },
  showData: { content: 'boolean' },
  showLogo: { content: 'boolean' },
  focused: { control: 'boolean' },
  circleImage: { control: 'boolean' },
  logoTitle: { control: 'text' },
  backgroundColorFocus: { control: 'color' }
};
