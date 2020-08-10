import lng from 'wpe-lightning';
import { boolean, radios, withKnobs, text } from '@storybook/addon-knobs';

import ListItem from '.';
import mdx from './ListItem.mdx';
import { makeOptions } from '../../.storybook/utils';
import icon from '../../assets/images/ic_lightning_white_32.png';

export default {
  title: 'ListItem',
  component: ListItem,
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
        ListItem: {
          type: ListItem,
          title: text('Title', 'List Item'),
          subtitle: text('Subtitle', 'List item metadata'),
          icon,
          size: radios('Size', makeOptions('Small', 'Large'), 'small'),
          background: radios('Background', makeOptions('Fill', 'Float'), 'fill')
        }
      };
    }

    _getFocused() {
      if (boolean('Focused', false)) {
        return this.tag('ListItem');
      }
    }
  };

export const HandleEnter = () =>
  class HandleEnter extends lng.Component {
    static _template() {
      return {
        flex: {
          direction: 'column'
        },
        ListItem: {
          type: ListItem,
          size: 'small',
          title: 'Press Enter'
        },
        HiddenText: {
          alpha: 0,
          flexItem: { marginTop: 100 },
          text: {
            text: 'Great job!'
          }
        }
      };
    }

    _init() {
      const HiddenText = this.tag('HiddenText');
      this.tag('ListItem')._handleEnter = () => {
        HiddenText.smooth = { alpha: Number(!HiddenText.alpha) };
      };
    }

    _getFocused() {
      return this.tag('ListItem');
    }
  };
