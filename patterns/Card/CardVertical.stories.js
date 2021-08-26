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
  description: 'Short Description'
};
Vertical.argTypes = {
  title: { content: 'text' },
  description: { content: 'text' },
  focused: { control: 'boolean' }
};

export const VerticalLarge = args =>
  class VerticalLarge extends lng.Component {
    static _template() {
      return {
        Card: {
          type: CardVerticalLarge,
          src: pets,
          title: args.title,
          description: args.description,
          data: args.showData
            ? [
                '86%',
                {
                  icon:
                    'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false',
                  title: 'Rotten Tomatoes rating'
                }
              ]
            : null,
          logo: args.showLogo ? circle : null
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
  showLogo: true
};
VerticalLarge.argTypes = {
  title: { content: 'text' },
  description: { content: 'text' },
  showData: { content: 'boolean' },
  showLogo: { content: 'boolean' },
  focused: { control: 'boolean' }
};
