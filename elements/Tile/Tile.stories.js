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

function nestedArgs(argsObj = {}, targetProp, ignore = []) {
  return Object.keys(argsObj).reduce((acc, curr) => {
    if (ignore.includes(curr)) return acc;
    return {
      ...acc,
      [targetProp + '_' + curr]: argsObj[curr]
    };
  }, {});
}

function nestedArgTypes(argTypesObj = {}, targetProp, ignore = []) {
  return Object.keys(argTypesObj).reduce((acc, curr) => {
    if (ignore.includes(curr)) return acc;
    return {
      ...acc,
      [targetProp + '_' + curr]: {
        // Namespaced to avoid conflicts
        name: curr,
        ...argTypesObj[curr],
        table: {
          ...(argTypesObj[curr].table || {}),
          category: targetProp
        }
      }
    };
  }, {});
}

const prevValues = {};

function nestedArgActions(argTypesObj = {}, targetProp, ignore = []) {
  return Object.keys(argTypesObj).reduce((acc, curr) => {
    if (ignore.includes(curr)) return acc;
    return {
      ...acc,
      [targetProp + '_' + curr]: (value, component) => {
        component.tag('Tile').patch({
          [targetProp]: {
            ...prevValues[targetProp],
            [curr.replace(targetProp + '_', '')]:
              'none' === value ? undefined : value // There are issues with merging objects here
          }
        });
        // Allow patching to work with nested objects
        if (!prevValues[targetProp]) {
          prevValues[targetProp] = {};
        }
        prevValues[targetProp][curr.replace(targetProp + '_', '')] =
          'none' === value ? undefined : value;
        component.tag('Tile')._update(); // Update does not trigger is replacing individual properties
      }
    };
  }, {});
}

function generateSubStory(BaseStory, SubStory, targetProperty, ignore = []) {
  BaseStory.args = {
    ...BaseStory.args,
    ...nestedArgs(SubStory.args, targetProperty, ignore)
  };

  BaseStory.argTypes = {
    ...BaseStory.argTypes,
    ...nestedArgTypes(SubStory.argTypes, targetProperty, ignore)
  };

  if (!(BaseStory && BaseStory.parameters && BaseStory.parameters.argActions)) {
    BaseStory.parameters = {
      argActions: {}
    };
  }

  BaseStory.parameters.argActions = {
    ...BaseStory.parameters.argActions,
    ...nestedArgActions(SubStory.argTypes, targetProperty, ignore)
  };
}

Basic.args = {
  focused: true,
  metadataLocation: 'standard',
  persistentMetadata: false
};

Basic.argTypes = {
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

generateSubStory(Basic, ItemLayoutStory, 'itemLayout');
generateSubStory(Basic, BadgeStory, 'badge');
generateSubStory(Basic, LabelStory, 'label');
generateSubStory(Basic, ArtworkStory, 'artwork', [
  'gradient',
  'itemLayout',
  'srcCallback'
]);
generateSubStory(Basic, ProgressBarStory, 'progressBar', ['w']);
generateSubStory(Basic, CheckboxStory, 'checkbox');
