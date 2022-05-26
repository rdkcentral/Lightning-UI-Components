import lng from '@lightningjs/core';
import AboutStackedCard from './AboutStackedCard';
import mdx from './AboutStackedCard.mdx';

export default {
  title: 'Patterns / AboutStackedCard',
  parameters: {
    tag: 'AboutCards',
    docs: {
      page: mdx
    }
  }
};
export const AboutStackedCards = args =>
  class AboutStackedCards extends lng.Component {
    static _template() {
      return {
        Card: {
          type: AboutStackedCard,
          contentBottom: [
            { badge: 'Badge' },
            { badge: 'Badge' },
            { badge: 'Badge' },
            { badge: 'Badge' },
            { badge: 'Badge' }
          ],
          descriptionBottom: args.descriptionBottom,
          title: args.title,
          titleBottom: args.titleBottom
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('Card');
      }
    }
  };

AboutStackedCards.args = {
  focused: true,
  disabled: false,
  descriptionBottom: 'English, Spanish, French',
  title: 'Audio',
  titleBottom: 'Languages'
};

AboutStackedCards.argTypes = {
  focused: {
    control: 'boolean',
    description: 'Determines if component is in focused or unfocused state'
  },
  disabled: {
    control: 'boolean',
    description: 'Determines if component is disabled'
  },
  descriptionBottom: {
    content: 'text',
    description: 'Description for bottom description text'
  },
  title: { content: 'text', description: 'Title' },
  titleBottom: { content: 'text', description: 'Title for bottom text' }
};

AboutStackedCards.parameters = {
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
