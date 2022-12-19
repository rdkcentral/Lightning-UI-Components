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
import { default as CardContentHorizontalComponent } from './CardContentHorizontal';
import { Icon } from '@lightning/ui-core';
import xfinityLogo from '../../assets/images/Xfinity-Provider-Logo-2x1.png';
import { CardContent } from './CardContent.stories';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[128]}/CardContentHorizontal`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const CardContentHorizontal = args =>
  class CardContentHorizontal extends lng.Component {
    static _template() {
      return {
        CardContentHorizontal: {
          type: CardContentHorizontalComponent,
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
              ]
            }
          }
        }
      };
    }
  };
CardContentHorizontal.args = {
  shouldCollapse: false,
  collapseToMetadata: false,
  ...CardContent.tileProps.args
};
CardContentHorizontal.argTypes = {
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
    description: 'determines if collapsed state shows image or metadata'
  },
  ...CardContent.tileProps.argTypes
};
CardContentHorizontal.parameters = {
  argActions: CardContent.tileProps.argActions('CardContentHorizontal')
};
generateSubStory({
  componentName: 'CardContentHorizontal',
  baseStory: CardContentHorizontal,
  subStory: BadgeStory,
  targetProperty: 'badge',
  include: ['title']
});
generateSubStory({
  componentName: 'CardContentHorizontal',
  baseStory: CardContentHorizontal,
  subStory: LabelStory,
  targetProperty: 'label',
  include: ['title']
});
generateSubStory({
  componentName: 'CardContentHorizontal',
  baseStory: CardContentHorizontal,
  subStory: ProgressBarStory,
  targetProperty: 'progressBar',
  include: ['progress']
});
generateSubStory({
  componentName: 'CardContentHorizontal',
  baseStory: CardContentHorizontal,
  subStory: MetadataStory,
  targetProperty: 'metadata',
  include: ['title', 'description', 'details']
});

CardContentHorizontal.storyName = 'CardContentHorizontal';
