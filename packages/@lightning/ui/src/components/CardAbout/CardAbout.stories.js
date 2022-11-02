import lng from '@lightningjs/core';
import { default as CardAboutComponent } from './CardAbout.js';
import CardAboutIcon from '../../assets/images/rt-tomatometer-fresh.png';
import RatingsIcon from '../../assets/images/rt-audience-score-fill.png';
import mdx from './CardAbout.mdx';
import { createModeControl } from '@lightning/ui-core/storybook/index.js';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[128]}/CardAbout`,
  parameters: {
    tag: 'CardAbout',
    docs: {
      page: mdx
    }
  }
};
export const CardAbout = () =>
  class CardAbout extends lng.Component {
    static _template() {
      return {
        Card: {
          type: CardAboutComponent
        }
      };
    }
  };
CardAbout.args = {
  title: 'Rotten Tomatoes',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum odio eu feugiat pretium. Tempus imperdiet nulla malesuada pellentesque elit eget gravida.',
  iconLeft: CardAboutIcon,
  iconRight: RatingsIcon,
  textLeft: '00%',
  textRight: '00%'
};

CardAbout.argTypes = {
  ...createModeControl(),
  title: { content: 'text', description: 'Title' },
  description: { control: 'text', description: 'Description' },
  iconLeft: {
    defaultValue: CardAboutIcon,
    control: 'select',
    options: [CardAboutIcon, null],
    description: 'Icon source for icon on the left side'
  },
  iconRight: {
    defaultValue: RatingsIcon,
    control: 'select',
    options: [RatingsIcon, null],
    description: 'Icon source for icon on the right side'
  },
  textLeft: {
    content: 'text',
    description: 'Text on the left side of the card and icon '
  },
  textRight: {
    content: 'text',
    description: 'Text on the right side of the card and icon'
  }
};

CardAbout.storyName = 'CardAbout';
