import lng from '@lightningjs/core';
import Icon from '.';
import lightning from '../../assets/images/ic_lightning_white_32.png';
import mdx from './Icon.mdx';

export default {
  title: 'Elements / Icon',
  parameters: {
    docs: {
      page: mdx
    },
    argActions: {
      width: (width, component) => {
        component.tag('Icon').w = width;
        component._refocus();
      },
      height: (height, component) => {
        component.tag('Icon').h = height;
        component._refocus();
      }
    }
  },
  argTypes: {
    width: {
      defaultValue: 50,
      control: {
        type: 'range',
        min: 1,
        max: 96
      },
      description: 'Width of the icon'
    },
    height: {
      defaultValue: 50,
      control: { type: 'range', min: 1, max: 96 },
      description: 'Height of the icon'
    }
  }
};

export const PNG = args =>
  class PNG extends lng.Component {
    static _template() {
      return {
        Icon: {
          type: Icon,
          w: args.width,
          h: args.height,
          icon: lightning
        }
      };
    }

    _getFocused() {
      return this.tag('Icon');
    }
  };

export const SVG = args =>
  class SVG extends lng.Component {
    static _template() {
      return {
        Icon: {
          type: Icon,
          w: args.width,
          h: args.height,
          icon: '<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" /></svg>'
        }
      };
    }

    _getFocused() {
      return this.tag('Icon');
    }
  };
