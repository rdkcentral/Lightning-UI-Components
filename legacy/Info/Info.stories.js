import lng from '@lightningjs/core';
import Info from '.';
import mdx from './Info.mdx';

export default {
  title: 'Patterns / Info',
  parameters: {
    docs: { page: mdx }
  }
};

export const Basic = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Info: {
          type: Info,
          title: args.title,
          subtitle: args.subtitle,
          description: args.description,
          announce: args.announce
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('Info');
      }
    }
  };

Basic.args = {
  title: 'Series Title',
  subtitle: 'Season 5 - Episode 2',
  description:
    'This is a description of episode 2 from Season 5 of Series Title',
  announce: '',
  focused: false
};
Basic.argTypes = {
  focused: { control: 'boolean' }
};
Basic.parameters = {
  argActions: {
    focused: (isFocused, component) => {
      component._getFocused = isFocused
        ? () => component.tag('Info')
        : () => {};
      component._refocus();
    },
    title: (title, component) => {
      component.tag('Info').title = title;
    },
    subtitle: (subtitle, component) => {
      component.tag('Info').subtitle = subtitle;
    },
    description: (description, component) => {
      component.tag('Info').description = description;
    },
    announce: (announce, component) => {
      component.tag('Info').announce = announce;
    }
  }
};
