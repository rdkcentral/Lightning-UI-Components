import lng from '@lightningjs/core';
import mdx from './Tile.mdx';
import { default as TileComponent } from './index.js';
import {
  createModeControl,
  generateSubStory
} from 'lightning-ui-docs/.storybook/utils';
import { CATEGORIES } from 'lightning-ui-docs';
import { Artwork as ArtworkStory } from '../Artwork/Artwork.stories.js';
import { Checkbox as CheckboxStory } from '../Checkbox/Checkbox.stories.js';
import { MetadataTile as MetadataTileStory } from '../MetadataTile/MetadataTile.stories';
import { withLayout as ItemLayoutStory } from '../../mixins/withLayout/withLayout.stories.js';
import { Label as LabelStory } from '../Label/Label.stories.js';
import { ProgressBar as ProgressBarStory } from '../ProgressBar/ProgressBar.stories';
import { Text as BadgeStory } from '../Badge/Badge.stories.js';

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
            src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg'
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
    description: 'Show metadata if exists regardless of focusState',
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

generateSubStory({
  componentName: 'Tile',
  baseStory: Tile,
  subStory: MetadataTileStory,
  targetProperty: 'metadata',
  include: ['title', 'description']
});
generateSubStory({
  componentName: 'Tile',
  baseStory: Tile,
  subStory: ItemLayoutStory,
  targetProperty: 'itemLayout',
  include: ['ratioX', 'ratioY', 'upCount', 'circle']
});
generateSubStory({
  componentName: 'Tile',
  baseStory: Tile,
  subStory: BadgeStory,
  targetProperty: 'badge',
  include: ['title']
});
generateSubStory({
  componentName: 'Tile',
  baseStory: Tile,
  subStory: LabelStory,
  targetProperty: 'label',
  include: ['title']
});
generateSubStory({
  componentName: 'Tile',
  baseStory: Tile,
  subStory: ArtworkStory,
  targetProperty: 'artwork',
  include: ['blur', 'foregroundSrc', 'format', 'fill']
});
generateSubStory({
  componentName: 'Tile',
  baseStory: Tile,
  subStory: ProgressBarStory,
  targetProperty: 'progressBar',
  include: ['progress']
});
generateSubStory({
  componentName: 'Tile',
  baseStory: Tile,
  subStory: CheckboxStory,
  targetProperty: 'checkbox',
  include: ['checked']
});
