import lng from 'wpe-lightning';
import { withKnobs, color, number, boolean } from '@storybook/addon-knobs';
import { rgba2argb } from '../../utils';

import FocusRing from '.';
import { COLORS_NEUTRAL, getHexColor } from '../Styles/Styles';
import mdx from './FocusRing.mdx';
import kabob from '../../assets/images/kabob_320x180.jpg';
import minions1 from '../../assets/images/minions1.jpg';
import minions2 from '../../assets/images/minions2.jpg';

export default {
  title: 'FocusRing',
  component: FocusRing,
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

const sizeOptions = {
  range: true,
  min: 0,
  max: 60,
  step: 2
};

const shadowAlphaOptions = {
  range: true,
  min: 0,
  max: 1,
  step: 0.1
};

export const Basic = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        x: 60,
        y: 60,
        FocusRing: {
          type: FocusRing,
          w: 320,
          h: 180,
          blur: number('Blur', 4, blurOptions),
          size: number('size', 16, sizeOptions),
          shadow: {
            padding: number('Shadow Padding', 40, sizeOptions),
            blur: number('Shadow Blur', 3, blurOptions),
            alpha: number('Shadow Alpha', 0.6, shadowAlphaOptions)
          }
        }
      };
    }
  };

export const WithImage = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        x: 60,
        y: 60,
        Kabob: {
          src: kabob,
          w: 320,
          h: 180,
          zIndex: 2
        },
        FocusRing: {
          type: FocusRing,
          w: 320,
          h: 180,
          imageSrc: kabob,
          blur: number('Blur', 4, blurOptions),
          size: number('size', 16, sizeOptions),
          shadow: {
            padding: number('Shadow Padding', 40, sizeOptions),
            blur: number('Shadow Blur', 3, blurOptions),
            alpha: number('Shadow Alpha', 0.6, shadowAlphaOptions)
          }
        }
      };
    }
  };
