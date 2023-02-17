import lng from '@lightningjs/core';
import tileImage from '../../assets/images/tile-image.png';
import mdx from '../../../../ui-core/src/components/CardContent/CardContent.mdx';
import { MetadataCardContent as MetadataStory } from '../../../../ui-core/src/components/MetadataCardContent/MetadataCardContent.stories';
import {
  createModeControl,
  generateSubStory
} from 'lightning-ui-docs/.storybook/utils';
import CardContentHero from './CardContentHero';
import xfinityProviderLogoSquare from '../../assets/images/Xfinity-Provider-Logo-Square.png';
import { CardContent } from '../../../../ui-core/src/components/CardContent/CardContent.stories';
import { CATEGORIES } from 'lightning-ui-docs';
import { controlDescriptions } from '../../../../../apps/lightning-ui-docs/.storybook/utils/constants';

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
  collapseToMetadata: false,
  mode: 'focused',
  ...CardContent.args
};

Hero.argTypes = {
  ...createModeControl({ summaryValue: Hero.args.mode }),
  collapseToMetadata: {
    control: 'boolean',
    description: controlDescriptions.collapseToMetadata,
    table: {
      defaultValue: { summary: false }
    }
  },
  ...CardContent.argTypes
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
