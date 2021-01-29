import lng from '@lightningjs/core';
import FocusRing from '.';

import { COLORS_NEUTRAL, getHexColor } from '../Styles/Styles';
import mdx from './FocusRing.mdx';
import kabob from '../../assets/images/kabob_320x180.jpg';

export default {
  args: {
    size: 16,
    radius: 8
  },
  argTypes: {
    size: {
      name: 'Size',
      control: {
        type: 'range',
        min: 0,
        max: 60,
        step: 2
      }
    },
    radius: {
      name: 'Radius',
      control: {
        type: 'range',
        min: 0,
        max: 160,
        step: 1
      }
    }
  },
  title: 'FocusRing',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        x: 60,
        y: 60,
        w: 320,
        h: 180,
        FocusRing: {
          type: FocusRing,
          w: 320,
          h: 180,
          radius: 8,
          size: 8,
          color: getHexColor(COLORS_NEUTRAL.light2, 8)
        }
      };
    }
  };

export const WithImage = args =>
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
          radius: 8,
          size: 8,
          color: getHexColor(COLORS_NEUTRAL.light2, 8)
        }
      };
    }
  };
