import lng from '@lightningjs/core';
import tileImage from '../../assets/images/tile-image.png';
import mdx from './CardContent.mdx';
import { Label as LabelStory } from '../../../../ui-core/src/components/Label/Label.stories';
import { ProgressBar as ProgressBarStory } from '../../../../ui-core/src/components/ProgressBar/ProgressBar.stories';
import { Text as BadgeStory } from '../../../../ui-core/src/components/Badge/Badge.stories';
import { MetadataCardContent as MetadataStory } from '../MetadataCardContent/MetadataCardContent.stories';
import {
  createModeControl,
  generateSubStory
} from 'lightning-ui-docs/.storybook/utils';
import CardContentHero from './CardContentHero';
import xfinityProviderLogoSquare from '../../assets/images/Xfinity-Provider-Logo-Square.png';
import { CardContent } from './CardContent.stories';
import { CATEGORIES } from 'lightning-ui-docs';

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
    description: 'determines if collapse state shows image or metadata'
  },
  collapseToMetadata: {
    defaultValue: false,
    table: {
      defaultValue: { summary: false }
    },
    control: 'boolean',
    description: 'determines if collapse state shows image or metadata'
  },
  ...CardContent.tileProps.argTypes
};
Hero.parameters = {
  argActions: CardContent.tileProps.argActions('CardContentHero')
};
generateSubStory({
  componentName: 'CardContentHero',
  baseStory: Hero,
  subStory: BadgeStory,
  targetProperty: 'badge',
  include: ['title']
});
generateSubStory({
  componentName: 'CardContentHero',
  baseStory: Hero,
  subStory: LabelStory,
  targetProperty: 'label',
  include: ['title']
});
generateSubStory({
  componentName: 'CardContentHero',
  baseStory: Hero,
  subStory: ProgressBarStory,
  targetProperty: 'progressBar',
  include: ['progress']
});
generateSubStory({
  componentName: 'CardContentHero',
  baseStory: Hero,
  subStory: MetadataStory,
  targetProperty: 'metadata',
  include: ['title', 'description', 'details']
});
