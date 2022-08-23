import lng from '@lightningjs/core';
import CardPersonality from './CardPersonality';
import mdx from './CardPersonality.mdx';
import tileImage from '../../assets/images/tile-image.png';
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
export const Personality = () =>
  class Personality extends lng.Component {
    static _template() {
      return {
        Card: {
          type: CardPersonality,
          h: 332,
          w: 249,
          src: tileImage
        }
      };
    }
  };
Personality.args = {
  description: 'Description',
  title: 'Title'
};

Personality.argTypes = {
  ...createModeControl(),
  description: { control: 'text', description: 'Description' },
  title: { control: 'text', description: 'title' }
};
