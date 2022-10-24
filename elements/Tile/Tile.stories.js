import lng from '@lightningjs/core';
import mdx from './Tile.mdx';
import Tile from '.';
import { Basic as ArtworkStory } from '../Artwork/Artwork.stories';
import { Basic as CheckboxStory } from '../Checkbox/Checkbox.stories';
import { Basic as LabelStory } from '../Label/Label.stories';
import { Basic as ProgressBarStory } from '../ProgressBar/ProgressBar.stories';
import { Text as BadgeStory } from '../Badge/Badge.stories';
import { Basic as ItemLayoutStory } from '../../mixins/withLayout/withLayout.stories';
import { generateSubStory } from '../../.storybook/utils';
import { createModeControl } from '../../.storybook/controls/argTypes';
import Row from '../../layout/Row';
import tileImage from '../../assets/images/tile-image.png';
import parks from '../../assets/images/Parks_and_Recreation_16x9.jpg';
import parksFocus from '../../assets/images/Parks_and_Recreation_16x9_NoTitle.jpg';
import jurassic from '../../assets/images/Jurassic_World_16x9.jpg';
import trolls from '../../assets/images/Trolls_World_Tour_16x9.jpg';
import pets from '../../assets/images/The_Secret_Life_of_Pets_16x9.jpg';

export default {
  title: 'Elements / Tile',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Tile: {
          type: Tile,
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

Basic.args = {
  metadataLocation: 'standard',
  persistentMetadata: false
};

Basic.argTypes = {
  ...createModeControl(),
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

generateSubStory('Tile', Basic, ItemLayoutStory, 'itemLayout');
generateSubStory('Tile', Basic, BadgeStory, 'badge');
generateSubStory('Tile', Basic, LabelStory, 'label');
generateSubStory('Tile', Basic, ArtworkStory, 'artwork', [
  'gradient',
  'itemLayout',
  'srcCallback',
  'shouldScale'
]);
generateSubStory('Tile', Basic, ProgressBarStory, 'progressBar', ['w']);
generateSubStory('Tile', Basic, CheckboxStory, 'checkbox');

export const TileRow = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Row: {
          type: Row,
          items: [
            {
              type: Tile,
              artwork: {
                src: trolls
              },
              announce: 'Trolls',
              announceContext: '1 of 5',
              itemLayout: {
                ratioX: 16,
                ratioY: 9,
                upCount: 5
              }
            },
            {
              type: Tile,
              artwork: {
                src: parks
              },
              announce: 'Parks and Recreation',
              announceContext: '2 of 5',
              focusSrc: parksFocus,
              w: 410,
              h: 230
            },
            {
              type: Tile,
              artwork: {
                src: jurassic
              },
              announce: 'Jurassic World',
              announceContext: '3 of 5',
              w: 410,
              h: 230
            },
            {
              type: Tile,
              artwork: {
                src: pets
              },
              announce: 'Secret Life of Pets',
              announceContext: '4 of 5',
              w: args.width,
              h: args.height
            },
            {
              type: Tile,
              announce: 'Default',
              announceContext: '5 of 5',
              itemLayout: {
                ratioX: 16,
                ratioY: 9,
                upCount: 5
              }
            }
          ]
        }
      };
    }

    _getFocused() {
      return this.tag('Row');
    }
  };

TileRow.args = {
  width: 320,
  height: 180,
  radius: 16
};
