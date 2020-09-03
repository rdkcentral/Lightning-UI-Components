import lng from 'wpe-lightning';
import { action } from '@storybook/addon-actions';
import { boolean, number, withKnobs, text } from '@storybook/addon-knobs';

import { ListItemSlider } from '.';
import mdx from './ListItemSlider.mdx';

export default {
  title: 'ListItemSlider',
  component: ListItemSlider,
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        ListItemSlider: {
          type: ListItemSlider,
          max: number('Max', 100),
          min: number('Min', 0),
          step: number('Step', 1),
          title: text('Title', 'List Item Slider'),
          value: number('Value', 50)
        }
      };
    }

    _getFocused() {
      if (boolean('Focused', false)) {
        return this.tag('ListItemSlider');
      }
    }
  };

export const OnSliderChange = () =>
  class OnSliderChange extends lng.Component {
    static _template() {
      return {
        ListItemSlider: {
          type: ListItemSlider,
          title: 'List Item Slider',
          signals: {
            onSliderChange: '_handleChange'
          }
        }
      };
    }

    _handleChange(value) {
      action('onSliderChange')(value);
    }

    _getFocused() {
      return this.tag('ListItemSlider');
    }
  };
