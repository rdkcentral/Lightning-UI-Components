import lng from '@lightningjs/core';
import CardSection from './CardSection';
import sectionIcon from '../../assets/images/ic_check_circle_outline_inverse_24.png';
import mdx from './CardSection.mdx';
import { createModeControl } from '../../.storybook/controls/argTypes';

export default {
  title: 'Patterns / Card',
  tag: 'Card',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Section = () =>
  class Section extends lng.Component {
    static _template() {
      return {
        Card: {
          type: CardSection,
          iconHeight: 28,
          iconWidth: 33,
          w: 386
        }
      };
    }
  };

Section.args = {
  iconSrc: sectionIcon,
  title: 'Section'
};

Section.argTypes = {
  ...createModeControl(),
  iconSrc: {
    defaultValue: sectionIcon,
    control: 'select',
    options: [sectionIcon, 'null'],
    description: 'Icon source'
  },
  title: { content: 'text', description: 'Title' }
};
