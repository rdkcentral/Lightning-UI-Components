import lng from '@lightningjs/core';
import NewCard from './NewCard';
import mdx from './NewCard.mdx';

export default {
  title: 'Patterns / NewCard',
  tag: 'NewCard',

  parameters: {
    docs: {
      page: mdx
    }
  }
};
export const Base = args =>
  class Base extends lng.Component {
    static _template() {
      return {
        Card: {
          title: args.title,
          type: NewCard,
          h: 386
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('Card');
      }
    }
  };
Base.args = {
  focused: false,
  disabled: false,
  title: 'Title'
};

Base.argTypes = {
  focused: {
    control: 'boolean',
    description: 'Determines if component is in focused or unfocused state'
  },
  disabled: {
    control: 'boolean',
    description: 'Determines if component is disabled'
  },
  title: { control: 'text', description: 'title' }
};

Base.parameters = {
  argActions: {
    disabled: (isDisabled, component) => {
      component.tag('Card').disabled = isDisabled;
    },
    focused: (isFocused, component) => {
      component._getFocused = isFocused
        ? () => component.tag('Card')
        : () => {};
      component._refocus();
    }
  }
};
