import lng from '@lightningjs/core';
import { CardHero } from '.';

import circle from '../../assets/images/circle.svg';
import pets from '../../assets/images/The_Secret_Life_of_Pets_16x9.jpg';

export const Hero = args =>
  class Hero extends lng.Component {
    static _template() {
      return {
        Card: {
          type: CardHero,
          src: pets,
          title: args.title,
          subtitle: args.subtitle,
          description: args.description,
          data: [
            '86%',
            {
              icon: 'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false',
              title: 'Rotten Tomatoes rating'
            },
            '94%',
            {
              icon: 'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false',
              title: 'Green Lightning Bolt'
            },
            'age 6+',
            {
              icon: 'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false',
              title: 'Age Rating'
            }
          ],
          logo: args.showIcon ? circle : null,
          cta: args.showCTA ? args.cta : null
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('Card');
      }
    }
  };
Hero.args = {
  title: 'Title',
  subtitle: 'Subtitle',
  description: 'Short Description',
  cta: 'Call to action text',
  showCTA: true,
  showIcon: true
};
Hero.argTypes = {
  title: { control: 'text' },
  subtitle: { control: 'text' },
  description: { control: 'text' },
  cta: { control: 'text' },
  showCTA: { control: 'boolean' },
  showIcon: { control: 'boolean' },
  focused: { control: 'boolean' }
};
