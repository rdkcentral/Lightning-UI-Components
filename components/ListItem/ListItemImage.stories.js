import lng from 'wpe-lightning';
import { boolean, radios, withKnobs, text } from '@storybook/addon-knobs';

import { ListItemImage } from '.';
import mdx from './ListItemImage.mdx';
import fiftysix from '../../assets/images/56.png';
import icon from '../../assets/images/ic_lightning_white_32.png';
import { makeOptions } from '../../.storybook/utils';

export default {
  title: 'ListItemImage',
  component: ListItemImage,
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
          type: ListItemImage,
          title: text('Title', 'List Item'),
          subtitle: text('Subtitle', 'List Item Metadata'),
          size: radios('Size', makeOptions('Small', 'Large'), 'small'),
          background: radios(
            'Background',
            makeOptions('Fill', 'Float'),
            'fill'
          ),
          src: fiftysix
        }
      };
    }

    _getFocused() {
      if (boolean('Focused', false)) {
        return this.tag('ListItem');
      }
    }
  };

export const Icon = () =>
  class Icon extends lng.Component {
    static _template() {
      return {
        ListItem: {
          type: ListItemImage,
          title: text('Title', 'List Item'),
          subtitle: text('Subtitle', 'List Item with Icon'),
          size: radios('Size', makeOptions('Small', 'Large'), 'small'),
          background: radios(
            'Background',
            makeOptions('Fill', 'Float'),
            'fill'
          ),
          src: fiftysix,
          icon
        }
      };
    }

    _getFocused() {
      if (boolean('Focused', false)) {
        return this.tag('ListItem');
      }
    }
  };
