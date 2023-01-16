import lng from '@lightningjs/core';
import { default as CardTitleComponent } from './CardTitle.js';
import mdx from './CardTitle.mdx';
import { createModeControl } from 'lightning-ui-docs/.storybook/utils';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[128]}/CardTitle`,
  tag: 'Card',

  parameters: {
    docs: {
      page: mdx
    }
  }
};
export const CardTitle = () =>
  class CardTitle extends lng.Component {
    static _template() {
      return {
        Card: {
          type: CardTitleComponent,
          h: 386
        }
      };
    }
  };

CardTitle.args = {
  title: 'Title',
  description: 'Description',
  details: 'Details'
};

CardTitle.argTypes = {
  ...createModeControl({ defaultValue: 'focused' }),
  title: {
    control: 'text',
    description: 'Title text',
    table: {
      defaultValue: { summary: CardTitle.args.title }
    }
  },
  description: {
    control: 'text',
    description: 'Description text',
    table: {
      defaultValue: { summary: CardTitle.args.description }
    }
  },
  details: {
    control: 'text',
    description: 'Details text',
    table: {
      defaultValue: { summary: CardTitle.args.details }
    }
  }
};

CardTitle.storyName = 'CardTitle';
