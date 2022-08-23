import lng from '@lightningjs/core';
import Card from './Card';
import mdx from './Card.mdx';
import { createModeControl } from '../../.storybook/controls/argTypes';

export default {
  title: 'Patterns / Card',
  tag: 'Card',

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
          type: Card,
          h: 386
        }
      };
    }
  };
Base.args = {
  title: 'Title'
};

Base.argTypes = {
  ...createModeControl(),
  title: { control: 'text', description: 'title' }
};
