import lng from '@lightningjs/core';

import { CardRadio } from '.';
import mdx from './CardRadio.mdx';

const PLAN_NAME = 'Hulu (ad-supported)';
const PLAN_PRICE = '$6.99 per month plus taxes & fees';
const PLAN_DETAILS =
  "Get Hulu and stream the TV you love, anytime, on your favorite devices. We're talking new TV, classic TV, laugh-your-face-off TV, cry-your-eyes-out TV, and every other kind of TV.  Plus, get Hulu Originals –- shows you can't watch anywhere else -- and movies, docs, kids shows, and more. It's all on Hulu, and it's all waiting for you.";
const PLAN_DISCLAIMER =
  'This is a sample disclaimer. This is a sample disclaimer. This is a sample disclaimer. This is a sample disclaimer. This is a sample disclaimer. This is a sample disclaimer. ';

export default {
  title: 'Patterns/CardRadio',
  args: {
    title: PLAN_NAME,
    subtitle: PLAN_PRICE,
    content: PLAN_DETAILS,
    disclaimer: PLAN_DISCLAIMER,
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
    disclaimer: { control: 'text' },
    checked: { control: 'boolean' }
  },
  parameters: {
    tag: 'CardRadio',
    argActions: {
      checked: (isChecked, component) => {
        const cardRadio = component.tag('CardRadio');
        if (isChecked !== cardRadio.isChecked()) {
          cardRadio.toggle();
        }
      },
      focused: (isFocused, component) => {
        component._getFocused = isFocused
          ? () => component.tag('CardRadio')
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
        CardRadio: {
          type: CardRadio,
          backgroundType: args.backgroundType,
          title: args.title,
          subtitle: args.subtitle,
          content: args.content,
          disclaimer: args.disclaimer,
          checked: args.checked
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('CardRadio');
      }
    }
  };