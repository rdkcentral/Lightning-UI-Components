import lng from '@lightningjs/core';
import Button from '.';
import mdx from './Button.mdx';
import lightning from '../../assets/images/ic_lightning_white_32.png';
import { Basic as CheckboxStory } from '../Checkbox/Checkbox.stories';
import { generateSubStory } from '../../.storybook/utils';

export default {
  title: 'Elements / Button Themed',
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
        Button: {
          type: Button
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('Button');
      }
    }
  };

const sharedArgs = {
  focused: true,
  disabled: false,
  w: 0,
  fixed: true,
  justify: 'center'
};

const sharedArgTypes = {
  title: {
    defaultValue: 'Button',
    table: {
      defaultValue: { summary: '' }
    },
    control: 'text',
    description: 'Title text'
  },
  focused: {
    description: 'Toggle focus',
    table: {
      defaultValue: { summary: 'false' }
    },
    control: 'boolean'
  },
  disabled: {
    description: 'Disabled/inactive button state',
    table: {
      defaultValue: { summary: 'false' }
    },
    control: 'boolean'
  },
  justify: {
    control: 'radio',
    options: ['left', 'center', 'right'],
    description: 'justification of button content',
    table: {
      defaultValue: { summary: 'center' }
    }
  }
};

const iconSet = {
  lightning: lightning,
  none: null
};

const sharedArgActions = {
  argActions: {
    focused: (isFocused, component) => {
      component._getFocused = isFocused
        ? () => component.tag('Button')
        : () => {};
      component._refocus();
    },
    icon: (iconName, component) => {
      component.tag('Button').icon = iconSet[iconName];
    },
    w: (w, component) => {
      const nextW = w === 0 ? undefined : w;
      component.tag('Button').w = nextW;
    }
  }
};

Basic.args = {
  title: 'Button',
  ...sharedArgs,
  icon: 'none'
};

Basic.argTypes = {
  ...sharedArgTypes,
  icon: {
    defaultValue: 'none',
    table: {
      defaultValue: { summary: 'undefined' }
    },
    control: 'radio',
    options: ['lightning', 'none'],
    description: 'Icon source'
  }
};

Basic.parameters = sharedArgActions;

export const WithCheckbox = Basic.bind({});
WithCheckbox.args = {
  title: 'Checked',
  ...sharedArgs
};
WithCheckbox.argTypes = sharedArgTypes;
WithCheckbox.parameters = sharedArgActions;
generateSubStory('Button', WithCheckbox, CheckboxStory, 'checkbox');
