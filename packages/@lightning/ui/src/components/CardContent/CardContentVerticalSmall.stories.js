import lng from '@lightningjs/core';
import tileImage from '../../assets/images/tile-image.png';
import mdx from './CardContent.mdx';
import { Label as LabelStory } from '../../../../ui-core/src/components/Label/Label.stories';
import { ProgressBar as ProgressBarStory } from '../../../../ui-core/src/components/ProgressBar/ProgressBar.stories';
import { Text as BadgeStory } from '../../../../ui-core/src/components/Badge/Badge.stories';
import { MetadataCardContent as MetadataStory } from '..//MetadataCardContent/MetadataCardContent.stories';
import { generateSubStory } from '@lightning/ui-core/storybook/index.js';
import { createModeControl } from '@lightning/ui-core/storybook/index.js';
import CardContentVerticalSmall from './CardContentVerticalSmall';
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

export const VerticalSmall = args =>
  class VerticalSmall extends lng.Component {
    static _template() {
      return {
        CardContentVerticalSmall: {
          type: CardContentVerticalSmall,
          src: tileImage,
          shouldCollapse: args.shouldCollapse
        }
      };
    }
  };
VerticalSmall.args = {
  shouldCollapse: false,
  ...CardContent.tileProps.args
};
VerticalSmall.argTypes = {
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
VerticalSmall.parameters = {
  argActions: CardContent.tileProps.argActions('CardContentVerticalSmall')
};
generateSubStory(
  'CardContentVerticalSmall',
  VerticalSmall,
  BadgeStory,
  'badge'
);
generateSubStory(
  'CardContentVerticalSmall',
  VerticalSmall,
  LabelStory,
  'label'
);
generateSubStory(
  'CardContentVerticalSmall',
  VerticalSmall,
  ProgressBarStory,
  'progressBar',
  ['w']
);
generateSubStory(
  'CardContentVerticalSmall',
  VerticalSmall,
  MetadataStory,
  'metadata',
  ['w', 'h', 'details', 'visibleCount']
);
