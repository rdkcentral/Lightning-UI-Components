import lng from 'wpe-lightning';
import { withKnobs, color, number, boolean } from '@storybook/addon-knobs';
import { rgba2argb } from '../../utils';

import Tile from '.';
import Row from '../Row';
import mdx from './Tile.mdx';
import kabob from '../../assets/images/kabob_320x180.jpg';
import minions1 from '../../assets/images/minions1.jpg';
import minions2 from '../../assets/images/minions2.jpg';

export default {
  title: 'Tile',
  component: Tile,
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: mdx
    }
  }
};

const blurOptions = {
  range: true,
  min: 0,
  max: 4,
  step: 0.5
};

const roundedOptions = {
  range: true,
  min: 0,
  max: 100,
  step: 5
};

export const Basic = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Tile: {
          type: Tile,
          src: kabob,
          w: 320,
          h: 180,
          blur: number('Blur', 0, blurOptions),
          rounded: number('Rounded', 16, roundedOptions),
          shadow: {
            color: rgba2argb(color('Shadow Color', 'rgba(63,92,30,0.7)'))
          }
        }
      };
    }

    _getFocused() {
      if (boolean('Focused', false)) {
        return this.tag('Tile');
      }
    }
  };

export const XfinityTheme = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        x: 60,
        y: 60,
        Row: {
          type: Row,
          itemSpacing: 60,
          items: [
            {
              type: Tile,
              src: kabob,
              w: 320,
              h: 180,
              rounded: 8
            },
            {
              type: Tile,
              src: minions1,
              w: 320,
              h: 180,
              rounded: 8
            },
            {
              type: Tile,
              src: minions2,
              w: 320,
              h: 180,
              rounded: 8
            }
          ]
        }
      };
    }

    _getFocused() {
      return this.tag('Row');
    }
  };
