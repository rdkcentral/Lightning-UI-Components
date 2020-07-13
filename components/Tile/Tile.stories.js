import lng from 'wpe-lightning';
import { withKnobs, color, number } from '@storybook/addon-knobs';
import { rgba2argb } from '../utils';

import Tile from '.';
import mdx from './Tile.mdx';
import kabob from '../../assets/images/kabob_320x180.jpg';

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
        x: 20,
        y: 20,
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
  };
