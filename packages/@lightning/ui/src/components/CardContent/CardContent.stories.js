import lng from '@lightningjs/core';
import tileImage from '../../assets/images/tile-image.png';
import CardContentComponent from '.';
import mdx from './CardContent.mdx';
import { MetadataCardContent as MetadataStory } from '../MetadataCardContent/MetadataCardContent.stories';
import { generateSubStory } from '@lightning/ui-core/storybook/index.js';
import { createModeControl } from '@lightning/ui-core/storybook/index.js';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[128]}/CardContent`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const CardContent = args =>
  class CardContent extends lng.Component {
    static _template() {
      return {
        CardContent: {
          type: CardContentComponent,
          src: tileImage,
          shouldCollapse: args.shouldCollapse,
          orientation: 'horizontal'
        }
      };
    }
  };

const tileCategory = 'Tile';
CardContent.tileProps = {
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
CardContent.storyName = 'CardContent';
CardContent.args = {
  shouldCollapse: false,
  ...CardContent.tileProps.args
};
CardContent.argTypes = {
  ...createModeControl({ defaultValue: 'focused' }),
  shouldCollapse: {
    defaultValue: false,
    table: {
      defaultValue: { summary: false }
    },
    control: 'boolean',
    description: 'should the card collapse?'
  },
  ...CardContent.tileProps.argTypes
};
CardContent.parameters = {
  argActions: CardContent.tileProps.argActions('CardContent')
};
generateSubStory('CardContent', CardContent, MetadataStory, 'metadata', [
  'w',
  'h'
]);
