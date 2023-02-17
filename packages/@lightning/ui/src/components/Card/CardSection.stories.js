import lng from '@lightningjs/core';
import { default as CardSectionComponent } from './CardSection.js';
import sectionIcon from '../../assets/images/ic_check_circle_outline_inverse_24.png';
import mdx from './CardSection.mdx';
import { createModeControl } from 'lightning-ui-docs/.storybook/utils';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[128]}/CardSection`,
  tag: 'Card',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const CardSection = () =>
  class CardSection extends lng.Component {
    static _template() {
      return {
        Card: {
          type: CardSectionComponent,
          iconHeight: 33,
          iconWidth: 33,
          w: 386
        }
      };
    }
  };

CardSection.args = {
  iconSrc: sectionIcon,
  title: 'Section',
  mode: 'focused'
};

CardSection.argTypes = {
  ...createModeControl({ summaryValue: CardSection.args.mode }),
  iconSrc: {
    control: 'select',
    options: [sectionIcon, 'null'],
    description: 'Icon source',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  title: {
    control: 'text',
    description: 'Title text',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  }
};

CardSection.storyName = 'CardSection';
