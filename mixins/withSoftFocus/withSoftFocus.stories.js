import lng from '@lightningjs/core';

import { ListItem } from '../../patterns';
import mdx from './withSoftFocus.mdx';
import withSoftFocus from './index';

export default {
  title: 'mixins/withSoftFocus',
  args: {
    title: 'List Item',
    subtitle: 'List Item Metadata',
    size: 'small',
    backgroundType: 'fill',
    softFocus: true
  },
  argTypes: {
    backgroundType: {
      control: {
        type: 'radio',
        options: ['fill', 'float', 'ghost']
      }
    },
    focused: { control: 'boolean' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    size: {
      control: {
        type: 'radio',
        options: ['xsmall', 'small', 'medium', 'large']
      }
    },
    softFocus: { control: 'boolean' }
  },
  parameters: {
    tag: 'ListItem',
    argActions: {
      softFocus: (softFocus, component) => {
        const listItem = component.tag('ListItem');
        listItem.softFocused = softFocus;
      },
      focused: (isFocused, component) => {
        component._getFocused = isFocused
          ? () => component.tag('ListItem')
          : () => {};
        component._refocus();
      }
    },
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
          type: withSoftFocus(ListItem),
          backgroundType: args.backgroundType,
          title: args.title,
          subtitle: args.subtitle,
          size: args.size,
          softFocused: args.softFocus
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('ListItem');
      }
    }
  };
