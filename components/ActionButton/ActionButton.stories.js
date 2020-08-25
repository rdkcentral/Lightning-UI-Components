import lng from 'wpe-lightning';
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import ActionButton from '.';
import mdx from './ActionButton.mdx';
import icon from '../../assets/images/ic_lightning_white_32.png';

export default {
  title: 'ActionButton',
  component: ActionButton,
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: mdx
    }
  }
};

const makeOptions = (...opts) => {
  return opts.reduce(
    (obj, key) => ({
      ...obj,
      [key]: key.toLowerCase()
    }),
    {}
  );
};

export const Base = () =>
  class Base extends lng.Component {
    static _template() {
      return {
        ActionButton: {
          type: ActionButton,
          backgroundType: radios(
            'Background',
            makeOptions('stroke', 'fill', 'float', 'ghost'),
            'stroke'
          ),
          title: text('Title', 'Type Something'),
          onEnter: action('onEnter')
        }
      };
    }
    _init() {
      if (boolean('Icon', false)) {
        this.tag('ActionButton').icon = icon;
      }
    }

    _getFocused() {
      if (boolean('Focused', false)) {
        return this.tag('ActionButton');
      }
    }
  };

export const Loading = () =>
  class Loading extends lng.Component {
    static _template() {
      return {
        ActionButton: {
          type: ActionButton
        }
      };
    }
  };
