import lng from '@lightningjs/core';

import ListItem from './ListItem';
import mdx from './ListItem.mdx';
import icon from '../../assets/images/ic_lightning_white_32.png';
import menuIcon from '../../assets/images/ic_eye_white_48.png';

export default {
  title: 'Patterns/ListItem',
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
          collapse: args.collapse,
          icon: args.showIcon ? icon : null,
          size: args.size,
          backgroundType: args.backgroundType,
          announce: args.announce,
          collapseIcon: args.collapseIcon
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
  backgroundType: 'fill',
  focused: false,
  title: 'List Item',
  subtitle: 'List item metadata',
  collapse: false,
  size: 'small',
  announce: 'Press list item to view metadata',
  collapseIcon: false,
  showIcon: true
};
Basic.argTypes = {
  size: {
    control: {
      type: 'radio',
      options: ['small', 'large']
    }
  },
  backgroundType: {
    control: {
      type: 'radio',
      options: ['fill', 'float', 'ghost']
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
          icon: [menuIcon, menuIcon],
          size: 'small',
          backgroundType: 'fill'
        }
      };
    }
  };
