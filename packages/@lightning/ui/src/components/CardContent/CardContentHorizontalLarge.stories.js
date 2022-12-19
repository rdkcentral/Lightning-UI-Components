import lng from '@lightningjs/core';
import tileImage from '../../assets/images/tile-image.png';
import mdx from './CardContent.mdx';
import { Label as LabelStory } from '@lightning/ui-core/src/components/Label/Label.stories';
import { ProgressBar as ProgressBarStory } from '@lightning/ui-core/src/components/ProgressBar/ProgressBar.stories';
import { Text as BadgeStory } from '@lightning/ui-core/src/components/Badge/Badge.stories';
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
    description: 'should the Card collapse?'
  },
  collapseToMetadata: {
    defaultValue: false,
    table: {
      defaultValue: { summary: false }
    },
    control: 'boolean',
    description: 'determines if collapsed state shows image or metadata'
  },
  ...CardContent.tileProps.argTypes
};
CardContentHorizontalLarge.parameters = {
  argActions: CardContent.tileProps.argActions('CardContentHorizontalLarge')
};
generateSubStory({
  componentName: 'CardContentHorizontalLarge',
  baseStory: CardContentHorizontalLarge,
  subStory: BadgeStory,
  targetProperty: 'badge',
  include: ['title']
});
generateSubStory({
  componentName: 'CardContentHorizontalLarge',
  baseStory: CardContentHorizontalLarge,
  subStory: LabelStory,
  targetProperty: 'label',
  include: ['title']
});
generateSubStory({
  componentName: 'CardContentHorizontalLarge',
  baseStory: CardContentHorizontalLarge,
  subStory: ProgressBarStory,
  targetProperty: 'progressBar',
  include: ['progress']
});
generateSubStory({
  componentName: 'CardContentHorizontalLarge',
  baseStory: CardContentHorizontalLarge,
  subStory: MetadataStory,
  targetProperty: 'metadata',
  include: ['title', 'description', 'details']
});

CardContentHorizontalLarge.storyName = 'CardContentHorizontalLarge';
