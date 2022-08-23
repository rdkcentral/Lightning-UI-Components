import lng from '@lightningjs/core';
import CardProgram from './CardProgram';
import pets from '../../assets/images/The_Secret_Life_of_Pets_16x9.jpg';
import circle from '../../assets/images/circle.svg';

export const Program = args =>
  class Program extends lng.Component {
    static _template() {
      return {
        Card: {
          type: CardProgram,
          backgroundColorFocus: args.backgroundColorFocus,
          src: pets,
          title: 'Title',
          circleImage: args.circleImage,
          description: 'Short description',
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
          logoTitle: args.showLogo ? args.logoTitle : null,
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
Program.args = {
  title: 'Title',
  description: 'Short Description',
  showData: true,
  showLogo: true,
  focused: false,
  shouldAnimate: true,
  circleImage: false,
  logoTitle: 'Logo Title'
};
Program.argTypes = {
  logoTitle: { control: 'text' },
  circleImage: { control: 'boolean' },
  backgroundColorFocus: { control: 'color' }
};
Program.parameters = {
  argActions: {
    focused: (isFocused, component) => {
      component._getFocused = isFocused
        ? () => component.tag('Card')
        : () => {};
      component._refocus();
    }
  }
};
