import lng from '@lightningjs/core';
import CardAboutLarge from './CardAboutLarge';
import mdx from './CardAbout.mdx';
import { createModeControl } from '../../.storybook/controls/argTypes';

export default {
  title: 'Patterns / CardAbout',
  parameters: {
    tag: 'CardAboutLarge',
    docs: {
      page: mdx
    }
  }
};
export const BasicLarge = () =>
  class BasicLarge extends lng.Component {
    static _template() {
      return {
        Card: {
          type: CardAboutLarge
        }
      };
    }
  };

BasicLarge.args = {
  title: 'Overview',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum odio eu feugiat pretium. Tempus imperdiet nulla malesuada pellentesque elit eget gravida.'
};

BasicLarge.argTypes = {
  ...createModeControl(),
  title: { content: 'text', description: 'Title' },
  description: { control: 'text', description: 'Description' }
};
