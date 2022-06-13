import lng from '@lightningjs/core';
import mdx from './Tile.mdx';
import Tile from '.';
import tileImage from '../../assets/images/tile-image.png';
import { Basic as ArtworkStory } from '../Artwork/Artwork.stories';
import { Basic as CheckboxStory } from '../Checkbox/Checkbox.stories';
import { Basic as LabelStory } from '../Label/Label.stories';
import { Basic as ProgressBarStory } from '../ProgressBar/ProgressBar.stories';
import { Text as BadgeStory } from '../Badge/Badge.stories';
import { Basic as ItemLayoutStory } from '../../mixins/withLayout/withLayout.stories';
import { generateSubStory } from '../../.storybook/utils';
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
  focused: true,
  disabled: false,
  metadataLocation: 'standard',
  persistentMetadata: false
};

Basic.argTypes = {
  disabled: {
    description: 'Disabled tile state',
    table: {
      defaultValue: { summary: false }
    },
    control: 'boolean'
  },
  focused: {
    description: 'Toggle focus',
    table: {
      defaultValue: { summary: false }
    },
    control: 'boolean'
  },
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

Basic.parameters = {
  argActions: {
    focused: (isFocused, component) => {
      component._getFocused = isFocused
        ? () => component.tag('Tile')
        : () => {};
      component._refocus();
    }
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
