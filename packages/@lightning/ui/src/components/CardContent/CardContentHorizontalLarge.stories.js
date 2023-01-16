import lng from '@lightningjs/core';
import tileImage from '../../assets/images/tile-image.png';
import mdx from './CardContent.mdx';
import { MetadataCardContent as MetadataStory } from '../MetadataCardContent/MetadataCardContent.stories';
import {
  createModeControl,
  generateSubStory
} from 'lightning-ui-docs/.storybook/utils';
import { default as CardContentHorizontalLargeComponent } from './CardContentHorizontalLarge';
import { Icon } from '@lightning/ui-core';
import xfinityLogo from '../../assets/images/Xfinity-Provider-Logo-2x1.png';
import { CardContent } from './CardContent.stories';
import { CATEGORIES } from 'lightning-ui-docs';
import { controlDescriptions } from '../../StorybookConstants';

export default {
  title: `${CATEGORIES[128]}/CardContentHorizontalLarge`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const CardContentHorizontalLarge = args =>
  class CardContentHorizontalLarge extends lng.Component {
    static _template() {
      return {
        CardContentHorizontalLarge: {
          type: CardContentHorizontalLargeComponent,
          src: tileImage,
          shouldCollapse: args.shouldCollapse,
          collapseToMetadata: args.collapseToMetadata,
          metadata: {
            provider: {
              providers: [
                {
                  type: Icon,
                  w: 96,
                  h: 48,
                  icon: xfinityLogo
                }
              ],
              visibleCount: 3
            }
          }
        }
      };
    }
  };
CardContentHorizontalLarge.args = {
  shouldCollapse: false,
  collapseToMetadata: false,
  ...CardContent.tileProps.args
};
CardContentHorizontalLarge.argTypes = {
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
CardContentHorizontalLarge.parameters = {
  argActions: CardContent.tileProps.argActions('CardContentHorizontalLarge')
};

generateSubStory({
  componentName: 'CardContentHorizontalLarge',
  baseStory: CardContentHorizontalLarge,
  subStory: MetadataStory,
  targetProperty: 'metadata',
  include: ['title', 'description', 'details']
});

CardContentHorizontalLarge.storyName = 'CardContentHorizontalLarge';
