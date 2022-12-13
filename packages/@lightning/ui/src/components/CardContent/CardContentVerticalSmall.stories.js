import lng from '@lightningjs/core';
import tileImage from '../../assets/images/tile-image.png';
import mdx from './CardContent.mdx';
import { Label as LabelStory } from '../../../../ui-core/src/components/Label/Label.stories';
import { ProgressBar as ProgressBarStory } from '../../../../ui-core/src/components/ProgressBar/ProgressBar.stories';
import { Text as BadgeStory } from '../../../../ui-core/src/components/Badge/Badge.stories';
import { MetadataCardContent as MetadataStory } from '../MetadataCardContent/MetadataCardContent.stories';
import { generateSubStory } from '@lightning/ui-core/storybook/index.js';
import { createModeControl } from '@lightning/ui-core/storybook/index.js';
import CardContentVerticalSmallComponent from './CardContentVerticalSmall';
import { CardContent } from './CardContent.stories';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[128]}/CardContentVerticalSmall`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const CardContentVerticalSmall = args =>
  class CardContentVerticalSmall extends lng.Component {
    static _template() {
      return {
        CardContentVerticalSmall: {
          type: CardContentVerticalSmallComponent,
          src: tileImage,
          shouldCollapse: args.shouldCollapse
        }
      };
    }
  };

CardContentVerticalSmall.storyName = 'CardContentVerticalSmall';

CardContentVerticalSmall.args = {
  shouldCollapse: false,
  ...CardContent.tileProps.args
};
CardContentVerticalSmall.argTypes = {
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
CardContentVerticalSmall.parameters = {
  argActions: CardContent.tileProps.argActions('CardContentVerticalSmall')
};
generateSubStory(
  'CardContentVerticalSmall',
  CardContentVerticalSmall,
  BadgeStory,
  'badge'
);
generateSubStory(
  'CardContentVerticalSmall',
  CardContentVerticalSmall,
  LabelStory,
  'label'
);
generateSubStory(
  'CardContentVerticalSmall',
  CardContentVerticalSmall,
  ProgressBarStory,
  'progressBar',
  ['w']
);
generateSubStory(
  'CardContentVerticalSmall',
  CardContentVerticalSmall,
  MetadataStory,
  'metadata',
  ['w', 'h', 'details', 'visibleCount']
);
