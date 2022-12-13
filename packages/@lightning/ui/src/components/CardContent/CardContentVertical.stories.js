import lng from '@lightningjs/core';
import tileImage from '../../assets/images/tile-image.png';
import mdx from './CardContent.mdx';
import { Label as LabelStory } from '../../../../ui-core/src/components/Label/Label.stories';
import { ProgressBar as ProgressBarStory } from '../../../../ui-core/src/components/ProgressBar/ProgressBar.stories';
import { Text as BadgeStory } from '../../../../ui-core/src/components/Badge/Badge.stories';
import { MetadataCardContent as MetadataStory } from '../MetadataCardContent/MetadataCardContent.stories';
import { generateSubStory } from '@lightning/ui-core/storybook/index.js';
import { createModeControl } from '@lightning/ui-core/storybook/index.js';
import CardContentVerticalComponent from './CardContentVertical';
import { Icon } from '@lightning/ui-core';
import xfinityLogo from '../../assets/images/Xfinity-Provider-Logo-2x1.png';
import { CardContent } from './CardContent.stories';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[128]}/CardContentVertical`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const CardContentVertical = args =>
  class CardContentVertical extends lng.Component {
    static _template() {
      return {
        CardContentVertical: {
          type: CardContentVerticalComponent,
          src: tileImage,
          shouldCollapse: args.shouldCollapse,
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
CardContentVertical.args = {
  shouldCollapse: false,
  ...CardContent.tileProps.args
};
CardContentVertical.argTypes = {
  ...createModeControl({ defaultValue: 'focused' }),
  shouldCollapse: {
    defaultValue: false,
    table: {
      defaultValue: { summary: false }
    },
    control: 'boolean',
    description: 'should the Card collapse?'
  },
  ...CardContent.tileProps.argTypes
};

CardContentVertical.storyName = 'CardContentVertical';
CardContentVertical.parameters = {
  argActions: CardContent.tileProps.argActions('CardContentVertical')
};
generateSubStory(
  'CardContentVertical',
  CardContentVertical,
  BadgeStory,
  'badge'
);
generateSubStory(
  'CardContentVertical',
  CardContentVertical,
  LabelStory,
  'label'
);
generateSubStory(
  'CardContentVertical',
  CardContentVertical,
  ProgressBarStory,
  'progressBar',
  ['w']
);
generateSubStory(
  'CardContentVertical',
  CardContentVertical,
  MetadataStory,
  'metadata',
  ['w', 'h', 'visibleCount']
);
