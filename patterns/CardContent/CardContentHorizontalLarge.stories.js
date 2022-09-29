import lng from '@lightningjs/core';
import tileImage from '../../assets/images/tile-image.png';
import mdx from './CardContent.mdx';
import { Basic as LabelStory } from '../../elements/Label/Label.stories';
import { Basic as ProgressBarStory } from '../../elements/ProgressBar/ProgressBar.stories';
import { Text as BadgeStory } from '../../elements/Badge/Badge.stories';
import { CardContent as MetadataStory } from '../../elements/MetadataCardContent/MetadataCardContent.stories';
import { generateSubStory } from '../../.storybook/utils';
import { createModeControl } from '../../.storybook/controls/argTypes';
import CardContentHorizontalLarge from './CardContentHorizontalLarge';
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

export const HorizontalLarge = args =>
  class HorizontalLarge extends lng.Component {
    static _template() {
      return {
        CardContentHorizontalLarge: {
          type: CardContentHorizontalLarge,
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
HorizontalLarge.args = {
  shouldCollapse: false,
  collapseToMetadata: false
};
HorizontalLarge.argTypes = {
  ...createModeControl(),
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
  }
};
generateSubStory(
  'CardContentHorizontalLarge',
  HorizontalLarge,
  BadgeStory,
  'badge'
);
generateSubStory(
  'CardContentHorizontalLarge',
  HorizontalLarge,
  LabelStory,
  'label'
);
generateSubStory(
  'CardContentHorizontalLarge',
  HorizontalLarge,
  ProgressBarStory,
  'progressBar',
  ['w']
);
generateSubStory(
  'CardContentHorizontalLarge',
  HorizontalLarge,
  MetadataStory,
  'metadata',
  ['w', 'h', 'visibleCount']
);
