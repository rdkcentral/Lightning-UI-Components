import lng from '@lightningjs/core';
import Wave from '.';
import mdx from './Wave.mdx';
import { getValidColor } from '../../Styles';

export default {
  title: 'Elements / Wave',
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
        Wave: {
          type: Wave,
          w: args.size
        }
      };
    }

    get _Wave() {
      return this.tag('Wave');
    }

    _getFocused() {
      return this.tag('Wave');
    }
  };

Basic.args = {
  color: '0xffffffff',
  size: 6,
  shouldAnimate: false
};

Basic.argTypes = {
  color: { name: 'color', control: { type: 'color' } },
  size: {
    control: {
      type: 'range',
      min: 0,
      max: 100,
      step: 1
    }
  },
  shouldAnimate: {
    control: {
      type: 'boolean'
    }
  }
};

Basic.parameters = {
  argActions: {
    shouldAnimate: (shouldAnimate, component) => {
      shouldAnimate
        ? component.tag('Wave').startAnimation()
        : component.tag('Wave').stopAnimation();
      component._refocus();
    },
    color: (color, component) => {
      component.tag('Wave').color = getValidColor(color);
      component._refocus();
    },
    size: (size, component) => {
      component.tag('Wave')._w = size;
      component.tag('Wave')._update();
      component._refocus();
    }
  }
};
