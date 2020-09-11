import lng from 'wpe-lightning';

import { ListItemToggle } from '.';
import mdx from './ListItemToggle.mdx';

export default {
  title: 'ListItemToggle',
  args: {
    title: 'List Item',
    subtitle: 'List Item Metadata',
    size: 'small',
    background: 'fill',
    checked: false
  },
  argTypes: {
    focused: { control: 'boolean' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
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
    },
    checked: { control: 'boolean' }
  },
  parameters: {
    tag: 'ListItem',
    argActions: {
      checked: (_, component) => component.tag('ListItem').toggle(),
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
          title: args.title,
          subtitle: args.subtitle,
          size: args.size,
          background: args.background,
          checked: args.checked
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('ListItem');
      }
    }
  };
