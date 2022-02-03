import lng from '@lightningjs/core';
import { CardHero } from '.';
import { getHexColor } from '../../Styles/Colors';
import circle from '../../assets/images/circle.svg';
import pets from '../../assets/images/The_Secret_Life_of_Pets_16x9.jpg';
import lightningbolt from '../../assets/images/ic_lightning_white_32.png';

export const Hero = args =>
  class Hero extends lng.Component {
    static _template() {
      return {
        Card: {
          type: CardHero,
          backgroundColorFocus: args.backgroundColorFocus,
          src: pets,
          circleImage: args.circleImage,
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
              icon: lightningbolt,
              color: getHexColor('00ff00'),
              title: 'Green Lightning Bolt'
            },
            'age 6+',
            {
              icon: 'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false',
              title: 'Age Rating'
            }
          ],
          logo: args.showIcon ? circle : null,
          logoTitle: args.showIcon ? args.logoTitle : null,
          cta: args.showCTA ? args.cta : null,
          shouldAnimate: args.shouldAnimate
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
  showIcon: true,
  logoTitle: 'Logo Title',
  focused: false,
  shouldAnimate: true,
  circleImage: false
};
Hero.argTypes = {
  title: { control: 'text' },
  subtitle: { control: 'text' },
  description: { control: 'text' },
  cta: { control: 'text' },
  showCTA: { control: 'boolean' },
  showIcon: { control: 'boolean' },
  focused: { control: 'boolean' },
  logoTitle: { control: 'text' },
  circleImage: { control: 'boolean' },
  backgroundColorFocus: { control: 'color' }
};
