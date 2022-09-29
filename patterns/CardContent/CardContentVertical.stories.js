import lng from '@lightningjs/core';
import tileImage from '../../assets/images/tile-image.png';
import mdx from './CardContent.mdx';
import { Basic as LabelStory } from '../../elements/Label/Label.stories';
import { Basic as ProgressBarStory } from '../../elements/ProgressBar/ProgressBar.stories';
import { Text as BadgeStory } from '../../elements/Badge/Badge.stories';
import { CardContent as MetadataStory } from '../../elements/MetadataCardContent/MetadataCardContent.stories';
import { generateSubStory } from '../../.storybook/utils';
import { createModeControl } from '../../.storybook/controls/argTypes';
import CardContentVertical from './CardContentVertical';
import { Icon } from '../../elements';
import xfinityLogo from '../../assets/images/Xfinity-Provider-Logo-2x1.png';

export default {
  title: 'Patterns / CardContent',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Vertical = args =>
  class Vertical extends lng.Component {
    static _template() {
      return {
        CardContentVertical: {
          type: CardContentVertical,
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
Vertical.args = {
  shouldCollapse: false
};
Vertical.argTypes = {
  ...createModeControl(),
  shouldCollapse: {
    defaultValue: false,
    table: {
      defaultValue: { summary: false }
    },
    control: 'boolean',
    description: 'should the Card collapse?'
  }
};
generateSubStory('CardContentVertical', Vertical, BadgeStory, 'badge');
generateSubStory('CardContentVertical', Vertical, LabelStory, 'label');
generateSubStory(
  'CardContentVertical',
  Vertical,
  ProgressBarStory,
  'progressBar',
  ['w']
);
generateSubStory('CardContentVertical', Vertical, MetadataStory, 'metadata', [
  'w',
  'h',
  'visibleCount'
]);
