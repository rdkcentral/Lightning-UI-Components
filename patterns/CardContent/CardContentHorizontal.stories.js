import lng from '@lightningjs/core';
import tileImage from '../../assets/images/tile-image.png';
import mdx from './CardContent.mdx';
import { Basic as LabelStory } from '../../elements/Label/Label.stories';
import { Basic as ProgressBarStory } from '../../elements/ProgressBar/ProgressBar.stories';
import { Text as BadgeStory } from '../../elements/Badge/Badge.stories';
import { CardContent as MetadataStory } from '../../elements/MetadataCardContent/MetadataCardContent.stories';
import { generateSubStory } from '../../.storybook/utils';
import { createModeControl } from '../../.storybook/controls/argTypes';
import CardContentHorizontal from './CardContentHorizontal';
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

export const Horizontal = args =>
  class Horizontal extends lng.Component {
    static _template() {
      return {
        CardContentHorizontal: {
          type: CardContentHorizontal,
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
Horizontal.args = {
  shouldCollapse: false,
  collapseToMetadata: false
};
Horizontal.argTypes = {
  ...createModeControl(),
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
  }
};
generateSubStory('CardContentHorizontal', Horizontal, BadgeStory, 'badge');
generateSubStory('CardContentHorizontal', Horizontal, LabelStory, 'label');
generateSubStory(
  'CardContentHorizontal',
  Horizontal,
  ProgressBarStory,
  'progressBar',
  ['w']
);
generateSubStory(
  'CardContentHorizontal',
  Horizontal,
  MetadataStory,
  'metadata',
  ['w', 'h', 'visibleCount']
);
