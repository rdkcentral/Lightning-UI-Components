import lng from '@lightningjs/core';
import CardAboutStacked from './CardAboutStacked';
import mdx from './CardAboutStacked.mdx';
import { createModeControl } from '@lightning/ui-core/storybook/index.js';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[128]}/CardAboutStacked`,
  parameters: {
    tag: 'CardAbout',
    docs: {
      page: mdx
    }
  }
};

export const Stacked = () =>
  class Stacked extends lng.Component {
    static _template() {
      return {
        Card: {
          type: CardAboutStacked,
          description: [
            { badge: 'Badge' },
            { badge: 'Badge' },
            { badge: 'Badge' },
            { badge: 'Badge' },
            { badge: 'Badge' }
          ]
        }
      };
    }
  };

Stacked.storyName = 'CardAboutStacked';
Stacked.args = {
  descriptionBottom: 'English, Spanish, French',
  title: 'Audio',
  titleBottom: 'Languages'
};

Stacked.argTypes = {
  ...createModeControl(),
  descriptionBottom: {
    content: 'text',
    description: 'Description for bottom description text'
  },
  title: { content: 'text', description: 'Title' },
  titleBottom: { content: 'text', description: 'Title for bottom text' }
};
