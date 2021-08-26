import lng from '@lightningjs/core';
import CardLaunchpad from './CardLaunchpad';
import pets from '../../assets/images/The_Secret_Life_of_Pets_16x9.jpg';
import circle from '../../assets/images/circle.svg';

export const Launchpad = args =>
  class Launchpad extends lng.Component {
    static _template() {
      return {
        Card: {
          type: CardLaunchpad,
          src: pets,
          title: 'Title',
          description: 'Short description',
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
Launchpad.args = {
  title: 'Title',
  description: 'Short Description',
  showData: true,
  showLogo: true,
  focused: false
};
Launchpad.parameters = {
  argActions: {
    focused: (isFocused, component) => {
      component._getFocused = isFocused
        ? () => component.tag('Card')
        : () => {};
      component._refocus();
    }
  }
};
