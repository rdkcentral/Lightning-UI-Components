import lng from '@lightningjs/core';
import { CATEGORIES } from 'lightning-ui-docs';
import { createModeControl } from 'lightning-ui-docs/.storybook/utils';
import { default as CardComponent } from './Card.js';
import mdx from './Card.mdx';

export default {
  title: `${CATEGORIES[128]}/Card`,
  tag: 'Card',

  parameters: {
    docs: {
      page: mdx
    }
  }
};
export const Card = args =>
  class Card extends lng.Component {
    static _template() {
      return {
        Card: {
          title: args.title,
          type: CardComponent,
          h: 386
        }
      };
    }
  };

Card.args = {
  title: 'Title',
  mode: 'focused'
};

Card.argTypes = {
  ...createModeControl({ summaryValue: Card.args.mode }),
  title: {
    control: 'text',
    description: 'Title text',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  }
};
