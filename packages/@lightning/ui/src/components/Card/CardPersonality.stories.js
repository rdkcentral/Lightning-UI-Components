import lng from '@lightningjs/core';
import { default as CardPersonalityComponent } from './CardPersonality.js';
import mdx from './CardPersonality.mdx';
import tileImage from '../../assets/images/tile-image.png';
import { createModeControl } from '@lightning/ui-core/storybook/index.js';
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
        Card: {
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
  ...createModeControl(),
  description: { control: 'text', description: 'Description' },
  title: { control: 'text', description: 'title' }
};

CardPersonality.storyName = 'CardPersonality';
