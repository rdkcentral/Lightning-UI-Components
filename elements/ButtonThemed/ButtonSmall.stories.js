import lng from '@lightningjs/core';
import { ButtonSmall } from './index';
import mdx from './Button.mdx';
import lightning from '../../assets/images/ic_lightning_white_32.png';
import { Basic as CheckboxStory } from '../Checkbox/Checkbox.stories';
import { generateSubStory } from '../../.storybook/utils';

export default {
  title: 'Elements / ButtonSmall Themed',
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
          type: ButtonSmall
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
  fixed: false,
  disabled: false,
  w: 0,
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

const sharedArgActions = {
  argActions: {
    focused: (isFocused, component) => {
      component._getFocused = isFocused
        ? () => component.tag('Button')
        : () => {};
      component._refocus();
    }
  }
};

Basic.args = {
  title: 'Button',
  ...sharedArgs,
  icon: null
};

Basic.argTypes = {
  ...sharedArgTypes,
  icon: {
    defaultValue: null,
    table: {
      defaultValue: { summary: 'undefined' }
    },
    control: 'select',
    options: [lightning, null],
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
