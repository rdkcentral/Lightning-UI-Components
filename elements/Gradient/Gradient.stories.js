import lng from '@lightningjs/core';

import Gradient from '.';
import mdx from './Gradient.mdx';
import kabob from '../../assets/images/kabob_320x180.jpg';

export default {
  title: 'elements / Gradient',
  parameters: {
    docs: {
      page: mdx
    }
  },
  args: {
    radius: 4,
    color: 'rgba(8,111,107,1)'
  },
  argTypes: {
    color: { name: 'Color', control: { type: 'color' } }
  }
};

export const Basic = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Gradient: {
          type: Gradient,
          w: 320,
          h: 180,
          radius: args.radius,
          gradientColor: args.color
        }
      };
    }

    get _Gradient() {
      return this.tag('Gradient');
    }
  };
Basic.args = {};
Basic.argTypes = {};
Basic.parameters = {
  argActions: {}
};
