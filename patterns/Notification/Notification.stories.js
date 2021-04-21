import lng from '@lightningjs/core';

import Notification from '.';
import icon from '../../assets/images/ic_lightning_white_32.png';
import mdx from './Notification.mdx';

export default {
  title: 'Patterns/Notification',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Notification: {
          type: Notification,
          icon: icon,
          title: 'Notification',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
          actionArea: args.actionArea
        }
      };
    }

    _init() {
      this.tag('Notification').enter();
    }

    _getFocused() {
      return this.tag('Notification');
    }
  };
Basic.args = {
  state: 'enter()',
  actionArea: { text: 'Action Area', icon }
};
Basic.argTypes = {
  state: {
    control: {
      type: 'radio',
      options: ['enter()', 'dismiss()']
    }
  },
  actionArea: { control: 'boolean' }
};
Basic.parameters = {
  argActions: {
    state: (state, component) => {
      let func = state.split('(')[0];
      component.tag('Notification')[func]();
    },
    actionArea: (action, component) => {
      component.tag('Notification').actionArea = action
        ? { text: 'Action Area', icon }
        : false;
    }
  }
};
