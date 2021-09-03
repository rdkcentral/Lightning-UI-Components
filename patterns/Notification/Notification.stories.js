import lng from '@lightningjs/core';

import Notification from '.';
import icon from '../../assets/images/ic_lightning_white_32.png';
import mdx from './Notification.mdx';
import iconSvg from '../../assets/images/success.svg';
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
          icon: iconSvg,
          title:
            'Notification: Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
          actionArea: {
            text:
              'Action Area: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
            icon
          },
          onEnter() {
            this.dismiss();
          }
        }
      };
    }

    _init() {
      setTimeout(() => {
        this.tag('Notification').enter();
      }, 1e3);
    }

    $notificationEntered() {
      console.log('Notification entered');
    }

    $notificationDismissed() {
      console.log('Notification dismissed');
    }

    _getFocused() {
      return this.tag('Notification');
    }
  };
Basic.args = {
  state: 'enter()',
  actionArea: {
    text:
      'Action Area: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    icon
  }
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
        ? {
            text:
              'Action Area: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
            icon
          }
        : false;
    }
  }
};
