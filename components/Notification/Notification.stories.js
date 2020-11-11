import lng from 'wpe-lightning';

import Notification from '.';
import icon from '../../assets/images/ic_lightning_white_32.png';
import mdx from './Notification.mdx';

export default {
  title: 'Notification',
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
          description: 'This is the description',
          actionArea: {
            text: 'Action Area',
            icon
          }
        }
      };
    }

    _init() {
      setTimeout(() => {
        this.tag('Notification').enter();
      }, 1000);
    }

    _getFocused() {
      return this.tag('Notification');
    }
  };
Basic.args = {
  state: 'enter()'
};
Basic.argTypes = {
  state: {
    control: {
      type: 'radio',
      options: ['enter()', 'dismiss()']
    }
  }
};
Basic.parameters = {
  argActions: {
    state: (state, component) => {
      let func = state.split('(')[0];
      component.tag('Notification')[func]();
    }
  }
};
