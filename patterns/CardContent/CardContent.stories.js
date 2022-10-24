import lng from '@lightningjs/core';
import tileImage from '../../assets/images/tile-image.png';
import CardContent from '.';
import mdx from './CardContent.mdx';
// import { Basic as TileStory } from '../../elements/Tile/Tile.stories';
// import { Basic as LabelStory } from '../../elements/Label/Label.stories';
// import { Basic as ProgressBarStory } from '../../elements/ProgressBar/ProgressBar.stories';
// import { Text as BadgeStory } from '../../elements/Badge/Badge.stories';
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

const tileCategory = 'Tile';
Basic.tileProps = {
  args: {
    badge: 'HD',
    label: 'Live',
    progress: 0.5
  },
  argTypes: {
    badge: {
      name: 'title',
      table: { category: tileCategory, subcategory: 'Badge' },
      control: { type: 'text' },
      description: 'Badge text'
    },
    label: {
      name: 'title',
      table: { category: tileCategory, subcategory: 'Label' },
      control: { type: 'text' },
      description: 'Text to display in the foreground of the label'
    },
    progress: {
      defaultValue: 0.5,
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.01
      },
      description: 'percentage of the current progress from 0 to 1',
      table: {
        category: tileCategory,
        subcategory: 'ProgressBar',
        defaultValue: { summary: 0 }
      }
    }
  },
  argActions: tagName => ({
    badge: (badgeTitle, component) => {
      component.tag(tagName).tile = {
        ...component.tag(tagName).tile,
        badge: { title: badgeTitle }
      };
    },
    label: (labelTitle, component) => {
      component.tag(tagName).tile = {
        ...component.tag(tagName).tile,
        label: { title: labelTitle }
      };
    },
    progress: (progress, component) => {
      component.tag(tagName).tile = {
        ...component.tag(tagName).tile,
        progressBar: { progress }
      };
    }
  })
};

Basic.args = {
  shouldCollapse: false,
  ...Basic.tileProps.args
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
  },
  ...Basic.tileProps.argTypes
};
Basic.parameters = {
  argActions: Basic.tileProps.argActions('CardContent')
};
generateSubStory('CardContent', Basic, MetadataStory, 'metadata', ['w', 'h']);
