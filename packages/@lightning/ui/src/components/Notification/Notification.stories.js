import lng from '@lightningjs/core';

import NotificationComponent from '.';
import mdx from './Notification.mdx';
import lightning from '../../assets/images/ic_lightning_white_32.png';
import xfinity from '../../assets/images/Xfinity-Provider-Logo-Square.png';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[4]}/Notification`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

const iconSet = {
  lightning: lightning,
  none: null
};

const logoSet = {
  none: null,
  xfinity: xfinity
};

export const Notification = () =>
  class Notification extends lng.Component {
    static _template() {
      return {
        Notification: {
          type: NotificationComponent,
          onEnter() {
            this.dismiss();
          }
        }
      };
    }

    $notificationEntered() {
      // eslint-disable-next-line no-restricted-syntax
      console.log('Notification entered');
    }

    $notificationDismissed() {
      // eslint-disable-next-line no-restricted-syntax
      console.log('Notification dismissed');
    }
  };

const defaultValues = {
  title: 'Banner headline',
  description: 'Description',
  actionArea: 'Details',
  toggleState: 'enter()',
  icon: 'none',
  logo: 'none'
};
Notification.args = defaultValues;
Notification.argTypes = {
  title: {
    control: 'text',
    description: 'Text to be as title',
    type: 'string',
    table: {
      defaultValue: { summary: defaultValues.title }
    }
  },
  description: {
    control: 'text',
    description: 'Text to be as description',
    type: 'string',
    table: {
      defaultValue: { summary: defaultValues.description }
    }
  },
  actionArea: {
    control: 'text',
    description: 'Text to be as action area',
    type: 'string',
    table: {
      defaultValue: { summary: defaultValues.actionArea }
    }
  },
  toggleState: {
    control: 'radio',
    options: ['enter()', 'dismiss()'],
    description:
      'Triggers notification animations. Selecting enter() will expand notification, dismiss() will trigger animation to collapse notification',
    table: {
      defaultValue: { summary: defaultValues.state }
    }
  },
  icon: {
    control: 'radio',
    defaultValue: 'none',
    options: ['none', 'lightning'],
    description: 'Icon to the left of title',
    table: {
      defaultValue: { summary: 'none' }
    }
  },
  logo: {
    control: 'radio',
    defaultValue: 'none',
    options: ['none', 'xfinity'],
    description:
      'Logo to be placed to the left of the title. If icon and logo are both set, logo will take precedence for what is rendered and icon will be ignored',
    table: {
      defaultValue: { summary: 'none' }
    }
  }
};

Notification.parameters = {
  argActions: {
    toggleState: (state, component) => {
      const func = state.split('(')[0];
      component.tag('Notification')[func]();
    },
    icon: (iconName, component) => {
      component.tag('Notification').icon = iconSet[iconName];
    },
    logo: (logoName, component) => {
      component.tag('Notification').logo = logoSet[logoName];
    }
  }
};
