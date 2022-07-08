import lng from '@lightningjs/core';
import CardAboutStacked from './CardAboutStacked';
import mdx from './CardAboutStacked.mdx';

export default {
  title: 'Patterns / CardAboutStacked',
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
          type: CardAboutStacked,
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

Basic.args = {
  focused: true,
  disabled: false,
  descriptionBottom: 'English, Spanish, French',
  title: 'Audio',
  titleBottom: 'Languages'
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
  descriptionBottom: {
    content: 'text',
    description: 'Description for bottom description text'
  },
  title: { content: 'text', description: 'Title' },
  titleBottom: { content: 'text', description: 'Title for bottom text' }
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
