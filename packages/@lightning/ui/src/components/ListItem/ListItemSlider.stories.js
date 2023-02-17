import lng from '@lightningjs/core';
import { default as ListItemSliderComponent } from './ListItemSlider';
import mdx from './ListItemSlider.mdx';
import {
  createModeControl,
  generateSubStory
} from 'lightning-ui-docs/.storybook/utils';
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
  value: 50,
  shouldCollapse: false,
  mode: 'focused'
};

ListItemSlider.argTypes = {
  ...createModeControl({ summaryValue: ListItemSlider.args.mode }),
  title: {
    control: 'text',
    description: 'Title text',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  value: {
    control: 'number',
    description: 'Current slider value',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  shouldCollapse: {
    control: 'boolean',
    description:
      'When in unfocused or disabled mode, if shouldCollapse property is true it will collapse the slider (when focused, it will always be expanded)',
    table: {
      defaultValue: { summary: false }
    }
  }
};

ListItemSlider.argActions = {
  shouldCollapse: (shouldCollapse, component) => {
    component.tag('ListItemSlider').shouldCollapse = shouldCollapse;
  }
};

generateSubStory({
  componentName: 'ListItemSlider',
  baseStory: ListItemSlider,
  subStory: SliderStory,
  targetProperty: 'slider',
  include: ['min', 'max', 'step']
});
