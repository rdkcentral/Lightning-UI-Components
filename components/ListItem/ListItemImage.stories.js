import lng from 'wpe-lightning';

import { ListItemImage } from '.';
import mdx from './ListItemImage.mdx';
import fiftysix from '../../assets/images/56.png';
import icon from '../../assets/images/ic_lightning_white_32.png';

export default {
  title: 'ListItemImage',
  args: {
    backgroundType: 'fill',
    title: 'List Item',
    subtitle: 'List Item Metadata',
    size: 'small'
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
        options: ['small', 'large']
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
          image: fiftysix
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
