import lng from '@lightningjs/core';
import tileImage from '../../assets/images/tile-image.png';
import mdx from './CardContent.mdx';
import { MetadataCardContent as MetadataStory } from '../MetadataCardContent/MetadataCardContent.stories';
import {
  createModeControl,
  generateSubStory
} from 'lightning-ui-docs/.storybook/utils';
import CardContentHero from './CardContentHero';
import xfinityProviderLogoSquare from '../../assets/images/Xfinity-Provider-Logo-Square.png';
import { CardContent } from './CardContent.stories';
import { CATEGORIES } from 'lightning-ui-docs';
import { controlDescriptions } from '../../StorybookConstants';

export default {
  title: `${CATEGORIES[128]}/CardContentHero`,
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

Hero.storyName = 'CardContentHero';
Hero.args = {
  shouldCollapse: false,
  collapseToMetadata: false,
  ...CardContent.tileProps.args
};

Hero.argTypes = {
  ...createModeControl({ defaultValue: 'focused' }),
  shouldCollapse: {
    defaultValue: false,
    table: {
      defaultValue: { summary: false }
    },
    control: 'boolean',
    description: controlDescriptions.shouldCollapse
  },
  collapseToMetadata: {
    defaultValue: false,
    table: {
      defaultValue: { summary: false }
    },
    control: 'boolean',
    description: controlDescriptions.collapseToMetadata
  },
  ...CardContent.tileProps.argTypes
};
Hero.parameters = {
  argActions: CardContent.tileProps.argActions('CardContentHero')
};

generateSubStory({
  componentName: 'CardContentHero',
  baseStory: Hero,
  subStory: MetadataStory,
  targetProperty: 'metadata',
  include: ['title', 'description', 'details']
});
