import lng from '@lightningjs/core';
import CardAboutLarge from './CardAboutLarge';
import mdx from './CardAbout.mdx';

export default {
  title: 'Patterns / CardAboutLarge',
  parameters: {
    tag: 'CardAboutLarge',
    docs: {
      page: mdx
    }
  }
};
export const Basic = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Card: {
          type: CardAboutLarge,
          description: args.description,
          title: args.title
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('Card');
      }
    }
  };
Basic.args = {
  focused: true,
  disabled: false,
  title: 'Overview',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum odio eu feugiat pretium. Tempus imperdiet nulla malesuada pellentesque elit eget gravida.'
};

Basic.argTypes = {
  focused: {
    control: 'boolean',
    description: 'Determines if component is in focused or unfocused state'
  },
  disabled: {
    control: 'boolean',
    description: 'Determines if component is disabled'
  },
  title: { content: 'text', description: 'Title' },
  description: { control: 'text', description: 'Description' }
};

Basic.parameters = {
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
