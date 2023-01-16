import lng from '@lightningjs/core';
import { default as CardPersonalityComponent } from './CardPersonality.js';
import mdx from './CardPersonality.mdx';
import tileImage from '../../assets/images/tile-image.png';
import { createModeControl } from 'lightning-ui-docs/.storybook/utils';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[128]}/CardPersonality`,
  tag: 'Card',

  parameters: {
    docs: {
      page: mdx
    }
  }
};
export const CardPersonality = () =>
  class CardPersonality extends lng.Component {
    static _template() {
      return {
        CardPersonality: {
          type: CardPersonalityComponent,
          h: 332,
          w: 249,
          src: tileImage
        }
      };
    }
  };

CardPersonality.args = {
  description: 'Description',
  title: 'Title'
};

CardPersonality.argTypes = {
  ...createModeControl({ defaultValue: 'focused' }),
  description: {
    control: 'text',
    description: 'Description text',
    table: {
      defaultValue: { summary: CardPersonality.args.description }
    }
  },
  title: {
    control: 'text',
    description: 'Title text',
    table: {
      defaultValue: { summary: CardPersonality.args.title }
    }
  }
};

CardPersonality.storyName = 'CardPersonality';
