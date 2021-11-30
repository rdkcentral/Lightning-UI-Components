import lng from '@lightningjs/core';

import { ListItemImage } from '.';
import mdx from './ListItemImage.mdx';
import fiftysix from '../../assets/images/56.png';
import icon from '../../assets/images/ic_lightning_white_32.png';

export default {
  title: 'Patterns/ListItemImage',
  args: {
    backgroundType: 'fill',
    title: 'List Item',
    subtitle: 'List Item Metadata',
    size: 'small',
    imageSize: 64
  },
  argTypes: {
    backgroundType: {
      control: {
        type: 'radio',
        options: ['fill', 'float', 'ghost']
      }
    },
    focused: {
      control: 'boolean'
    },
    title: {
      control: 'text'
    },
    subtitle: {
      control: 'text'
    },
    size: {
      control: {
        type: 'radio',
        options: ['xsmall', 'small', 'medium', 'large']
      }
    },
    imageSize: {
      control: {
        type: 'range',
        min: 64,
        max: 96
      }
    }
  },
  parameters: {
    argActions: {
      focused: (isFocused, component) => {
        component._getFocused = isFocused
          ? () => component.tag('ListItem')
          : () => {};
        component._refocus();
      },
      imageSize: (size, component) => {
        component.tag('ListItem').imageSize = size;
        component._refocus();
      }
    },
    tag: 'ListItem',
    docs: {
      page: mdx
    }
  }
};

export const Basic = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        ListItem: {
          type: ListItemImage,
          title: args.title,
          subtitle: args.subtitle,
          size: args.size,
          backgroundType: args.backgroundType,
          image: fiftysix,
          imageSize: args.imageSize
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('ListItem');
      }
    }
  };

export const Icon = args =>
  class Icon extends lng.Component {
    static _template() {
      return {
        ListItem: {
          type: ListItemImage,
          title: args.title,
          subtitle: args.subtitle,
          size: args.size,
          backgroundType: args.backgroundType,
          image: fiftysix,
          imageSize: args.imageSize,
          icon
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('ListItem');
      }
    }
  };
Icon.args = {
  subtitle: 'List Item with Icon'
};
