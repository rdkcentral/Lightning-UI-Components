import lng from 'wpe-lightning';

import ListItem from '.';
import mdx from './ListItem.mdx';
import icon from '../../assets/images/ic_lightning_white_32.png';

export default {
  title: 'ListItem',
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
        ListItem: {
          type: ListItem,
          title: args.title,
          subtitle: args.subtitle,
          icon,
          size: args.size,
          background: args.background
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('ListItem');
      }
    }
  };
Basic.args = {
  focused: false,
  title: 'List Item',
  subtitle: 'List item metadata',
  size: 'small',
  background: 'fill'
};
Basic.argTypes = {
  size: {
    control: {
      type: 'radio',
      options: ['small', 'large']
    }
  },
  background: {
    control: {
      type: 'radio',
      options: ['fill', 'float']
    }
  }
};
Basic.parameters = {
  argActions: {
    focused: (isFocused, component) => {
      component._getFocused = isFocused
        ? () => component.tag('ListItem')
        : () => {};
      component._refocus();
    }
  }
};

export const KeyHandling = () =>
  class KeyHandling extends lng.Component {
    static _template() {
      return {
        flex: {
          direction: 'column'
        },
        ListItem: {
          type: ListItem,
          size: 'small',
          title: 'Press Enter'
        },
        HiddenText: {
          alpha: 0,
          flexItem: { marginTop: 100 },
          text: {
            text: 'Great job!'
          }
        }
      };
    }

    _init() {
      const HiddenText = this.tag('HiddenText');
      this.tag('ListItem').onEnter = () => {
        HiddenText.smooth = { alpha: Number(!HiddenText.alpha) };
      };
    }

    _getFocused() {
      return this.tag('ListItem');
    }
  };

export const MultipleIcons = () =>
  class MultipleIcons extends lng.Component {
    static _template() {
      return {
        ListItem: {
          type: ListItem,
          title: 'List Item',
          subtitle: 'List item metadata',
          icon: [icon, icon],
          size: 'small',
          background: 'fill'
        }
      };
    }
  };
