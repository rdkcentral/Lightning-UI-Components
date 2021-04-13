import lng from '@lightningjs/core';
import OverlayDataItem from '.';
import PHI from '../../assets/images/PHI.png';
import NYG from '../../assets/images/NYG.png';
import { getValidColor } from '../../Styles';
import mdx from './OverlayDataItem.mdx';

export default {
  title: 'Patterns / OverlayDataItem',
  parameters: {
    docs: { page: mdx }
  }
};

export const Gradient = args => {
  return class Gradient extends lng.Component {
    static _template() {
      return {
        OverlayDataItem: {
          h: 140,
          w: 410,
          type: OverlayDataItem,
          backgroundColors: {
            colorLeft: getValidColor(args.colorLeft),
            colorRight: getValidColor(args.colorRight)
          }
        }
      };
    }
  };
};

Gradient.args = {
  colorLeft: 'rgba(8,111,107,1)',
  colorRight: 'rgba(11,81,161,1)'
};
Gradient.argTypes = {
  colorLeft: { control: 'color' },
  colorRight: { control: 'color' }
};
Gradient.parameters = {
  argActions: {}
};

export const Image = args => {
  return class Image extends lng.Component {
    static _template() {
      return {
        OverlayDataItem: {
          w: 410,
          type: OverlayDataItem,
          overlayImage: PHI
        }
      };
    }
  };
};

Image.args = {};
Image.argTypes = {};
Image.parameters = {
  argActions: {}
};
