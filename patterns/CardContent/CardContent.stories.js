import lng from '@lightningjs/core';
import tileImage from '../../assets/images/tile-image.png';
import CardContent from '.';
import mdx from './CardContent.mdx';
import { Basic as LabelStory } from '../../elements/Label/Label.stories';
import { Basic as ProgressBarStory } from '../../elements/ProgressBar/ProgressBar.stories';
import { Text as BadgeStory } from '../../elements/Badge/Badge.stories';
import { CardContent as MetadataStory } from '../../elements/MetadataCardContent/MetadataCardContent.stories';
import { generateSubStory } from '../../.storybook/utils';
import { createModeControl } from '../../.storybook/controls/argTypes';

export default {
  title: 'Patterns / CardContent',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        CardContent: {
          type: CardContent,
          src: tileImage,
          shouldCollapse: args.shouldCollapse,
          orientation: 'horizontal'
        }
      };
    }
  };
Basic.args = {
  shouldCollapse: false
};
Basic.argTypes = {
  ...createModeControl(),
  shouldCollapse: {
    defaultValue: false,
    table: {
      defaultValue: { summary: false }
    },
    control: 'boolean',
    description: 'should the card collapse?'
  }
};
generateSubStory('CardContent', Basic, BadgeStory, 'badge');
generateSubStory('CardContent', Basic, LabelStory, 'label');
generateSubStory('CardContent', Basic, ProgressBarStory, 'progressBar', ['w']);
generateSubStory('CardContent', Basic, MetadataStory, 'metadata', ['w', 'h']);
