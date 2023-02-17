import lng from '@lightningjs/core';
import Icon from './index.js';
import lightning from '../../assets/images/ic_lightning_white_32.png';
import mdx from './Icon.mdx';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[4]}/Icon`,
  parameters: {
    docs: {
      page: mdx
    },
    argActions: {
      w: (w, component) => {
        component.tag('Icon').w = w;
        component._refocus();
      },
      h: (h, component) => {
        component.tag('Icon').h = h;
        component._refocus();
      }
    }
  }
};

const sharedArgs = {
  w: 50,
  h: 50
};

const sharedArgTypes = {
  w: {
    control: {
      type: 'range',
      min: 1,
      max: 96
    },
    description: 'Width of the icon',
    table: {
      defaultValue: { summary: 0 }
    }
  },
  h: {
    control: { type: 'range', min: 1, max: 96 },
    description: 'Height of the icon',
    table: {
      defaultValue: { summary: 0 }
    }
  }
};

export const PNG = () =>
  class PNG extends lng.Component {
    static _template() {
      return {
        Icon: {
          type: Icon,
          icon: lightning,
          announce: 'Lightning bolt'
        }
      };
    }
  };

PNG.args = sharedArgs;

PNG.argTypes = sharedArgTypes;

export const SVG = () =>
  class SVG extends lng.Component {
    static _template() {
      return {
        Icon: {
          type: Icon,
          icon: '<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" /></svg>',
          announce: 'Red circle'
        }
      };
    }
  };

SVG.args = sharedArgs;

SVG.argTypes = sharedArgTypes;
