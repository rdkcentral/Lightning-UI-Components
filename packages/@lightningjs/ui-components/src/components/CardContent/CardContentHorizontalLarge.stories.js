import lng from '@lightningjs/core';
import tileImage from '../../assets/images/tile-image.png';
import mdx from './CardContent.mdx';
import { MetadataCardContent as MetadataStory } from '../MetadataCardContent/MetadataCardContent.stories';
import {
  createModeControl,
  generateSubStory
} from 'lightning-ui-docs/.storybook/utils';
import { default as CardContentHorizontalLargeComponent } from './CardContentHorizontalLarge';
import { Icon } from '@lightningjs/ui-components';
import xfinityLogo from '../../assets/images/Xfinity-Provider-Logo-2x1.png';
import { CardContent } from './CardContent.stories';
import { CATEGORIES } from 'lightning-ui-docs';
import { controlDescriptions } from '../../../../../apps/lightning-ui-docs/.storybook/utils/constants';

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
  collapseToMetadata: false,
  mode: 'focused',
  ...CardContent.args
};
CardContentHorizontalLarge.argTypes = {
  ...createModeControl({ summaryValue: CardContentHorizontalLarge.args.mode }),
  shouldCollapse: {
    control: 'boolean',
    description: controlDescriptions.shouldCollapse,
    table: {
      defaultValue: { summary: false }
    }
  },
  collapseToMetadata: {
    control: 'boolean',
    description: controlDescriptions.collapseToMetadata,
    table: {
      defaultValue: { summary: false }
    }
  },
  ...CardContent.argTypes
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
