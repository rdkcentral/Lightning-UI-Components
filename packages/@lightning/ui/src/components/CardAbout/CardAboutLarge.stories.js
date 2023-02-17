import lng from '@lightningjs/core';
import { default as CardAboutLargeComponent } from './CardAboutLarge.js';
import mdx from './CardAbout.mdx';
import { createModeControl } from 'lightning-ui-docs/.storybook/utils';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[128]}/CardAboutLarge`,
  parameters: {
    tag: 'CardAboutLarge',
    docs: {
      page: mdx
    }
  }
};
export const CardAboutLarge = () =>
  class CardAboutLarge extends lng.Component {
    static _template() {
      return {
        Card: {
          type: CardAboutLargeComponent
        }
      };
    }
  };

CardAboutLarge.args = {
  title: 'Overview',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum odio eu feugiat pretium. Tempus imperdiet nulla malesuada pellentesque elit eget gravida.',
  mode: 'focused'
};

CardAboutLarge.argTypes = {
  ...createModeControl({ summaryValue: 'focused' }),
  title: {
    control: 'text',
    description: 'Title text',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  description: {
    control: 'text',
    description: 'Description text',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  }
};

CardAboutLarge.storyName = 'CardAboutLarge';
