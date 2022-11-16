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

const defaultProps = {
  descriptionBottom: 'English, Spanish, French',
  title: 'Audio',
  titleBottom: 'Languages'
};

Stacked.storyName = 'CardAboutStacked';
Stacked.args = defaultProps;

Stacked.argTypes = {
  ...createModeControl({ defaultValue: 'focused' }),
  descriptionBottom: {
    control: 'text',
    description: 'Description for bottom description text',
    table: {
      defaultValue: { summary: defaultProps.descriptionBottom }
    }
  },
  title: {
    control: 'text',
    description: 'title text',
    table: {
      defaultValue: { summary: defaultProps.title }
    }
  },
  titleBottom: {
    control: 'text',
    description: 'Title for bottom text',
    table: {
      defaultValue: { summary: defaultProps.titleBottom }
    }
  }
};
