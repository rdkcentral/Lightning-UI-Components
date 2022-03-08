import lng from '@lightningjs/core';

import { ListItemPlan } from '.';
import mdx from './ListItemPlan.mdx';

const PLAN_NAME = 'Hulu (ad-supported)';
const PLAN_PRICE = '$6.99 per month plus taxes & fees';
const PLAN_DETAILS =
  "Get Hulu and stream the TV you love, anytime, on your favorite devices. We're talking new TV, classic TV, laugh-your-face-off TV, cry-your-eyes-out TV, and every other kind of TV.  Plus, get Hulu Originals –- shows you can't watch anywhere else -- and movies, docs, kids shows, and more. It's all on Hulu, and it's all waiting for you.";

export default {
  title: 'Patterns/ListItemPlan',
  args: {
    title: PLAN_NAME,
    subtitle: PLAN_PRICE,
    content: PLAN_DETAILS,
    backgroundType: 'fill',
    checked: false,
    focused: false
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
    content: { control: 'text' },
    checked: { control: 'boolean' },
    w: {
      defaultValue: 1604,
      control: {
        type: 'number'
      }
    },
    size: {
      control: {
        type: 'radio',
        options: ['xsmall', 'small', 'medium', 'large']
      }
    }
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
          type: ListItemPlan,
          backgroundType: args.backgroundType,
          title: args.title,
          subtitle: args.subtitle,
          content: args.content,
          checked: args.checked,
          w: args.w,
          size: args.size
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('ListItem');
      }
    }
  };
