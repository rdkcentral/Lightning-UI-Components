import lng from '@lightningjs/core';

import { ListItemToggle } from '.';
import mdx from './ListItemToggle.mdx';

export default {
  title: 'Patterns/ListItemToggle',
  args: {
    title: 'List Item',
    subtitle: 'List Item Metadata',
    size: 'small',
    backgroundType: 'fill',
    checked: false
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
    checked: { control: 'boolean' }
  },
  parameters: {
    tag: 'ListItem',
    argActions: {
      checked: (isChecked, component) => {
        const listItem = component.tag('ListItem');
        if (isChecked !== listItem.isChecked()) {
          listItem.toggle();
        }
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
          type: ListItemToggle,
          backgroundType: args.backgroundType,
          title: args.title,
          subtitle: args.subtitle,
          size: args.size,
          checked: args.checked,
          onEnter: toggle => {
            toggle.toggle();
            // eslint-disable-next-line no-restricted-syntax
            console.log('On enter has fired');
          }
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('ListItem');
      }
    }
  };
