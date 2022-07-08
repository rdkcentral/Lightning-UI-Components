import lng from '@lightningjs/core';
import CardTitle from './CardTitle';
import mdx from './CardTitle.mdx';

export default {
  title: 'Patterns / CardTitle',
  tag: 'NewCard',

  parameters: {
    docs: {
      page: mdx
    }
  }
};
export const TitleAndDescription = args =>
  class TitleAndDescription extends lng.Component {
    static _template() {
      return {
        Card: {
          type: CardTitle,
          description: args.description,
          title: args.title,
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
TitleAndDescription.args = {
  focused: false,
  disabled: false,
  description: 'Description',
  title: 'Title'
};

TitleAndDescription.argTypes = {
  focused: {
    control: 'boolean',
    description: 'Determines if component is in focused or unfocused state'
  },
  disabled: {
    control: 'boolean',
    description: 'Determines if component is disabled'
  },
  description: { control: 'text', description: 'Description' },
  title: { control: 'text', description: 'title' }
};

TitleAndDescription.parameters = {
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
