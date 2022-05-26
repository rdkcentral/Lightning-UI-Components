import lng from '@lightningjs/core';
import AboutCard from './AboutCard';
import AboutCardIcon from '../../assets/images/rt-tomatometer-fresh.png';
import RatingsIcon from '../../assets/images/rt-audience-score-fill.png';
import mdx from './AboutCard.mdx';

export default {
  title: 'Patterns / AboutCard',
  parameters: {
    tag: 'AboutCards',
    docs: {
      page: mdx
    }
  }
};
export const AboutCards = args =>
  class AboutCards extends lng.Component {
    static _template() {
      return {
        Card: {
          type: AboutCard,
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
AboutCards.args = {
  focused: true,
  disabled: false,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum odio eu feugiat pretium. Tempus imperdiet nulla malesuada pellentesque elit eget gravida.',
  iconLeft: AboutCardIcon,
  iconRight: RatingsIcon,
  textLeft: '00%',
  textRight: '00%',
  title: 'Rotten Tomatoes'
};

AboutCards.argTypes = {
  focused: {
    control: 'boolean',
    description: 'Determines if component is in focused or unfocused state'
  },
  disabled: {
    control: 'boolean',
    description: 'Determines if component is disabled'
  },
  description: { control: 'text', description: 'Description' },
  iconLeft: {
    defaultValue: AboutCardIcon,
    control: 'select',
    options: [AboutCardIcon, null],
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
  },
  title: { content: 'text', description: 'Title' }
};

AboutCards.parameters = {
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
