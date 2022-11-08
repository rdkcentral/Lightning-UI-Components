import lng from '@lightningjs/core';
import mdx from './Tile.mdx';
import { default as TileComponent } from './index.js';
import { Artwork as ArtworkStory } from '../Artwork/Artwork.stories.js';
import { Checkbox as CheckboxStory } from '../Checkbox/Checkbox.stories.js';
import { Label as LabelStory } from '../Label/Label.stories.js';
import { ProgressBar as ProgressBarStory } from '../../../../ui-core/src/components/ProgressBar/ProgressBar.stories';
import { Text as BadgeStory } from '../Badge/Badge.stories.js';
import { Basic as ItemLayoutStory } from '../../mixins/withLayout/withLayout.stories.js';
import { generateSubStory } from '../../../storybook/index.js';
import { createModeControl } from '../../../storybook/index.js';
import tileImage from '../../assets/images/tile-image.png';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[128]}/Tile`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Tile = () =>
  class Tile extends lng.Component {
    static _template() {
      return {
        Tile: {
          type: TileComponent,
          itemLayout: {
            ratioX: 16,
            ratioY: 9,
            upCount: 3
          },
          artwork: {
            src: tileImage
          },
          metadata: {
            title: 'Title',
            description: 'Description'
          }
        }
      };
    }
  };

Tile.args = {
  metadataLocation: 'standard',
  persistentMetadata: false
};

Tile.argTypes = {
  ...createModeControl({ defaultValue: 'focused' }),
  persistentMetadata: {
    description: 'show metadata if exists regardless of focusState',
    table: {
      defaultValue: { summary: false }
    },
    control: 'boolean'
  },
  metadataLocation: {
    control: 'radio',
    description:
      'Controls where metadata is positioned in relationship to the Tile',
    table: {
      defaultValue: { summary: 'standard' }
    },
    options: ['standard', 'inset']
  }
};

generateSubStory('Tile', Tile, ItemLayoutStory, 'itemLayout');
generateSubStory('Tile', Tile, BadgeStory, 'badge');
generateSubStory('Tile', Tile, LabelStory, 'label');
generateSubStory('Tile', Tile, ArtworkStory, 'artwork', [
  'gradient',
  'itemLayout',
  'srcCallback',
  'shouldScale'
]);
generateSubStory('Tile', Tile, ProgressBarStory, 'progressBar', ['w']);
generateSubStory('Tile', Tile, CheckboxStory, 'checkbox');
