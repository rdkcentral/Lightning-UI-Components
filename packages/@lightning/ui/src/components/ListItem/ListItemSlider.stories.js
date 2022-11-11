import lng from '@lightningjs/core';
import { default as ListItemSliderComponent } from './ListItemSlider';
import mdx from './ListItemSlider.mdx';
import { createModeControl } from '@lightning/ui-core/storybook/index.js';
import { generateSubStory } from '@lightning/ui-core/storybook/index.js';
import { Basic as SliderStory } from '../../../../ui-core/src/components/Slider/Slider.stories';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[2]}/ListItemSlider`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const ListItemSlider = () =>
  class ListItemSlider extends lng.Component {
    static _template() {
      return {
        ListItemSlider: {
          type: ListItemSliderComponent
        }
      };
    }
  };

ListItemSlider.storyName = 'ListItemSlider';

ListItemSlider.args = {
  title: 'List Item',
  value: 50
};

ListItemSlider.argTypes = {
  ...createModeControl({ defaultValue: 'focused' }),
  title: {
    defaultValue: 'Title',
    table: {
      defaultValue: { summary: 'Title' }
    },
    control: 'text',
    description: 'Title text'
  },
  value: {
    defaultValue: 'slider value',
    table: {
      defaultValue: { summary: 'slider value' }
    },
    control: 'number',
    description: 'slider value'
  }
};

generateSubStory('ListItemSlider', ListItemSlider, SliderStory, 'slider', [
  'value',
  'vertical'
]);
