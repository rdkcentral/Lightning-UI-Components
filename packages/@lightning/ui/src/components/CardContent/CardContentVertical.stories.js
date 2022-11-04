import lng from '@lightningjs/core';
import tileImage from '../../assets/images/tile-image.png';
import mdx from './CardContent.mdx';
import { Label as LabelStory } from '../../../../ui-core/src/components/Label/Label.stories';
import { ProgressBar as ProgressBarStory } from '../../../../ui-core/src/components/ProgressBar/ProgressBar.stories';
import { Text as BadgeStory } from '../../../../ui-core/src/components/Badge/Badge.stories';
import { MetadataCardContent as MetadataStory } from '..//MetadataCardContent/MetadataCardContent.stories';
import { generateSubStory } from '@lightning/ui-core/storybook/index.js';
import { createModeControl } from '@lightning/ui-core/storybook/index.js';
import CardContentVertical from './CardContentVertical';
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
  shouldCollapse: false,
  ...CardContent.tileProps.args
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
  },
  ...CardContent.tileProps.argTypes
};
Vertical.parameters = {
  argActions: CardContent.tileProps.argActions('CardContentVertical')
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
