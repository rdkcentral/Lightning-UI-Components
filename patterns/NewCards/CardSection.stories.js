import lng from '@lightningjs/core';
import CardSection from './CardSection';
import sectionIcon from '../../assets/images/ic_check_circle_outline_inverse_24.png';
import mdx from './CardSection.mdx';

export default {
  title: 'Patterns / CardSection',
  tag: 'NewCard',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Section = args =>
  class Section extends lng.Component {
    static _template() {
      return {
        Card: {
          type: CardSection,
          iconHeight: 28,
          iconSrc: args.iconSrc,
          iconWidth: 33,
          title: args.title,
          w: 386
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('Card');
      }
    }
  };

Section.args = {
  focused: false,
  disabled: false,
  iconSrc: sectionIcon,
  title: 'Section'
};

Section.argTypes = {
  focused: {
    control: 'boolean',
    description: 'Determines if component is in focused or unfocused state'
  },
  disabled: {
    control: 'boolean',
    description: 'Determines if component is disabled'
  },
  iconSrc: {
    defaultValue: sectionIcon,
    control: 'select',
    options: [sectionIcon, 'null'],
    description: 'Icon source'
  },
  title: { content: 'text', description: 'Title' }
};

Section.parameters = {
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
