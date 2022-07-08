import lng from '@lightningjs/core';
import CardAbout from './CardAbout';
import CardAboutIcon from '../../assets/images/rt-tomatometer-fresh.png';
import RatingsIcon from '../../assets/images/rt-audience-score-fill.png';
import mdx from './CardAbout.mdx';

export default {
  title: 'Patterns / CardAbout',
  parameters: {
    tag: 'CardAbout',
    docs: {
      page: mdx
    }
  }
};
export const Basic = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Card: {
          type: CardAbout,
          description: args.description,
          iconLeft: args.iconLeft,
          iconHeight: 64,
          iconRight: args.iconRight,
          iconWidth: 64,
          textLeft: args.textLeft,
          textRight: args.textRight,
          title: args.title
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('Card');
      }
    }
  };
Basic.args = {
  focused: true,
  disabled: false,
  title: 'Rotten Tomatoes',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum odio eu feugiat pretium. Tempus imperdiet nulla malesuada pellentesque elit eget gravida.',
  iconLeft: CardAboutIcon,
  iconRight: RatingsIcon,
  textLeft: '00%',
  textRight: '00%'
};

Basic.argTypes = {
  focused: {
    control: 'boolean',
    description: 'Determines if component is in focused or unfocused state'
  },
  disabled: {
    control: 'boolean',
    description: 'Determines if component is disabled'
  },
  title: { content: 'text', description: 'Title' },
  description: { control: 'text', description: 'Description' },
  iconLeft: {
    defaultValue: CardAboutIcon,
    control: 'select',
    options: [CardAboutIcon, null],
    description: 'Icon source for icon on the left side'
  },
  iconRight: {
    defaultValue: RatingsIcon,
    control: 'select',
    options: [RatingsIcon, null],
    description: 'Icon source for icon on the right side'
  },
  textLeft: {
    content: 'text',
    description: 'Text on the left side of the card and icon '
  },
  textRight: {
    content: 'text',
    description: 'Text on the right side of the card and icon'
  }
};

Basic.parameters = {
  argActions: {
    disabled: (isDisabled, component) => {
      component.tag('Card').disabled = isDisabled;
    },
    focused: (isFocused, component) => {
      component._getFocused = isFocused
        ? () => component.tag('Card')
        : () => {};
      component._refocus();
    }
  }
};
