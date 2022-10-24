import lng from '@lightningjs/core';
import tileImage from '../../assets/images/tile-image.png';
import mdx from './CardContent.mdx';
import { Basic as LabelStory } from '../../elements/Label/Label.stories';
import { Basic as ProgressBarStory } from '../../elements/ProgressBar/ProgressBar.stories';
import { Text as BadgeStory } from '../../elements/Badge/Badge.stories';
import { CardContent as MetadataStory } from '../../elements/MetadataCardContent/MetadataCardContent.stories';
import { generateSubStory } from '../../.storybook/utils';
import { createModeControl } from '../../.storybook/controls/argTypes';
import CardContentVerticalSmall from './CardContentVerticalSmall';
import { Basic } from './CardContent.stories';

export default {
  title: 'Patterns / CardContent',
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
  ...Basic.tileProps.args
};
VerticalSmall.argTypes = {
  ...createModeControl(),
  shouldCollapse: {
    defaultValue: false,
    table: {
      defaultValue: { summary: false }
    },
    control: 'boolean',
    description: 'should the Card collapse?'
  },
  ...Basic.tileProps.argTypes
};
VerticalSmall.parameters = {
  argActions: Basic.tileProps.argActions('CardContentVerticalSmall')
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
