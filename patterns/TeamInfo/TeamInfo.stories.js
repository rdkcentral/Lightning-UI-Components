import lng from '@lightningjs/core';
import TeamInfo from '.';
import mdx from './TeamInfo.mdx';
import PHI from '../../assets/images/PHI.png';

export default {
  title: 'Patterns / TeamInfo',
  parameters: {
    docs: { page: mdx }
  }
};

export const Basic = () => {
  return class Basic extends lng.Component {
    static _template() {
      return {
        TeamInfo: {
          type: TeamInfo,
          team: 'Philadelphia Eagles',
          overlayColor: 4278742891,
          overlayImage: PHI,
          items: [
            {
              title: 'Standings',
              subtitle: '2nd in NFC East'
            },
            {
              title: 'Next game',
              subtitle: '11/26 at 4:00p vs WAS'
            }
          ]
        }
      };
    }
  };
};

Basic.args = { focused: false };
Basic.argTypes = {
  focused: { control: 'boolean' }
};
Basic.parameters = {
  argActions: {
    focused: (isFocused, component) => {
      component._getFocused = isFocused
        ? () => component.tag('TeamInfo')
        : () => {};
      component._refocus();
    }
  }
};
