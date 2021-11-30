import lng from '@lightningjs/core';
import FocusRing from '.';
import mdx from './FocusRing.mdx';
import kabob from '../../assets/images/kabob_320x180.jpg';

export default {
  args: {
    animate: true
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
          type: class extends FocusRing {
            _update() {
              super._update();
              this.startAnimation();
            }
          },
          w: 320,
          h: 180
        }
      };
    }
  };
