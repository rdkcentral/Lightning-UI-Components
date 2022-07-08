import lng from '@lightningjs/core';
import CardPersonality from '.';
import mdx from './CardPersonality.mdx';
import tileImage from '../../assets/images/tile-image.png';
export default {
  title: 'Patterns / CardPersonality',
  tag: 'NewCard',

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
        Card: {
          type: CardPersonality,
          description: args.description,
          title: args.title,
          h: 332,
          w: 249,
          src: tileImage
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
  focused: false,
  disabled: false,
  description: 'Description',
  title: 'Title'
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
  description: { control: 'text', description: 'Description' },
  title: { control: 'text', description: 'title' }
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
