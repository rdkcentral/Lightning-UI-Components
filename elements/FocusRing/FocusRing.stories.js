import lng from '@lightningjs/core';
import FocusRing from '.';

import { PALETTE } from '../../Styles/Styles';
import mdx from './FocusRing.mdx';
import kabob from '../../assets/images/kabob_320x180.jpg';

export default {
  args: {
    radius: 8,
    color: 'rgba(236,236,242,.96)',
    secondaryColor: 'rgba(255,255,255,.08)',
    animate: true
  },
  argTypes: {
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
  title: 'Elements / FocusRing',
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
          radius: args.radius,
          color: args.color,
          secondaryColor: args.secondaryColor
        }
      };
    }

    _init() {
      if (args.animate) {
        this._FocusRing.startAnimation();
      } else {
        this._FocusRing.stopAnimation();
      }
    }

    get _FocusRing() {
      return this.tag('FocusRing');
    }
  };

Basic.argTypes = {
  color: { name: 'Color', control: { type: 'color' } },
  secondaryColor: { name: 'Secondary Color', control: { type: 'color' } },
  animate: { control: 'boolean' }
};
Basic.parameters = {
  argActions: {
    animate: (play, component) => {
      if (play) {
        component._FocusRing.startAnimation();
      } else {
        component._FocusRing.stopAnimation();
      }
      component._refocus();
    },
    color: (color, component) => {
      component._FocusRing.color = color;
    },
    secondaryColor: (color, component) => {
      component._FocusRing.secondaryColor = color;
    },
    radius: (radius, component) => {
      component._FocusRing.radius = radius;
    }
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
          zIndex: 2,
          radius: 8
        },
        FocusRing: {
          type: FocusRing,
          w: 320,
          h: 180,
          radius: 8,
          size: 8,
          color: PALETTE.grey[5]
        }
      };
    }
  };
