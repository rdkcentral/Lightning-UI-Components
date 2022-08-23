import lng from '@lightningjs/core';
import CardTitle from './CardTitle';
import mdx from './CardTitle.mdx';
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
export const Title = () =>
  class Title extends lng.Component {
    static _template() {
      return {
        Card: {
          type: CardTitle,
          h: 386
        }
      };
    }
  };
Title.args = {
  description: 'Description',
  title: 'Title'
};

Title.argTypes = {
  ...createModeControl(),
  description: { control: 'text', description: 'Description' },
  title: { control: 'text', description: 'title' }
};
