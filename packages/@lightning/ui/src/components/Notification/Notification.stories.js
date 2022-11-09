import lng from '@lightningjs/core';

import Notification from '.';
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

export const Basic = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Notification: {
          type: Notification,
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
  state: 'enter()',
  icon: 'none',
  logo: 'none'
};
Basic.args = defaultValues;
Basic.argTypes = {
  title: {
    control: 'text',
    defaultValue: defaultValues.title,
    description: 'Text to be as title',
    type: 'string',
    table: {
      defaultValue: { summary: defaultValues.title }
    }
  },
  description: {
    control: 'text',
    defaultValue: defaultValues.description,
    description: 'Text to be as description',
    type: 'string',
    table: {
      defaultValue: { summary: defaultValues.description }
    }
  },
  actionArea: {
    control: 'text',
    defaultValue: defaultValues.actionArea,
    description: 'Text to be as action area',
    type: 'string',
    table: {
      defaultValue: { summary: defaultValues.actionArea }
    }
  },
  state: {
    control: {
      type: 'radio',
      options: ['enter()', 'dismiss()']
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
    description: 'Logo to the left of title',
    table: {
      defaultValue: { summary: 'none' }
    }
  }
};
Basic.parameters = {
  argActions: {
    state: (state, component) => {
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
