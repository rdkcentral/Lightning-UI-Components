import lng from '@lightningjs/core';
import tileImage from '../../assets/images/tile-image.png';
import mdx from './CardContent.mdx';
import { Basic as LabelStory } from '../../elements/Label/Label.stories';
import { Basic as ProgressBarStory } from '../../elements/ProgressBar/ProgressBar.stories';
import { Text as BadgeStory } from '../../elements/Badge/Badge.stories';
import { CardContent as MetadataStory } from '../../elements/MetadataCardContent/MetadataCardContent.stories';
import { generateSubStory } from '../../.storybook/utils';
import { createModeControl } from '../../.storybook/controls/argTypes';
import CardContentHero from './CardContentHero';
import xfinityProviderLogoSquare from '../../assets/images/Xfinity-Provider-Logo-Square.png';

export default {
  title: 'Patterns / CardContent',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Hero = args =>
  class Hero extends lng.Component {
    static _template() {
      return {
        CardContentHero: {
          type: CardContentHero,
          src: tileImage,
          shouldCollapse: args.shouldCollapse,
          collapseToMetadata: args.collapseToMetadata,
          metadata: {
            provider: {
              providers: Array(10).fill(xfinityProviderLogoSquare),
              visibleCount: 3
            }
          }
        }
      };
    }
  };
Hero.args = {
  shouldCollapse: false,
  collapseToMetadata: false
};
Hero.argTypes = {
  ...createModeControl(),
  shouldCollapse: {
    defaultValue: false,
    table: {
      defaultValue: { summary: false }
    },
    control: 'boolean',
    description: 'determines if collapse state shows image or metadata'
  },
  collapseToMetadata: {
    defaultValue: false,
    table: {
      defaultValue: { summary: false }
    },
    control: 'boolean',
    description: 'determines if collapse state shows image or metadata'
  }
};
generateSubStory('CardContentHero', Hero, BadgeStory, 'badge');
generateSubStory('CardContentHero', Hero, LabelStory, 'label');
generateSubStory('CardContentHero', Hero, ProgressBarStory, 'progressBar', [
  'w'
]);
generateSubStory('CardContentHero', Hero, MetadataStory, 'metadata', [
  'w',
  'h',
  'visibleCount'
]);
